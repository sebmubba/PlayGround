import * as THREE from 'three';
import { TAU, makeCanvas, setShadowBlob } from './utils.js';

const skinMat = () => new THREE.MeshStandardMaterial({ color: 0xc7a083, roughness: 0.82 });
const cloth = (color, roughness = 0.9) => new THREE.MeshStandardMaterial({ color, roughness, metalness: 0.02 });
const glowMat = (color, opacity = 1) => new THREE.MeshBasicMaterial({ color, toneMapped: false, transparent: opacity < 1, opacity });
const darkMetal = () => new THREE.MeshStandardMaterial({ color: 0x17191c, roughness: 0.45, metalness: 0.58 });

function makeRadialSprite(color, size, opacity = 0.8) {
  const canvas = makeCanvas(128, 128);
  const ctx = canvas.getContext('2d');
  const g = ctx.createRadialGradient(64, 64, 1, 64, 64, 64);
  g.addColorStop(0, 'rgba(255,255,255,1)');
  g.addColorStop(0.18, 'rgba(255,255,255,.8)');
  g.addColorStop(0.5, 'rgba(255,255,255,.16)');
  g.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 128, 128);
  const tex = new THREE.CanvasTexture(canvas);
  const sprite = new THREE.Sprite(new THREE.SpriteMaterial({
    map: tex, color, transparent: true, opacity,
    blending: THREE.AdditiveBlending, depthWrite: false, toneMapped: false,
  }));
  sprite.scale.set(size, size, 1);
  return sprite;
}

