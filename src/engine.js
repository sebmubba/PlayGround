import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { buildScene } from './scenes.js';

const GRADE_SHADER = {
  uniforms: {
    tDiffuse: { value: null },
    uTime: { value: 0 },
    uResolution: { value: new THREE.Vector2(1, 1) },
    uGrain: { value: 0.055 },
    uVignette: { value: 0.62 },
    uAberration: { value: 1.0 },
    uTint: { value: new THREE.Color(1, 1, 1) },
    uSaturation: { value: 1.0 },
    uContrast: { value: 1.02 }
  },
  vertexShader: `
    varying vec2 vUv;
    void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
  `,
  fragmentShader: `
    uniform sampler2D tDiffuse;
    uniform float uTime, uGrain, uVignette, uAberration, uSaturation, uContrast;
    uniform vec2 uResolution;
    uniform vec3 uTint;
    varying vec2 vUv;

    float hash(vec2 p) {
      p = fract(p * vec2(123.34, 456.21));
      p += dot(p, p + 45.32);
      return fract(p.x * p.y);
    }

    void main() {
      vec2 uv = vUv;
      vec2 c = uv - 0.5;
      float d = length(c);
      vec2 dir = normalize(c + 1e-6) * uAberration * 0.0016 * d;
      vec3 col;
      col.r = texture2D(tDiffuse, uv + dir).r;
      col.g = texture2D(tDiffuse, uv).g;
      col.b = texture2D(tDiffuse, uv - dir).b;

      col *= uTint;
      float l = dot(col, vec3(0.2126, 0.7152, 0.0722));
      col = mix(vec3(l), col, uSaturation);
      col = (col - 0.5) * uContrast + 0.5;

      float grain = hash(uv * uResolution + fract(uTime) * 137.0) - 0.5;
      col += grain * uGrain * (0.55 + 0.45 * (1.0 - l));

      float vig = smoothstep(0.82, 0.22, d);
      col *= mix(1.0, vig, uVignette);

      gl_FragColor = vec4(max(col, 0.0), 1.0);
    }
  `
};

const ease = (x) => x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;

