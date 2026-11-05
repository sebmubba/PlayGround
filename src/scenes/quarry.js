import * as THREE from 'three';
import {
  mulberry32, std, box, cyl, cylinderBetween, canvasTexture, glowTexture,
  spriteGlow, makeGround, makeRain, makeLightShaft, rockTexture, asphaltTexture,
  buildTree, makeDust
} from '../props.js';
import { actor, skyDome, rainFor, dustFor, lightningCycle, flickerLight } from '../scene-helpers.js';

function gateMaterial() {
  return new THREE.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    side: THREE.DoubleSide,
    blending: THREE.AdditiveBlending,
    uniforms: {
      uTime: { value: 0 },
      uColorA: { value: new THREE.Color(0xff2a12) },
      uColorB: { value: new THREE.Color(0x5e0010) }
    },
    vertexShader: `
      varying vec2 vUv;
      void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
    `,
    fragmentShader: `
      uniform float uTime;
      uniform vec3 uColorA, uColorB;
      varying vec2 vUv;
      float hash(vec2 p){ p=fract(p*vec2(123.34,456.21)); p+=dot(p,p+45.32); return fract(p.x*p.y); }
      float noise(vec2 p){
        vec2 i=floor(p), f=fract(p); f=f*f*(3.0-2.0*f);
        return mix(mix(hash(i),hash(i+vec2(1,0)),f.x),mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),f.x),f.y);
      }
      void main(){
        vec2 uv = vUv;
        float y = uv.y;
        float wobble = sin(y * 9.0 + uTime * 1.4) * 0.035 + sin(y * 21.0 - uTime * 0.8) * 0.014;
        float halfW = 0.2 + 0.13 * smoothstep(0.0, 0.12, y) * (1.0 - smoothstep(0.78, 1.0, y)) + wobble;
        float edge = abs(uv.x - 0.5);
        float mask = smoothstep(halfW, halfW - 0.035, edge);
        float n = noise(vec2(uv.x * 9.0, uv.y * 14.0 + uTime * 0.7)) * 0.6 + noise(vec2(uv.x * 24.0, uv.y * 30.0 - uTime)) * 0.4;
        vec3 col = mix(uColorB, uColorA, smoothstep(0.25, 0.9, n));
        float rim = smoothstep(halfW - 0.11, halfW - 0.02, edge);
        col += uColorA * rim * 0.9;
        float vert = smoothstep(0.0, 0.08, y) * (1.0 - smoothstep(0.9, 1.0, y));
        float a = mask * (0.5 + n * 0.5) * vert;
        gl_FragColor = vec4(col * (0.8 + n * 0.9) * 1.15, a);
      }`
  });
}

function makeWarningSign(group) {
  const g = new THREE.Group();
  g.position.set(5.4, 0, 8.2);
  g.rotation.y = -0.28;
  const wood = std(0x2a251f, { roughness: 0.95 });
  box(g, 0.1, 2.2, 0.1, wood, -0.5, 1.1, 0);
  box(g, 0.1, 2.2, 0.1, wood, 0.5, 1.1, 0);
  const signTex = canvasTexture(512, 320, (ctx, w, h) => {
    const rnd = mulberry32(13);
    ctx.fillStyle = '#2a2d2b'; ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = '#0f1210'; ctx.fillRect(5, 5, w - 10, h - 10);
    ctx.strokeStyle = '#b8b09a'; ctx.lineWidth = 4; ctx.strokeRect(10, 10, w - 20, h - 20);
    ctx.fillStyle = '#c6bda6';
    ctx.textAlign = 'center';
    ctx.font = '600 42px "Barlow Condensed", sans-serif';
    ctx.fillText('HAWKINS QUARRY', w / 2, 72);
    ctx.font = '400 27px "Barlow Condensed", sans-serif';
    ctx.fillText('NO TRESPASSING', w / 2, 112);
    ctx.strokeStyle = '#7f1a14'; ctx.lineWidth = 4;
    ctx.beginPath(); ctx.moveTo(50, 145); ctx.lineTo(w - 50, 145); ctx.stroke();
    ctx.fillStyle = '#a82a20';
    ctx.font = '700 54px "Barlow Condensed", sans-serif';
    ctx.fillText('DANGER', w / 2, 210);
    ctx.font = '400 22px "Barlow Condensed", sans-serif';
    ctx.fillStyle = '#b9b09a';
    ctx.fillText('UNSTABLE GROUND — KEEP OUT', w / 2, 250);
    for (let i = 0; i < 70; i++) {
      ctx.fillStyle = `rgba(0,0,0,${rnd() * 0.35})`;
      ctx.fillRect(rnd() * w, rnd() * h, 2 + rnd() * 9, 1 + rnd() * 3);
    }
  }, { repeat: [1, 1] });
  const sign = new THREE.Mesh(new THREE.PlaneGeometry(2.3, 1.45), new THREE.MeshStandardMaterial({ map: signTex, roughness: 0.8, metalness: 0.2, side: THREE.DoubleSide }));
  sign.position.set(0, 1.55, 0.06);
  g.add(sign);
  box(g, 2.4, 1.55, 0.07, std(0x181a19, { metalness: 0.5, roughness: 0.6 }), 0, 1.55, 0);
  group.add(g);
}

