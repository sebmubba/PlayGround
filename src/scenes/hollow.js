import * as THREE from 'three';
import {
  mulberry32, std, box, cyl, cylinderBetween, canvasTexture, glowTexture,
  spriteGlow, makeSpores, makeDust, rockTexture, clockFaceTexture,
  buildHouse, buildTree, silhouetteTexture
} from '../props.js';
import { actor, hotspot, skyDome, dustFor, flickerLight } from '../scene-helpers.js';

function groundGeometry() {
  const geo = new THREE.PlaneGeometry(80, 80, 90, 90);
  const pos = geo.attributes.position;
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i), y = pos.getY(i);
    const n = Math.sin(x * 0.24) * Math.cos(y * 0.19) * 0.55
      + Math.sin(x * 0.7 + y * 0.5) * 0.18
      + Math.cos(x * 0.13 - y * 0.31) * 0.35;
    pos.setZ(i, n);
  }
  geo.computeVertexNormals();
  return geo;
}

function makeSwingSet(group) {
  const g = new THREE.Group();
  g.position.set(-4.6, 0, -3.4);
  const metal = std(0x241b18, { roughness: 0.55, metalness: 0.35 });
  // A frames
  for (const x of [-1.4, 1.4]) {
    for (const z of [-0.7, 0.7]) {
      const a = new THREE.Vector3(x, 0, z);
      const b = new THREE.Vector3(x, 3.1, 0);
      group.add(cylinderBetween(a.clone().add(g.position), b.clone().add(g.position), 0.055, 0.045, metal, 6));
    }
  }
  box(group, 2.9, 0.09, 0.09, metal, -4.6, 3.1, -3.4);
  const seat = new THREE.Group();
  seat.position.set(-4.6, 0.85, -3.4);
  box(seat, 0.55, 0.06, 0.25, std(0x3a2b1e), 0, 0, 0);
  for (const x of [-0.35, 0.35]) {
    const pts = [];
    for (let i = 0; i <= 6; i++) {
      pts.push(new THREE.Vector3(x, 3.05 - i * 0.36, -3.4 + Math.sin(i * 0.12) * 0.06));
    }
    for (let i = 0; i < pts.length - 1; i++) {
      group.add(cylinderBetween(pts[i], pts[i + 1], 0.014, 0.014, metal, 4));
    }
  }
  group.add(seat);
  // ghost child
  const ghost = new THREE.Sprite(new THREE.SpriteMaterial({
    map: silhouetteTexture(), color: 0x1a0605, transparent: true, opacity: 0.32,
    depthWrite: false, blending: THREE.NormalBlending
  }));
  ghost.scale.set(1.0, 2.0, 1);
  ghost.position.set(-4.6, 1.85, -3.4);
  group.add(ghost);
  group.add(g);
  return { seat, ghost };
}

function makeTether(group) {
  const points = [
    new THREE.Vector3(0.1, 0.3, -10.4),
    new THREE.Vector3(-0.3, 0.35, -8.2),
    new THREE.Vector3(0.6, 0.25, -6.0),
    new THREE.Vector3(-0.4, 0.3, -3.8),
    new THREE.Vector3(0.3, 0.3, -2.0),
    new THREE.Vector3(1.1, 0.45, 0.2),
    new THREE.Vector3(1.0, 0.52, 0.9)
  ];
  const curve = new THREE.CatmullRomCurve3(points);
  const mat = new THREE.MeshStandardMaterial({
    color: 0x1a0806, roughness: 0.7, emissive: 0x8a0f08, emissiveIntensity: 0.9
  });
  const tube = new THREE.Mesh(new THREE.TubeGeometry(curve, 90, 0.085, 7, false), mat);
  tube.castShadow = true;
  group.add(tube);
  const coreMat = new THREE.MeshBasicMaterial({ color: 0xff3a1e, transparent: true, opacity: 0.5, blending: THREE.AdditiveBlending, depthWrite: false });
  const core = new THREE.Mesh(new THREE.TubeGeometry(curve, 90, 0.028, 5, false), coreMat);
  group.add(core);
  // branches
  const branchMat = std(0x170605, { roughness: 0.9 });
  for (let i = 0; i < 7; i++) {
    const t = 0.1 + i * 0.12;
    const base = curve.getPoint(t);
    const pts = [base];
    for (let j = 1; j < 4; j++) {
      pts.push(base.clone().add(new THREE.Vector3((Math.random() - 0.5) * j * 0.8, Math.random() * 0.25, (Math.random() - 0.5) * j * 0.8)));
    }
    const bc = new THREE.CatmullRomCurve3(pts);
    const b = new THREE.Mesh(new THREE.TubeGeometry(bc, 12, 0.025, 4, false), branchMat);
    group.add(b);
  }
  // heart pod
  const heart = new THREE.Mesh(new THREE.SphereGeometry(0.3, 14, 12), new THREE.MeshStandardMaterial({
    color: 0x3a0806, emissive: 0xff2a12, emissiveIntensity: 1.4, roughness: 0.4
  }));
  heart.position.set(1.0, 0.55, 0.9);
  heart.scale.set(1, 1.25, 0.9);
  group.add(heart);
  const heartGlow = spriteGlow(group, 0xff3a20, 2.2, 0.25, [1.0, 0.6, 0.9]);
  const heartLight = new THREE.PointLight(0xff2a12, 6, 6, 2);
  heartLight.position.set(1.0, 0.8, 0.9);
  group.add(heartLight);
  return { tube, core, heart, heartGlow, heartLight, mat, coreMat };
}

