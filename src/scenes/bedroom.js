import * as THREE from 'three';
import {
  mulberry32, std, box, cyl, canvasTexture, glowTexture,
  spriteGlow, carpetTexture, posterTexture, vinylTexture, clockFaceTexture
} from '../props.js';
import { actor, dustFor, lightningCycle } from '../scene-helpers.js';

function paintedWallTexture() {
  return canvasTexture(512, 512, (ctx, w, h) => {
    const rnd = mulberry32(61);
    const g = ctx.createLinearGradient(0, 0, 0, h);
    g.addColorStop(0, '#3a4652');
    g.addColorStop(1, '#26313b');
    ctx.fillStyle = g; ctx.fillRect(0, 0, w, h);
    for (let i = 0; i < 3500; i++) {
      ctx.fillStyle = `rgba(${200 + rnd() * 30},${205 + rnd() * 25},${210 + rnd() * 25},${rnd() * 0.028})`;
      ctx.fillRect(rnd() * w, rnd() * h, 1 + rnd() * 2, 1 + rnd() * 2);
    }
    // water stains
    for (let i = 0; i < 8; i++) {
      const x = rnd() * w, y = rnd() * h;
      const rg = ctx.createRadialGradient(x, y, 2, x, y, 40 + rnd() * 80);
      rg.addColorStop(0, 'rgba(12,20,24,0.12)');
      rg.addColorStop(1, 'rgba(12,20,24,0)');
      ctx.fillStyle = rg;
      ctx.fillRect(x - 100, y - 100, 200, 200);
    }
    ctx.fillStyle = 'rgba(10,14,18,0.35)';
    ctx.fillRect(0, h - 40, w, 40);
  }, { repeat: [2, 1] });
}

