import * as THREE from 'three';
import {
  mulberry32, std, box, cyl, cylinderBetween, canvasTexture, glowTexture,
  spriteGlow, makeLightShaft, woodFloorTexture, wallpaperTexture,
  clockFaceTexture, photoTexture, carpetTexture
} from '../props.js';
import { actor, hotspot, skyDome, dustFor, clockHands, lightningCycle, flickerLight } from '../scene-helpers.js';

function scratchedWallTexture() {
  return canvasTexture(320, 400, (ctx, w, h) => {
    const grd = ctx.createLinearGradient(0, 0, 0, h);
    grd.addColorStop(0, '#4a4130'); grd.addColorStop(1, '#2c271d');
    ctx.fillStyle = grd; ctx.fillRect(0, 0, w, h);
    ctx.strokeStyle = 'rgba(160,140,98,0.16)';
    ctx.lineWidth = 2;
    for (let y = 16; y < h; y += 64) {
      for (let x = 16; x < w; x += 64) {
        ctx.beginPath(); ctx.ellipse(x, y, 18, 30, 0.4, 0, Math.PI * 2); ctx.stroke();
      }
    }
    // torn patch
    ctx.fillStyle = '#100d0a';
    ctx.beginPath();
    ctx.moveTo(40, 20); ctx.lineTo(190, 12); ctx.lineTo(210, 90);
    ctx.lineTo(178, 150); ctx.lineTo(200, 210); ctx.lineTo(150, 250);
    ctx.lineTo(90, 230); ctx.lineTo(54, 160); ctx.lineTo(72, 96); ctx.closePath();
    ctx.fill();
    // tally marks and a clock
    ctx.strokeStyle = 'rgba(210,200,180,0.72)';
    ctx.lineWidth = 3;
    for (let g = 0; g < 5; g++) {
      for (let i = 0; i < 4; i++) {
        ctx.beginPath();
        ctx.moveTo(60 + i * 9, 50 + g * 25);
        ctx.lineTo(60 + i * 9, 70 + g * 25);
        ctx.stroke();
      }
      ctx.beginPath(); ctx.moveTo(52, 68 + g * 25); ctx.lineTo(96, 50 + g * 25); ctx.stroke();
    }
    ctx.beginPath(); ctx.arc(150, 190, 30, 0, Math.PI * 2); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(150, 190); ctx.lineTo(150, 172); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(150, 190); ctx.lineTo(162, 198); ctx.stroke();
    // red handprint
    ctx.fillStyle = 'rgba(110,18,14,0.55)';
    for (let i = 0; i < 4; i++) {
      ctx.beginPath(); ctx.ellipse(60 + i * 16, 300, 6, 22, i * 0.16 - 0.2, 0, Math.PI * 2); ctx.fill();
    }
    ctx.beginPath(); ctx.ellipse(104, 330, 34, 26, 0, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = 'rgba(0,0,0,0.32)';
    ctx.fillRect(0, h - 60, w, 60);
  }, { repeat: [1, 1] });
}

export function buildFoyer() {
  const group = new THREE.Group();
  const spec = { group, shots: {}, actors: [], hotspotData: [], updaters: [], defaultShot: 'wide' };

  // ── shell ──────────────────────────────────────────────────────
  const floorMat = new THREE.MeshStandardMaterial({ map: woodFloorTexture(), color: 0x8a7c6a, roughness: 0.72, metalness: 0.04 });
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(14, 10), floorMat);
  floor.rotation.x = -Math.PI / 2;
  floor.receiveShadow = true;
  group.add(floor);
  box(group, 14, 0.2, 10, std(0x0b0907), 0, 6.45, 0); // ceiling
  box(group, 14, 6.5, 0.24, new THREE.MeshStandardMaterial({ map: wallpaperTexture(), color: 0x8b846e, roughness: 0.95 }), 0, 3.25, -5);
  box(group, 14, 6.5, 0.24, new THREE.MeshStandardMaterial({ map: wallpaperTexture(), color: 0x6f6957, roughness: 0.95 }), 0, 3.25, 5);
  box(group, 0.24, 6.5, 10, new THREE.MeshStandardMaterial({ map: wallpaperTexture(), color: 0x77705d, roughness: 0.95 }), -7, 3.25, 0);
  box(group, 0.24, 6.5, 10, new THREE.MeshStandardMaterial({ map: wallpaperTexture(), color: 0x6d6655, roughness: 0.95 }), 7, 3.25, 0);

  // wainscoting
  const wain = std(0x2a2119, { roughness: 0.85 });
  for (const [x, z, w, d] of [[0, -4.86, 13.8, 0.1], [0, 4.86, 13.8, 0.1], [-6.86, 0, 0.1, 9.8], [6.86, 0, 0.1, 9.8]]) {
    box(group, w, 1.25, d, wain, x, 0.625, z);
    box(group, w, 0.09, d, std(0x3a2d20), x, 1.28, z);
  }
  // skirting
  box(group, 13.8, 0.16, 0.12, std(0x18130f), 0, 0.08, -4.86);
  box(group, 13.8, 0.16, 0.12, std(0x18130f), 0, 0.08, 4.86);

  // rug
  const rug = new THREE.Mesh(new THREE.PlaneGeometry(5.4, 4.2), new THREE.MeshStandardMaterial({ map: carpetTexture(), color: 0x7a5c58, roughness: 1 }));
  rug.rotation.x = -Math.PI / 2;
  rug.position.set(0, 0.012, -1.5);
  group.add(rug);

  // ── staircase ──────────────────────────────────────────────────
  const stairMat = std(0x2e2319, { roughness: 0.78 });
  const stepCount = 12;
  const stepRise = 0.29;
  const stepDepth = 0.35;
  for (let i = 0; i < stepCount; i++) {
    const h = (i + 1) * stepRise;
    box(group, 2.6, h, stepDepth, stairMat, 5.1, h / 2, 3.0 - i * stepDepth);
  }
  box(group, 2.6, 0.22, 2.2, stairMat, 5.1, stepCount * stepRise + 0.11, -1.75);
  // landing wall / hallway
  box(group, 3.2, 3.2, 0.2, std(0x0c0907), 5.1, 5.0, -3.1);
  box(group, 2.2, 2.4, 0.3, new THREE.MeshStandardMaterial({ color: 0x050505, roughness: 1 }), 5.2, 4.8, -2.92);
  // balustrade
  const railMat = std(0x241a12, { roughness: 0.6 });
  const posts = 8;
  for (let i = 0; i < posts; i++) {
    const z = 2.85 - i * 0.5;
    const y = 0.3 + (i * 0.5 / stepDepth) * stepRise * 0.55;
    const h = 1.0;
    cyl(group, 0.025, 0.035, h, railMat, 3.8, y + h / 2, z, 6);
    const cap = new THREE.Mesh(new THREE.SphereGeometry(0.05, 8, 6), railMat);
    cap.position.set(3.8, y + h - 0.02, z);
    group.add(cap);
  }
  const railA = new THREE.Vector3(3.8, 1.35, 3.0);
  const railB = new THREE.Vector3(3.8, 4.08, -1.05);
  group.add(cylinderBetween(railA, railB, 0.04, 0.04, railMat, 8));
  cyl(group, 0.07, 0.09, 1.25, railMat, 3.8, 0.62, 3.15, 8);

  // ── grandfather clock ─────────────────────────────────────────
  const clock = new THREE.Group();
  clock.position.set(-3.4, 0, -4.45);
  const caseMat = std(0x38251a, { roughness: 0.62, metalness: 0.04 });
  const caseDark = std(0x1e130c, { roughness: 0.72 });
  box(clock, 1.5, 3.3, 0.72, caseMat, 0, 1.65, 0);
  box(clock, 1.72, 0.22, 0.85, caseDark, 0, 3.38, 0);
  box(clock, 1.62, 0.42, 0.8, caseDark, 0, 3.05, 0.02);
  box(clock, 1.58, 0.22, 0.78, caseDark, 0, 0.13, 0.02);
  // finials
  for (const x of [-0.65, 0.65]) {
    cyl(clock, 0.03, 0.06, 0.25, caseDark, x, 3.55, 0, 6);
    const ball = new THREE.Mesh(new THREE.SphereGeometry(0.07, 8, 6), caseDark);
    ball.position.set(x, 3.7, 0);
    clock.add(ball);
  }
  // face
  const faceMat = new THREE.MeshStandardMaterial({
    map: clockFaceTexture(false), color: 0xcbbd9e,
    emissive: 0x4a3418, emissiveIntensity: 0.32, roughness: 0.5, metalness: 0.05
  });
  const face = new THREE.Mesh(new THREE.CircleGeometry(0.62, 48), faceMat);
  face.position.set(0, 2.88, 0.375);
  clock.add(face);
  const rim = new THREE.Mesh(new THREE.TorusGeometry(0.63, 0.035, 8, 40), std(0x6d5228, { metalness: 0.6, roughness: 0.35 }));
  rim.position.set(0, 2.88, 0.39);
  clock.add(rim);
  const faceGlass = new THREE.Mesh(new THREE.CircleGeometry(0.6, 40), new THREE.MeshStandardMaterial({ color: 0xffffff, transparent: true, opacity: 0.05, roughness: 0.05, metalness: 0.4 }));
  faceGlass.position.set(0, 2.88, 0.4);
  clock.add(faceGlass);
  const hands = clockHands(clock, { x: 0, y: 2.88, z: 0.42, hourAngle: 93.5, minuteAngle: 42, scale: 0.82 });
  // pendulum
  const pend = new THREE.Group();
  pend.position.set(0, 2.2, 0.22);
  clock.add(pend);
  const rod = cyl(pend, 0.012, 0.012, 1.15, std(0x9a7a34, { metalness: 0.8, roughness: 0.3 }), 0, -0.575, 0, 5);
  const disc = new THREE.Mesh(new THREE.CylinderGeometry(0.17, 0.17, 0.03, 20), std(0xa88436, { metalness: 0.85, roughness: 0.25 }));
  disc.rotation.x = Math.PI / 2;
  disc.position.y = -1.18;
  pend.add(disc);
  box(clock, 1.16, 1.55, 0.04, new THREE.MeshStandardMaterial({ color: 0x2a2016, transparent: true, opacity: 0.6, roughness: 0.2 }), 0, 1.35, 0.37);
  // clock case carvings
  for (const y of [0.55, 1.35, 2.15]) {
    box(clock, 1.3, 0.04, 0.02, caseDark, 0, y, 0.38);
  }
  group.add(clock);
  hotspot(group, spec, 'clock_face', new THREE.Vector3(-3.4, 2.9, -3.85), 0.85);
  const clockLight = new THREE.PointLight(0xffcf8a, 3.2, 3.5, 2);
  clockLight.position.set(-3.4, 2.9, -3.4);
  group.add(clockLight);
  spec.updaters.push((t) => {
    pend.rotation.x = Math.sin(t * 1.15) * 0.115;
    hands.minute.rotation.z = -THREE.MathUtils.degToRad(42) + Math.sin(t * 0.27) * 0.006;
  });

  // ── photo wall ────────────────────────────────────────────────
  const photoGroup = new THREE.Group();
  photoGroup.position.set(0.35, 2.5, -4.86);
  const frameMat = std(0x3a2a1b, { roughness: 0.55 });
  box(photoGroup, 1.55, 1.9, 0.09, frameMat, 0, 0, 0);
  const photo = new THREE.Mesh(new THREE.PlaneGeometry(1.3, 1.65), new THREE.MeshStandardMaterial({ map: photoTexture(), color: 0xb8ab8e, roughness: 0.85, emissive: 0x1a130a, emissiveIntensity: 0.2 }));
  photo.position.z = 0.055;
  photoGroup.add(photo);
  box(photoGroup, 1.64, 0.07, 0.14, std(0x241a10), 0, 0.98, 0.02);
  group.add(photoGroup);
  hotspot(group, spec, 'creel_photo', new THREE.Vector3(0.35, 2.5, -4.55), 0.9);

  // side portraits
  for (const [x, y] of [[-1.8, 2.5], [1.9, 2.6], [-5.6, 2.7]]) {
    const p = new THREE.Group();
    p.position.set(x, y, -4.84);
    const f = std(0x241a12, { roughness: 0.7 });
    box(p, 0.62, 0.78, 0.06, f, 0, 0, 0);
    const img = new THREE.Mesh(new THREE.PlaneGeometry(0.5, 0.64), new THREE.MeshStandardMaterial({ map: photoTexture(), color: 0x8a806a, roughness: 0.9 }));
    img.position.z = 0.04;
    p.add(img);
    group.add(p);
  }

  // wall scratches
  const scratch = new THREE.Mesh(new THREE.PlaneGeometry(1.45, 1.8), new THREE.MeshStandardMaterial({ map: scratchedWallTexture(), roughness: 0.95, transparent: true }));
  scratch.position.set(3.25, 2.15, -4.87);
  group.add(scratch);
  hotspot(group, spec, 'wall_scratches', new THREE.Vector3(3.25, 2.15, -4.55), 0.85);

  // ── candles ───────────────────────────────────────────────────
  const candleTable = new THREE.Group();
  candleTable.position.set(2.55, 0, -1.5);
  box(candleTable, 0.95, 0.72, 0.7, std(0x271d15, { roughness: 0.8 }), 0, 0.36, 0);
  box(candleTable, 1.05, 0.06, 0.8, std(0x35261a), 0, 0.73, 0);
  const flames = [];
  const rnd2 = mulberry32(12);
  for (let i = 0; i < 5; i++) {
    const h = 0.18 + rnd2() * 0.25;
    const x = (rnd2() - 0.5) * 0.6;
    const z = (rnd2() - 0.5) * 0.35;
    cyl(candleTable, 0.045, 0.055, h, std(0xbca682, { roughness: 0.85 }), x, 0.76 + h / 2, z, 8);
    const f = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTexture(), color: 0xffa646, transparent: true, opacity: 0.85, blending: THREE.AdditiveBlending, depthWrite: false }));
    f.scale.setScalar(0.11);
    f.position.set(x, 0.78 + h, z);
    candleTable.add(f);
    flames.push({ sprite: f, phase: rnd2() * 6 });
  }
  group.add(candleTable);
  const candleLight = new THREE.PointLight(0xff9c4a, 7, 6, 2);
  candleLight.position.set(2.55, 1.3, -1.5);
  group.add(candleLight);
  hotspot(group, spec, 'candles', new THREE.Vector3(2.55, 1.15, -1.5), 0.72);
  spec.updaters.push((t) => {
    flames.forEach((f, i) => {
      f.sprite.scale.setScalar(0.09 + Math.sin(t * 9 + f.phase) * 0.018 + Math.sin(t * 23 + i) * 0.008);
      f.sprite.position.x += Math.sin(t * 5 + i) * 0.0006;
    });
    candleLight.intensity = 6.5 + Math.sin(t * 7.3) * 0.9 + Math.sin(t * 17.1) * 0.4;
  });

  // ── covered furniture ────────────────────────────────────────
  const sheet = std(0x9d9787, { roughness: 1 });
  const sofa = new THREE.Group();
  sofa.position.set(-1.7, 0, -1.6);
  sofa.rotation.y = 0.08;
  box(sofa, 2.5, 0.42, 1.0, std(0x2a241c), 0, 0.28, 0);
  box(sofa, 2.5, 0.75, 0.28, std(0x262018), 0, 0.75, -0.45);
  box(sofa, 0.28, 0.55, 1.0, std(0x262018), -1.28, 0.55, 0);
  box(sofa, 0.28, 0.55, 1.0, std(0x262018), 1.28, 0.55, 0);
  box(sofa, 2.6, 0.1, 1.08, sheet, 0, 0.53, 0.03);
  box(sofa, 2.6, 0.82, 0.06, sheet, 0, 0.9, -0.6, [0.06, 0, 0]);
  const drape = box(sofa, 2.52, 0.75, 0.08, sheet, 0, 0.35, 0.55, [0.1, 0, 0]);
  for (let i = 0; i < 5; i++) {
    const fold = box(sofa, 0.2, 0.5, 0.1, sheet, -1.0 + i * 0.5, 0.28, 0.58, [0.06, 0, (i % 2 ? 0.08 : -0.08)]);
  }
  group.add(sofa);

  // armchair silhouette near stairs
  const chair = new THREE.Group();
  chair.position.set(5.8, 0, 1.6);
  chair.rotation.y = -0.5;
  box(chair, 0.9, 0.45, 0.9, std(0x241d16), 0, 0.3, 0);
  box(chair, 0.9, 0.9, 0.18, std(0x241d16), 0, 0.7, -0.4);
  box(chair, 0.8, 0.08, 0.85, sheet, 0, 0.55, 0.02);
  group.add(chair);

  // ── fireplace ────────────────────────────────────────────────
  const fire = new THREE.Group();
  fire.position.set(-6.7, 0, 0.5);
  box(fire, 0.5, 2.0, 3.0, std(0x2c251d, { roughness: 0.9 }), 0, 1.0, 0);
  box(fire, 0.32, 1.2, 1.9, std(0x060504), 0.14, 0.6, 0);
  box(fire, 0.7, 0.14, 3.2, std(0x3c3126), 0, 2.04, 0);
  // embers
  const embers = [];
  for (let i = 0; i < 3; i++) {
    const e = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTexture(), color: 0xff5a1e, transparent: true, opacity: 0.5, blending: THREE.AdditiveBlending, depthWrite: false }));
    e.scale.setScalar(0.8 - i * 0.15);
    e.position.set(0.28, 0.3 + i * 0.12, -0.5 + i * 0.5);
    fire.add(e);
    embers.push(e);
  }
  const fireLight = new THREE.PointLight(0xff5a20, 9, 7, 2);
  fireLight.position.set(-6.0, 0.7, 0.5);
  fire.add(fireLight);
  group.add(fire);
  // portrait above fire
  const portrait = new THREE.Group();
  portrait.position.set(-6.83, 3.15, 0.5);
  portrait.rotation.y = Math.PI / 2;
  box(portrait, 1.0, 1.3, 0.07, std(0x2a1e14), 0, 0, 0);
  const portraitImg = new THREE.Mesh(new THREE.PlaneGeometry(0.82, 1.1), new THREE.MeshStandardMaterial({ map: photoTexture(), color: 0x9a8d75, roughness: 0.9 }));
  portraitImg.position.z = 0.045;
  portrait.add(portraitImg);
  group.add(portrait);

  spec.updaters.push((t) => {
    fireLight.intensity = 8 + Math.sin(t * 11.2) * 1.4 + Math.sin(t * 23.7) * 0.7;
    embers.forEach((e, i) => { e.material.opacity = 0.35 + Math.sin(t * 6 + i) * 0.12; });
  });

  // ── chandelier ────────────────────────────────────────────────
  const chand = new THREE.Group();
  chand.position.set(0, 4.3, -1.0);
  cyl(chand, 0.02, 0.02, 2.1, std(0x3d2c18), 0, 1.05, 0, 5);
  const ring = new THREE.Mesh(new THREE.TorusGeometry(0.8, 0.035, 6, 24), std(0x4a3720, { metalness: 0.55, roughness: 0.45 }));
  ring.rotation.x = Math.PI / 2;
  chand.add(ring);
  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * Math.PI * 2;
    const px = Math.cos(a) * 0.8, pz = Math.sin(a) * 0.8;
    const arm = cyl(chand, 0.022, 0.022, 0.45, std(0x3d2c18), px * 0.56, 0.22, pz * 0.56, 5);
    arm.rotation.z = Math.PI / 2;
    arm.rotation.y = -a;
    cyl(chand, 0.045, 0.05, 0.14, std(0xbca682), px, 0.1, pz, 8);
    const fl = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTexture(), color: 0xffbe6a, transparent: true, opacity: 0.9, blending: THREE.AdditiveBlending, depthWrite: false }));
    fl.scale.setScalar(0.13);
    fl.position.set(px, 0.2, pz);
    chand.add(fl);
  }
  group.add(chand);
  const chandLight = new THREE.PointLight(0xffc078, 22, 12, 2);
  chandLight.position.set(0, 4.15, -1.0);
  group.add(chandLight);
  flickerLight(chandLight, spec, { base: 22, speed: 3.4, amount: 0.18, seed: 2 });

  // shadow-casting spot from chandelier
  const spot = new THREE.SpotLight(0xffcf9e, 26, 16, 1.05, 0.8, 1.2);
  spot.position.set(0, 5.8, -0.8);
  spot.target.position.set(0, 0, -1.3);
  spot.castShadow = true;
  spot.shadow.mapSize.set(1024, 1024);
  spot.shadow.bias = -0.002;
  group.add(spot); group.add(spot.target);

  // ── moonlight window ────────────────────────────────────────
  const win = new THREE.Group();
  win.position.set(-6.86, 3.1, -1.9);
  win.rotation.y = Math.PI / 2;
  box(win, 2.1, 2.7, 0.18, std(0x191510), 0, 0, 0);
  const winGlass = new THREE.Mesh(new THREE.PlaneGeometry(1.8, 2.4), new THREE.MeshStandardMaterial({
    color: 0x25394a, emissive: 0x27476a, emissiveIntensity: 0.55, roughness: 0.15, metalness: 0.2
  }));
  winGlass.position.z = 0.1;
  win.add(winGlass);
  box(win, 0.05, 2.4, 0.12, std(0x191510), 0, 0, 0.12);
  box(win, 1.8, 0.05, 0.12, std(0x191510), 0, 0, 0.12);
  box(win, 1.8, 0.05, 0.12, std(0x191510), 0, 0.8, 0.12);
  group.add(win);
  const moonBeam = makeLightShaft(0x83a9cc, 1.4, 8, 0.03);
  moonBeam.position.set(-5.9, 2.9, -1.9);
  moonBeam.rotation.z = 0.9;
  group.add(moonBeam);
  const winLight = new THREE.SpotLight(0x7ea6d0, 28, 14, 0.5, 0.9, 1.5);
  winLight.position.set(-6.4, 3.4, -1.9);
  winLight.target.position.set(0, 0.3, 0.5);
  group.add(winLight); group.add(winLight.target);

  // ── debris, papers ──────────────────────────────────────────
  const rnd = mulberry32(55);
  for (let i = 0; i < 22; i++) {
    const paper = new THREE.Mesh(new THREE.PlaneGeometry(0.16 + rnd() * 0.18, 0.22 + rnd() * 0.2), std(0xb2a98f, { roughness: 1, side: THREE.DoubleSide }));
    paper.rotation.x = -Math.PI / 2;
    paper.rotation.z = rnd() * Math.PI;
    paper.position.set((rnd() - 0.5) * 8, 0.02 + i * 0.0004, -4 + rnd() * 6);
    group.add(paper);
  }
  for (let i = 0; i < 10; i++) {
    const leaf = new THREE.Mesh(new THREE.CircleGeometry(0.03 + rnd() * 0.03, 3), std(0x2f2010));
    leaf.rotation.x = -Math.PI / 2;
    leaf.position.set((rnd() - 0.5) * 12, 0.022, -4.8 + rnd() * 9);
    group.add(leaf);
  }

  // ── actors ───────────────────────────────────────────────────
  const wren = actor(group, spec, 'WREN', {
    height: 1.64, jacket: 0x2b2b3d, shirt: 0x17171f, pants: 0x23232b, hair: 0x120e0c, hairStyle: 'long',
    skin: 0x604a3a
  }, [-4.85, 0, -1.9], 0.55, 'stand');
  actor(group, spec, 'SAM', {
    height: 1.7, jacket: 0x4a3a28, shirt: 0x1c1814, pants: 0x26282b, hair: 0x1b130e, hairStyle: 'curly', flashlight: true
  }, [1.85, 0, 1.5], Math.PI + 0.2, 'stand');
  actor(group, spec, 'RYAN', {
    height: 1.78, jacket: 0x2d3d47, shirt: 0x1a1c1e, pants: 0x262a2e, hair: 0x241811, flashlight: true
  }, [1.45, 0, 2.35], Math.PI + 0.12, 'slump');
  const dana = actor(group, spec, 'DANA', {
    height: 1.68, jacket: 0x77736a, shirt: 0x8a857a, pants: 0x5c584f, hair: 0x2a1a12, hairStyle: 'long',
    skin: 0x6c5341
  }, [5.0, 3.62, -2.2], 0.15, 'stand', false);
  const aura = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTexture(), color: 0x6f8fbe, transparent: true, opacity: 0.1, blending: THREE.AdditiveBlending, depthWrite: false }));
  aura.scale.setScalar(1.4);
  aura.position.set(0, 1.2, 0);
  wren.root.add(aura);

  // ── atmosphere ──────────────────────────────────────────────
  dustFor(group, spec, { count: 220, area: [13, 6, 9], color: 0xd6c49c, size: 0.055 });
  lightningCycle(spec, { min: 9, max: 16, first: 4 });
  spec.updaters.push((t) => {
    wren.lookAtYaw(Math.sin(t * 0.26) * 0.17);
    dana.lookAtYaw(0.08 + Math.sin(t * 0.3) * 0.08);
    aura.material.opacity = 0.07 + Math.sin(t * 1.2) * 0.03;
  });

  spec.shots = {
    wide: { pos: [0.55, 1.88, 4.5], look: [0.0, 2.35, -4.7], fov: 56, handheld: 0.32 },
    explore: { pos: [0.4, 1.82, 4.35], look: [0.0, 1.95, -4.65], fov: 59, handheld: 0.26 },
    hall: { pos: [-1.2, 1.72, 3.6], look: [0.2, 2.1, -4.8], fov: 48, handheld: 0.55 },
    clock: { pos: [-1.0, 1.9, -0.4], look: [-3.4, 2.85, -4.4], fov: 38, handheld: 0.28 },
    clock_close: { pos: [-2.35, 2.72, -1.9], look: [-3.4, 2.95, -4.35], fov: 31, handheld: 0.18 },
    wren: { pos: [-0.2, 1.7, 0.8], look: [-4.85, 1.58, -1.9], fov: 40, handheld: 0.3 },
    stairs: { pos: [1.1, 1.75, 2.6], look: [4.9, 2.9, -2.2], fov: 46, handheld: 0.35 },
    dana_stairs: { pos: [0.15, 1.62, 2.2], look: [4.9, 4.25, -2.2], fov: 37, handheld: 0.28 },
    door: { pos: [0.1, 1.7, -1.4], look: [0.0, 1.7, 3.6], fov: 46, handheld: 0.4 }
  };

  spec.fog = new THREE.FogExp2(0x070605, 0.018);
  spec.background = new THREE.Color(0x040403);
  spec.hemi = 14.0;
  spec.hemiColor = 0x9a9a94;
  spec.hemiGround = 0x332a22;
  spec.exposure = 1.28;
  spec.bloom = 0.7;
  spec.bloomThreshold = 0.58;
  spec.tint = 0xf4ead9;
  spec.saturation = 0.94;
  spec.contrast = 1.05;
  spec.grain = 0.065;
  spec.aberration = 1.1;

  spec.update = (t, dt, engine) => {
    for (const u of spec.updaters) u(t, dt, engine);
  };
  return spec;
}