export function buildHollow() {
  const group = new THREE.Group();
  const spec = { group, shots: {}, actors: [], hotspotData: [], updaters: [], defaultShot: 'wide' };

  const groundMat = new THREE.MeshStandardMaterial({ map: rockTexture(), color: 0x5a4a48, roughness: 0.96, metalness: 0.02 });
  const ground = new THREE.Mesh(groundGeometry(), groundMat);
  ground.rotation.x = -Math.PI / 2;
  ground.position.y = -0.25;
  ground.receiveShadow = true;
  group.add(ground);

  // red cracks in the earth
  const rnd = mulberry32(919);
  const crackVerts = [];
  for (let i = 0; i < 26; i++) {
    let x = (rnd() - 0.5) * 46;
    let z = -8 + rnd() * 24;
    for (let j = 0; j < 7; j++) {
      const a = new THREE.Vector3(x, 0.03, z);
      x += (rnd() - 0.5) * 1.7;
      z += (rnd() - 0.5) * 1.7;
      const b = new THREE.Vector3(x, 0.03, z);
      crackVerts.push(a, b);
    }
  }
  const crackGeo = new THREE.BufferGeometry().setFromPoints(crackVerts);
  const cracks = new THREE.LineSegments(crackGeo, new THREE.LineBasicMaterial({
    color: 0xff3a1e, transparent: true, opacity: 0.3, blending: THREE.AdditiveBlending
  }));
  group.add(cracks);

  // house
  const house = buildHouse({ hollow: true });
  house.group.position.set(0, 0, -14);
  house.group.scale.setScalar(1.2);
  group.add(house.group);

  // giant clock over the door
  const clockDoor = new THREE.Group();
  clockDoor.position.set(0, 4.2, -10.7);
  const clockFace = new THREE.Mesh(new THREE.CircleGeometry(1.55, 48), new THREE.MeshStandardMaterial({
    map: clockFaceTexture(true), color: 0x9a4a40, emissive: 0x6a0b06, emissiveIntensity: 0.9, roughness: 0.7
  }));
  clockDoor.add(clockFace);
  const ring = new THREE.Mesh(new THREE.TorusGeometry(1.6, 0.06, 8, 50), new THREE.MeshStandardMaterial({ color: 0x240605, emissive: 0xff2a12, emissiveIntensity: 1.1, roughness: 0.6 }));
  clockDoor.add(ring);
  const hourHand = new THREE.Mesh(new THREE.BoxGeometry(0.1, 1.3, 0.06), std(0x1a0604));
  hourHand.position.set(0, 0.65, 0.04); hourHand.rotation.z = -1.63;
  clockDoor.add(hourHand);
  const minHand = new THREE.Mesh(new THREE.BoxGeometry(0.07, 1.75, 0.06), std(0x1a0604));
  minHand.position.set(0, 0.88, 0.05); minHand.rotation.z = -0.73;
  clockDoor.add(minHand);
  group.add(clockDoor);
  hotspot(group, spec, 'clock_door', new THREE.Vector3(0, 4.2, -10.35), 1.5);
  const doorGlow = spriteGlow(group, 0xff2a12, 8, 0.22, [0, 4.2, -10.6]);
  const doorLight = new THREE.PointLight(0xff2a12, 46, 26, 2);
  doorLight.position.set(0, 4.2, -9.4);
  group.add(doorLight);

  // tether
  const tether = makeTether(group);
  hotspot(group, spec, 'red_tether', new THREE.Vector3(1.0, 0.7, 0.6), 1.05);

  // swing set
  const swing = makeSwingSet(group);
  hotspot(group, spec, 'swing_set', new THREE.Vector3(-4.6, 1.55, -3.4), 1.05);

  // dead tree
  const deadTree = buildTree(441, 10, 0x070505);
  deadTree.position.set(5.6, 0, -3.2);
  group.add(deadTree);
  for (let i = 0; i < 9; i++) {
    const pod = new THREE.Mesh(new THREE.SphereGeometry(0.16 + rnd() * 0.12, 8, 6), new THREE.MeshStandardMaterial({ color: 0x1a0705, emissive: 0xa00f06, emissiveIntensity: 0.5, roughness: 0.6 }));
    pod.position.set(5.6 + (rnd() - 0.5) * 3.5, 3 + rnd() * 5, -3.2 + (rnd() - 0.5) * 3.5);
    group.add(pod);
  }
  hotspot(group, spec, 'dead_tree', new THREE.Vector3(5.6, 2.0, -3.2), 1.0);

  // vines across ground and house
  const vineMat = std(0x140605, { roughness: 0.95 });
  for (let i = 0; i < 24; i++) {
    const pts = [];
    let x = (rnd() - 0.5) * 26;
    let z = -9 + rnd() * 18;
    for (let j = 0; j < 7; j++) {
      pts.push(new THREE.Vector3(x, 0.05 + Math.sin(j * 1.3 + i) * 0.12, z));
      x += (rnd() - 0.5) * 2.2;
      z += (rnd() - 0.5) * 2.2;
    }
    const curve = new THREE.CatmullRomCurve3(pts);
    const tube = new THREE.Mesh(new THREE.TubeGeometry(curve, 22, 0.03 + rnd() * 0.05, 5, false), vineMat);
    group.add(tube);
    if (i % 3 === 0) {
      const tip = spriteGlow(group, 0xff2a12, 0.5, 0.2, pts[pts.length - 1].toArray());
    }
  }
  // hanging vines from house
  for (let i = 0; i < 18; i++) {
    const pts = [];
    let x = (rnd() - 0.5) * 20;
    let y = 10 + rnd() * 2;
    let z = -11.5 + rnd() * 1.2;
    for (let j = 0; j < 6; j++) {
      pts.push(new THREE.Vector3(x + (rnd() - 0.5) * 0.5, y, z));
      y -= 0.8 + rnd() * 1.0;
      x += (rnd() - 0.5) * 0.5;
    }
    const curve = new THREE.CatmullRomCurve3(pts);
    const tube = new THREE.Mesh(new THREE.TubeGeometry(curve, 18, 0.02 + rnd() * 0.03, 4, false), vineMat);
    group.add(tube);
  }

  // floating debris
  const debris = [];
  const debrisMats = [std(0x1a1211), std(0x241817), std(0x100a09)];
  for (let i = 0; i < 26; i++) {
    const kind = i % 4;
    let mesh;
    if (kind === 0) mesh = new THREE.Mesh(new THREE.DodecahedronGeometry(0.15 + rnd() * 0.4, 0), debrisMats[0]);
    else if (kind === 1) mesh = new THREE.Mesh(new THREE.BoxGeometry(0.4 + rnd() * 0.6, 0.05, 0.3 + rnd() * 0.4), debrisMats[1]);
    else if (kind === 2) mesh = new THREE.Mesh(new THREE.CircleGeometry(0.15 + rnd() * 0.25, 3), debrisMats[2]);
    else mesh = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.03, 0.3), std(0x3a3228));
    mesh.position.set((rnd() - 0.5) * 22, 1.5 + rnd() * 9, -14 + rnd() * 15);
    mesh.rotation.set(rnd() * 6, rnd() * 6, rnd() * 6);
    group.add(mesh);
    debris.push({ mesh, baseY: mesh.position.y, phase: rnd() * 6, speed: 0.1 + rnd() * 0.2 });
  }

  // distant dead trees
  for (let i = 0; i < 9; i++) {
    const t = buildTree(500 + i, 7 + rnd() * 5, 0x050404);
    t.position.set(-22 + rnd() * 44, 0, -16 + rnd() * 8);
    group.add(t);
  }

  // lighting
  const cold = new THREE.DirectionalLight(0x6e8fae, 1.05);
  cold.position.set(-14, 18, 16);
  cold.castShadow = true;
  cold.shadow.mapSize.set(1024, 1024);
  cold.shadow.camera.left = -26; cold.shadow.camera.right = 26;
  cold.shadow.camera.top = 24; cold.shadow.camera.bottom = -14;
  cold.shadow.camera.far = 60;
  group.add(cold);
  const rim = new THREE.PointLight(0xff3a18, 30, 40, 2);
  rim.position.set(-3, 8, -6);
  group.add(rim);

  // actors
  const ryan = actor(group, spec, 'RYAN', {
    height: 1.78, jacket: 0x2d3d47, shirt: 0x1a1c1e, pants: 0x262a2e, hair: 0x241811, flashlight: true
  }, [0, 0, 2.2], Math.PI, 'stand');
  const wren = actor(group, spec, 'WREN', {
    height: 1.62, jacket: 0x2b2b3d, shirt: 0x17171f, pants: 0x23232b, hair: 0x120e0c, hairStyle: 'long',
    skin: 0x604a3a
  }, [2.4, 0, -3.6], 0.4, 'stand');
  const sam = actor(group, spec, 'SAM', {
    height: 1.7, jacket: 0x4a3a28, shirt: 0x1c1814, pants: 0x26282b, hair: 0x1b130e, hairStyle: 'curly', flashlight: true
  }, [3.8, 0, -2.2], 0.5, 'stand');
  const aura = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTexture(), color: 0x6f8fbe, transparent: true, opacity: 0.1, blending: THREE.AdditiveBlending, depthWrite: false }));
  aura.scale.setScalar(1.4);
  aura.position.set(0, 1.2, 0);
  wren.root.add(aura);

  spec.actions = {
    showSam(on) {
      sam.root.visible = !!on;
      if (sam.shadowDisc) sam.shadowDisc.visible = !!on;
    },
    burnTether() {
      tether.mat.emissiveIntensity = 0.15;
      tether.coreMat.opacity = 0.05;
      tether.heart.material.emissiveIntensity = 0.1;
      tether.heartGlow.material.opacity = 0.02;
      tether.heartLight.intensity = 0;
    }
  };

  // spores + dust
  const spores = makeSpores(600, [42, 18, 42], 23);
  group.add(spores);
  dustFor(group, spec, { count: 120, area: [30, 12, 30], color: 0xff6a4a, size: 0.05 });
  spec.updaters.push((t) => { spores.material.uniforms.uTime.value = t; });

  const sky = skyDome(0x120202, 0x3a0806, 150, 0x6e160c, { cloud: 0.9, cloudColor: 0x220404 });
  group.add(sky);
  spec.updaters.push((t) => { sky.material.uniforms.uTime.value = t; });

  // red lightning
  let nextBolt = 2.2;
  spec.updaters.push((t, dt, engine) => {
    if (t > nextBolt) {
      engine?.flash?.(1.7, 0xff2a12, 0.36);
      engine?.onLightning?.();
      nextBolt = t + 5 + Math.random() * 5;
    }
    tether.mat.emissiveIntensity = 0.65 + Math.sin(t * 1.7) * 0.35;
    tether.coreMat.opacity = 0.35 + Math.sin(t * 1.7 + 1) * 0.18;
    tether.heart.scale.setScalar(1 + Math.sin(t * 1.7) * 0.08);
    tether.heartGlow.material.opacity = 0.18 + Math.sin(t * 1.7) * 0.1;
    tether.heartLight.intensity = 5 + Math.sin(t * 1.7) * 2.5;
    doorGlow.material.opacity = 0.16 + Math.sin(t * 1.1) * 0.06;
    doorLight.intensity = 42 + Math.sin(t * 2.1) * 9;
    swing.seat.rotation.x = Math.sin(t * 0.8) * 0.11;
    swing.ghost.position.x = -4.6 + Math.sin(t * 0.8) * 0.18;
    swing.ghost.material.opacity = 0.2 + Math.sin(t * 0.6) * 0.08;
    debris.forEach((d) => {
      d.mesh.position.y = d.baseY + Math.sin(t * d.speed + d.phase) * 0.5;
      d.mesh.rotation.y += dt * 0.04;
      d.mesh.rotation.x += dt * 0.02;
    });
    cracks.material.opacity = 0.2 + Math.sin(t * 0.9) * 0.12;
    wren.lookAtYaw(0.1 + Math.sin(t * 0.24) * 0.15);
    sam.lookAtYaw(0.2 + Math.sin(t * 0.3 + 1) * 0.15);
    ryan.lookAtYaw(Math.sin(t * 0.2) * 0.1);
  });

  spec.shots = {
    wide: { pos: [0, 1.9, 13], look: [0, 3.6, -10], fov: 55, handheld: 0.45 },
    sky: { pos: [0, 1.5, 8], look: [0, 14, -8], fov: 60, handheld: 0.3 },
    house: { pos: [0, 1.8, 4.0], look: [0, 3.2, -10.5], fov: 44, handheld: 0.4 },
    explore: { pos: [0, 1.85, 12.2], look: [0, 2.15, -10.2], fov: 55, handheld: 0.3 },
    vine: { pos: [2.9, 1.15, 3.0], look: [0.6, 0.35, 0.4], fov: 43, handheld: 0.55 },
    tether: { pos: [2.5, 1.65, 3.3], look: [1.0, 0.75, 0.5], fov: 36, handheld: 0.35 },
    tether_fire: { pos: [1.8, 1.2, 2.4], look: [0.9, 0.45, 0.45], fov: 41, handheld: 0.5 },
    house_open: { pos: [0, 1.8, 5.5], look: [0, 3.3, -10.2], fov: 53, handheld: 0.5 },
    house_clock: { pos: [0, 1.7, 2.0], look: [0, 5.2, -10.5], fov: 49, handheld: 0.4 },
    door_dark: { pos: [0, 1.72, -6.2], look: [0, 2.6, -10.4], fov: 42, handheld: 0.45 },
    wren: { pos: [0.2, 1.62, -0.8], look: [2.4, 1.55, -3.6], fov: 35, handheld: 0.3 },
    wren_bleed: { pos: [1.2, 1.65, -1.6], look: [2.4, 1.6, -3.6], fov: 33, handheld: 0.25 },
    wren_hold: { pos: [1.7, 1.5, -1.3], look: [2.4, 1.4, -3.6], fov: 35, handheld: 0.3 },
    sam: { pos: [1.6, 1.6, -0.6], look: [3.8, 1.55, -2.2], fov: 34, handheld: 0.3 },
    sam_help: { pos: [0.8, 1.4, 0.8], look: [2.8, 0.9, -1.5], fov: 44, handheld: 0.5 },
    walkie: { pos: [0.2, 1.66, 0.7], look: [0, 1.55, 2.2], fov: 35, handheld: 0.3 },
    close: { pos: [0.8, 1.55, 0.2], look: [0.0, 1.5, 2.2], fov: 38, handheld: 0.3 }
  };

  spec.fog = new THREE.FogExp2(0x220504, 0.018);
  spec.background = new THREE.Color(0x0d0202);
  spec.hemi = 7.0;
  spec.hemiColor = 0x9a5b50;
  spec.hemiGround = 0x2c1310;
  spec.exposure = 1.1;
  spec.bloom = 0.85;
  spec.bloomThreshold = 0.5;
  spec.tint = 0xffd9cf;
  spec.saturation = 0.9;
  spec.contrast = 1.07;
  spec.grain = 0.075;
  spec.aberration = 1.6;

  spec.update = (t, dt, engine) => {
    for (const u of spec.updaters) u(t, dt, engine);
  };
  return spec;
}
