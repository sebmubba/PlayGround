import * as THREE from 'three';
import { std, glowTexture } from './props.js';

const SKIN = 0x604a3a;
const HAIR = 0x2a1d16;

function limb(parent, radius, length, material, x = 0, y = 0, z = 0) {
  const g = new THREE.Group();
  g.position.set(x, y, z);
  const geo = new THREE.CapsuleGeometry(radius, Math.max(0.01, length - radius * 2), 4, 8);
  const mesh = new THREE.Mesh(geo, material);
  mesh.position.y = -length / 2;
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  g.add(mesh);
  parent.add(g);
  return g;
}

export function createPerson({
  name = 'RYAN',
  height = 1.76,
  skin = SKIN,
  hair = HAIR,
  hairStyle = 'short',
  jacket = 0x2d3a44,
  shirt = 0x1c1e22,
  pants = 0x24262a,
  shoes = 0x121212,
  flashlight = false,
  pose = 'stand',
  scale = 1
} = {}) {
  const root = new THREE.Group();
  root.name = `actor-${name}`;
  root.scale.setScalar(scale * (height / 1.76));
  const body = new THREE.Group();
  root.add(body);

  const skinMat = std(skin, { roughness: 0.72 });
  const hairMat = std(hair, { roughness: 0.85 });
  const jacketMat = std(jacket, { roughness: 0.88 });
  const shirtMat = std(shirt, { roughness: 0.9 });
  const pantsMat = std(pants, { roughness: 0.94 });
  const shoeMat = std(shoes, { roughness: 0.6 });
  const dark = std(0x0a0a0b, { roughness: 0.8 });

  const hipY = 0.82;
  const legLen = 0.78;
  const thighLen = 0.39;

  const hips = new THREE.Group();
  hips.position.y = hipY;
  body.add(hips);

  // legs
  const thighL = limb(hips, 0.085, thighLen, pantsMat, -0.115, 0, 0);
  const thighR = limb(hips, 0.085, thighLen, pantsMat, 0.115, 0, 0);
  const shinL = limb(thighL, 0.066, thighLen, pantsMat, 0, -thighLen, 0);
  const shinR = limb(thighR, 0.066, thighLen, pantsMat, 0, -thighLen, 0);
  const footL = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.1, 0.26), shoeMat);
  footL.position.set(0, -legLen - 0.02, 0.055);
  footL.castShadow = true;
  shinL.add(footL);
  const footR = footL.clone();
  footR.position.x = 0;
  shinR.add(footR);

  // torso
  const torso = new THREE.Group();
  torso.position.y = hipY + 0.04;
  body.add(torso);
  const torsoMesh = new THREE.Mesh(new THREE.CapsuleGeometry(0.185, 0.42, 5, 10), jacketMat);
  torsoMesh.position.y = 0.23;
  torsoMesh.scale.set(1.2, 1, 0.72);
  torsoMesh.castShadow = true;
  torso.add(torsoMesh);
  // shirt / zipper
  const zip = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.43, 0.02), dark);
  zip.position.set(0, 0.24, 0.142);
  torso.add(zip);
  // collar
  const collar = new THREE.Mesh(new THREE.TorusGeometry(0.115, 0.02, 5, 12, Math.PI), shirtMat);
  collar.rotation.x = Math.PI / 2;
  collar.position.y = 0.47;
  torso.add(collar);
  // shoulders
  const shoulderL = new THREE.Group(); shoulderL.position.set(-0.21, 0.42, 0); torso.add(shoulderL);
  const shoulderR = new THREE.Group(); shoulderR.position.set(0.21, 0.42, 0); torso.add(shoulderR);

  const armL = limb(shoulderL, 0.06, 0.3, jacketMat, 0, 0, 0);
  const armR = limb(shoulderR, 0.06, 0.3, jacketMat, 0, 0, 0);
  const foreL = limb(armL, 0.05, 0.28, jacketMat, 0, -0.3, 0);
  const foreR = limb(armR, 0.05, 0.28, jacketMat, 0, -0.3, 0);
  const handL = new THREE.Mesh(new THREE.SphereGeometry(0.058, 8, 6), skinMat);
  handL.position.y = -0.29;
  foreL.add(handL);
  const handR = new THREE.Mesh(new THREE.SphereGeometry(0.058, 8, 6), skinMat);
  handR.position.y = -0.29;
  foreR.add(handR);

  // neck + head
  const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.052, 0.06, 0.1, 7), skinMat);
  neck.position.y = 0.51;
  torso.add(neck);
  const head = new THREE.Group();
  head.position.y = 0.61;
  torso.add(head);
  const skull = new THREE.Mesh(new THREE.SphereGeometry(0.115, 18, 16), skinMat);
  skull.scale.set(0.92, 1.08, 0.94);
  skull.castShadow = true;
  head.add(skull);
  // jaw / chin
  const jaw = new THREE.Mesh(new THREE.SphereGeometry(0.082, 12, 10), skinMat);
  jaw.position.set(0, -0.065, 0.015);
  jaw.scale.set(0.88, 0.7, 0.9);
  head.add(jaw);
  // nose
  const nose = new THREE.Mesh(new THREE.ConeGeometry(0.018, 0.05, 5), skinMat);
  nose.rotation.x = Math.PI / 2;
  nose.position.set(0, -0.01, 0.108);
  head.add(nose);
  // eyes
  const eyeMat = std(0x100c0a, { roughness: 0.3 });
  for (const s of [-1, 1]) {
    const eye = new THREE.Mesh(new THREE.SphereGeometry(0.012, 6, 6), eyeMat);
    eye.position.set(s * 0.038, 0.015, 0.099);
    head.add(eye);
    const brow = new THREE.Mesh(new THREE.BoxGeometry(0.052, 0.009, 0.012), hairMat);
    brow.position.set(s * 0.04, 0.046, 0.1);
    brow.rotation.z = s * 0.08;
    head.add(brow);
  }
  // hair
  if (hairStyle === 'long') {
    const cap = new THREE.Mesh(new THREE.SphereGeometry(0.127, 16, 14, 0, Math.PI * 2, 0, Math.PI * 0.46), hairMat);
    cap.scale.set(1.02, 1.05, 1.02);
    cap.position.set(0, 0.018, -0.014);
    head.add(cap);
    const fringe = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.03, 0.045), hairMat);
    fringe.position.set(0, 0.092, 0.098);
    fringe.rotation.x = -0.32;
    head.add(fringe);
    const back = new THREE.Mesh(new THREE.CapsuleGeometry(0.09, 0.2, 4, 8), hairMat);
    back.position.set(0, -0.1, -0.075);
    back.scale.set(1.1, 1, 0.55);
    head.add(back);
    for (const s of [-1, 1]) {
      const strand = new THREE.Mesh(new THREE.CapsuleGeometry(0.035, 0.2, 4, 6), hairMat);
      strand.position.set(s * 0.112, -0.11, -0.015);
      strand.rotation.z = s * 0.08;
      head.add(strand);
    }
  } else if (hairStyle === 'curly') {
    for (let i = 0; i < 14; i++) {
      const clump = new THREE.Mesh(new THREE.SphereGeometry(0.045 + Math.random() * 0.02, 7, 6), hairMat);
      const a = (i / 14) * Math.PI * 2;
      clump.position.set(Math.cos(a) * 0.09, 0.07 + Math.sin(i) * 0.025, Math.sin(a) * 0.07);
      head.add(clump);
    }
  } else {
    const cap = new THREE.Mesh(new THREE.SphereGeometry(0.123, 16, 12, 0, Math.PI * 2, 0, Math.PI * 0.62), hairMat);
    cap.position.y = 0.014;
    cap.scale.set(1.0, 1.05, 1.02);
    head.add(cap);
    const fringe = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.04, 0.05), hairMat);
    fringe.position.set(0, 0.088, 0.085);
    fringe.rotation.x = -0.18;
    head.add(fringe);
  }

  // flashlight
  let flashlightRig = null;
  if (flashlight) {
    flashlightRig = new THREE.Group();
    flashlightRig.position.set(0, -0.29, 0.02);
    foreR.add(flashlightRig);
    const bodyMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.03, 0.22, 8), std(0x1a1a1c, { metalness: 0.6, roughness: 0.35 }));
    bodyMesh.rotation.x = Math.PI / 2;
    bodyMesh.position.z = 0.1;
    flashlightRig.add(bodyMesh);
    const lens = new THREE.Mesh(new THREE.CircleGeometry(0.033, 10), new THREE.MeshBasicMaterial({ color: 0x8f6034 }));
    lens.position.z = 0.215;
    flashlightRig.add(lens);
    const light = new THREE.SpotLight(0xffe0b0, flashlight === true ? 15 : 11, 18, 0.44, 0.6, 1.4);
    light.position.set(0, 0, 0.2);
    light.castShadow = false;
    const target = new THREE.Object3D();
    target.position.set(0, -0.1, 4);
    flashlightRig.add(target);
    light.target = target;
    flashlightRig.add(light);
    flashlightRig.rotation.x = 0.28;
    const glow = new THREE.Sprite(new THREE.SpriteMaterial({
      map: glowTexture(), color: 0xffe8c0, transparent: true, opacity: 0.09,
      blending: THREE.AdditiveBlending, depthWrite: false
    }));
    glow.scale.setScalar(0.11);
    glow.position.z = 0.22;
    flashlightRig.add(glow);
  }

  // pose
  const base = {
    shoulderL: 0.1, shoulderR: -0.1,
    armL: 0.08, armR: -0.08,
    foreL: 0.18, foreR: 0.18,
    thighL: 0, thighR: 0,
    shinL: 0, shinR: 0,
    headX: 0, headY: 0, bodyX: 0
  };
  const applied = { ...base };
  let walkPhase = 0;
  let walking = 0;
  let float = 0;

  const setPose = (p) => {
    applied.bodyX = 0;
    applied.thighL = 0; applied.thighR = 0;
    applied.shinL = 0; applied.shinR = 0;
    applied.armL = 0.08; applied.armR = -0.08;
    applied.foreL = 0.18; applied.foreR = 0.18;
    applied.shoulderL = 0.1; applied.shoulderR = -0.1;
    applied.headX = 0; applied.headY = 0;
    hips.position.y = hipY;
    if (p === 'slump') {
      applied.bodyX = 0.06;
      applied.headX = 0.25;
      applied.shoulderL = 0.24; applied.shoulderR = -0.24;
    } else if (p === 'sit') {
      hips.position.y = hipY;
      applied.thighL = -Math.PI / 2 + 0.06; applied.thighR = -Math.PI / 2 - 0.06;
      applied.shinL = Math.PI / 2; applied.shinR = Math.PI / 2;
      applied.armL = 0.4; applied.armR = -0.4;
      applied.foreL = 0.9; applied.foreR = 0.9;
    } else if (p === 'reach') {
      applied.armR = -1.3; applied.foreR = 0.1; applied.shoulderR = -0.35;
      applied.headX = -0.12;
    } else if (p === 'hold') {
      applied.armL = 1.0; applied.armR = -1.0; applied.foreL = 0.7; applied.foreR = 0.7;
      applied.shoulderL = 0.36; applied.shoulderR = -0.36;
    } else if (p === 'cover') {
      applied.armL = 1.5; applied.armR = -1.5; applied.shoulderL = 0.5; applied.shoulderR = -0.5;
      applied.foreL = 1.6; applied.foreR = 1.6;
      applied.headX = 0.2;
    } else if (p === 'fear') {
      applied.bodyX = -0.05;
      applied.armL = 0.4; applied.armR = -0.4;
      applied.shoulderL = 0.3; applied.shoulderR = -0.3;
      applied.headX = -0.12;
    } else if (p === 'point') {
      applied.armR = -1.55; applied.foreR = 0.05;
    } else if (p === 'kneel') {
      hips.position.y = hipY - 0.36;
      applied.thighL = -1.35; applied.thighR = 0.3;
      applied.shinL = 1.5; applied.shinR = 0.2;
      applied.headX = 0.15;
    } else if (p === 'collapsed') {
      body.rotation.z = 0.04;
      hips.position.y = hipY - 0.48;
      applied.thighL = -1.1; applied.thighR = -0.7;
      applied.shinL = 1.2; applied.shinR = 1.4;
      applied.armL = 1.1; applied.armR = -0.5;
      applied.foreL = 1.4;
      applied.headX = 0.35;
    }
  };
  setPose(pose);

  const update = (t, dt = 0.016) => {
    if (walking > 0.01) {
      walkPhase += dt * 5.8 * walking;
      applied.thighL = Math.sin(walkPhase) * 0.65;
      applied.thighR = -Math.sin(walkPhase) * 0.65;
      applied.shinL = Math.max(0, -Math.sin(walkPhase)) * 0.7;
      applied.shinR = Math.max(0, Math.sin(walkPhase)) * 0.7;
      applied.armL = -Math.sin(walkPhase) * 0.5;
      applied.armR = Math.sin(walkPhase) * 0.5;
    }
    const breath = Math.sin(t * 1.4 + root.position.x * 0.7) * 0.008;
    const sway = Math.sin(t * 0.53 + root.position.z * 0.3) * 0.014;
    body.position.y = float + breath;
    body.rotation.x += (applied.bodyX - body.rotation.x) * Math.min(1, dt * 6);
    hips.rotation.x += ((applied.bodyX * 0.3) - hips.rotation.x) * Math.min(1, dt * 6);
    thighL.rotation.x += (applied.thighL - thighL.rotation.x) * Math.min(1, dt * 7);
    thighR.rotation.x += (applied.thighR - thighR.rotation.x) * Math.min(1, dt * 7);
    shinL.rotation.x += (applied.shinL - shinL.rotation.x) * Math.min(1, dt * 7);
    shinR.rotation.x += (applied.shinR - shinR.rotation.x) * Math.min(1, dt * 7);
    shoulderL.rotation.z += (applied.shoulderL - shoulderL.rotation.z) * Math.min(1, dt * 6);
    shoulderR.rotation.z += (applied.shoulderR - shoulderR.rotation.z) * Math.min(1, dt * 6);
    armL.rotation.z += (applied.armL + sway - armL.rotation.z) * Math.min(1, dt * 5);
    armR.rotation.z += (applied.armR - sway - armR.rotation.z) * Math.min(1, dt * 5);
    foreL.rotation.x += (applied.foreL - foreL.rotation.x) * Math.min(1, dt * 6);
    foreR.rotation.x += (applied.foreR - foreR.rotation.x) * Math.min(1, dt * 6);
    head.rotation.x += (applied.headX + Math.sin(t * 0.7) * 0.012 - head.rotation.x) * Math.min(1, dt * 4);
    head.rotation.y += (applied.headY + Math.sin(t * 0.33 + 1) * 0.03 - head.rotation.y) * Math.min(1, dt * 4);
  };

  const api = {
    root, body, head, torso, flashlightRig,
    setPose,
    update,
    setWalking(v) { walking = v; },
    setFloat(v) { float = v; },
    lookAtYaw(y) { applied.headY = y; },
    setPosition(x, y, z) { root.position.set(x, y, z); },
    setRotation(y) { root.rotation.y = y; }
  };
  return api;
}