function windowTexture() {
  return canvasTexture(512, 448, (ctx, w, h) => {
    const rnd = mulberry32(88);
    const g = ctx.createLinearGradient(0, 0, 0, h);
    g.addColorStop(0, '#0b1a26');
    g.addColorStop(0.55, '#162b38');
    g.addColorStop(1, '#050a0e');
    ctx.fillStyle = g; ctx.fillRect(0, 0, w, h);
    // tree silhouettes
    ctx.fillStyle = 'rgba(3,7,10,0.9)';
    for (let i = 0; i < 5; i++) {
      const x = 30 + rnd() * (w - 60);
      ctx.fillRect(x, h * 0.35, 8 + rnd() * 10, h);
      for (let j = 0; j < 5; j++) {
        ctx.beginPath();
        ctx.ellipse(x + (rnd() - 0.5) * 80, h * 0.25 + rnd() * 120, 20 + rnd() * 40, 8 + rnd() * 20, rnd() * 3, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    // rain streaks
    for (let i = 0; i < 260; i++) {
      ctx.strokeStyle = `rgba(170,200,220,${0.04 + rnd() * 0.12})`;
      ctx.lineWidth = 0.7 + rnd() * 1.2;
      const x = rnd() * w, y = rnd() * h, l = 8 + rnd() * 30;
      ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x - 2, y + l); ctx.stroke();
    }
    // droplets
    for (let i = 0; i < 40; i++) {
      ctx.fillStyle = `rgba(190,215,230,${0.08 + rnd() * 0.2})`;
      ctx.beginPath(); ctx.arc(rnd() * w, rnd() * h, 1 + rnd() * 3, 0, Math.PI * 2); ctx.fill();
    }
    // lightning glow
    const rg = ctx.createRadialGradient(w * 0.7, h * 0.15, 5, w * 0.7, h * 0.15, 150);
    rg.addColorStop(0, 'rgba(150,190,220,0.13)'); rg.addColorStop(1, 'rgba(150,190,220,0)');
    ctx.fillStyle = rg; ctx.fillRect(0, 0, w, h);
    // window mullions
    ctx.fillStyle = '#151b20';
    ctx.fillRect(w / 2 - 4, 0, 8, h);
    ctx.fillRect(0, h * 0.48 - 4, w, 8);
    ctx.fillStyle = 'rgba(0,0,0,0.28)';
    ctx.fillRect(0, 0, w, 14);
  }, { repeat: [1, 1] });
}

function clockDrawingTexture() {
  return canvasTexture(300, 380, (ctx, w, h) => {
    ctx.fillStyle = '#d9cfb8'; ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = 'rgba(40,32,24,0.8)';
    ctx.font = '600 26px "Cormorant Garamond", serif';
    ctx.textAlign = 'center';
    ctx.fillText('IT SEES YOU AT 3:07', w / 2, 46);
    ctx.strokeStyle = 'rgba(70,30,22,0.9)';
    ctx.lineWidth = 6;
    ctx.beginPath(); ctx.arc(w / 2, h * 0.56, 80, 0, Math.PI * 2); ctx.stroke();
    ctx.lineWidth = 3;
    for (let i = 0; i < 12; i++) {
      const a = (i / 12) * Math.PI * 2;
      ctx.beginPath();
      ctx.moveTo(w / 2 + Math.cos(a) * 64, h * 0.56 + Math.sin(a) * 64);
      ctx.lineTo(w / 2 + Math.cos(a) * 76, h * 0.56 + Math.sin(a) * 76);
      ctx.stroke();
    }
    ctx.lineWidth = 5;
    ctx.beginPath(); ctx.moveTo(w / 2, h * 0.56); ctx.lineTo(w / 2 + 40, h * 0.56 - 20); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(w / 2, h * 0.56); ctx.lineTo(w / 2 - 4, h * 0.56 - 58); ctx.stroke();
    // crude figures beneath
    ctx.lineWidth = 2.5;
    for (let i = 0; i < 3; i++) {
      const x = 90 + i * 60;
      ctx.beginPath(); ctx.arc(x, h * 0.83, 12, 0, Math.PI * 2); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(x, h * 0.86); ctx.lineTo(x, h * 0.95); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(x - 16, h * 0.9); ctx.lineTo(x + 16, h * 0.9); ctx.stroke();
    }
    // tape
    ctx.fillStyle = 'rgba(220,210,180,0.55)';
    ctx.fillRect(18, 8, 46, 18);
    ctx.fillRect(w - 64, 8, 46, 18);
    ctx.strokeStyle = 'rgba(60,20,16,0.3)';
    ctx.lineWidth = 1;
    for (let i = 0; i < 20; i++) {
      ctx.beginPath();
      ctx.moveTo(Math.random() * w, Math.random() * h);
      ctx.lineTo(Math.random() * w, Math.random() * h);
      ctx.stroke();
    }
  }, { repeat: [1, 1] });
}

function makeRecordPlayer(group) {
  const g = new THREE.Group();
  g.position.set(-3.8, 0.98, -2.9);
  g.rotation.y = 0.28;
  box(g, 0.85, 0.12, 0.62, std(0x2a2a2c, { roughness: 0.4, metalness: 0.4 }), 0, 0, 0);
  const platter = new THREE.Group();
  platter.position.y = 0.075;
  g.add(platter);
  cyl(platter, 0.28, 0.28, 0.035, std(0x111112, { roughness: 0.3 }), 0, 0, 0, 28);
  const vinyl = new THREE.Mesh(new THREE.CircleGeometry(0.275, 40), new THREE.MeshStandardMaterial({
    map: vinylTexture(), roughness: 0.22, metalness: 0.35, color: 0x9a9a9a
  }));
  vinyl.rotation.x = -Math.PI / 2;
  vinyl.position.y = 0.021;
  platter.add(vinyl);
  const spindle = cyl(platter, 0.012, 0.012, 0.06, std(0xa8a8a8, { metalness: 0.8 }), 0, 0.04, 0, 6);
  // tonearm
  const armPivot = new THREE.Group();
  armPivot.position.set(0.33, 0.08, -0.22);
  g.add(armPivot);
  const arm = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.02, 0.42), std(0xb9b9bd, { metalness: 0.85, roughness: 0.25 }));
  arm.position.set(-0.1, 0.02, 0.18);
  arm.rotation.y = 0.58;
  armPivot.add(arm);
  const head = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.025, 0.1), std(0x1b1b1c));
  head.position.set(-0.22, 0.02, 0.37);
  armPivot.add(head);
  cyl(armPivot, 0.035, 0.035, 0.03, std(0x8a8a8a, { metalness: 0.7 }), 0, 0.02, 0, 8);
  // knobs
  for (const x of [-0.3, 0.28]) {
    const knob = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 0.02, 10), std(0x9a9a9a, { metalness: 0.7 }));
    knob.position.set(x, 0.07, 0.22);
    g.add(knob);
  }
  group.add(g);
  return { group: g, platter };
}