/* ------------------------------------------------------------------ player */
export function createPlayer() {
  const group = new THREE.Group();
  const body = new THREE.Group();
  group.add(body);

  const jeans = cloth(0x1a2636, 0.92);
  const jacket = cloth(0x15161a, 0.76);
  const shirt = cloth(0x9a9182, 0.9);
  const boot = cloth(0x201812, 0.8);
  const hairMat = cloth(0x211812, 0.92);

  const hips = new THREE.Mesh(new THREE.BoxGeometry(0.54, 0.36, 0.34), jeans);
  hips.position.y = 1.03;
  body.add(hips);

  const torso = new THREE.Mesh(new THREE.BoxGeometry(0.69, 0.75, 0.39), jacket);
  torso.position.y = 1.48;
  body.add(torso);
  const tee = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.48, 0.02), shirt);
  tee.position.set(0, 1.43, 0.205);
  body.add(tee);
  // Denim vest panels.
  for (const side of [-1, 1]) {
    const panel = new THREE.Mesh(new THREE.BoxGeometry(0.19, 0.62, 0.02), cloth(0x26364b, 0.9));
    panel.position.set(side * 0.27, 1.46, 0.21);
    body.add(panel);
  }

  const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.12, 0.15, 8), skinMat());
  neck.position.y = 1.9;
  body.add(neck);
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.225, 14, 12), skinMat());
  head.scale.set(0.86, 1.06, 0.9);
  head.position.y = 2.06;
  body.add(head);

  // Face, deliberately graphic and readable from the chase camera.
  const eyeMat = new THREE.MeshBasicMaterial({ color: 0x16100e });
  for (const side of [-1, 1]) {
    const eye = new THREE.Mesh(new THREE.SphereGeometry(0.023, 6, 6), eyeMat);
    eye.position.set(side * 0.075, 2.095, 0.19);
    body.add(eye);
    const brow = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.018, 0.02), hairMat);
    brow.position.set(side * 0.075, 2.14, 0.197);
    brow.rotation.z = side * 0.14;
    body.add(brow);
  }
  const mouth = new THREE.Mesh(new THREE.BoxGeometry(0.09, 0.018, 0.02), cloth(0x5b302c));
  mouth.position.set(0, 1.985, 0.205);
  body.add(mouth);

  // Shaggy metal hair.
  const hairCap = new THREE.Mesh(new THREE.SphereGeometry(0.255, 12, 10), hairMat);
  hairCap.scale.set(1, 0.86, 1);
  hairCap.position.set(0, 2.155, -0.025);
  body.add(hairCap);
  for (let i = 0; i < 10; i++) {
    const strand = new THREE.Mesh(new THREE.ConeGeometry(0.065, 0.3 + (i % 3) * 0.06, 5), hairMat);
    const a = (i / 10) * TAU;
    strand.position.set(Math.cos(a) * 0.2, 2.02 + Math.sin(a * 3) * 0.035, Math.sin(a) * 0.18);
    strand.rotation.z = Math.cos(a) * 0.55;
    strand.rotation.x = Math.sin(a) * 0.55;
    body.add(strand);
  }

  const armPivotL = new THREE.Group();
  const armPivotR = new THREE.Group();
  armPivotL.position.set(-0.42, 1.73, 0);
  armPivotR.position.set(0.42, 1.73, 0);
  body.add(armPivotL, armPivotR);
  for (const [pivot, side] of [[armPivotL, -1], [armPivotR, 1]]) {
    const sleeve = new THREE.Mesh(new THREE.CylinderGeometry(0.085, 0.075, 0.48, 7), jacket);
    sleeve.position.y = -0.23;
    pivot.add(sleeve);
    const forearm = new THREE.Mesh(new THREE.CylinderGeometry(0.064, 0.072, 0.38, 7), jacket);
    forearm.position.y = -0.63;
    pivot.add(forearm);
    const hand = new THREE.Mesh(new THREE.SphereGeometry(0.07, 7, 6), skinMat());
    hand.position.y = -0.85;
    pivot.add(hand);
    // Black wrist bands.
    const band = new THREE.Mesh(new THREE.TorusGeometry(0.072, 0.014, 4, 10), cloth(0x09090b));
    band.rotation.x = Math.PI / 2;
    band.position.y = -0.78;
    pivot.add(band);
    pivot.userData.side = side;
  }

  const legPivotL = new THREE.Group();
  const legPivotR = new THREE.Group();
  legPivotL.position.set(-0.16, 1.03, 0);
  legPivotR.position.set(0.16, 1.03, 0);
  body.add(legPivotL, legPivotR);
  for (const pivot of [legPivotL, legPivotR]) {
    const thigh = new THREE.Mesh(new THREE.CylinderGeometry(0.115, 0.105, 0.48, 7), jeans);
    thigh.position.y = -0.25;
    pivot.add(thigh);
    const shin = new THREE.Mesh(new THREE.CylinderGeometry(0.085, 0.075, 0.44, 7), jeans);
    shin.position.y = -0.68;
    pivot.add(shin);
    const shoe = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.11, 0.34), boot);
    shoe.position.set(0, -0.94, 0.07);
    pivot.add(shoe);
    const buckle = new THREE.Mesh(new THREE.BoxGeometry(0.19, 0.05, 0.02), cloth(0x858272, 0.5));
    buckle.position.set(0, -0.92, 0.22);
    pivot.add(buckle);
  }

  // Red Warlock-style guitar strapped across his back.
  const guitar = new THREE.Group();
  const guitarBody = new THREE.Mesh(new THREE.SphereGeometry(0.34, 10, 8), new THREE.MeshStandardMaterial({ color: 0xb40d20, roughness: 0.28, metalness: 0.35 }));
  guitarBody.scale.set(0.7, 1, 0.18);
  guitar.add(guitarBody);
  const guitarNeck = new THREE.Mesh(new THREE.BoxGeometry(0.1, 1.3, 0.08), new THREE.MeshStandardMaterial({ color: 0x241713, roughness: 0.66 }));
  guitarNeck.position.y = 0.72;
  guitar.add(guitarNeck);
  const headstock = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.24, 0.09), new THREE.MeshStandardMaterial({ color: 0x1f1411 }));
  headstock.position.y = 1.44;
  guitar.add(headstock);
  guitar.position.set(0.12, 1.32, -0.28);
  guitar.rotation.z = -0.42;
  guitar.rotation.x = 0.12;
  body.add(guitar);

  // Small psionic charge light in the right hand.
  const handGlow = makeRadialSprite(0x6bf5ff, 1.4, 0.7);
  handGlow.position.set(0.47, 0.82, 0.1);
  group.add(handGlow);

  const shadow = setShadowBlob(group, 1.1, 0.42);

  group.userData = { shadow, handGlow, walkPhase: 0 };
  return {
    group,
    body,
    parts: { torso, head, hairCap, armPivotL, armPivotR, legPivotL, legPivotR, guitar, handGlow, shadow },
    attackPulse: 0,
    hitFlash: 0,
    animate(dt, speed, time, attacking = false) {
      const p = group.userData;
      p.walkPhase += dt * (1.2 + speed * 0.56);
      const moving = speed > 0.22;
      const swing = moving ? Math.sin(p.walkPhase * 2) * Math.min(0.8, 0.12 + speed * 0.07) : 0;
      legPivotL.rotation.x = swing;
      legPivotR.rotation.x = -swing;
      armPivotL.rotation.x = -swing * 0.75;
      armPivotR.rotation.x = swing * 0.55;
      torso.position.y = 1.48 + Math.abs(Math.sin(p.walkPhase * 2)) * (moving ? 0.026 : 0);
      head.position.y = 2.06 + Math.abs(Math.sin(p.walkPhase * 2)) * (moving ? 0.018 : 0);
      hairCap.position.y = 2.155 + Math.abs(Math.sin(p.walkPhase * 2)) * (moving ? 0.018 : 0);
      guitar.rotation.z = -0.42 + Math.sin(p.walkPhase * 2) * 0.035;
      if (attacking) {
        armPivotR.rotation.x = -1.75;
        armPivotR.rotation.z = -0.28;
        armPivotR.rotation.y = 0.24;
      } else {
        armPivotR.rotation.y = 0;
        armPivotR.rotation.z = 0;
      }
      handGlow.material.opacity = 0.45 + Math.sin(time * 6) * 0.12;
      handGlow.scale.setScalar(1.1 + Math.sin(time * 8) * 0.15);
      shadow.material.opacity = 0.36;
    },
  };
}