function makeBridge(group) {
  const g = new THREE.Group();
  const wood = std(0x382b1e, { roughness: 0.92 });
  for (let i = 0; i < 12; i++) {
    const z = 4.4 - i * 0.42;
    const plank = box(g, 1.05, 0.09, 0.34, wood, -4.0, 0.02 + Math.sin(i * 1.7) * 0.02, z, [0, (Math.random() - 0.5) * 0.045, (Math.random() - 0.5) * 0.04]);
  }
  const rope = std(0x6c5a3d, { roughness: 1 });
  for (const x of [-4.5, -3.5]) {
    const pts = [];
    for (let i = 0; i <= 10; i++) {
      const z = 4.4 - i * 0.46;
      pts.push(new THREE.Vector3(x, 1.0 + Math.sin(i * 0.7) * 0.06, z));
    }
    for (let i = 0; i < pts.length - 1; i++) {
      g.add(cylinderBetween(pts[i], pts[i + 1], 0.017, 0.017, rope, 4));
    }
    for (let i = 0; i <= 10; i += 2) {
      g.add(cylinderBetween(pts[i], new THREE.Vector3(x, 0.06, pts[i].z), 0.014, 0.014, rope, 4));
    }
  }
  group.add(g);
}

export function buildQuarry() {
  const group = new THREE.Group();
  const spec = { group, shots: {}, actors: [], hotspotData: [], updaters: [], defaultShot: 'wide' };

  const rock = new THREE.MeshStandardMaterial({ map: rockTexture(), color: 0xdfe7e8, roughness: 0.95, metalness: 0.02 });
  const darkRock = std(0x0b0d0e, { roughness: 1 });

  // near ground
  const near = new THREE.Mesh(new THREE.PlaneGeometry(70, 22), new THREE.MeshStandardMaterial({ map: rockTexture(), color: 0xcdd6d8, roughness: 0.95 }));
  near.rotation.x = -Math.PI / 2;
  near.position.set(0, 0, 15);
  near.receiveShadow = true;
  group.add(near);
  // far ground
  const far = new THREE.Mesh(new THREE.PlaneGeometry(70, 12), new THREE.MeshStandardMaterial({ map: rockTexture(), color: 0xbfc9cb, roughness: 0.95 }));
  far.rotation.x = -Math.PI / 2;
  far.position.set(0, 0, -5);
  far.receiveShadow = true;
  group.add(far);

  // cliff wall
  box(group, 52, 18, 4, rock, 0, 6, -12.5);
  // rocky face details
  const rnd = mulberry32(717);
  for (let i = 0; i < 40; i++) {
    const s = 0.5 + rnd() * 2.6;
    const b = new THREE.Mesh(new THREE.DodecahedronGeometry(s, 0), rock);
    let bx = (rnd() - 0.5) * 40;
    // keep the gate corridor clear so the doorway reads from the wide shot
    if (Math.abs(bx) < 6.5) bx += (bx < 0 ? -1 : 1) * 6.5;
    b.position.set(bx, 0.3 + rnd() * 12, -10.3 + rnd() * 0.9);
    b.rotation.set(rnd() * 3, rnd() * 3, rnd() * 3);
    b.scale.set(1, 0.7 + rnd() * 0.7, 0.7);
    b.castShadow = true; b.receiveShadow = true;
    group.add(b);
  }
  // side cliffs
  for (const side of [-1, 1]) {
    const slab = box(group, 6, 14, 20, rock, side * 18, 5.2, 1);
    slab.rotation.y = side * 0.18;
    for (let i = 0; i < 8; i++) {
      const b = new THREE.Mesh(new THREE.DodecahedronGeometry(1 + rnd() * 2, 0), rock);
      b.position.set(side * (15 + rnd() * 3), rnd() * 8, 8 - i * 2.2);
      group.add(b);
    }
  }

  // chasm below
  const water = new THREE.Mesh(new THREE.PlaneGeometry(80, 30), new THREE.MeshStandardMaterial({
    color: 0x040b0d, roughness: 0.08, metalness: 0.9
  }));
  water.rotation.x = -Math.PI / 2;
  water.position.set(0, -4.2, 2.5);
  group.add(water);
  // red reflection
  const reflection = new THREE.Mesh(new THREE.PlaneGeometry(5.5, 16), new THREE.MeshBasicMaterial({
    map: glowTexture(), color: 0xff2a14, transparent: true, opacity: 0.1,
    blending: THREE.AdditiveBlending, depthWrite: false
  }));
  reflection.rotation.x = -Math.PI / 2;
  reflection.position.set(0, -4.1, 0.8);
  group.add(reflection);
  // chasm walls
  for (const z of [4.6, 0.1]) {
    box(group, 70, 5, 0.7, darkRock, 0, -2.3, z);
  }
  // jagged rocks along chasm edge
  for (let i = 0; i < 18; i++) {
    const s = 0.3 + rnd() * 1.4;
    const b = new THREE.Mesh(new THREE.DodecahedronGeometry(s, 0), rock);
    const z = (i % 2 ? 4.5 : 0.2) + (rnd() - 0.5) * 0.6;
    let x = (rnd() - 0.5) * 26;
    // leave the centre of the ledge open so the gate and actors read clearly
    if (Math.abs(x) < 4.5 && z < 6) x += (x < 0 ? -1 : 1) * 4.5;
    b.position.set(x, s * 0.2, z);
    b.rotation.set(rnd() * 3, rnd() * 3, rnd() * 3);
    group.add(b);
  }

  makeBridge(group);
  makeWarningSign(group);

  // gate
  const gate = new THREE.Mesh(new THREE.PlaneGeometry(4.6, 7.4), gateMaterial());
  gate.position.set(0, 3.5, -10.15);
  group.add(gate);
  const gateLight = new THREE.PointLight(0xff2a12, 38, 22, 2);
  gateLight.position.set(0, 3.2, -8.6);
  group.add(gateLight);
  spriteGlow(group, 0xff2a12, 7, 0.14, [0, 3.3, -9.7]);
  spriteGlow(group, 0xff5a33, 3.5, 0.12, [0, 3.3, -9.8]);
  const shaft = makeLightShaft(0xff2a12, 2.2, 12, 0.035);
  shaft.position.set(0, 2.4, -9.7);
  group.add(shaft);
  // cracks
  const crackPositions = [];
  for (let i = 0; i < 11; i++) {
    let x = (rnd() - 0.5) * 1.4;
    let y = 2.8 + rnd() * 4;
    const arr = [];
    for (let j = 0; j < 5; j++) {
      arr.push(new THREE.Vector3(x, y, -10.0));
      x += (rnd() - 0.5) * 1.6;
      y += (rnd() - 0.4) * 0.8;
    }
    crackPositions.push(...arr.slice(0, -1), ...arr.slice(1));
  }
  const crackGeo = new THREE.BufferGeometry().setFromPoints(crackPositions);
  const cracks = new THREE.LineSegments(crackGeo, new THREE.LineBasicMaterial({ color: 0xff4a22, transparent: true, opacity: 0.55, blending: THREE.AdditiveBlending }));
  group.add(cracks);
  // gate boulders
  for (const [x, y, s] of [[-2.4, 1.5, 1.4], [2.5, 1.7, 1.6], [-2.7, 5.2, 1.2], [2.6, 5.4, 1.3]]) {
    const b = new THREE.Mesh(new THREE.DodecahedronGeometry(s, 0), rock);
    b.position.set(x, y, -9.6);
    b.rotation.set(rnd() * 3, rnd() * 3, rnd() * 3);
    b.castShadow = true;
    group.add(b);
  }

  // trees
  const treePositions = [[-12, 7, 9], [11, 9, 10], [-9, -5, 8], [9, -4, 9], [16, 15, 11], [-16, 14, 10]];
  treePositions.forEach(([x, z, h], i) => {
    const t = buildTree(300 + i, h, 0x070909);
    t.position.set(x, 0, z);
    t.scale.setScalar(0.9 + (i % 3) * 0.15);
    group.add(t);
  });
  // dead sticks foreground
  for (let i = 0; i < 14; i++) {
    const pts = [new THREE.Vector3((rnd() - 0.5) * 30, 0, 4 + rnd() * 12)];
    for (let j = 1; j < 4; j++) {
      pts.push(new THREE.Vector3(pts[j - 1].x + (rnd() - 0.5) * 0.8, j * (0.2 + rnd() * 0.35), pts[j - 1].z + (rnd() - 0.5) * 0.6));
    }
    for (let j = 0; j < pts.length - 1; j++) {
      group.add(cylinderBetween(pts[j], pts[j + 1], 0.025, 0.012, darkRock, 4));
    }
  }

  // safety rail
  const railMat = std(0x3a3a34, { roughness: 0.7, metalness: 0.4 });
  for (let i = 0; i < 6; i++) {
    cyl(group, 0.035, 0.045, 1.0, railMat, 2.5 + i * 1.8, 0.5, 5.5, 6);
  }
  group.add(cylinderBetween(new THREE.Vector3(2.4, 0.95, 5.5), new THREE.Vector3(11, 0.8, 5.5), 0.03, 0.03, railMat, 6));

  // lighting
  const moon = new THREE.DirectionalLight(0x9db8d6, 2.6);
  moon.position.set(-18, 22, 12);
  moon.castShadow = true;
  moon.shadow.mapSize.set(1024, 1024);
  moon.shadow.camera.left = -30; moon.shadow.camera.right = 30;
  moon.shadow.camera.top = 24; moon.shadow.camera.bottom = -12;
  moon.shadow.camera.far = 70;
  group.add(moon);
  // cool frontal fill so the cliff face and ground read through the rain
  const faceFill = new THREE.DirectionalLight(0x6f8fae, 1.6);
  faceFill.position.set(4, 9, 22);
  group.add(faceFill);
  const fill = new THREE.PointLight(0x4a78a0, 42, 46, 2);
  fill.position.set(-9, 6.5, 8);
  group.add(fill);
  const ledgeFill = new THREE.PointLight(0x5d86ad, 55, 40, 2);
  ledgeFill.position.set(1, 5.5, 7);
  group.add(ledgeFill);
  const actorFill = new THREE.PointLight(0x8fb3d8, 36, 18, 2);
  actorFill.position.set(0.5, 3.0, 1.5);
  group.add(actorFill);

  // actors
  const ryan = actor(group, spec, 'RYAN', {
    height: 1.78, jacket: 0x2d3d47, shirt: 0x1a1c1e, pants: 0x262a2e, hair: 0x241811, flashlight: true
  }, [0.4, 0, -4.0], Math.PI + 0.06, 'stand');
  const wren = actor(group, spec, 'WREN', {
    height: 1.62, jacket: 0x2b2b3d, shirt: 0x17171f, pants: 0x23232b, hair: 0x120e0c, hairStyle: 'long',
    skin: 0x604a3a
  }, [-1.2, 0, -4.4], 0.35, 'stand');
  const sam = actor(group, spec, 'SAM', {
    height: 1.7, jacket: 0x4a3a28, shirt: 0x1c1814, pants: 0x26282b, hair: 0x1b130e, hairStyle: 'curly', flashlight: true
  }, [3.4, 0, -2.1], 0.55, 'stand');
  const aura = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTexture(), color: 0x6f8fbe, transparent: true, opacity: 0.1, blending: THREE.AdditiveBlending, depthWrite: false }));
  aura.scale.setScalar(1.3);
  aura.position.set(0, 1.2, 0);
  wren.root.add(aura);

  spec.actions = {
    showSam(on) {
      sam.root.visible = !!on;
      if (sam.shadowDisc) sam.shadowDisc.visible = !!on;
      if (sam.flashlightRig) sam.flashlightRig.visible = true;
    }
  };

  rainFor(group, spec, { count: 900, extent: 70, height: 30, opacity: 0.28 });
  dustFor(group, spec, { count: 90, area: [30, 10, 30], color: 0x9db4c0, size: 0.04 });
  lightningCycle(spec, { min: 7, max: 13, first: 3.2 });

  const sky = skyDome(0x010206, 0x08141a, 140, 0x12242d, { cloud: 0.75, cloudColor: 0x071019 });
  group.add(sky);
  spec.updaters.push((t) => { sky.material.uniforms.uTime.value = t; });

  spec.updaters.push((t, dt) => {
    gate.material.uniforms.uTime.value = t;
    gateLight.intensity = 34 + Math.sin(t * 1.8) * 8 + Math.sin(t * 7.3) * 3;
    gate.material.opacity = 0.8;
    reflection.material.opacity = 0.08 + Math.sin(t * 1.4) * 0.02;
    cracks.material.opacity = 0.4 + Math.sin(t * 1.2) * 0.16;
    wren.lookAtYaw(0.12 + Math.sin(t * 0.25) * 0.16);
    sam.lookAtYaw(0.22 + Math.sin(t * 0.33 + 1) * 0.18);
    ryan.lookAtYaw(0.05 + Math.sin(t * 0.21) * 0.08);
  });

  spec.shots = {
    wide: { pos: [0, 2.6, 10.5], look: [0, 3.4, -9.6], fov: 45, handheld: 0.4 },
    gate: { pos: [0.7, 2.05, 2.2], look: [0, 3.1, -9.3], fov: 40, handheld: 0.4 },
    ledge: { pos: [-5.7, 1.9, 7.2], look: [-1.2, 1.1, -2.5], fov: 44, handheld: 0.5 },
    cliff: { pos: [-4.2, 2.4, 5.2], look: [-2.4, -1.3, 1.2], fov: 55, handheld: 0.6 },
    wren: { pos: [1.2, 1.68, -2.5], look: [-1.2, 1.55, -4.4], fov: 35, handheld: 0.3 },
    sam: { pos: [2.0, 1.62, -0.5], look: [3.4, 1.54, -2.1], fov: 34, handheld: 0.32 },
    walkie: { pos: [0.45, 1.66, -5.4], look: [0.4, 1.55, -4.0], fov: 35, handheld: 0.3 },
    gate_in: { pos: [0, 1.9, -5.4], look: [0, 3.1, -9.3], fov: 52, handheld: 0.6 },
    close: { pos: [-0.6, 1.6, -5.9], look: [0.4, 1.45, -4.0], fov: 37, handheld: 0.3 },
    title: { pos: [0, 2.8, 16], look: [0, 4.4, -9], fov: 44, handheld: 0.3 }
  };

  spec.fog = new THREE.FogExp2(0x071218, 0.0115);
  spec.background = new THREE.Color(0x02060a);
  spec.hemi = 11;
  spec.hemiColor = 0x8aa4bd;
  spec.hemiGround = 0x2f3539;
  spec.exposure = 1.5;
  spec.bloom = 0.6;
  spec.bloomThreshold = 0.8;
  spec.tint = 0xdfe9f2;
  spec.saturation = 0.92;
  spec.contrast = 1.04;
  spec.grain = 0.045;
  spec.aberration = 1.3;
  spec.vignette = 0.46;

  spec.update = (t, dt, engine) => {
    for (const u of spec.updaters) u(t, dt, engine);
  };
  return spec;
}
