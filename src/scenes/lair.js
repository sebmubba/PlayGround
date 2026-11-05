import * as THREE from 'three';
import {
  mulberry32, std, box, cyl, cylinderBetween, glowTexture, canvasTexture,
  spriteGlow, clockFaceTexture, buildTree
} from '../props.js';
import { actor, dustFor, clockHands, flickerLight } from '../scene-helpers.js';
import { createHollowMan } from '../characters.js';

function candleCluster(group, x, z, count, seed) {
  const rnd = mulberry32(seed);
  const flames = [];
  for (let i = 0; i < count; i++) {
    const h = 0.25 + rnd() * 0.55;
    const cx = x + (rnd() - 0.5) * 1.4;
    const cz = z + (rnd() - 0.5) * 1.4;
    const rad = 0.035 + rnd() * 0.03;
    cyl(group, rad, rad * 1.1, h, std(0xb9a27c, { roughness: 0.9 }), cx, h / 2, cz, 7);
    const f = new THREE.Sprite(new THREE.SpriteMaterial({
      map: glowTexture(), color: 0xffa848, transparent: true, opacity: 0.9,
      blending: THREE.AdditiveBlending, depthWrite: false
    }));
    f.scale.setScalar(0.12 + rnd() * 0.08);
    f.position.set(cx, h + 0.04, cz);
    group.add(f);
    flames.push({ sprite: f, phase: rnd() * 6, base: 0.12 + rnd() * 0.08 });
  }
  return flames;
}