/* --------------------------------------------------------------------- car */
export function createCar({ paint = 0x17181e, stripe = 0xd1152b, lights = true, underglow = true } = {}) {
  const group = new THREE.Group();
  const paintMat = new THREE.MeshStandardMaterial({ color: paint, roughness: 0.3, metalness: 0.68 });
  const trim = new THREE.MeshStandardMaterial({ color: 0x0c0d10, roughness: 0.42, metalness: 0.6 });
  const glass = new THREE.MeshStandardMaterial({ color: 0x102430, roughness: 0.12, metalness: 0.45, transparent: true, opacity: 0.82 });
  const chrome = new THREE.MeshStandardMaterial({ color: 0xa9b0b3, roughness: 0.2, metalness: 0.92 });

  // Main hull, hood, trunk, and the long 80s cabin.
  const hull = new THREE.Mesh(new THREE.BoxGeometry(2.45, 0.56, 5.25), paintMat);
  hull.position.y = 0.57;
  group.add(hull);
  const hood = new THREE.Mesh(new THREE.BoxGeometry(2.28, 0.2, 1.7), paintMat);
  hood.position.set(0, 0.9, 1.65);
  group.add(hood);
  const trunk = new THREE.Mesh(new THREE.BoxGeometry(2.3, 0.2, 1.1), paintMat);
  trunk.position.set(0, 0.9, -1.9);
  group.add(trunk);
  const cabin = new THREE.Mesh(new THREE.BoxGeometry(2.05, 0.7, 2.25), paintMat);
  cabin.position.set(0, 1.24, -0.34);
  group.add(cabin);
  const roof = new THREE.Mesh(new THREE.BoxGeometry(2.02, 0.11, 1.95), paintMat);
  roof.position.set(0, 1.62, -0.42);
  group.add(roof);
  // Windows.
  const windshield = new THREE.Mesh(new THREE.BoxGeometry(1.78, 0.45, 0.05), glass);
  windshield.position.set(0, 1.37, 0.82);
  windshield.rotation.x = -0.42;
  group.add(windshield);
  const rearGlass = new THREE.Mesh(new THREE.BoxGeometry(1.76, 0.38, 0.05), glass);
  rearGlass.position.set(0, 1.36, -1.47);
  rearGlass.rotation.x = 0.38;
  group.add(rearGlass);
  for (const side of [-1, 1]) {
    const sideWindow = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.37, 1.55), glass);
    sideWindow.position.set(side * 1.03, 1.39, -0.4);
    group.add(sideWindow);
  }

  // Racing stripe.
  const stripeMat = new THREE.MeshBasicMaterial({ color: stripe, toneMapped: false });
  const hoodStripe = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.015, 2.2), stripeMat);
  hoodStripe.position.set(0, 1.015, 1.45);
  group.add(hoodStripe);
  const roofStripe = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.015, 1.9), stripeMat);
  roofStripe.position.set(0, 1.685, -0.42);
  group.add(roofStripe);
  const trunkStripe = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.015, 1.1), stripeMat);
  trunkStripe.position.set(0, 1.01, -1.92);
  group.add(trunkStripe);

  // Bumpers, spoiler.
  const frontBumper = new THREE.Mesh(new THREE.BoxGeometry(2.52, 0.18, 0.18), trim);
  frontBumper.position.set(0, 0.43, 2.7);
  group.add(frontBumper);
  const rearBumper = new THREE.Mesh(new THREE.BoxGeometry(2.52, 0.18, 0.16), trim);
  rearBumper.position.set(0, 0.42, -2.67);
  group.add(rearBumper);
  const spoiler = new THREE.Mesh(new THREE.BoxGeometry(2.1, 0.08, 0.42), trim);
  spoiler.position.set(0, 1.07, -2.35);
  group.add(spoiler);
  const spoilerL = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.28, 0.1), trim);
  spoilerL.position.set(-0.88, 0.94, -2.35);
  group.add(spoilerL);
  const spoilerR = spoilerL.clone();
  spoilerR.position.x = 0.88;
  group.add(spoilerR);
  const grille = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.18, 0.08), chrome);
  grille.position.set(0, 0.63, 2.72);
  group.add(grille);

  // Headlights and taillights.
  const headMat = new THREE.MeshBasicMaterial({ color: 0xfff4d2, toneMapped: false });
  const tailMat = new THREE.MeshBasicMaterial({ color: 0xff1c32, toneMapped: false });
  const headlights = [];
  for (const side of [-1, 1]) {
    const lamp = new THREE.Mesh(new THREE.BoxGeometry(0.48, 0.2, 0.06), headMat);
    lamp.position.set(side * 0.72, 0.75, 2.72);
    group.add(lamp);
    headlights.push(lamp);
    const tail = new THREE.Mesh(new THREE.BoxGeometry(0.66, 0.18, 0.06), tailMat);
    tail.position.set(side * 0.72, 0.76, -2.69);
    group.add(tail);
    const glow = makeRadialSprite(0xffd6a3, 2.1, 0.38);
    glow.position.set(side * 0.72, 0.76, 2.82);
    group.add(glow);
  }
  if (lights) {
    for (const side of [-1, 1]) {
      const beam = new THREE.SpotLight(0xffe6b6, 20, 34, 0.44, 0.65, 1.3);
      beam.position.set(side * 0.72, 0.78, 2.62);
      beam.target.position.set(side * 2.6, -0.9, 30);
      group.add(beam, beam.target);
    }
  }

  // Wheels with steerable front pivots.
  const wheelMat = new THREE.MeshStandardMaterial({ color: 0x08090a, roughness: 0.94 });
  const rimMat = new THREE.MeshStandardMaterial({ color: 0x8c9294, roughness: 0.3, metalness: 0.8 });
  const wheels = [];
  for (const [x, z, front] of [[-1.18, 1.67, true], [1.18, 1.67, true], [-1.18, -1.72, false], [1.18, -1.72, false]]) {
    const pivot = new THREE.Group();
    pivot.position.set(x, 0.48, z);
    const tyre = new THREE.Mesh(new THREE.CylinderGeometry(0.48, 0.48, 0.36, 16), wheelMat);
    tyre.rotation.z = Math.PI / 2;
    pivot.add(tyre);
    const rim = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.25, 0.38, 12), rimMat);
    rim.rotation.z = Math.PI / 2;
    pivot.add(rim);
    const hub = new THREE.Mesh(new THREE.BoxGeometry(0.39, 0.09, 0.09), chrome);
    pivot.add(hub);
    const hub2 = hub.clone();
    hub2.rotation.x = Math.PI / 2;
    pivot.add(hub2);
    group.add(pivot);
    wheels.push({ pivot, tyre, front });
  }

  if (underglow) {
    const light = new THREE.PointLight(0xff1f45, 4.5, 7.5, 2);
    light.position.y = 0.18;
    group.add(light);
    const glow = new THREE.Mesh(
      new THREE.PlaneGeometry(3.4, 6.2),
      new THREE.MeshBasicMaterial({ color: 0xff163c, transparent: true, opacity: 0.2, blending: THREE.AdditiveBlending, depthWrite: false }),
    );
    glow.rotation.x = -Math.PI / 2;
    glow.position.y = 0.06;
    group.add(glow);
  }

  const shadow = setShadowBlob(group, 2.1, 0.48);
  group.userData = { shadow, wheels };

  return {
    group,
    wheels,
    headlights,
    animate(dt, speed, steer = 0) {
      for (const wheel of wheels) {
        wheel.tyre.rotation.x += speed * dt * 1.4;
        wheel.pivot.rotation.y = wheel.front ? steer * 0.42 : 0;
      }
      shadow.material.opacity = 0.42;
    },
  };
}

