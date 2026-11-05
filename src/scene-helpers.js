import * as THREE from 'three';
import { glowTexture, spriteGlow, makeRain, makeDust } from './props.js';
import { createPerson } from './characters.js';

export function actor(group, spec, name, opts, pos, rotY = 0, pose = 'stand', shadow = true) {
  const a = createPerson({ name, pose, ...opts });
  a.root.position.set(...pos);
  a.root.rotation.y = rotY;
  group.add(a.root);
  spec.actors.push(a);
  if (shadow) {
    const disc = new THREE.Mesh(
      new THREE.CircleGeometry(0.34, 18),
      new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.42, depthWrite: false })
    );
    disc.rotation.x = -Math.PI / 2;
    disc.position.set(pos[0], 0.018, pos[2]);
    group.add(disc);
    a.shadowDisc = disc;
  }
  return a;
}

export function hotspot(group, spec, id, position, radius = 0.75) {
  const mesh = new THREE.Mesh(
    new THREE.SphereGeometry(radius, 12, 8),
    new THREE.MeshBasicMaterial({ transparent: true, opacity: 0, depthWrite: false, colorWrite: false })
  );
  mesh.position.copy(position);
  mesh.userData.hotspotId = id;
  group.add(mesh);
  spec.hotspotData.push({ id, position: position.clone(), ringSize: Math.max(0.4, radius * 0.9) });
  return mesh;
}

export function skyDome(top, bottom, radius = 130, horizon = null, opts = {}) {
  const geo = new THREE.SphereGeometry(radius, 32, 20);
  const mat = new THREE.ShaderMaterial({
    side: THREE.BackSide,
    depthWrite: false,
    transparent: false,
    uniforms: {
      uTop: { value: new THREE.Color(top) },
      uBottom: { value: new THREE.Color(bottom) },
      uHorizon: { value: new THREE.Color(horizon || bottom) },
      uTime: { value: 0 },
      uCloud: { value: opts.cloud ?? 0.0 },
      uCloudColor: { value: new THREE.Color(opts.cloudColor || 0x0d1a22) }
    },
    vertexShader: `
      varying vec3 vWorld;
      varying vec2 vUv;
      void main() {
        vUv = uv;
        vWorld = (modelMatrix * vec4(position, 1.0)).xyz;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }`,
    fragmentShader: `
      uniform vec3 uTop, uBottom, uHorizon, uCloudColor;
      uniform float uTime, uCloud;
      varying vec3 vWorld;
      varying vec2 vUv;
      float hash(vec2 p){ p=fract(p*vec2(123.34,456.21)); p+=dot(p,p+45.32); return fract(p.x*p.y); }
      float noise(vec2 p){
        vec2 i=floor(p), f=fract(p); f=f*f*(3.0-2.0*f);
        return mix(mix(hash(i),hash(i+vec2(1,0)),f.x),mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),f.x),f.y);
      }
      void main(){
        float h = clamp(normalize(vWorld).y, -0.2, 1.0);
        vec3 col = mix(uBottom, uTop, smoothstep(-0.02, 0.62, h));
        col = mix(col, uHorizon, pow(1.0 - clamp(h + 0.02, 0.0, 1.0), 6.0) * 0.55);
        vec2 cp = vUv * vec2(6.0, 12.0);
        float n = noise(cp + vec2(uTime * 0.012, 0.0)) * 0.6 + noise(cp * 2.3 - uTime * 0.006) * 0.4;
        float band = smoothstep(0.02, 0.3, h) * (1.0 - smoothstep(0.55, 0.95, h));
        col = mix(col, uCloudColor, n * band * uCloud);
        gl_FragColor = vec4(col, 1.0);
      }`
  });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.frustumCulled = false;
  return mesh;
}