export function buildBedroom() {
  const group = new THREE.Group();
  const spec = { group, shots: {}, actors: [], hotspotData: [], updaters: [], defaultShot: 'wide' };

  const wallMat = new THREE.MeshStandardMaterial({ map: paintedWallTexture(), color: 0x8e9aa4, roughness: 0.95 });
  const trim = std(0x222a30, { roughness: 0.8 });

  const floor = new THREE.Mesh(new THREE.PlaneGeometry(9, 8), new THREE.MeshStandardMaterial({ map: carpetTexture(), color: 0x8a7c76, roughness: 1 }));
  floor.rotation.x = -Math.PI / 2;
  floor.receiveShadow = true;
  group.add(floor);
  // walls
  box(group, 9, 3.3, 0.2, wallMat, 0, 1.65, -4);
  box(group, 9, 3.3, 0.2, wallMat, 0, 1.65, 4);
  box(group, 0.2, 3.3, 8, wallMat, -4.5, 1.65, 0);
  box(group, 0.2, 3.3, 8, wallMat, 4.5, 1.65, 0);
  box(group, 9, 0.16, 8, std(0x161b1f), 0, 3.3, 0);
  // skirting / trim
  for (const [x, z, w, d] of [[0, -3.88, 8.8, 0.06], [0, 3.88, 8.8, 0.06], [-4.38, 0, 0.06, 7.8], [4.38, 0, 0.06, 7.8]]) {
    box(group, w, 0.16, d, trim, x, 0.08, z);
    box(group, w, 0.06, d, trim, x, 1.08, z);
  }

  // ── window ───────────────────────────────────────────────────
  const win = new THREE.Group();
  win.position.set(-1.7, 2.0, -3.9);
  box(win, 2.7, 2.25, 0.14, std(0x1b2126), 0, 0, 0);
  const winTex = new THREE.Mesh(new THREE.PlaneGeometry(2.4, 1.95), new THREE.MeshBasicMaterial({ map: windowTexture() }));
  winTex.position.z = 0.08;
  win.add(winTex);
  const winGlow = new THREE.PointLight(0x6e9cc4, 8, 7, 2);
  winGlow.position.set(0, 0, 0.8);
  win.add(winGlow);
  // curtain rods + curtains
  const rod = cyl(win, 0.025, 0.025, 3.4, std(0x3a2c20, { metalness: 0.4 }), 0, 1.28, 0.12, 6);
  rod.rotation.z = Math.PI / 2;
  const curtainMat = std(0x4d2c2e, { roughness: 1, side: THREE.DoubleSide });
  for (const s of [-1, 1]) {
    const curtain = new THREE.Mesh(new THREE.PlaneGeometry(0.72, 2.45, 6, 10), curtainMat);
    curtain.position.set(s * 1.42, -0.08, 0.16);
    const pos = curtain.geometry.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      pos.setZ(i, Math.sin(x * 18) * 0.045 + Math.sin(x * 31) * 0.02);
    }
    curtain.geometry.computeVertexNormals();
    win.add(curtain);
  }
  group.add(win);
  // cold light from window
  const moonSpot = new THREE.SpotLight(0x82a9cc, 24, 12, 0.55, 0.85, 1.4);
  moonSpot.position.set(-1.7, 3.3, -3.4);
  moonSpot.target.position.set(0.4, 0.2, 1.5);
  group.add(moonSpot); group.add(moonSpot.target);

  // ── bed ─────────────────────────────────────────────────────
  const bed = new THREE.Group();
  bed.position.set(2.15, 0, -2.5);
  const woodMat = std(0x3a2a20, { roughness: 0.7 });
  box(bed, 1.95, 0.35, 2.55, woodMat, 0, 0.35, 0);
  box(bed, 1.95, 0.9, 0.16, woodMat, 0, 0.85, -1.3);
  box(bed, 2.02, 0.22, 2.62, std(0xd8d0bd, { roughness: 1 }), 0, 0.62, 0.02);
  // blanket
  const blanket = box(bed, 2.05, 0.1, 1.9, std(0x6b2622, { roughness: 1 }), 0, 0.74, 0.22);
  const rug = new THREE.Mesh(new THREE.PlaneGeometry(2.08, 1.5), std(0x7a2c24, { roughness: 1 }));
  rug.rotation.x = -Math.PI / 2;
  rug.position.set(0, 0.795, 0.45);
  bed.add(rug);
  // pillows
  for (const s of [-1, 1]) {
    const p = new THREE.Mesh(new THREE.BoxGeometry(0.78, 0.16, 0.44), std(0xd9d4c5, { roughness: 1 }));
    p.position.set(s * 0.48, 0.8, -1.05);
    p.rotation.x = -0.08;
    p.rotation.y = s * 0.06;
    bed.add(p);
  }
  // folded blanket at foot
  box(bed, 2.05, 0.12, 0.6, std(0x3f434c, { roughness: 1 }), 0, 0.82, 1.0);
  group.add(bed);

  // nightstand + lamp
  const stand = new THREE.Group();
  stand.position.set(3.85, 0, -3.15);
  box(stand, 0.7, 0.72, 0.7, std(0x3a2a20), 0, 0.36, 0);
  box(stand, 0.76, 0.05, 0.76, std(0x4a3626), 0, 0.74, 0);
  for (const y of [0.26, 0.52]) box(stand, 0.62, 0.02, 0.03, std(0x20160f), 0, y, 0.36);
  // lamp
  cyl(stand, 0.06, 0.09, 0.3, std(0x2a2a2c, { metalness: 0.5 }), 0, 0.91, 0, 8);
  const shade = new THREE.Mesh(new THREE.CylinderGeometry(0.13, 0.22, 0.26, 16, 1, true), new THREE.MeshStandardMaterial({ color: 0xd8b786, emissive: 0x8a5424, emissiveIntensity: 0.45, roughness: 0.9, side: THREE.DoubleSide }));
  shade.position.set(0, 1.2, 0);
  stand.add(shade);
  const lampLight = new THREE.PointLight(0xffb066, 11, 7, 2);
  lampLight.position.set(0, 1.18, 0);
  stand.add(lampLight);
  // alarm clock
  const alarm = new THREE.Group();
  alarm.position.set(-0.18, 0.79, 0.22);
  box(alarm, 0.16, 0.1, 0.08, std(0x141414), 0, 0.05, 0);
  const alarmFace = new THREE.Mesh(new THREE.PlaneGeometry(0.12, 0.075), new THREE.MeshBasicMaterial({ map: clockFaceTexture(false) }));
  alarmFace.position.z = 0.045;
  alarm.add(alarmFace);
  stand.add(alarm);
  group.add(stand);

  // ── dresser + record player ─────────────────────────────────
  const dresser = new THREE.Group();
  dresser.position.set(-3.85, 0, -2.85);
  dresser.rotation.y = Math.PI / 2;
  box(dresser, 2.1, 0.82, 0.62, std(0x38281d, { roughness: 0.72 }), 0, 0.42, 0);
  box(dresser, 2.2, 0.06, 0.7, std(0x4a3524), 0, 0.86, 0);
  for (let i = 0; i < 3; i++) {
    box(dresser, 0.62, 0.02, 0.02, std(0x21160f), -0.68 + i * 0.68, 0.55, 0.33);
    const knob = new THREE.Mesh(new THREE.SphereGeometry(0.03, 6, 6), std(0x8a7040, { metalness: 0.6 }));
    knob.position.set(-0.68 + i * 0.68, 0.55, 0.35);
    dresser.add(knob);
  }
  group.add(dresser);
  const record = makeRecordPlayer(group);

  // record crate
  const crate = new THREE.Group();
  crate.position.set(-4.0, 0, -1.5);
  box(crate, 0.72, 0.35, 0.5, std(0x6b4f30), 0, 0.18, 0);
  for (let i = 0; i < 8; i++) {
    const sleeve = box(crate, 0.24, 0.31, 0.015, std([0x8d2b22, 0x2c3b5a, 0x3c5940, 0xb08a3c][i % 4]), -0.2 + (i % 4) * 0.13, 0.19, 0.1 + Math.floor(i / 4) * 0.05, [0, 0, (i % 2 ? 0.05 : -0.04)]);
  }
  group.add(crate);

  // ── posters ─────────────────────────────────────────────────
  const posterData = [
    { wall: 'right', z: -2.0, y: 1.85, tex: posterTexture(0) },
    { wall: 'right', z: 0.1, y: 1.8, tex: posterTexture(1) },
    { wall: 'right', z: 2.1, y: 1.95, tex: posterTexture(2) }
  ];
  posterData.forEach(({ z, y, tex }) => {
    const p = new THREE.Mesh(new THREE.PlaneGeometry(0.82, 1.18), new THREE.MeshStandardMaterial({ map: tex, roughness: 0.9, emissive: 0x1a1610, emissiveIntensity: 0.25 }));
    p.position.set(4.39, y, z);
    p.rotation.y = -Math.PI / 2;
    group.add(p);
    // tape corners
    for (const [dy, dz] of [[0.56, -0.38], [0.56, 0.38], [-0.56, -0.38], [-0.56, 0.38]]) {
      const t = new THREE.Mesh(new THREE.PlaneGeometry(0.1, 0.05), new THREE.MeshBasicMaterial({ color: 0xd8ccae, transparent: true, opacity: 0.5 }));
      t.position.set(4.38, y + dy, z + dz);
      t.rotation.y = -Math.PI / 2;
      t.rotation.z = 0.2;
      group.add(t);
    }
  });

  // clock drawing
  const drawing = new THREE.Mesh(new THREE.PlaneGeometry(0.66, 0.82), new THREE.MeshStandardMaterial({ map: clockDrawingTexture(), roughness: 0.95 }));
  drawing.position.set(-3.6, 1.95, -3.88);
  group.add(drawing);

  // fairy lights
  const fairy = new THREE.Group();
  const rnd = mulberry32(31);
  const pts = [];
  for (let i = 0; i <= 30; i++) {
    const x = -4.2 + (i / 30) * 8.5;
    const y = 3.05 - Math.sin((i / 30) * Math.PI) * 0.22 + Math.sin(i * 2.1) * 0.03;
    pts.push(new THREE.Vector3(x, y, -3.78));
  }
  const lineGeo = new THREE.BufferGeometry().setFromPoints(pts);
  const line = new THREE.Line(lineGeo, new THREE.LineBasicMaterial({ color: 0x3a3228, transparent: true, opacity: 0.7 }));
  fairy.add(line);
  const bulbColors = [0xffc97a, 0xffdd9a, 0xffab5c, 0xffe6b0];
  const bulbs = [];
  pts.forEach((p, i) => {
    if (i % 2) return;
    const b = new THREE.Mesh(new THREE.SphereGeometry(0.026, 6, 5), new THREE.MeshStandardMaterial({
      color: 0xffe0a8, emissive: bulbColors[i % bulbColors.length], emissiveIntensity: 2.4, roughness: 0.3
    }));
    b.position.copy(p);
    fairy.add(b);
    const glow = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTexture(), color: 0xffc070, transparent: true, opacity: 0.24, blending: THREE.AdditiveBlending, depthWrite: false }));
    glow.scale.setScalar(0.2);
    glow.position.copy(p).add(new THREE.Vector3(0, 0, 0.03));
    fairy.add(glow);
    bulbs.push({ mesh: b, glow, phase: rnd() * 6 });
  });
  group.add(fairy);
  spec.updaters.push((t) => {
    bulbs.forEach((b, i) => {
      const flick = 0.86 + Math.sin(t * (2 + (i % 3)) + b.phase) * 0.14;
      b.mesh.material.emissiveIntensity = 2.2 * flick;
      b.glow.material.opacity = 0.22 * flick;
    });
  });

  // desk / boombox
  const desk = new THREE.Group();
  desk.position.set(3.35, 0, 2.1);
  box(desk, 1.6, 0.06, 0.9, std(0x33251a), 0, 0.76, 0);
  for (const [x, z] of [[-0.72, -0.35], [0.72, -0.35], [-0.72, 0.35], [0.72, 0.35]]) {
    box(desk, 0.06, 0.74, 0.06, std(0x241a12), x, 0.37, z);
  }
  // boombox
  const boom = new THREE.Group();
  boom.position.set(0.1, 0.79, 0);
  box(boom, 0.72, 0.34, 0.22, std(0x1c1d20, { roughness: 0.5, metalness: 0.3 }), 0, 0.17, 0);
  for (const x of [-0.24, 0.24]) {
    cyl(boom, 0.11, 0.11, 0.02, std(0x0d0d0e), x, 0.18, 0.115, 16).rotation.x = Math.PI / 2;
    cyl(boom, 0.045, 0.045, 0.025, std(0x8a8a8a), x, 0.18, 0.115, 12).rotation.x = Math.PI / 2;
  }
  box(boom, 0.2, 0.08, 0.03, std(0x3a3a3c), 0, 0.3, 0.115);
  desk.add(boom);
  // cassettes
  for (let i = 0; i < 4; i++) {
    box(desk, 0.16, 0.025, 0.1, std([0x1b1b1e, 0x8a2830, 0x2c3f58][i % 3]), -0.6 + i * 0.18, 0.8, 0.25, [0, (i - 1) * 0.2, 0]);
  }
  // papers
  for (let i = 0; i < 3; i++) {
    const p = new THREE.Mesh(new THREE.PlaneGeometry(0.28, 0.36), std(0xc2b89e, { side: THREE.DoubleSide }));
    p.rotation.x = -Math.PI / 2;
    p.rotation.z = rnd() * 0.6;
    p.position.set(-0.4 + i * 0.25, 0.8, 0.1);
    desk.add(p);
  }
  group.add(desk);

  // clothes and shoes
  const clothMat = std(0x2c3540, { roughness: 1 });
  for (let i = 0; i < 5; i++) {
    const cloth = new THREE.Mesh(new THREE.PlaneGeometry(0.3, 0.5, 3, 3), clothMat);
    cloth.rotation.x = -Math.PI / 2 + 0.2;
    cloth.rotation.z = rnd() * 3;
    cloth.position.set(-1.4 + rnd() * 3, 0.03, 1.5 + rnd() * 2);
    group.add(cloth);
  }
  for (let i = 0; i < 3; i++) {
    const shoe = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.09, 0.26), std(0x141414));
    shoe.position.set(-2.4 + rnd() * 4, 0.045, 2.8 + rnd() * 1);
    shoe.rotation.y = rnd() * 3;
    group.add(shoe);
  }

  // ── actors ──────────────────────────────────────────────────
  const dana = actor(group, spec, 'DANA', {
    height: 1.67, jacket: 0x7f7a70, shirt: 0x8e897e, pants: 0x6b665c, hair: 0x2a1a12, hairStyle: 'long',
    skin: 0x6c5341
  }, [-1.7, 0, -3.15], Math.PI, 'slump');
  const wren = actor(group, spec, 'WREN', {
    height: 1.62, jacket: 0x2b2b3d, shirt: 0x17171f, pants: 0x23232b, hair: 0x120e0c, hairStyle: 'long',
    skin: 0x604a3a
  }, [2.45, 0, 2.2], Math.PI + 0.15, 'stand');
  const sam = actor(group, spec, 'SAM', {
    height: 1.7, jacket: 0x4a3a28, shirt: 0x1c1814, pants: 0x26282b, hair: 0x1b130e, hairStyle: 'curly', flashlight: true
  }, [3.0, 0, -0.7], Math.PI, 'stand');
  const ryan = actor(group, spec, 'RYAN', {
    height: 1.78, jacket: 0x2d3d47, shirt: 0x1a1c1e, pants: 0x262a2e, hair: 0x241811, flashlight: true
  }, [1.55, 0, 1.35], Math.PI + 0.14, 'stand');
  const aura = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTexture(), color: 0x6f8fbe, transparent: true, opacity: 0.09, blending: THREE.AdditiveBlending, depthWrite: false }));
  aura.scale.setScalar(1.3);
  aura.position.set(0, 1.2, 0);
  wren.root.add(aura);

  // levitation glow
  const levGlow = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTexture(), color: 0xff3b28, transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false }));
  levGlow.scale.setScalar(2.6);
  levGlow.position.set(-1.7, 1.2, -3.15);
  group.add(levGlow);
  const levLight = new THREE.PointLight(0xff3a20, 0, 6, 2);
  levLight.position.set(-1.7, 1.8, -3.0);
  group.add(levLight);

  dustFor(group, spec, { count: 130, area: [8, 3, 7], color: 0xd8c9a8, size: 0.045 });
  lightningCycle(spec, { min: 11, max: 19, first: 6 });

  let levitating = false;
  let danaY = 0;
  let spin = 0;
  let spinTarget = 0.35;
  spec.actions = {
    levitate(on) {
      levitating = !!on;
      if (on) dana.setPose('fear');
      else dana.setPose('slump');
    },
    setRecordSpin(on, speed = 7) {
      spinTarget = on ? speed : 0.35;
    },
    lookup() {}
  };

  spec.updaters.push((t, dt) => {
    spin += (spinTarget - spin) * Math.min(1, dt * 2);
    record.platter.rotation.y += dt * spin;
    // Dana levitation
    const targetY = levitating ? 0.55 : 0;
    danaY += (targetY - danaY) * Math.min(1, dt * 1.6);
    dana.root.position.y = danaY + Math.sin(t * 0.8) * 0.012 * (levitating ? 1 : 0.2);
    levGlow.material.opacity += ((levitating ? 0.3 : 0) - levGlow.material.opacity) * Math.min(1, dt * 2);
    levGlow.scale.setScalar(2.2 + Math.sin(t * 2.3) * 0.25 + danaY * 1.5);
    levLight.intensity += ((levitating ? 16 : 0) - levLight.intensity) * Math.min(1, dt * 2);
    wren.lookAtYaw(0.15 + Math.sin(t * 0.24) * 0.1);
    ryan.lookAtYaw(-0.08 + Math.sin(t * 0.3 + 1) * 0.08);
    sam.lookAtYaw(0.12 + Math.sin(t * 0.27 + 2) * 0.14);
  });

  spec.shots = {
    wide: { pos: [0.0, 1.62, 3.8], look: [-0.8, 1.45, -3.2], fov: 57, handheld: 0.35 },
    dana_window: { pos: [-0.4, 1.66, 0.9], look: [-1.7, 1.55, -3.2], fov: 39, handheld: 0.32 },
    dana_close: { pos: [-0.55, 1.62, -2.25], look: [-1.7, 1.52, -3.15], fov: 40, handheld: 0.28 },
    dana_floor: { pos: [-0.35, 1.12, -1.1], look: [-1.7, 0.55, -3.1], fov: 44, handheld: 0.45 },
    dana_levitate: { pos: [-0.2, 0.85, 0.7], look: [-1.7, 2.35, -3.1], fov: 49, handheld: 0.55 },
    record: { pos: [0.2, 1.3, -1.35], look: [-3.8, 1.08, -2.9], fov: 36, handheld: 0.35 },
    wren: { pos: [0.7, 1.66, 0.1], look: [2.45, 1.55, 2.2], fov: 36, handheld: 0.3 },
    sam: { pos: [2.0, 1.6, -2.5], look: [3.0, 1.52, -0.7], fov: 34, handheld: 0.3 },
    ryan_close: { pos: [1.42, 1.62, -0.55], look: [1.55, 1.52, 1.35], fov: 33, handheld: 0.25 },
    door: { pos: [0.8, 1.68, 0.0], look: [2.5, 1.6, 2.8], fov: 44, handheld: 0.4 },
    close: { pos: [0.2, 1.6, 0.4], look: [0.2, 1.5, 2.2], fov: 40, handheld: 0.3 }
  };

  spec.fog = new THREE.FogExp2(0x0a0d10, 0.02);
  spec.background = new THREE.Color(0x050708);
  spec.hemi = 16.0;
  spec.hemiColor = 0x9aa6b4;
  spec.hemiGround = 0x2f3236;
  spec.exposure = 1.32;
  spec.bloom = 0.66;
  spec.bloomThreshold = 0.62;
  spec.tint = 0xf2eadf;
  spec.saturation = 0.96;
  spec.contrast = 1.04;
  spec.grain = 0.058;
  spec.aberration = 1.15;

  spec.update = (t, dt, engine) => {
    for (const u of spec.updaters) u(t, dt, engine);
  };
  return spec;
}