/* --------------------------------------------------------------- demobat */
export function createDemobat() {
  const group = new THREE.Group();
  const skin = new THREE.MeshStandardMaterial({ color: 0x2a1a1b, roughness: 0.78, metalness: 0.04 });
  const wingMat = new THREE.MeshStandardMaterial({
    color: 0x381b1c, roughness: 0.78, side: THREE.DoubleSide,
    emissive: 0x190306, emissiveIntensity: 0.8,
  });
  const body = new THREE.Mesh(new THREE.SphereGeometry(0.38, 8, 6), skin);
  body.scale.set(0.75, 0.72, 1.45);
  group.add(body);
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.23, 8, 6), skin);
  head.position.set(0, 0.05, 0.53);
  head.scale.set(0.8, 0.7, 1.1);
  group.add(head);

  function wingGeometry() {
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute([
      0, 0, 0.18, 1.85, 0.15, 0.15, 1.35, 0.08, -0.74, 0.45, -0.05, -0.46,
    ], 3));
    g.setIndex([0, 1, 2, 0, 2, 3]);
    g.computeVertexNormals();
    return g;
  }
  const leftWing = new THREE.Group();
  const rightWing = new THREE.Group();
  const lw = new THREE.Mesh(wingGeometry(), wingMat);
  const rw = new THREE.Mesh(wingGeometry(), wingMat);
  rw.scale.x = -1;
  leftWing.add(lw);
  rightWing.add(rw);
  leftWing.position.set(0.18, 0.12, 0);
  rightWing.position.set(-0.18, 0.12, 0);
  group.add(leftWing, rightWing);

  const eyeMat = new THREE.MeshBasicMaterial({ color: 0xff4e3b, toneMapped: false });
  for (const side of [-1, 1]) {
    const eye = new THREE.Mesh(new THREE.SphereGeometry(0.045, 6, 6), eyeMat);
    eye.position.set(side * 0.09, 0.11, 0.7);
    group.add(eye);
  }
  const mouth = new THREE.Mesh(new THREE.ConeGeometry(0.14, 0.25, 6), new THREE.MeshBasicMaterial({ color: 0x65131a }));
  mouth.rotation.x = Math.PI / 2;
  mouth.position.set(0, -0.02, 0.76);
  group.add(mouth);

  const glow = makeRadialSprite(0xff3226, 1.8, 0.22);
  group.add(glow);
  group.userData = { leftWing, rightWing, baseY: 0, phase: Math.random() * TAU, glow };
  return {
    group,
    animate(dt, time, scale = 1) {
      const p = group.userData;
      const flap = Math.sin(time * 13 + p.phase) * 0.72;
      leftWing.rotation.z = flap;
      rightWing.rotation.z = -flap;
      leftWing.rotation.x = Math.sin(time * 8 + p.phase) * 0.18;
      rightWing.rotation.x = Math.sin(time * 8 + p.phase + 1) * 0.18;
      body.rotation.z = Math.sin(time * 4 + p.phase) * 0.1;
      p.glow.material.opacity = 0.16 + Math.sin(time * 7 + p.phase) * 0.06;
      group.scale.setScalar(scale);
    },
  };
}