export function buildLair() {
  const group = new THREE.Group();
  const spec = { group, shots: {}, actors: [], hotspotData: [], updaters: [], defaultShot: 'wide' };

  // ── chamber shell ────────────────────────────────────────────
  const wallMat = new THREE.MeshStandardMaterial({ color: 0x151011, roughness: 0.95, side: THREE.BackSide });
  const room = new THREE.Mesh(new THREE.CylinderGeometry(14, 14, 15, 40, 1, true), wallMat);
  room.position.y = 7.5;
  group.add(room);
  const ceil = new THREE.Mesh(new THREE.CircleGeometry(14, 40), std(0x050303, { roughness: 1 }));
  ceil.rotation.x = Math.PI / 2;
  ceil.position.y = 14.9;
  group.add(ceil);
  // floor of black water
  const water = new THREE.Mesh(new THREE.CircleGeometry(14, 60), new THREE.MeshStandardMaterial({
    color: 0x030506, roughness: 0.06, metalness: 0.9
  }));
  water.rotation.x = -Math.PI / 2;
  water.receiveShadow = true;
  group.add(water);
  // stone rim
  const rim = new THREE.Mesh(new THREE.TorusGeometry(13.2, 0.35, 8, 60), std(0x1a1414, { roughness: 0.9 }));
  rim.rotation.x = Math.PI / 2;
  rim.position.y = 0.08;
  group.add(rim);
  // arcane circular markings on water
  const glyphs = new THREE.Group();
  for (let i = 0; i < 3; i++) {
    const r = new THREE.Mesh(new THREE.TorusGeometry(4.5 + i * 2.4, 0.018, 4, 80), new THREE.MeshBasicMaterial({
      color: 0x8a1a10, transparent: true, opacity: 0.18 - i * 0.04, blending: THREE.AdditiveBlending, depthWrite: false
    }));
    r.rotation.x = Math.PI / 2;
    r.position.y = 0.015;
    glyphs.add(r);
  }
  group.add(glyphs);

  // ── giant clock ─────────────────────────────────────────────
  const clockGroup = new THREE.Group();
  clockGroup.position.set(0, 5.6, -9.1);
  // stone frame
  const frame = new THREE.Mesh(new THREE.TorusGeometry(5.0, 0.38, 10, 64), std(0x241a18, { roughness: 0.8, metalness: 0.1 }));
  frame.position.z = 0.02;
  clockGroup.add(frame);
  const faceMat = new THREE.MeshStandardMaterial({
    map: clockFaceTexture(false), color: 0xc4b28d,
    emissive: 0x6e3612, emissiveIntensity: 0.55, roughness: 0.72
  });
  const face = new THREE.Mesh(new THREE.CircleGeometry(4.85, 64), faceMat);
  face.position.z = 0.06;
  clockGroup.add(face);
  const hands = clockHands(clockGroup, { x: 0, y: 0, z: 0.16, hourAngle: 93.5, minuteAngle: 42, scale: 4.4 });
  const innerRing = new THREE.Mesh(new THREE.TorusGeometry(4.5, 0.05, 6, 64), std(0x6a4a24, { metalness: 0.55, roughness: 0.35 }));
  innerRing.position.z = 0.12;
  clockGroup.add(innerRing);
  group.add(clockGroup);
  // face glow
  const clockGlow = spriteGlow(group, 0xff3a18, 15, 0.14, [0, 5.6, -8.2]);
  const clockLight = new THREE.PointLight(0xff3a18, 90, 34, 2);
  clockLight.position.set(0, 5.4, -6.4);
  group.add(clockLight);

  // crack overlay (hidden until strike)
  const shatterGroup = new THREE.Group();
  const rnd = mulberry32(77);
  for (let i = 0; i < 14; i++) {
    const pts = [];
    let x = (rnd() - 0.5) * 3;
    let y = 5.6 + (rnd() - 0.5) * 3;
    for (let j = 0; j < 5; j++) {
      pts.push(new THREE.Vector3(x, y, -8.72));
      x += (rnd() - 0.5) * 2.2;
      y += (rnd() - 0.5) * 2.0;
    }
    const line = new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), new THREE.LineBasicMaterial({
      color: 0xff5a2a, transparent: true, opacity: 0.8, blending: THREE.AdditiveBlending
    }));
    shatterGroup.add(line);
  }
  shatterGroup.visible = false;
  group.add(shatterGroup);

  // ── pendulum ────────────────────────────────────────────────
  const pendPivot = new THREE.Group();
  pendPivot.position.set(0, 13.8, -7.6);
  group.add(pendPivot);
  const rodMat = std(0x2e2318, { metalness: 0.6, roughness: 0.4 });
  cyl(pendPivot, 0.06, 0.08, 9.2, rodMat, 0, -4.6, 0, 8);
  const bob = new THREE.Group();
  bob.position.set(0, -9.3, 0);
  const disc = new THREE.Mesh(new THREE.CylinderGeometry(0.85, 0.85, 0.12, 28), std(0x8a6828, { metalness: 0.85, roughness: 0.25 }));
  disc.rotation.x = Math.PI / 2;
  bob.add(disc);
  const discRing = new THREE.Mesh(new THREE.TorusGeometry(0.8, 0.06, 8, 28), std(0xc09a4a, { metalness: 0.9, roughness: 0.2 }));
  discRing.position.z = 0.07;
  bob.add(discRing);
  pendPivot.add(bob);

  // ── candles ─────────────────────────────────────────────────
  const allFlames = [];
  const candleSpots = [
    [-7.5, -1.5, 6], [7.5, -2.5, 7], [-9.5, 3.0, 5], [9.0, 2.0, 5],
    [-4.5, 6.5, 4], [5.5, 6.0, 4], [-11, -4, 4], [10.5, -4.5, 4]
  ];
  candleSpots.forEach(([x, z, n], i) => {
    allFlames.push(...candleCluster(group, x, z, n, 800 + i));
  });
  // candle groups on the rim
  const warmA = new THREE.PointLight(0xff9a48, 20, 14, 2);
  warmA.position.set(-7.5, 1.2, -1.5);
  group.add(warmA);
  const warmB = new THREE.PointLight(0xff9a48, 18, 14, 2);
  warmB.position.set(7.5, 1.2, -2.5);
  group.add(warmB);
  const warmC = new THREE.PointLight(0xff8a3c, 14, 12, 2);
  warmC.position.set(0, 1.2, 5.5);
  group.add(warmC);
  spec.updaters.push((t) => {
    allFlames.forEach((f, i) => {
      const s = f.base * (0.85 + Math.sin(t * 9 + f.phase) * 0.18 + Math.sin(t * 21 + i) * 0.07);
      f.sprite.scale.setScalar(s);
      f.sprite.position.y += Math.sin(t * 4 + i) * 0.0004;
    });
    warmA.intensity = 18 + Math.sin(t * 7.1) * 2 + Math.sin(t * 17.3) * 1;
    warmB.intensity = 16 + Math.sin(t * 8.7 + 1) * 2;
    warmC.intensity = 12 + Math.sin(t * 6.3 + 2) * 1.5;
  });

  // ── tendrils from ceiling ───────────────────────────────────
  const tendrilMat = std(0x140707, { roughness: 0.9 });
  const tendrils = [];
  for (let i = 0; i < 20; i++) {
    const pts = [];
    const a = (i / 20) * Math.PI * 2;
    const rad = 6 + rnd() * 5;
    let x = Math.cos(a) * rad;
    let z = -1 + Math.sin(a) * rad * 0.5;
    let y = 14.5;
    for (let j = 0; j < 7; j++) {
      pts.push(new THREE.Vector3(x, y, z));
      y -= 1.0 + rnd() * 0.8;
      x += (rnd() - 0.5) * 0.8;
      z += (rnd() - 0.5) * 0.8;
    }
    const curve = new THREE.CatmullRomCurve3(pts);
    const tube = new THREE.Mesh(new THREE.TubeGeometry(curve, 26, 0.035 + rnd() * 0.05, 5, false), tendrilMat);
    group.add(tube);
    tendrils.push({ tube, phase: rnd() * 6 });
  }

  // ── floating debris ─────────────────────────────────────────
  const debris = [];
  for (let i = 0; i < 22; i++) {
    let mesh;
    if (i % 4 === 0) {
      mesh = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.08, 0.5), std(0x2a1d15));
    } else if (i % 4 === 1) {
      mesh = new THREE.Mesh(new THREE.DodecahedronGeometry(0.2 + rnd() * 0.35, 0), std(0x1a1414));
    } else if (i % 4 === 2) {
      mesh = new THREE.Mesh(new THREE.TorusGeometry(0.3, 0.04, 5, 14), std(0x7a5a26, { metalness: 0.6 }));
    } else {
      mesh = new THREE.Mesh(new THREE.CircleGeometry(0.18 + rnd() * 0.2, 3), std(0x3a3228));
    }
    mesh.position.set((rnd() - 0.5) * 20, 2 + rnd() * 9, -8 + rnd() * 12);
    mesh.rotation.set(rnd() * 6, rnd() * 6, rnd() * 6);
    group.add(mesh);
    debris.push({ mesh, baseY: mesh.position.y, phase: rnd() * 6, speed: 0.08 + rnd() * 0.14 });
  }

  // ── Hollow Man + Dana ───────────────────────────────────────
  const hollow = createHollowMan();
  hollow.root.position.set(-1.3, 0.2, -3.2);
  hollow.root.scale.setScalar(1.18);
  group.add(hollow.root);

  const dana = actor(group, spec, 'DANA', {
    height: 1.67, jacket: 0x7f7a70, shirt: 0x8e897e, pants: 0x6b665c, hair: 0x2a1a12, hairStyle: 'long',
    skin: 0x6c5341
  }, [1.55, 2.95, -6.1], 0.1, 'fear', false);
  // tendrils holding Dana
  const danaTendrils = [];
  for (let i = 0; i < 6; i++) {
    const base = new THREE.Vector3(1.55 + (rnd() - 0.5) * 0.7, 3.6 + rnd() * 0.8, -6.1 + (rnd() - 0.5) * 0.4);
    const pts = [base];
    for (let j = 1; j < 5; j++) {
      pts.push(base.clone().add(new THREE.Vector3((rnd() - 0.5) * 2.6, j * 0.5, (rnd() - 0.5) * 1.4)));
    }
    const curve = new THREE.CatmullRomCurve3(pts);
    const tube = new THREE.Mesh(new THREE.TubeGeometry(curve, 14, 0.03, 4, false), std(0x1a0807));
    group.add(tube);
    danaTendrils.push(tube);
  }
  // Dana red aura
  const danaGlow = spriteGlow(group, 0xff2a12, 4.5, 0.16, [1.55, 3.5, -6.1]);

  const ryan = actor(group, spec, 'RYAN', {
    height: 1.78, jacket: 0x2d3d47, shirt: 0x1a1c1e, pants: 0x262a2e, hair: 0x241811, flashlight: true
  }, [0.2, 0, 2.9], Math.PI, 'fear');
  const wren = actor(group, spec, 'WREN', {
    height: 1.62, jacket: 0x2b2b3d, shirt: 0x17171f, pants: 0x23232b, hair: 0x120e0c, hairStyle: 'long',
    skin: 0x604a3a
  }, [1.7, 0, -1.3], 0, 'stand');
  const sam = actor(group, spec, 'SAM', {
    height: 1.7, jacket: 0x4a3a28, shirt: 0x1c1814, pants: 0x26282b, hair: 0x1b130e, hairStyle: 'curly', flashlight: true
  }, [3.5, 0, 0.9], Math.PI + 0.3, 'fear');
  const aura = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTexture(), color: 0x7fa3cf, transparent: true, opacity: 0.12, blending: THREE.AdditiveBlending, depthWrite: false }));
  aura.scale.setScalar(1.5);
  aura.position.set(0, 1.2, 0);
  wren.root.add(aura);

  // ── lighting ────────────────────────────────────────────────
  const topSpot = new THREE.SpotLight(0xb8c8d8, 28, 22, 0.92, 1, 1.4);
  topSpot.position.set(0, 13.5, 3.5);
  topSpot.target.position.set(0, 0, -2.5);
  topSpot.castShadow = true;
  topSpot.shadow.mapSize.set(1024, 1024);
  topSpot.shadow.bias = -0.002;
  group.add(topSpot); group.add(topSpot.target);
  const coldRim = new THREE.PointLight(0x5c83ad, 30, 26, 2);
  coldRim.position.set(6, 8, 7);
  group.add(coldRim);
  const redRim = new THREE.PointLight(0xff2a12, 55, 30, 2);
  redRim.position.set(-6, 5, -5);
  group.add(redRim);

  dustFor(group, spec, { count: 200, area: [22, 14, 22], color: 0xffa080, size: 0.05 });

  let shattered = false;
  let danaBaseY = 2.95;
  spec.actions = {
    showSam(on) {
      sam.root.visible = !!on;
      if (sam.shadowDisc) sam.shadowDisc.visible = !!on;
    },
    shatter() {
      if (shattered) return;
      shattered = true;
      shatterGroup.visible = true;
      face.material.color.set(0x070202);
      face.material.emissive.set(0x000000);
      face.material.map = null;
      face.material.needsUpdate = true;
      clockGlow.material.color.set(0xff4a1e);
      clockGlow.material.opacity = 0.4;
      clockLight.intensity = 160;
    },
    setDanaFloat(on) {
      // Dana is always suspended here; action kept for narrative hooks.
    }
  };

  spec.updaters.push((t, dt) => {
    pendPivot.rotation.z = Math.sin(t * 0.98) * (shattered ? 0.02 : 0.2);
    hollow.update(t, dt);
    dana.root.position.y = danaBaseY + Math.sin(t * 0.7) * 0.1;
    dana.setFloat(0);
    dana.lookAtYaw(Math.sin(t * 0.3) * 0.2);
    danaGlow.material.opacity = 0.1 + Math.sin(t * 1.1) * 0.05;
    danaTendrils.forEach((tube, i) => { tube.rotation.y = Math.sin(t * 0.24 + i) * 0.02; });
    tendrils.forEach(({ tube, phase }, i) => {
      tube.rotation.y = Math.sin(t * 0.18 + phase) * 0.03;
      tube.rotation.x = Math.sin(t * 0.14 + i) * 0.02;
    });
    debris.forEach((d) => {
      d.mesh.position.y = d.baseY + Math.sin(t * d.speed + d.phase) * 0.6;
      d.mesh.rotation.y += dt * 0.035;
      d.mesh.rotation.z += dt * 0.015;
    });
    clockLight.intensity = shattered ? 130 + Math.sin(t * 8) * 30 : 82 + Math.sin(t * 1.5) * 8;
    clockGlow.material.opacity = shattered ? 0.3 : 0.12 + Math.sin(t * 1.2) * 0.04;
    redRim.intensity = 48 + Math.sin(t * 1.9) * 8;
    wren.lookAtYaw(0.06 + Math.sin(t * 0.25) * 0.08);
    ryan.lookAtYaw(-0.06 + Math.sin(t * 0.2) * 0.06);
    // slow tick jitter
    if (!shattered) {
      hands.minute.rotation.z = -THREE.MathUtils.degToRad(42) + Math.sin(t * 4.0) * 0.0025;
    }
    if (shattered) {
      hands.hour.rotation.z += dt * 0.6;
      hands.minute.rotation.z += dt * 1.4;
    }
    clockFaceLight();
  });
  function clockFaceLight() {}

  spec.shots = {
    wide: { pos: [0, 1.95, 8.8], look: [0, 4.7, -6.2], fov: 55, handheld: 0.4 },
    dana_float: { pos: [0, 1.4, 1.2], look: [1.55, 3.4, -6.1], fov: 40, handheld: 0.4 },
    villain: { pos: [0.6, 1.7, 1.6], look: [-1.3, 2.75, -3.2], fov: 36, handheld: 0.3 },
    wren: { pos: [0.2, 1.6, 2.2], look: [1.7, 1.6, -1.3], fov: 34, handheld: 0.3 },
    ryan_close: { pos: [0.2, 1.62, 0.9], look: [0.2, 1.55, 2.9], fov: 34, handheld: 0.28 },
    clock: { pos: [0, 1.9, 3.5], look: [0, 4.8, -9], fov: 48, handheld: 0.35 },
    clock_face: { pos: [0, 2.4, -2.5], look: [0, 4.8, -9], fov: 52, handheld: 0.5 },
    final_hold: { pos: [0.2, 1.3, 1.0], look: [1.45, 3.4, -6.0], fov: 46, handheld: 0.6 },
    shatter: { pos: [0, 2.6, -2.2], look: [0, 4.7, -9], fov: 58, handheld: 0.8 },
    shatter_fail: { pos: [0, 2.6, -2.2], look: [0, 4.7, -9], fov: 58, handheld: 0.8 },
    close: { pos: [0.5, 1.6, 1.4], look: [0.2, 1.5, 2.9], fov: 40, handheld: 0.3 }
  };

  spec.fog = new THREE.FogExp2(0x0a0303, 0.021);
  spec.background = new THREE.Color(0x040101);
  spec.hemi = 11.0;
  spec.hemiColor = 0x8a625c;
  spec.hemiGround = 0x241110;
  spec.exposure = 1.22;
  spec.bloom = 0.9;
  spec.bloomThreshold = 0.5;
  spec.tint = 0xffddd2;
  spec.saturation = 0.88;
  spec.contrast = 1.08;
  spec.grain = 0.08;
  spec.aberration = 1.8;
  spec.vignette = 0.72;

  spec.update = (t, dt, engine) => {
    for (const u of spec.updaters) u(t, dt, engine);
  };
  return spec;
}