export function addFlame(group, pos, { scale = 0.09, color = 0xffa040, light = false, intensity = 5, distance = 6 } = {}) {
  const s = new THREE.Sprite(new THREE.SpriteMaterial({
    map: glowTexture(), color, transparent: true, opacity: 0.92,
    blending: THREE.AdditiveBlending, depthWrite: false
  }));
  s.scale.setScalar(scale);
  s.position.copy(pos);
  group.add(s);
  let pl = null;
  if (light) {
    pl = new THREE.PointLight(color, intensity, distance, 2);
    pl.position.copy(pos).add(new THREE.Vector3(0, 0.12, 0));
    group.add(pl);
  }
  return { sprite: s, light: pl, baseScale: scale };
}

export function rainFor(group, spec, { count = 800, extent = 60, height = 26, opacity = 0.3 } = {}) {
  const rain = makeRain(count, extent, height);
  rain.material.uniforms.uOpacity.value = opacity;
  group.add(rain);
  spec.updaters.push((t) => { rain.material.uniforms.uTime.value = t; });
  return rain;
}

export function dustFor(group, spec, { count = 180, area = [20, 8, 20], color = 0xd8c9a8, size = 0.05 } = {}) {
  const dust = makeDust(count, size, color, area);
  group.add(dust);
  spec.updaters.push((t) => { dust.material.uniforms.uTime.value = t; });
  return dust;
}

export function clockHands(parent, { x = 0, y = 0, z = 0, hourAngle = 93.5, minuteAngle = 42, scale = 1, material = null } = {}) {
  const mat = material || new THREE.MeshStandardMaterial({ color: 0x1a120a, roughness: 0.55, metalness: 0.2 });
  const g = new THREE.Group();
  g.position.set(x, y, z);
  const hour = new THREE.Group();
  const hMesh = new THREE.Mesh(new THREE.BoxGeometry(0.07 * scale, 0.58 * scale, 0.035 * scale), mat);
  hMesh.position.y = 0.29 * scale;
  hour.add(hMesh);
  const hTip = new THREE.Mesh(new THREE.ConeGeometry(0.055 * scale, 0.16 * scale, 4), mat);
  hTip.position.y = 0.62 * scale;
  hour.add(hTip);
  hour.rotation.z = -THREE.MathUtils.degToRad(hourAngle);
  g.add(hour);
  const minute = new THREE.Group();
  const mMesh = new THREE.Mesh(new THREE.BoxGeometry(0.045 * scale, 0.86 * scale, 0.035 * scale), mat);
  mMesh.position.y = 0.43 * scale;
  minute.add(mMesh);
  const mTip = new THREE.Mesh(new THREE.ConeGeometry(0.04 * scale, 0.12 * scale, 4), mat);
  mTip.position.y = 0.92 * scale;
  minute.add(mTip);
  minute.rotation.z = -THREE.MathUtils.degToRad(minuteAngle);
  g.add(minute);
  const pin = new THREE.Mesh(new THREE.CylinderGeometry(0.05 * scale, 0.05 * scale, 0.06 * scale, 10), mat);
  pin.rotation.x = Math.PI / 2;
  pin.position.z = 0.02;
  g.add(pin);
  parent.add(g);
  return { group: g, hour, minute };
}

export function lightningCycle(spec, { min = 7, max = 15, first = 1.5, level = 1.2 } = {}) {
  let next = first;
  spec.updaters.push((t, dt, engine) => {
    if (t > next) {
      engine?.lightning?.(level);
      if (engine?.onLightning) engine.onLightning();
      next = t + min + Math.random() * (max - min);
    }
  });
}

export function flickerLight(light, spec, { base = 1, speed = 9, amount = 0.25, seed = 0 } = {}) {
  spec.updaters.push((t) => {
    light.intensity = base * (1 - amount * 0.5 + amount * Math.sin(t * speed + seed) * Math.sin(t * speed * 0.37 + seed * 2));
  });
}

export function makeGlowSprite(parent, color, scale, opacity, pos) {
  return spriteGlow(parent, color, scale, opacity, pos);
}