/* ------------------------------------------------------------ demogorgon */
export function createDemogorgon() {
  const group = new THREE.Group();
  const skin = new THREE.MeshStandardMaterial({ color: 0x3b3833, roughness: 0.74, metalness: 0.03 });
  const dark = new THREE.MeshStandardMaterial({ color: 0x1a1717, roughness: 0.86 });
  const mouthMat = new THREE.MeshBasicMaterial({ color: 0x7f0c15, side: THREE.DoubleSide });

  const torso = new THREE.Mesh(new THREE.CylinderGeometry(0.44, 0.64, 2.2, 7), skin);
  torso.position.y = 2.15;
  group.add(torso);
  const hips = new THREE.Mesh(new THREE.SphereGeometry(0.62, 8, 6), skin);
  hips.scale.set(0.9, 0.6, 0.8);
  hips.position.y = 1.1;
  group.add(hips);

  const limbs = [];
  for (const side of [-1, 1]) {
    const legPivot = new THREE.Group();
    legPivot.position.set(side * 0.38, 1.08, 0);
    group.add(legPivot);
    const thigh = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.12, 1.05, 6), skin);
    thigh.position.y = -0.47;
    legPivot.add(thigh);
    const shin = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.075, 0.9, 6), skin);
    shin.position.set(0.09, -1.3, 0.04);
    shin.rotation.z = side * 0.12;
    legPivot.add(shin);
    for (let c = 0; c < 3; c++) {
      const claw = new THREE.Mesh(new THREE.ConeGeometry(0.045, 0.36, 4), dark);
      claw.position.set(side * (0.1 + c * 0.05), -1.77, 0.14 + c * 0.05);
      claw.rotation.x = -0.4;
      legPivot.add(claw);
    }
    limbs.push(legPivot);

    const armPivot = new THREE.Group();
    armPivot.position.set(side * 0.56, 2.82, 0);
    armPivot.rotation.z = side * 0.8;
    group.add(armPivot);
    const upper = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.09, 1.2, 6), skin);
    upper.position.y = -0.5;
    armPivot.add(upper);
    const fore = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.07, 1.15, 6), skin);
    fore.position.set(0, -1.35, 0.18);
    fore.rotation.x = 0.26;
    armPivot.add(fore);
    for (let c = 0; c < 4; c++) {
      const claw = new THREE.Mesh(new THREE.ConeGeometry(0.035, 0.45, 4), dark);
      claw.position.set((c - 1.5) * 0.09, -1.95, 0.34);
      claw.rotation.x = -0.2;
      armPivot.add(claw);
    }
    limbs.push(armPivot);
  }

  const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.3, 0.55, 7), skin);
  neck.position.y = 3.35;
  group.add(neck);

  // The flower head.
  const headGroup = new THREE.Group();
  headGroup.position.y = 3.72;
  group.add(headGroup);
  const skull = new THREE.Mesh(new THREE.SphereGeometry(0.34, 8, 6), skin);
  skull.scale.set(0.84, 0.85, 1.2);
  headGroup.add(skull);
  const maw = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.31, 0.55, 10, 1, true), mouthMat);
  maw.rotation.x = Math.PI / 2;
  maw.position.z = 0.38;
  headGroup.add(maw);
  const mawInner = new THREE.Mesh(new THREE.CircleGeometry(0.28, 12), new THREE.MeshBasicMaterial({ color: 0x1b0204, side: THREE.DoubleSide }));
  mawInner.position.z = 0.67;
  headGroup.add(mawInner);
  const petals = [];
  for (let i = 0; i < 7; i++) {
    const a = (i / 7) * TAU;
    const petal = new THREE.Mesh(new THREE.ConeGeometry(0.17, 1.05, 5), skin);
    petal.position.set(Math.cos(a) * 0.48, Math.sin(a) * 0.48, 0.05);
    petal.rotation.z = -a + Math.PI / 2;
    petal.rotation.x = 0.42;
    petal.scale.z = 0.52;
    headGroup.add(petal);
    petals.push(petal);
  }
  const eyeGlow = makeRadialSprite(0xff2a1d, 2.2, 0.24);
  headGroup.add(eyeGlow);
  const light = new THREE.PointLight(0xff2018, 5, 9, 2);
  light.position.set(0, 3.9, 0.4);
  group.add(light);
  const shadow = setShadowBlob(group, 1.5, 0.44);

  group.userData = { headGroup, petals, limbs, glow: eyeGlow, phase: Math.random() * TAU };
  return {
    group,
    animate(dt, time, speed = 0) {
      const p = group.userData;
      const gait = Math.sin(time * (3.6 + speed * 0.12) + p.phase);
      limbs[0].rotation.x = gait * 0.42;
      limbs[1].rotation.x = -gait * 0.42;
      limbs[2].rotation.x = -gait * 0.2;
      limbs[3].rotation.x = gait * 0.2;
      headGroup.rotation.z = Math.sin(time * 1.4 + p.phase) * 0.1;
      headGroup.rotation.x = Math.sin(time * 0.9) * 0.05;
      for (let i = 0; i < petals.length; i++) {
        petals[i].rotation.x = 0.42 + Math.sin(time * 2.1 + i * 0.9) * 0.09;
      }
      p.glow.material.opacity = 0.19 + Math.sin(time * 4.2) * 0.08;
    },
  };
}