export function createHollowMan() {
  const root = new THREE.Group();
  const dark = std(0x0b0808, { roughness: 0.72, metalness: 0.12 });
  const skin = std(0x2a1e1c, { roughness: 0.9 });
  const vein = new THREE.MeshStandardMaterial({ color: 0x2a0606, emissive: 0x9e0f08, emissiveIntensity: 1.4, roughness: 0.7 });
  const body = new THREE.Group();
  root.add(body);
  // long torso
  const torso = new THREE.Mesh(new THREE.CapsuleGeometry(0.21, 0.85, 6, 10), dark);
  torso.position.y = 2.1;
  torso.scale.set(0.82, 1, 0.55);
  body.add(torso);
  // ribs
  for (let i = 0; i < 4; i++) {
    const rib = new THREE.Mesh(new THREE.TorusGeometry(0.18 - i * 0.012, 0.012, 5, 12, Math.PI * 1.25), skin);
    rib.position.set(0, 2.38 - i * 0.16, 0);
    rib.rotation.set(Math.PI / 2, 0.3, 0);
    body.add(rib);
  }
  // chest cavity glow
  const cavity = new THREE.Mesh(new THREE.SphereGeometry(0.12, 10, 8), vein);
  cavity.position.set(0, 2.3, 0.09);
  cavity.scale.set(1, 1.4, 0.4);
  body.add(cavity);
  // neck
  const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.055, 0.07, 0.4, 6), skin);
  neck.position.y = 2.72;
  body.add(neck);
  // head: elongated, featureless
  const head = new THREE.Group();
  head.position.y = 3.02;
  body.add(head);
  const skull = new THREE.Mesh(new THREE.SphereGeometry(0.16, 14, 12), skin);
  skull.scale.set(0.78, 1.5, 0.78);
  head.add(skull);
  const face = new THREE.Mesh(new THREE.SphereGeometry(0.135, 12, 10), std(0x120d0c));
  face.position.set(0, 0.01, 0.045);
  face.scale.set(0.72, 1.35, 0.5);
  head.add(face);
  // sockets
  for (const s of [-1, 1]) {
    const socket = new THREE.Mesh(new THREE.SphereGeometry(0.033, 8, 6), new THREE.MeshBasicMaterial({ color: 0x030202 }));
    socket.position.set(s * 0.052, 0.05, 0.13);
    head.add(socket);
    const ember = new THREE.Sprite(new THREE.SpriteMaterial({ color: 0xff2a16, transparent: true, opacity: 0.55, blending: THREE.AdditiveBlending, depthWrite: false }));
    ember.scale.setScalar(0.06);
    ember.position.copy(socket.position).add(new THREE.Vector3(0, 0, 0.02));
    head.add(ember);
  }
  // long arms
  const arms = [];
  for (const s of [-1, 1]) {
    const shoulder = new THREE.Group();
    shoulder.position.set(s * 0.22, 2.52, 0);
    body.add(shoulder);
    const upper = new THREE.Mesh(new THREE.CapsuleGeometry(0.045, 0.7, 4, 6), skin);
    upper.position.y = -0.38;
    shoulder.add(upper);
    const elbow = new THREE.Group();
    elbow.position.y = -0.76;
    shoulder.add(elbow);
    const fore = new THREE.Mesh(new THREE.CapsuleGeometry(0.035, 0.78, 4, 6), skin);
    fore.position.y = -0.4;
    elbow.add(fore);
    const hand = new THREE.Group();
    hand.position.y = -0.82;
    elbow.add(hand);
    for (let i = 0; i < 4; i++) {
      const finger = new THREE.Mesh(new THREE.CapsuleGeometry(0.009, 0.22 - i * 0.02, 3, 4), skin);
      finger.position.set((i - 1.5) * 0.028, -0.13, 0);
      finger.rotation.z = (i - 1.5) * 0.08;
      hand.add(finger);
    }
    shoulder.rotation.z = s * 0.16;
    arms.push({ shoulder, elbow });
  }
  // hanging tendrils
  const tendrils = [];
  for (let i = 0; i < 8; i++) {
    const pts = [];
    const a = (i / 8) * Math.PI * 2;
    for (let j = 0; j < 6; j++) {
      pts.push(new THREE.Vector3(Math.cos(a) * (0.08 + j * 0.03), 1.8 - j * 0.28, Math.sin(a) * (0.06 + j * 0.02)));
    }
    const curve = new THREE.CatmullRomCurve3(pts);
    const tube = new THREE.Mesh(new THREE.TubeGeometry(curve, 18, 0.012, 4, false), dark);
    body.add(tube);
    tendrils.push(tube);
  }
  // aura
  const aura = new THREE.Sprite(new THREE.SpriteMaterial({ color: 0x8e0c06, transparent: true, opacity: 0.13, blending: THREE.AdditiveBlending, depthWrite: false }));
  aura.scale.setScalar(5.5);
  aura.position.y = 2.2;
  root.add(aura);

  let phase = 0;
  const update = (t, dt) => {
    phase += dt;
    body.position.y = Math.sin(t * 0.55) * 0.07;
    body.rotation.z = Math.sin(t * 0.31) * 0.035;
    arms.forEach(({ shoulder, elbow }, i) => {
      shoulder.rotation.x = Math.sin(t * 0.4 + i * 1.6) * 0.12 - 0.05;
      elbow.rotation.x = 0.18 + Math.sin(t * 0.52 + i) * 0.1;
    });
    head.rotation.y = Math.sin(t * 0.24) * 0.22;
    head.rotation.x = -0.06 + Math.sin(t * 0.37) * 0.04;
    tendrils.forEach((tube, i) => {
      tube.rotation.y = Math.sin(t * 0.3 + i) * 0.06;
    });
    aura.material.opacity = 0.1 + Math.sin(t * 0.8) * 0.035;
  };

  return { root, body, head, update };
}

export function addActor(sceneGroup, opts, pos = [0, 0, 0], rotY = 0) {
  const a = createPerson(opts);
  a.root.position.set(...pos);
  a.root.rotation.y = rotY;
  sceneGroup.add(a.root);
  return a;
}