export class Engine {
  constructor(canvas) {
    this.canvas = canvas;
    this.renderer = new THREE.WebGLRenderer({
      canvas, antialias: true, powerPreference: 'high-performance', alpha: false,
      stencil: false
    });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.55));
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.05;
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.05, 300);
    this.camera.position.set(0, 2, 12);

    this.sceneRoot = new THREE.Group();
    this.scene.add(this.sceneRoot);
    this.flashLight = new THREE.AmbientLight(0xb9cdf5, 0);
    this.scene.add(this.flashLight);
    this.hemi = new THREE.HemisphereLight(0x4a5b72, 0x0a0806, 0.28);
    this.scene.add(this.hemi);

    this.clock = new THREE.Clock();
    this.time = 0;
    this.paused = false;
    this.spec = null;
    this.sceneId = null;
    this.shotName = null;
    this.camT = 1;
    this.camDuration = 1;
    this.camFrom = { pos: new THREE.Vector3(), look: new THREE.Vector3(), fov: 40 };
    this.camTo = { pos: new THREE.Vector3(), look: new THREE.Vector3(), fov: 40 };
    this.lookCurrent = new THREE.Vector3(0, 2, 0);
    this.shake = 0;
    this.shakeTarget = 0;
    this.handheld = 0.35;
    this.flashLevel = 0;
    this.flashDecay = 0.9;
    this.flashColor = new THREE.Color(0xbfd4ff);
    this.reduceFlashes = false;
    this.grainOn = true;
    this.exploreCallbacks = null;
    this.hotspotHover = null;
    this.pointer = new THREE.Vector2(-10, -10);
    this.raycaster = new THREE.Raycaster();
    this.hotspotRings = [];
    this.lightningTimer = null;
    this.lastLightning = 0;

    this._setupComposer();
    this._bind();
    this.renderer.setAnimationLoop(() => this._tick());
  }

  _setupComposer() {
    const size = new THREE.Vector2(window.innerWidth, window.innerHeight);
    this.composer = new EffectComposer(this.renderer);
    this.composer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    this.renderPass = new RenderPass(this.scene, this.camera);
    this.composer.addPass(this.renderPass);
    this.bloom = new UnrealBloomPass(size, 0.62, 0.7, 0.72);
    this.composer.addPass(this.bloom);
    this.grade = new ShaderPass(GRADE_SHADER);
    this.grade.uniforms.uResolution.value.set(window.innerWidth, window.innerHeight);
    this.composer.addPass(this.grade);
    this.output = new OutputPass();
    this.composer.addPass(this.output);
  }

  _bind() {
    window.addEventListener('resize', () => this.resize());
    window.addEventListener('pointermove', (e) => {
      this.pointer.x = (e.clientX / window.innerWidth) * 2 - 1;
      this.pointer.y = -(e.clientY / window.innerHeight) * 2 + 1;
      if (this.exploreCallbacks) this._updateHover();
    });
    window.addEventListener('click', () => {
      if (this.exploreCallbacks?.onClick) {
        const hs = this._pickHotspot();
        if (hs) this.exploreCallbacks.onClick(hs);
      }
    });
  }

  resize() {
    const w = window.innerWidth, h = window.innerHeight;
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.55));
    this.renderer.setSize(w, h);
    this.composer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    this.composer.setSize(w, h);
    this.grade.uniforms.uResolution.value.set(w, h);
  }

  async setScene(id, { shot = null, instant = false } = {}) {
    this._disposeScene();
    this.sceneId = id;
    this.spec = buildScene(id);
    this.spec.onEngine?.(this);
    this.sceneRoot.add(this.spec.group);
    this.scene.fog = this.spec.fog || null;
    this.scene.background = this.spec.background || new THREE.Color(0x020203);
    this.scene.backgroundIntensity = this.spec.backgroundIntensity ?? 1;
    this.renderer.toneMappingExposure = this.spec.exposure ?? 1.05;
    this.bloom.strength = this.spec.bloom ?? 0.62;
    this.bloom.radius = this.spec.bloomRadius ?? 0.7;
    this.bloom.threshold = this.spec.bloomThreshold ?? 0.72;
    this.hemi.intensity = this.spec.hemi ?? 0.28;
    this.hemi.color.set(this.spec.hemiColor ?? 0x4a5b72);
    this.hemi.groundColor.set(this.spec.hemiGround ?? 0x080706);
    this.grade.uniforms.uTint.value.set(this.spec.tint ?? 0xffffff);
    this.grade.uniforms.uGrain.value = this.grainOn ? (this.spec.grain ?? 0.055) : 0;
    this.grade.uniforms.uVignette.value = this.spec.vignette ?? 0.62;
    this.grade.uniforms.uSaturation.value = this.spec.saturation ?? 1.0;
    this.grade.uniforms.uContrast.value = this.spec.contrast ?? 1.02;
    this.grade.uniforms.uAberration.value = this.spec.aberration ?? 1.0;

    // hotspot rings
    this.hotspotRings = [];
    (this.spec.hotspotData || []).forEach((data) => {
      if (!data.position) return;
      const ring = this._makeRing(data);
      this.sceneRoot.add(ring);
      this.hotspotRings.push(ring);
    });

    const defaultShot = shot || this.spec.defaultShot || Object.keys(this.spec.shots || {})[0];
    if (defaultShot) this.setShot(defaultShot, { instant: true });
    this._updateHover();
  }

  _makeRing(data) {
    const c = document.createElement('canvas');
    c.width = c.height = 128;
    const ctx = c.getContext('2d');
    ctx.strokeStyle = 'rgba(232,210,160,0.9)';
    ctx.lineWidth = 2;
    ctx.beginPath(); ctx.arc(64, 64, 40, 0, Math.PI * 2); ctx.stroke();
    ctx.strokeStyle = 'rgba(232,210,160,0.3)';
    ctx.lineWidth = 1;
    ctx.beginPath(); ctx.arc(64, 64, 48, 0, Math.PI * 2); ctx.stroke();
    ctx.beginPath(); ctx.arc(64, 64, 4, 0, Math.PI * 2); ctx.stroke();
    const tex = new THREE.CanvasTexture(c);
    tex.colorSpace = THREE.SRGBColorSpace;
    const mat = new THREE.SpriteMaterial({ map: tex, color: 0xe8d2a0, transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false, depthTest: true });
    const sprite = new THREE.Sprite(mat);
    sprite.position.copy(data.position);
    sprite.scale.setScalar(data.ringSize || 0.55);
    sprite.userData.hotspotId = data.id;
    sprite.userData.baseScale = data.ringSize || 0.55;
    return sprite;
  }

  _disposeScene() {
    if (!this.spec) return;
    this.sceneRoot.remove(this.spec.group);
    this.spec.group.traverse((o) => {
      if (o.geometry) o.geometry.dispose();
      if (o.material) {
        const mats = Array.isArray(o.material) ? o.material : [o.material];
        mats.forEach((m) => {
          if (m.map && m.map !== _sharedGlow) m.map.dispose?.();
          m.dispose?.();
        });
      }
    });
    this.hotspotRings.forEach((r) => { this.sceneRoot.remove(r); r.material.map?.dispose(); r.material.dispose(); });
    this.hotspotRings = [];
    this.spec = null;
  }

  setShot(name, { instant = false, duration = 1.1, onDone = null } = {}) {
    const shot = this.spec?.shots?.[name] || this.spec?.shots?.[this.spec?.defaultShot];
    if (!shot) return false;
    this.shotName = name;
    this.camFrom.pos.copy(this.camera.position);
    this.camFrom.look.copy(this.lookCurrent);
    this.camFrom.fov = this.camera.fov;
    this.camTo.pos.set(shot.pos[0], shot.pos[1], shot.pos[2]);
    this.camTo.look.set(shot.look[0], shot.look[1], shot.look[2]);
    this.camTo.fov = shot.fov || 40;
    this.shotDef = shot;
    this.handheld = shot.handheld ?? 0.35;
    if (instant) {
      this.camT = 1;
      this.camera.position.copy(this.camTo.pos);
      this.lookCurrent.copy(this.camTo.look);
      this.camera.fov = this.camTo.fov;
      this.camera.updateProjectionMatrix();
      this.lookAtTarget = this.camTo.look.clone();
    } else {
      this.camT = 0;
      this.camDuration = duration;
      this.lookAtTarget = this.camTo.look.clone();
    }
    this.onShotDone = onDone;
    return true;
  }

  setExplore(on, callbacks = null) {
    this.exploreCallbacks = on ? callbacks : null;
    this.hotspotHover = null;
    this._updateHover();
    this.hotspotRings.forEach((r) => {
      r.visible = !!on;
    });
  }

  markHotspot(id) {
    const ring = this.hotspotRings.find((r) => r.userData.hotspotId === id);
    if (ring) ring.userData.done = true;
  }

  _pickHotspot() {
    if (!this.exploreCallbacks || !this.spec) return null;
    const found = [];
    this.raycaster.setFromCamera(this.pointer, this.camera);
    this.spec.group.traverse((o) => {
      if (o.userData?.hotspotId && o.visible) found.push(o);
    });
    // also include ring sprites
    this.hotspotRings.forEach((r) => { if (r.visible) found.push(r); });
    const hits = this.raycaster.intersectObjects(found, false);
    for (const h of hits) {
      const id = h.object.userData.hotspotId;
      if (id) return id;
    }
    return null;
  }

  _updateHover() {
    if (!this.exploreCallbacks) return;
    const id = this._pickHotspot();
    if (id !== this.hotspotHover) {
      this.hotspotHover = id;
      this.exploreCallbacks.onHover?.(id);
    }
  }

  addShake(amount = 0.4, duration = 0.4) {
    this.shake = Math.max(this.shake, amount);
    this.shakeTarget = duration;
  }

  flash(level = 1, color = 0xbfd4ff, decay = 0.9) {
    this.flashLevel = this.reduceFlashes ? level * 0.35 : level;
    this.flashColor.set(color);
    this.flashDecay = decay;
  }

  lightning() {
    const now = performance.now();
    if (now - this.lastLightning < 900) return;
    this.lastLightning = now;
    this.flash(1.4, 0xcfe0ff, 0.55);
    setTimeout(() => this.flash(0.7, 0xbfd4ff, 0.5), 130);
    setTimeout(() => this.flash(1.0, 0xd8e6ff, 0.4), 260);
  }

  showRings(on) {
    this.hotspotRings.forEach((r) => { r.visible = on; });
  }

  getSpec() { return this.spec; }

  _tick() {
    const rawDt = Math.min(this.clock.getDelta(), 0.05);
    const dt = this.paused ? 0 : rawDt;
    this.time += dt;
    const t = this.time;

    if (this.spec?.update) this.spec.update(t, dt, this);
    if (this.spec?.actors) {
      for (const actor of this.spec.actors) actor.update?.(t, dt);
    }
    if (this.spec?.onTick) this.spec.onTick(t, dt, this);

    // camera interpolation
    if (this.camT < 1) {
      this.camT = Math.min(1, this.camT + dt / Math.max(0.001, this.camDuration));
      const k = ease(this.camT);
      this.camera.position.lerpVectors(this.camFrom.pos, this.camTo.pos, k);
      this.lookCurrent.lerpVectors(this.camFrom.look, this.camTo.look, k);
      this.camera.fov = this.camFrom.fov + (this.camTo.fov - this.camFrom.fov) * k;
      this.camera.updateProjectionMatrix();
      if (this.camT >= 1 && this.onShotDone) {
        const f = this.onShotDone; this.onShotDone = null; f();
      }
    }
    if (this.camT >= 1) {
      this.camera.position.copy(this.camTo.pos);
      this.lookCurrent.copy(this.camTo.look);
    }

    // handheld + shake
    const shakeAmt = this.shake;
    const h = this.handheld;
    const n1 = Math.sin(t * 1.31) * 0.5 + Math.sin(t * 2.17 + 1.4) * 0.3 + Math.sin(t * 0.53) * 0.2;
    const n2 = Math.sin(t * 1.73 + 2.1) * 0.5 + Math.sin(t * 2.9) * 0.3 + Math.sin(t * 0.37) * 0.2;
    const n3 = Math.sin(t * 0.91 + 0.6) * 0.5 + Math.sin(t * 1.53) * 0.3;
    const shakeN1 = Math.sin(t * 22.1) * 0.5 + Math.sin(t * 31.7 + 1.2) * 0.5;
    const shakeN2 = Math.sin(t * 18.3 + 2.1) * 0.5 + Math.sin(t * 27.3) * 0.5;
    this.camera.position.x += n1 * 0.03 * h + shakeN1 * 0.12 * shakeAmt;
    this.camera.position.y += n2 * 0.025 * h + shakeN2 * 0.1 * shakeAmt;
    this.camera.position.z += n3 * 0.02 * h;
    if (this.shake > 0.001) {
      this.shake = Math.max(0, this.shake - dt * (0.6 + this.shake * 2.2));
    }
    const look = this.lookCurrent.clone();
    look.x += n1 * 0.035 * h + shakeN1 * 0.14 * shakeAmt;
    look.y += n2 * 0.03 * h + shakeN2 * 0.12 * shakeAmt;
    this.camera.lookAt(look);
    this.camera.rotation.z += n3 * 0.0025 * h + shakeN1 * 0.004 * shakeAmt;

    // flash light
    if (this.flashLevel > 0.001) {
      this.flashLight.color.copy(this.flashColor);
      this.flashLight.intensity = this.flashLevel * (this.spec?.flashBoost ?? 2.2);
      this.flashLevel *= Math.pow(0.001, dt / Math.max(0.05, this.flashDecay));
    } else {
      this.flashLight.intensity = 0;
    }

    // hotspot rings
    if (this.spec && this.hotspotRings.length) {
      const active = !!this.exploreCallbacks;
      this.hotspotRings.forEach((r, i) => {
        const base = r.userData.baseScale;
        if (r.userData.done) {
          r.material.opacity = active ? 0.08 : 0;
          r.material.color.set(0x6b6252);
          r.scale.setScalar(base * 0.8);
          return;
        }
        const hover = this.hotspotHover === r.userData.hotspotId;
        r.material.opacity = active ? (hover ? 0.95 : 0.36 + Math.sin(t * 2 + i) * 0.16) : 0;
        r.material.color.set(hover ? 0xffdca0 : 0xe8d2a0);
        r.scale.setScalar(base * (hover ? 1.22 : 1 + Math.sin(t * 2 + i) * 0.04));
      });
    }

    // grain time
    this.grade.uniforms.uTime.value = t;
    if (this.spec?.gradeUpdate) this.spec.gradeUpdate(this.grade.uniforms, t);

    this.composer.render();
  }
}

let _sharedGlow = null;
export function setSharedGlow(tex) { _sharedGlow = tex; }