/* ------------------------------------------------------------------- vecna */
export function createVecna() {
  const group = new THREE.Group();
  const flesh = new THREE.MeshStandardMaterial({ color: 0x5f5550, roughness: 0.75, metalness: 0.05 });
  const darkFlesh = new THREE.MeshStandardMaterial({ color: 0x342b29, roughness: 0.9 });
  const cloakMat = new THREE.MeshStandardMaterial({ color: 0x18161a, roughness: 0.92, side: THREE.DoubleSide });
  const red = new THREE.MeshBasicMaterial({ color: 0xff231a, toneMapped: false });

  const torso = new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.78, 2.7, 8), flesh);
  torso.position.y = 2.7;
  group.add(torso);
  const ribs = [];
  for (let i = 0; i < 6; i++) {
    const rib = new THREE.Mesh(new THREE.TorusGeometry(0.45 - i * 0.025, 0.035, 3, 12, Math.PI), darkFlesh);
    rib.position.set(0, 2.1 + i * 0.34, 0.25);
    rib.rotation.x = Math.PI / 2;
    rib.rotation.z = Math.PI;
    group.add(rib);
    ribs.push(rib);
  }
  const hips = new THREE.Mesh(new THREE.SphereGeometry(0.7, 9, 7), flesh);
  hips.scale.set(1, 0.58, 0.76);
  hips.position.y = 1.25;
  group.add(hips);

  const legs = [];
  for (const side of [-1, 1]) {
    const pivot = new THREE.Group();
    pivot.position.set(side * 0.35, 1.3, 0);
    group.add(pivot);
    const thigh = new THREE.Mesh(new THREE.CylinderGeometry(0.19, 0.16, 1.3, 6), flesh);
    thigh.position.y = -0.62;
    pivot.add(thigh);
    const shin = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.1, 1.25, 6), flesh);
    shin.position.set(side * 0.12, -1.75, 0.06);
    pivot.add(shin);
    const foot = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.18, 0.65), darkFlesh);
    foot.position.set(side * 0.12, -2.4, 0.24);
    pivot.add(foot);
    legs.push(pivot);
  }

  const arms = [];
  for (const side of [-1, 1]) {
    const pivot = new THREE.Group();
    pivot.position.set(side * 0.68, 3.65, 0);
    pivot.rotation.z = side * 0.7;
    group.add(pivot);
    const upper = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.12, 1.5, 6), flesh);
    upper.position.y = -0.66;
    pivot.add(upper);
    const fore = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.075, 1.55, 6), flesh);
    fore.position.set(0, -1.9, 0.15);
    fore.rotation.x = 0.22;
    pivot.add(fore);
    const hand = new THREE.Mesh(new THREE.SphereGeometry(0.19, 7, 6), flesh);
    hand.position.set(0, -2.68, 0.33);
    hand.scale.set(0.7, 0.5, 1.2);
    pivot.add(hand);
    for (let c = 0; c < 4; c++) {
      const claw = new THREE.Mesh(new THREE.ConeGeometry(0.035, 0.6, 4), darkFlesh);
      claw.position.set((c - 1.5) * 0.08, -2.9, 0.52);
      claw.rotation.x = -0.3;
      pivot.add(claw);
    }
    arms.push(pivot);
  }

  const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.19, 0.3, 0.68, 7), flesh);
  neck.position.y = 4.15;
  group.add(neck);
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.34, 10, 8), flesh);
  head.scale.set(0.82, 1.22, 0.9);
  head.position.y = 4.66;
  group.add(head);
  const jaw = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.28, 0.36), darkFlesh);
  jaw.position.set(0, 4.39, 0.25);
  group.add(jaw);
  for (const side of [-1, 1]) {
    const eye = new THREE.Mesh(new THREE.SphereGeometry(0.055, 6, 6), red);
    eye.position.set(side * 0.12, 4.7, 0.27);
    group.add(eye);
  }

  // Shredded cloak.
  for (let i = 0; i < 9; i++) {
    const a = (i / 9) * TAU;
    const strip = new THREE.Mesh(new THREE.PlaneGeometry(0.4, 2.8 + (i % 3) * 0.5), cloakMat);
    strip.position.set(Math.cos(a) * 0.72, 2.1, Math.sin(a) * 0.52 - 0.25);
    strip.rotation.y = -a + Math.PI / 2;
    strip.rotation.x = 0.1 + (i % 2) * 0.1;
    group.add(strip);
  }

  // Floating psychic shards.
  const shards = [];
  for (let i = 0; i < 8; i++) {
    const shard = new THREE.Mesh(new THREE.OctahedronGeometry(0.1, 0), new THREE.MeshBasicMaterial({ color: 0xff4434, toneMapped: false }));
    shard.userData.phase = Math.random() * TAU;
    group.add(shard);
    shards.push(shard);
  }
  const aura = makeRadialSprite(0xff1b16, 12, 0.1);
  aura.position.y = 3;
  group.add(aura);
  const light = new THREE.PointLight(0xff1b16, 14, 24, 2);
  light.position.set(0, 4.2, 0.4);
  group.add(light);
  const shadow = setShadowBlob(group, 2.2, 0.46);

  group.userData = { arms, legs, ribs, shards, aura, phase: Math.random() * TAU, shadow };
  return {
    group,
    animate(dt, time) {
      const p = group.userData;
      const pulse = Math.sin(time * 1.4 + p.phase);
      arms[0].rotation.z = 0.72 + pulse * 0.06;
      arms[1].rotation.z = -0.72 - pulse * 0.06;
      arms[1].rotation.x = -0.18 + Math.sin(time * 0.8) * 0.05;
      head.rotation.y = Math.sin(time * 0.5) * 0.08;
      for (let i = 0; i < p.ribs.length; i++) {
        p.ribs[i].position.z = 0.25 + Math.sin(time * 1.7 + i) * 0.018;
      }
      p.shards.forEach((shard, i) => {
        const t = time * 0.7 + shard.userData.phase;
        const r = 1.65 + Math.sin(t * 1.2) * 0.25;
        shard.position.set(Math.cos(t + i) * r, 2.4 + Math.sin(t * 2 + i) * 1.6, Math.sin(t + i) * r * 0.55);
        shard.rotation.x += dt * 1.2;
        shard.rotation.y += dt * 1.5;
      });
      p.aura.material.opacity = 0.07 + Math.sin(time * 2.1) * 0.025;
      legs[0].position.y = 1.3 + Math.sin(time * 0.8) * 0.03;
      legs[1].position.y = 1.3 - Math.sin(time * 0.8) * 0.03;
    },
  };
}

/* ---------------------------------------------------------- shot/flash fx */
export function createBlast(color = 0x78f6ff) {
  const group = new THREE.Group();
  const core = new THREE.Mesh(new THREE.SphereGeometry(0.22, 8, 6), new THREE.MeshBasicMaterial({ color: 0xffffff, toneMapped: false }));
  group.add(core);
  const aura = makeRadialSprite(color, 2.2, 0.9);
  group.add(aura);
  return { group, core, aura };
}

export function createShockwave(color = 0x8ff8ff) {
  const mesh = new THREE.Mesh(
    new THREE.RingGeometry(0.7, 1.0, 28),
    new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.6, side: THREE.DoubleSide, blending: THREE.AdditiveBlending, depthWrite: false }),
  );
  mesh.rotation.x = -Math.PI / 2;
  return mesh;
}

export function createPickup(kind = 'health') {
  const group = new THREE.Group();
  const isToken = kind === 'token';
  const mat = new THREE.MeshStandardMaterial({
    color: isToken ? 0xff3d51 : 0x6fffc2,
    emissive: isToken ? 0x7d0710 : 0x0b6e4a,
    emissiveIntensity: 1.2, roughness: 0.28, metalness: 0.6,
  });
  const mesh = isToken
    ? new THREE.Mesh(new THREE.CylinderGeometry(0.32, 0.32, 0.08, 16), mat)
    : new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.38, 0.55), mat);
  if (isToken) mesh.rotation.x = Math.PI / 2;
  mesh.position.y = 1;
  group.add(mesh);
  const glow = makeRadialSprite(isToken ? 0xff3556 : 0x6fffc2, 2.4, 0.4);
  glow.position.y = 1;
  group.add(glow);
  group.userData = { mesh, glow, kind, phase: Math.random() * TAU };
  return group;
}
