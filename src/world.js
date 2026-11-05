import * as THREE from 'three';
import {
  TAU, clamp, damp, seeded, makeCanvas, canvasTexture, textTexture, meshBox,
  setShadowBlob,
} from './utils.js';

export const CITY = {
  spawn: { x: 6, z: 30 },
  car: { x: 6, z: 38 },
  forestHills: { x: 146, z: 60 },
  lake: { x: -127, z: 156 },
  creel: { x: -70, z: -151 },
  mall: { x: 129, z: -137 },
  lab: { x: -157, z: -31 },
  waterTower: { x: 70, z: -214 },
};

export const LANDMARKS = [
  { x: -35, z: -38, label: 'PALACE ARCADE', color: '#ff4e86' },
  { x: 38, z: -38, label: 'FAMILY VIDEO', color: '#54e7ff' },
  { x: -80, z: -92, label: 'HAWKINS HIGH', color: '#ffd36f' },
  { x: 150, z: -185, label: 'STARCOURT', color: '#70f5ff' },
  { x: -172, z: -55, label: 'HAWKINS LAB', color: '#ff5042' },
  { x: -70, z: -176, label: 'CREEL HOUSE', color: '#ff3b2f' },
  { x: 146, z: 74, label: 'FOREST HILLS', color: '#ffb347' },
  { x: -165, z: 158, label: "LOVER'S LAKE", color: '#62d6ff' },
];

const ROAD_WIDTHS = { main: 20, arterial: 14, street: 11, lane: 9 };

export function buildWorld(scene) {
  const rng = seeded(19860613);
  const rnd = (a = 0, b = 1) => a + rng() * (b - a);
  const pick = (arr) => arr[Math.floor(rng() * arr.length)];
  const colliders = [];
  const roads = [];
  const flickerLights = [];
  const rifts = [];
  const landmarks = [];

  /* ---------------------------------------------------------------- textures */
  function noiseCanvas(size, base, flecks, streaks = 0) {
    const canvas = makeCanvas(size, size);
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = base;
    ctx.fillRect(0, 0, size, size);
    for (let i = 0; i < flecks; i++) {
      const a = 0.02 + rng() * 0.12;
      ctx.fillStyle = rng() > 0.5 ? `rgba(255,255,255,${a})` : `rgba(0,0,0,${a})`;
      const s = 1 + rng() * 3;
      ctx.fillRect(rng() * size, rng() * size, s, s);
    }
    for (let i = 0; i < streaks; i++) {
      ctx.fillStyle = `rgba(0,0,0,${0.025 + rng() * 0.04})`;
      ctx.fillRect(rng() * size, 0, 2 + rng() * 6, size);
    }
    return canvas;
  }

  const asphaltCanvas = noiseCanvas(256, '#11151a', 1800, 18);
  const grassCanvas = makeCanvas(256, 256);
  {
    const ctx = grassCanvas.getContext('2d');
    ctx.fillStyle = '#101b18';
    ctx.fillRect(0, 0, 256, 256);
    for (let i = 0; i < 4200; i++) {
      ctx.fillStyle = rng() > 0.55 ? `rgba(58,75,55,${0.16 + rng() * 0.3})` : `rgba(6,12,12,${0.18 + rng() * 0.32})`;
      const x = rng() * 256, y = rng() * 256;
      ctx.fillRect(x, y, 1 + rng() * 2, 2 + rng() * 5);
    }
    for (let i = 0; i < 20; i++) {
      ctx.strokeStyle = `rgba(60,78,57,${0.08 + rng() * 0.1})`;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(rng() * 256, rng() * 256);
      ctx.lineTo(rng() * 256, rng() * 256);
      ctx.stroke();
    }
  }

  const groundTexture = canvasTexture(grassCanvas, { repeat: [92, 92], anisotropy: 8 });
  const ground = new THREE.Mesh(
    new THREE.PlaneGeometry(620, 620),
    new THREE.MeshStandardMaterial({ map: groundTexture, color: 0xa2b5a0, roughness: 1, metalness: 0 }),
  );
  ground.rotation.x = -Math.PI / 2;
  ground.position.y = -0.03;
  scene.add(ground);

  /* --------------------------------------------------------------- atmosphere */
  function makeSky() {
    const canvas = makeCanvas(1024, 512);
    const ctx = canvas.getContext('2d');
    const grad = ctx.createLinearGradient(0, 0, 0, 512);
    grad.addColorStop(0, '#030610');
    grad.addColorStop(0.42, '#07111f');
    grad.addColorStop(0.69, '#122033');
    grad.addColorStop(0.84, '#341522');
    grad.addColorStop(0.92, '#190b14');
    grad.addColorStop(1, '#05070c');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 1024, 512);

    // Stars live mostly in the upper sky.
    for (let i = 0; i < 460; i++) {
      const x = rng() * 1024;
      const y = rng() * 300;
      const a = 0.15 + rng() * 0.7;
      const s = rng() > 0.94 ? 2 : 1;
      ctx.fillStyle = rng() > 0.82 ? `rgba(255,208,170,${a})` : `rgba(200,226,255,${a})`;
      ctx.fillRect(x, y, s, s);
    }
    // Long, low storm clouds.
    for (let i = 0; i < 12; i++) {
      const y = 240 + rng() * 120;
      const x = rng() * 1024;
      const g = ctx.createRadialGradient(x, y, 4, x, y, 110 + rng() * 190);
      g.addColorStop(0, `rgba(42,25,44,${0.18 + rng() * 0.18})`);
      g.addColorStop(1, 'rgba(20,15,26,0)');
      ctx.fillStyle = g;
      ctx.fillRect(x - 300, y - 90, 600, 180);
    }
    const horizon = ctx.createLinearGradient(0, 335, 0, 440);
    horizon.addColorStop(0, 'rgba(155,35,58,0)');
    horizon.addColorStop(0.56, 'rgba(160,36,59,.25)');
    horizon.addColorStop(1, 'rgba(80,10,25,0)');
    ctx.fillStyle = horizon;
    ctx.fillRect(0, 330, 1024, 115);
    const texture = canvasTexture(canvas, { anisotropy: 8 });
    texture.mapping = THREE.EquirectangularReflectionMapping;
    const sky = new THREE.Mesh(
      new THREE.SphereGeometry(540, 40, 24),
      new THREE.MeshBasicMaterial({ map: texture, side: THREE.BackSide, fog: false, toneMapped: false }),
    );
    scene.add(sky);
    return sky;
  }
  makeSky();

  function glowTexture() {
    const canvas = makeCanvas(128, 128);
    const ctx = canvas.getContext('2d');
    const g = ctx.createRadialGradient(64, 64, 2, 64, 64, 63);
    g.addColorStop(0, 'rgba(255,255,255,1)');
    g.addColorStop(0.12, 'rgba(255,255,255,.9)');
    g.addColorStop(0.35, 'rgba(255,255,255,.28)');
    g.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, 128, 128);
    return new THREE.CanvasTexture(canvas);
  }
  const radialGlow = glowTexture();

  const moonGlow = new THREE.Sprite(new THREE.SpriteMaterial({
    map: radialGlow, color: 0xbfd6ff, transparent: true, opacity: 0.7,
    blending: THREE.AdditiveBlending, depthWrite: false, fog: false, toneMapped: false,
  }));
  moonGlow.scale.set(86, 86, 1);
  moonGlow.position.set(-158, 86, -278);
  scene.add(moonGlow);

  const moon = new THREE.Mesh(
    new THREE.CircleGeometry(10.5, 32),
    new THREE.MeshBasicMaterial({ color: 0xd8e4f2, transparent: true, opacity: 0.94, fog: false, toneMapped: false }),
  );
  moon.position.set(-158, 86, -277);
  moon.lookAt(cameraPositionApprox(0, 10, 0));
  scene.add(moon);

  const hemi = new THREE.HemisphereLight(0x8196c4, 0x210b0b, 1.18);
  scene.add(hemi);
  const moonLight = new THREE.DirectionalLight(0x9fb9e9, 1.15);
  moonLight.position.set(-120, 105, -90);
  scene.add(moonLight);
  const redBounce = new THREE.DirectionalLight(0xff3b28, 0.25);
  redBounce.position.set(-80, 18, 120);
  scene.add(redBounce);

  /* ----------------------------------------------------------------- roads */
  function addRoad(x, z, w, d, type = 'street') {
    const width = w || ROAD_WIDTHS[type];
    const canvasTexture = new THREE.CanvasTexture(asphaltCanvas);
    canvasTexture.colorSpace = THREE.SRGBColorSpace;
    canvasTexture.wrapS = THREE.RepeatWrapping;
    canvasTexture.wrapT = THREE.RepeatWrapping;
    canvasTexture.repeat.set(Math.max(1, w / 18), Math.max(1, d / 18));
    canvasTexture.anisotropy = 8;
    const mesh = new THREE.Mesh(
      new THREE.PlaneGeometry(w, d),
      new THREE.MeshStandardMaterial({ map: canvasTexture, color: 0x9ba3ab, roughness: 0.9, metalness: 0.05 }),
    );
    mesh.rotation.x = -Math.PI / 2;
    mesh.position.set(x, 0.016, z);
    scene.add(mesh);
    roads.push({ x, z, w, d, type });

    // Concrete curbs.
    const curbMat = new THREE.MeshStandardMaterial({ color: 0x6f7774, roughness: 0.96 });
    if (d > w) {
      for (const side of [-1, 1]) {
        const curb = meshBox(1.1, 0.14, d, curbMat, x + side * (w / 2 + 0.45), 0.075, z);
        scene.add(curb);
      }
    } else {
      for (const side of [-1, 1]) {
        const curb = meshBox(w, 0.14, 1.1, curbMat, x, 0.075, z + side * (d / 2 + 0.45));
        scene.add(curb);
      }
    }
    return mesh;
  }

  addRoad(0, 0, 500, ROAD_WIDTHS.main, 'main');
  addRoad(0, 0, ROAD_WIDTHS.main, 500, 'main');
  addRoad(-110, 0, ROAD_WIDTHS.arterial, 500, 'arterial');
  addRoad(110, 0, ROAD_WIDTHS.arterial, 500, 'arterial');
  addRoad(0, -125, 500, ROAD_WIDTHS.arterial, 'arterial');
  addRoad(0, 125, 500, ROAD_WIDTHS.arterial, 'arterial');
  addRoad(-55, 0, ROAD_WIDTHS.street, 260, 'street');
  addRoad(55, 0, ROAD_WIDTHS.street, 260, 'street');
  addRoad(0, -60, 240, ROAD_WIDTHS.street, 'street');
  addRoad(0, 60, 500, ROAD_WIDTHS.street, 'street');
  addRoad(210, 60, 110, 9, 'lane');
  addRoad(-103, 158, 28, 9, 'lane');
  addRoad(-146, -28, 74, 9, 'lane');
  addRoad(80, -125, 16, 6, 'lane');

  // Lane paint.
  const paint = new THREE.MeshBasicMaterial({ color: 0xd9c895, transparent: true, opacity: 0.68 });
  const whitePaint = new THREE.MeshBasicMaterial({ color: 0xc5d2d3, transparent: true, opacity: 0.35 });
  for (let z = -236; z <= 236; z += 17) {
    if (Math.abs(z) < 14) continue;
    const dash = new THREE.Mesh(new THREE.PlaneGeometry(0.24, 7), paint);
    dash.rotation.x = -Math.PI / 2;
    dash.position.set(0, 0.045, z);
    scene.add(dash);
  }
  for (let x = -236; x <= 236; x += 17) {
    if (Math.abs(x) < 14) continue;
    const dash = new THREE.Mesh(new THREE.PlaneGeometry(7, 0.22), paint);
    dash.rotation.x = -Math.PI / 2;
    dash.position.set(x, 0.045, 0);
    scene.add(dash);
  }
  for (const x of [-110, 110]) {
    for (let z = -236; z <= 236; z += 20) {
      if (Math.abs(z) < 15) continue;
      const dash = new THREE.Mesh(new THREE.PlaneGeometry(0.18, 5), whitePaint);
      dash.rotation.x = -Math.PI / 2;
      dash.position.set(x, 0.045, z);
      scene.add(dash);
    }
  }
  for (const z of [-125, 125]) {
    for (let x = -236; x <= 236; x += 20) {
      if (Math.abs(x) < 15) continue;
      const dash = new THREE.Mesh(new THREE.PlaneGeometry(5, 0.18), whitePaint);
      dash.rotation.x = -Math.PI / 2;
      dash.position.set(x, 0.045, z);
      scene.add(dash);
    }
  }
  // Crosswalks around the downtown junction.
  for (const [x, z, vertical] of [[0, 13, false], [0, -13, false], [13, 0, true], [-13, 0, true]]) {
    for (let i = -4; i <= 4; i++) {
      const stripe = new THREE.Mesh(
        vertical ? new THREE.PlaneGeometry(0.9, 3.6) : new THREE.PlaneGeometry(3.6, 0.9),
        new THREE.MeshBasicMaterial({ color: 0xcbd6d2, transparent: true, opacity: 0.36 }),
      );
      stripe.rotation.x = -Math.PI / 2;
      stripe.position.set(x + (vertical ? 0 : i * 1.8), 0.046, z + (vertical ? i * 1.8 : 0));
      scene.add(stripe);
    }
  }

  /* ------------------------------------------------------------- colliders */
  function addCollider(x, z, w, d, tag = 'building') {
    colliders.push({
      minX: x - w / 2, maxX: x + w / 2,
      minZ: z - d / 2, maxZ: z + d / 2,
      tag,
    });
  }

  function blocked(x, z, radius = 0.5) {
    if (x < -293 || x > 293 || z < -293 || z > 293) return true;
    for (const c of colliders) {
      if (
        x + radius > c.minX && x - radius < c.maxX &&
        z + radius > c.minZ && z - radius < c.maxZ
      ) return true;
    }
    return false;
  }

  function onRoad(x, z, pad = 0) {
    return roads.some((r) => (
      Math.abs(x - r.x) < r.w / 2 + pad && Math.abs(z - r.z) < r.d / 2 + pad
    ));
  }

  /* ------------------------------------------------------------- buildings */
  function facadeTextures(baseColor, floors, cols, litChance) {
    const W = 256, H = 512;
    const map = makeCanvas(W, H);
    const glow = makeCanvas(W, H);
    const ctx = map.getContext('2d');
    const gtx = glow.getContext('2d');
    ctx.fillStyle = baseColor;
    ctx.fillRect(0, 0, W, H);
    gtx.fillStyle = '#000';
    gtx.fillRect(0, 0, W, H);

    // brick and grime
    for (let i = 0; i < 1100; i++) {
      ctx.fillStyle = rng() > 0.5 ? `rgba(255,255,255,${0.015 + rng() * 0.03})` : `rgba(0,0,0,${0.03 + rng() * 0.07})`;
      ctx.fillRect(rng() * W, rng() * H, 2 + rng() * 5, 1 + rng() * 2);
    }
    ctx.strokeStyle = 'rgba(0,0,0,.14)';
    ctx.lineWidth = 1;
    for (let y = 0; y < H; y += 12) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(W, y);
      ctx.stroke();
    }
    const top = H * 0.08;
    const usableH = H * 0.82;
    const windowW = Math.max(11, W / (cols * 3.1));
    const windowH = Math.max(16, usableH / (floors * 2.5));
    for (let floor = 0; floor < floors; floor++) {
      for (let col = 0; col < cols; col++) {
        const cx = (col + 0.5) * (W / cols);
        const cy = top + (floor + 0.4) * (usableH / floors);
        const light = rng() < litChance;
        ctx.fillStyle = '#38414a';
        ctx.fillRect(cx - windowW / 2, cy - windowH / 2, windowW, windowH);
        ctx.fillStyle = 'rgba(4,8,13,.62)';
        ctx.fillRect(cx - windowW / 2 + 3, cy - windowH / 2 + 3, windowW - 6, windowH - 6);
        if (light) {
          const warm = rng() > 0.3;
          const colr = warm ? (rng() > 0.75 ? '#6fe7ff' : '#ffc878') : '#e9f3ff';
          ctx.fillStyle = warm ? 'rgba(255,188,99,.38)' : 'rgba(174,220,255,.28)';
          ctx.fillRect(cx - windowW / 2 + 3, cy - windowH / 2 + 3, windowW - 6, windowH - 6);
          gtx.fillStyle = colr;
          gtx.globalAlpha = 0.35 + rng() * 0.55;
          gtx.fillRect(cx - windowW / 2 + 3, cy - windowH / 2 + 3, windowW - 6, windowH - 6);
          gtx.globalAlpha = 1;
        }
        // Window frame.
        ctx.strokeStyle = 'rgba(0,0,0,.5)';
        ctx.lineWidth = 2;
        ctx.strokeRect(cx - windowW / 2, cy - windowH / 2, windowW, windowH);
      }
    }
    // Top and bottom trim.
    ctx.fillStyle = 'rgba(0,0,0,.23)';
    ctx.fillRect(0, H - 26, W, 26);
    ctx.fillStyle = 'rgba(255,255,255,.06)';
    ctx.fillRect(0, 0, W, 8);
    return {
      map: canvasTexture(map, { anisotropy: 8 }),
      glow: canvasTexture(glow, { anisotropy: 8 }),
    };
  }

  function addBuilding({
    x, z, w, d, h = 8, color = 0x4c463d, floors = 3, cols = 4,
    lit = 0.24, roof = 0x15181b, collider = true, trim = 0x2a2825,
  }) {
    const base = `#${new THREE.Color(color).getHexString()}`;
    const textures = facadeTextures(base, floors, cols, lit);
    const side = new THREE.MeshStandardMaterial({
      map: textures.map,
      emissiveMap: textures.glow,
      emissive: 0xffffff,
      emissiveIntensity: 0.58,
      roughness: 0.93,
      metalness: 0.02,
    });
    const roofMat = new THREE.MeshStandardMaterial({ color: roof, roughness: 0.9 });
    const mesh = new THREE.Mesh(
      new THREE.BoxGeometry(w, h, d),
      [side, side, roofMat, roofMat, side, side],
    );
    mesh.position.set(x, h / 2, z);
    scene.add(mesh);
    const cornice = meshBox(w + 0.9, 0.38, d + 0.9, new THREE.MeshStandardMaterial({ color: trim, roughness: 0.88 }), x, h + 0.1, z);
    scene.add(cornice);
    if (collider) addCollider(x, z, w, d);
    return mesh;
  }

  function addHouse(x, z, color = 0x8a7257, roofColor = 0x2b1d1a, rot = 0) {
    const group = new THREE.Group();
    const w = 11 + rnd(0, 4), d = 9 + rnd(0, 3), h = 4.6 + rnd(0, 1.4);
    const walls = new THREE.MeshStandardMaterial({ color, roughness: 0.95 });
    const body = meshBox(w, h, d, walls, 0, h / 2, 0);
    group.add(body);
    const roof = new THREE.Mesh(
      new THREE.ConeGeometry(Math.max(w, d) * 0.73, 3.6, 4),
      new THREE.MeshStandardMaterial({ color: roofColor, roughness: 1 }),
    );
    roof.rotation.y = Math.PI / 4;
    roof.position.y = h + 1.7;
    roof.scale.set(1, 1, d / w);
    group.add(roof);
    const lit = rng() < 0.45;
    const winMat = new THREE.MeshBasicMaterial({ color: lit ? 0xffc272 : 0x121921, toneMapped: false });
    const win = meshBox(1.3, 1.15, 0.08, winMat, -w * 0.22, h * 0.54, d / 2 + 0.05);
    group.add(win);
    const door = meshBox(1.2, 2.2, 0.1, new THREE.MeshStandardMaterial({ color: 0x29241f }), w * 0.23, 1.1, d / 2 + 0.05);
    group.add(door);
    group.position.set(x, 0, z);
    group.rotation.y = rot;
    scene.add(group);
    addCollider(x, z, w, d);
    return group;
  }

  function addSign(text, color, width, height, x, y, z, ry, sub = '') {
    const texture = textTexture(text, color, {
      sub, width: 1024, height: sub ? 360 : 256,
      bg: 'rgba(4,5,8,.82)',
    });
    const mesh = new THREE.Mesh(
      new THREE.PlaneGeometry(width, height),
      new THREE.MeshBasicMaterial({
        map: texture, transparent: true, side: THREE.DoubleSide,
        toneMapped: false, depthWrite: false,
      }),
    );
    mesh.position.set(x, y, z);
    mesh.rotation.y = ry;
    scene.add(mesh);
    return mesh;
  }

  function addNeonLight(x, y, z, color, intensity = 8, distance = 26, flicker = false) {
    // Emissive signs carry most of the neon look. Keep only the strongest
    // practical lights so the scene stays fast on modest GPUs and phones.
    if (intensity < 9.5) return null;
    const light = new THREE.PointLight(color, intensity, distance, 2);
    light.position.set(x, y, z);
    scene.add(light);
    if (flicker) flickerLights.push({ light, base: intensity, phase: rnd(0, 10), speed: rnd(3, 11) });
    return light;
  }

  function addNeonStrip(x, y, z, w, h, d, color) {
    const mat = new THREE.MeshBasicMaterial({ color, toneMapped: false });
    const strip = meshBox(w, h, d, mat, x, y, z);
    scene.add(strip);
    return strip;
  }

  /* ---------------------------------------------------------- downtown core */
  addBuilding({ x: -34, z: -37, w: 29, d: 19, h: 9.2, color: 0x343b43, floors: 2, cols: 5, lit: 0.32 });
  addSign('PALACE ARCADE', '#ff4a83', 15, 3.1, -18.9, 6.4, -37, Math.PI / 2, 'INSERT COIN · OPEN LATE');
  addSign('ARCADE', '#56ddff', 6.4, 2, -18.8, 8.7, -26.5, Math.PI / 2);
  addNeonStrip(-19.1, 2.1, -45.5, 0.12, 0.12, 10, 0xff4a83);
  addNeonLight(-16, 5, -34, 0xff3f79, 11, 23, true);
  addNeonStrip(-18.95, 0.15, -37, 0.25, 0.1, 18, 0xffb347);
  // Arcade awning
  const awning = meshBox(3.4, 0.22, 17, new THREE.MeshStandardMaterial({ color: 0x2b0b12, roughness: 0.7 }), -17.2, 3.6, -37);
  scene.add(awning);

  addBuilding({ x: 38, z: -37, w: 24, d: 17, h: 8.1, color: 0x3f3c38, floors: 2, cols: 4, lit: 0.23 });
  addSign('FAMILY VIDEO', '#55e9ff', 13, 2.8, 25.9, 5.9, -37, -Math.PI / 2, 'BE KIND · REWIND');
  addNeonStrip(26.05, 2.4, -43, 0.1, 0.1, 7, 0x55e9ff);
  addNeonLight(24, 5, -37, 0x55dfff, 10, 20, true);

  addBuilding({ x: 35, z: 41, w: 21, d: 17, h: 7.2, color: 0x5c392b, floors: 2, cols: 3, lit: 0.32 });
  addSign("BENNY'S", '#ffcf6e', 8.8, 2.1, 24.4, 5.2, 41, -Math.PI / 2, 'BURGERS · 24 HR');
  addNeonLight(22, 4, 41, 0xffbb60, 9, 19, false);
  addNeonStrip(23.9, 1.4, 41, 0.12, 0.12, 10, 0xff345f);

  addBuilding({ x: -35, z: 41, w: 26, d: 21, h: 10.7, color: 0x413e42, floors: 3, cols: 5, lit: 0.2 });
  addSign('MELVALD', '#a48cff', 7, 1.9, -35, 8.7, 51.55, 0, 'GENERAL STORE');
  addNeonLight(-35, 7, 54, 0x9977ff, 7, 18, true);

  addBuilding({ x: -79, z: -38, w: 23, d: 18, h: 11.6, color: 0x3d3b37, floors: 4, cols: 4, lit: 0.19 });
  addBuilding({ x: 80, z: -38, w: 25, d: 19, h: 10.3, color: 0x343c42, floors: 3, cols: 4, lit: 0.18 });
  addBuilding({ x: -80, z: 38, w: 24, d: 19, h: 8.7, color: 0x4d4237, floors: 2, cols: 4, lit: 0.28 });
  addSign('HAWKINS LIBRARY', '#f0d7a1', 14, 2.1, -80, 7.4, 47.6, 0);
  addBuilding({ x: 80, z: 39, w: 22, d: 17, h: 7.6, color: 0x3f3b37, floors: 2, cols: 3, lit: 0.23 });
  addSign('RADIO SHACK', '#ff5b58', 11, 2, 80, 6, 47.6, 0, 'BATTERIES SOLD HERE');

  addBuilding({ x: -22, z: -91, w: 25, d: 19, h: 9, color: 0x3b3230, floors: 2, cols: 4, lit: 0.13 });
  addBuilding({ x: 26, z: -91, w: 27, d: 22, h: 12, color: 0x333131, floors: 3, cols: 5, lit: 0.2 });
  addSign('THE HAWK', '#ffd070', 9, 2, 26, 9.3, -79.8, 0, 'CINEMA · NOW SHOWING');
  addNeonLight(26, 8, -76, 0xffbd5b, 7, 20, true);
  addBuilding({ x: -82, z: -91, w: 44, d: 30, h: 13.6, color: 0x54473a, floors: 3, cols: 8, lit: 0.21 });
  addSign('HAWKINS HIGH', '#ffcf6e', 23, 3.3, -82, 10.4, -75.8, 0, 'HOME OF THE TIGERS');
  addNeonLight(-82, 9, -72, 0xffb347, 9, 25, false);
  addBuilding({ x: 82, z: -93, w: 30, d: 26, h: 11.2, color: 0x3c3738, floors: 3, cols: 5, lit: 0.18 });
  addSign('HAWKINS POST', '#e9e3ce', 9, 1.8, 82, 8.9, -79.8, 0, 'THE TRUTH IS OUT THERE');

  addBuilding({ x: -82, z: 91, w: 28, d: 24, h: 8.9, color: 0x4a4036, floors: 2, cols: 5, lit: 0.3 });
  addBuilding({ x: -26, z: 93, w: 24, d: 22, h: 10.1, color: 0x353838, floors: 3, cols: 4, lit: 0.25 });
  addBuilding({ x: 27, z: 92, w: 29, d: 24, h: 9.4, color: 0x433931, floors: 2, cols: 5, lit: 0.24 });
  addBuilding({ x: 81, z: 91, w: 25, d: 22, h: 8.4, color: 0x353739, floors: 2, cols: 4, lit: 0.28 });

  // Suburban homes along the north and south blocks.
  for (let i = 0; i < 7; i++) {
    addHouse(-205 + i * 33, -70 + (i % 2) * 25, pick([0x806d54, 0x6c5a48, 0x756e62]), 0x2a1f1c, (i % 2) * 0.08);
    addHouse(-205 + i * 33, 205 + (i % 2) * 9, pick([0x6e624e, 0x7f6852, 0x5f675f]), 0x23201e, 0);
  }
  for (let i = 0; i < 5; i++) {
    addHouse(185 + (i % 2) * 35, -70 + i * 37, pick([0x6b5b49, 0x816e58, 0x5c615a]), 0x261c1b, 0);
  }

  /* ---------------------------------------------------------------- arcade */
  // Neon motel on the edge of town.
  addBuilding({ x: 205, z: 18, w: 25, d: 15, h: 6.2, color: 0x3c3c42, floors: 2, cols: 5, lit: 0.38 });
  addSign('MOTEL 86', '#ff4a83', 9.5, 2.3, 192, 5.8, 18, -Math.PI / 2, 'VACANCY');
  addNeonLight(190, 4.5, 18, 0xff3f79, 8, 20, true);

  /* --------------------------------------------------------------- Hawkins Lab */
  addBuilding({ x: -174, z: -55, w: 61, d: 37, h: 14.5, color: 0x474b4d, floors: 3, cols: 9, lit: 0.15, roof: 0x131619 });
  addSign('HAWKINS NATIONAL LABORATORY', '#e4e1d1', 27, 2.5, -174, 10.2, -36.2, 0, 'DEPARTMENT OF ENERGY');
  const fenceMat = new THREE.MeshStandardMaterial({ color: 0x4c4e4b, metalness: 0.55, roughness: 0.7 });
  for (let i = 0; i < 13; i++) {
    const post = meshBox(0.1, 2.8, 0.1, fenceMat, -207 + i * 4.4, 1.4, -29);
    scene.add(post);
  }
  const fenceRail = meshBox(58, 0.08, 0.08, fenceMat, -174, 2.7, -29);
  scene.add(fenceRail);
  addNeonLight(-154, 7, -31, 0xff4031, 12, 30, true);
  addNeonLight(-195, 4, -34, 0x79dfff, 5, 18, false);
  addSign('RESTRICTED', '#ff5042', 5.8, 1.4, -154, 3.2, -29.1, 0);

  /* --------------------------------------------------------------- Creel House */
  const creel = new THREE.Group();
  const creelWall = new THREE.MeshStandardMaterial({ color: 0x403b39, roughness: 0.97 });
  const mansion = meshBox(30, 15, 23, creelWall, 0, 7.5, 0);
  creel.add(mansion);
  const gable = new THREE.Mesh(new THREE.ConeGeometry(20, 9, 4), new THREE.MeshStandardMaterial({ color: 0x201b1b, roughness: 1 }));
  gable.rotation.y = Math.PI / 4;
  gable.position.y = 19.5;
  gable.scale.z = 0.8;
  creel.add(gable);
  const creelTower = meshBox(8, 22, 8, creelWall, -9, 11, 7);
  creel.add(creelTower);
  const turret = new THREE.Mesh(new THREE.ConeGeometry(6.3, 10, 8), new THREE.MeshStandardMaterial({ color: 0x181516 }));
  turret.position.set(-9, 27, 7);
  creel.add(turret);
  const creelWindowMat = new THREE.MeshBasicMaterial({ color: 0xff2b23, toneMapped: false });
  for (const [x, y, z] of [[-9, 14, 11.1], [-9, 22, 11.1], [6, 9, 11.55], [-2, 8, 11.55], [13, 9, 11.55]]) {
    creel.add(meshBox(1.5, 2.3, 0.08, creelWindowMat, x, y, z));
  }
  const porch = meshBox(34, 0.5, 7, new THREE.MeshStandardMaterial({ color: 0x2b2321, roughness: 0.95 }), 0, 0.35, 14);
  creel.add(porch);
  for (const x of [-13, -6, 6, 13]) {
    creel.add(meshBox(0.5, 5.8, 0.5, new THREE.MeshStandardMaterial({ color: 0x2c2522 }), x, 2.9, 17.2));
  }
  const porchRoof = meshBox(37, 0.36, 9, new THREE.MeshStandardMaterial({ color: 0x1c1818 }), 0, 5.9, 14);
  creel.add(porchRoof);
  creel.position.set(-70, 0, -178);
  scene.add(creel);
  addCollider(-70, -178, 30, 23);
  addSign('CREEL HOUSE', '#bdb29c', 9, 1.7, -70, 6.6, -164, 0);
  addNeonLight(-70, 14, -166, 0xff2b20, 11, 33, true);
  const creelMist = new THREE.PointLight(0x9d1620, 6, 45, 2);
  creelMist.position.set(-70, 2, -166);
  scene.add(creelMist);
  flickerLights.push({ light: creelMist, base: 6, phase: 1.7, speed: 1.4 });

  /* --------------------------------------------------------------- Starcourt */
  addBuilding({ x: 150, z: -186, w: 78, d: 44, h: 17.5, color: 0x4b5057, floors: 3, cols: 12, lit: 0.24, roof: 0x12161a });
  addSign('STARCOURT', '#6fefff', 32, 4.8, 150, 13.5, -163.7, 0, 'SHOPPING · DINING · DANGER');
  addSign('SCOOPS AHOY', '#ff6d9d', 10.5, 2, 116, 4.4, -163.6, 0);
  addNeonLight(150, 10, -160, 0x5be9ff, 14, 40, false);
  addNeonLight(116, 3, -160, 0xff5b92, 8, 20, true);
  const glass = new THREE.Mesh(
    new THREE.PlaneGeometry(24, 8),
    new THREE.MeshPhysicalMaterial({ color: 0x12242c, metalness: 0.75, roughness: 0.14, transparent: true, opacity: 0.62 }),
  );
  glass.position.set(150, 4.3, -163.55);
  scene.add(glass);
  // Parking lot.
  const lotCanvas = noiseCanvas(128, '#1a1d20', 500, 0);
  const lotTex = canvasTexture(lotCanvas, { repeat: [10, 5] });
  const lot = new THREE.Mesh(new THREE.PlaneGeometry(90, 26), new THREE.MeshStandardMaterial({ map: lotTex, roughness: 0.93 }));
  lot.rotation.x = -Math.PI / 2;
  lot.position.set(150, 0.02, -144);
  scene.add(lot);

  /* -------------------------------------------------------------- Forest Hills */
  // Dirt drive and trailer park.
  const dirtCanvas = noiseCanvas(128, '#3d3326', 1300, 0);
  const dirt = new THREE.Mesh(
    new THREE.PlaneGeometry(96, 56),
    new THREE.MeshStandardMaterial({ map: canvasTexture(dirtCanvas, { repeat: [8, 5] }), color: 0x9b8d72, roughness: 1 }),
  );
  dirt.rotation.x = -Math.PI / 2;
  dirt.position.set(158, 0.02, 74);
  scene.add(dirt);
  addSign('FOREST HILLS', '#e9c891', 11, 2.2, 119, 4.3, 58, -0.15, 'TRAILER PARK');
  addNeonLight(124, 3.5, 60, 0xffae58, 3.5, 13, false);

  function addTrailer(x, z, rot = 0, color = 0xa7a597, stripe = 0x2c75a3, eddie = false) {
    const group = new THREE.Group();
    const body = new THREE.Mesh(
      new THREE.BoxGeometry(15, 3.8, 6.2),
      new THREE.MeshStandardMaterial({ color, roughness: 0.7, metalness: 0.25 }),
    );
    body.position.y = 2.2;
    group.add(body);
    const roof = new THREE.Mesh(new THREE.CylinderGeometry(3.15, 3.15, 15, 10, 1, false, 0, Math.PI), new THREE.MeshStandardMaterial({ color: 0x5f6361, metalness: 0.35, roughness: 0.75 }));
    roof.rotation.z = Math.PI / 2;
    roof.position.y = 4.1;
    group.add(roof);
    const stripeMesh = meshBox(15.05, 0.42, 6.26, new THREE.MeshBasicMaterial({ color: stripe }), 0, 2.75, 0);
    group.add(stripeMesh);
    const winMat = new THREE.MeshBasicMaterial({ color: eddie ? 0xff8a3d : 0x1a2229, toneMapped: false });
    for (const wx of [-4.5, 0, 4.5]) {
      group.add(meshBox(1.8, 1.1, 0.08, winMat, wx, 2.75, 3.14));
    }
    const door = meshBox(1.1, 2.3, 0.08, new THREE.MeshStandardMaterial({ color: 0x26211d }), 2.9, 1.55, 3.15);
    group.add(door);
    const step = meshBox(2.2, 0.25, 1.2, new THREE.MeshStandardMaterial({ color: 0x3a322a }), 2.9, 0.3, 3.8);
    group.add(step);
    // Bare bulb on the porch.
    const bulb = new THREE.Mesh(new THREE.SphereGeometry(0.11, 8, 8), new THREE.MeshBasicMaterial({ color: 0xffc277, toneMapped: false }));
    bulb.position.set(2.9, 3.7, 3.9);
    group.add(bulb);
    if (eddie) {
      const amp = meshBox(1.9, 1.1, 0.8, new THREE.MeshStandardMaterial({ color: 0x18181b }), -4, 0.6, 4.5);
      group.add(amp);
      const guitar = new THREE.Group();
      const guitarBody = new THREE.Mesh(new THREE.SphereGeometry(0.58, 8, 6), new THREE.MeshStandardMaterial({ color: 0xba1424, roughness: 0.36, metalness: 0.2 }));
      guitarBody.scale.set(0.75, 1, 0.24);
      guitar.add(guitarBody);
      const neck = meshBox(0.16, 2.3, 0.14, new THREE.MeshStandardMaterial({ color: 0x2b1b14 }), 0, 1.35, 0);
      guitar.add(neck);
      guitar.position.set(-1.5, 1.8, 4.4);
      guitar.rotation.z = 0.25;
      group.add(guitar);
    }
    group.position.set(x, 0, z);
    group.rotation.y = rot;
    scene.add(group);
    addCollider(x, z, rot % Math.PI ? 7 : 15, rot % Math.PI ? 15 : 7, 'trailer');
    return group;
  }

  addTrailer(144, 68, 0, 0xb6b5aa, 0x1f5e83, true);
  addTrailer(170, 60, 0.08, 0xa78e77, 0x7f2c2c);
  addTrailer(181, 84, -0.05, 0x9a9a8d, 0x4f337b);
  addTrailer(142, 96, -0.06, 0x8f8f87, 0x2d6d5b);
  const eddieVan = new THREE.Group();
  {
    const vanBody = meshBox(7.5, 3.1, 3.8, new THREE.MeshStandardMaterial({ color: 0x34383a, roughness: 0.55, metalness: 0.3 }), 0, 1.8, 0);
    eddieVan.add(vanBody);
    const vanTop = meshBox(4.8, 1.4, 3.7, new THREE.MeshStandardMaterial({ color: 0x262b2e, roughness: 0.6 }), -1.1, 3.4, 0);
    eddieVan.add(vanTop);
    const vanStripe = meshBox(7.55, 0.3, 3.85, new THREE.MeshBasicMaterial({ color: 0xc33333 }), 0, 2.2, 0);
    eddieVan.add(vanStripe);
    for (const z of [-1.7, 1.7]) {
      const wheel = new THREE.Mesh(new THREE.CylinderGeometry(0.58, 0.58, 0.44, 12), new THREE.MeshStandardMaterial({ color: 0x0b0b0d, roughness: 0.9 }));
      wheel.rotation.x = Math.PI / 2;
      wheel.position.set(2.2, 0.58, z);
      eddieVan.add(wheel);
    }
    eddieVan.position.set(155, 0, 72);
    eddieVan.rotation.y = -1.15;
    scene.add(eddieVan);
    addCollider(155, 72, 6, 6, 'van');
  }

  /* ------------------------------------------------------------------ Lover's Lake */
  const lakeCenter = new THREE.Vector3(-165, 0, 158);
  const shore = new THREE.Mesh(
    new THREE.CircleGeometry(54, 64),
    new THREE.MeshStandardMaterial({ color: 0x403a2c, roughness: 1 }),
  );
  shore.rotation.x = -Math.PI / 2;
  shore.position.set(lakeCenter.x, -0.01, lakeCenter.z);
  scene.add(shore);
  const waterMat = new THREE.MeshStandardMaterial({
    color: 0x0b2631,
    emissive: 0x06131b,
    emissiveIntensity: 0.8,
    metalness: 0.75,
    roughness: 0.16,
    transparent: true,
    opacity: 0.88,
  });
  const water = new THREE.Mesh(new THREE.CircleGeometry(50, 64), waterMat);
  water.rotation.x = -Math.PI / 2;
  water.position.set(lakeCenter.x, 0.055, lakeCenter.z);
  scene.add(water);
  const moonPath = new THREE.Mesh(
    new THREE.PlaneGeometry(7, 38),
    new THREE.MeshBasicMaterial({ color: 0x99c4db, transparent: true, opacity: 0.11, blending: THREE.AdditiveBlending, depthWrite: false }),
  );
  moonPath.rotation.x = -Math.PI / 2;
  moonPath.position.set(-145, 0.07, 154);
  scene.add(moonPath);

  // Wooden dock reaching into the lake.
  const dockMat = new THREE.MeshStandardMaterial({ color: 0x3b2b20, roughness: 0.9 });
  for (let i = 0; i < 12; i++) {
    const plank = meshBox(3.0, 0.16, 1.7, dockMat, -111 - i * 3, 0.53, 156);
    plank.rotation.y = 0.01 * (i % 2 ? 1 : -1);
    scene.add(plank);
  }
  for (const z of [153.7, 158.3]) {
    for (const x of [-112, -126, -140]) {
      const piling = meshBox(0.25, 2.2, 0.25, dockMat, x, 0.2, z);
      scene.add(piling);
    }
  }
  addSign("LOVER'S LAKE", '#91d5e9', 9, 1.8, -108, 3.4, 149, Math.PI / 2, 'NO SWIMMING AFTER DARK');
  addNeonLight(-110, 3, 153, 0x6ac7e3, 2.8, 14, false);

  // Reeds and rocks.
  for (let i = 0; i < 36; i++) {
    const a = rnd(0, TAU);
    const r = rnd(48, 56);
    const reed = new THREE.Mesh(
      new THREE.ConeGeometry(0.12, rnd(1.2, 3.3), 4),
      new THREE.MeshStandardMaterial({ color: 0x34422e, roughness: 1 }),
    );
    reed.position.set(lakeCenter.x + Math.cos(a) * r, rnd(0.3, 0.7), lakeCenter.z + Math.sin(a) * r);
    scene.add(reed);
  }

  /* --------------------------------------------------------------- Water tower */
  const tower = new THREE.Group();
  const towerMat = new THREE.MeshStandardMaterial({ color: 0x8b8578, metalness: 0.25, roughness: 0.72 });
  for (const [x, z] of [[-5, -5], [5, -5], [-5, 5], [5, 5]]) {
    const leg = meshBox(0.65, 33, 0.65, towerMat, x, 16.5, z);
    tower.add(leg);
  }
  const tank = new THREE.Mesh(new THREE.CylinderGeometry(9, 9, 10, 16), towerMat);
  tank.position.y = 33;
  tower.add(tank);
  const cap = new THREE.Mesh(new THREE.ConeGeometry(9.5, 4.5, 16), new THREE.MeshStandardMaterial({ color: 0x5d5c55, roughness: 0.8 }));
  cap.position.y = 40.2;
  tower.add(cap);
  const towerSign = textTexture('HAWKINS', '#ece7d2', { width: 512, height: 128, bg: null });
  const towerSignMesh = new THREE.Mesh(
    new THREE.PlaneGeometry(14, 3.5),
    new THREE.MeshBasicMaterial({ map: towerSign, transparent: true, toneMapped: false, depthWrite: false }),
  );
  towerSignMesh.position.set(0, 33, 9.05);
  tower.add(towerSignMesh);
  tower.position.set(CITY.waterTower.x, 0, CITY.waterTower.z);
  scene.add(tower);
  addCollider(CITY.waterTower.x, CITY.waterTower.z, 13, 13, 'tower');

  /* ------------------------------------------------------------- street lights */
  function addStreetlight(x, z, light = false, color = 0xffb45f) {
    const group = new THREE.Group();
    const mat = new THREE.MeshStandardMaterial({ color: 0x2b3032, metalness: 0.4, roughness: 0.68 });
    group.add(meshBox(0.22, 6.6, 0.22, mat, 0, 3.3, 0));
    group.add(meshBox(2.1, 0.15, 0.18, mat, 0.9, 6.55, 0));
    const bulb = new THREE.Mesh(new THREE.SphereGeometry(0.22, 8, 8), new THREE.MeshBasicMaterial({ color: 0xffd18a, toneMapped: false }));
    bulb.position.set(1.8, 6.42, 0);
    group.add(bulb);
    const glow = new THREE.Sprite(new THREE.SpriteMaterial({ map: radialGlow, color, transparent: true, opacity: 0.55, blending: THREE.AdditiveBlending, depthWrite: false }));
    glow.scale.set(4, 4, 1);
    glow.position.set(1.8, 6.42, 0);
    group.add(glow);
    group.position.set(x, 0, z);
    scene.add(group);
    if (light) addNeonLight(x + 1.8, 6.4, z, color, 13, 29, rng() < 0.18);
    return group;
  }
  for (let z = -220; z <= 220; z += 44) {
    if (Math.abs(z) < 15) continue;
    addStreetlight(-12.5, z, false);
    addStreetlight(12.5, z + 22, false);
  }
  for (let x = -220; x <= 220; x += 55) {
    if (Math.abs(x) < 17) continue;
    addStreetlight(x + 12, -12.5, false);
    addStreetlight(x - 12, 12.5, false);
  }

  /* ------------------------------------------------------------------ trees */
  const treeRng = seeded(4404);
  const treePositions = [];
  for (let i = 0; i < 260 && treePositions.length < 190; i++) {
    const x = -270 + treeRng() * 540;
    const z = -270 + treeRng() * 540;
    if (Math.abs(x) < 18 || Math.abs(z) < 18) continue;
    if (onRoad(x, z, 3)) continue;
    if (blocked(x, z, 2)) continue;
    if (distToLake(x, z) < 58) continue;
    if (Math.abs(x - 150) < 60 && Math.abs(z + 185) < 52) continue;
    if (Math.abs(x - 155) < 66 && Math.abs(z - 75) < 46) continue;
    treePositions.push({ x, z, s: 0.7 + treeRng() * 0.9, rot: treeRng() * TAU });
  }

  const trunkGeo = new THREE.CylinderGeometry(0.28, 0.46, 5.5, 5);
  const trunkMat = new THREE.MeshStandardMaterial({ color: 0x2a211b, roughness: 1 });
  const trunkInst = new THREE.InstancedMesh(trunkGeo, trunkMat, treePositions.length);
  const leafGeo = new THREE.IcosahedronGeometry(2.5, 0);
  const leafMat = new THREE.MeshStandardMaterial({ color: 0x182d24, roughness: 0.94, flatShading: true });
  const leafInst = new THREE.InstancedMesh(leafGeo, leafMat, treePositions.length * 2);
  const dummy = new THREE.Object3D();
  treePositions.forEach((tree, i) => {
    dummy.position.set(tree.x, 2.75 * tree.s, tree.z);
    dummy.rotation.set(0, tree.rot, 0);
    dummy.scale.set(tree.s, tree.s, tree.s);
    dummy.updateMatrix();
    trunkInst.setMatrixAt(i, dummy.matrix);
    const color = new THREE.Color().setHSL(0.3 + treeRng() * 0.05, 0.18 + treeRng() * 0.15, 0.1 + treeRng() * 0.07);
    leafInst.setColorAt(i * 2, color);
    leafInst.setColorAt(i * 2 + 1, color.clone().offsetHSL(0, 0, 0.025));
    dummy.position.set(tree.x - 0.8 * tree.s, 5.9 * tree.s, tree.z + 0.3);
    dummy.scale.set(tree.s * 1.15, tree.s * 0.9, tree.s * 1.05);
    dummy.updateMatrix();
    leafInst.setMatrixAt(i * 2, dummy.matrix);
    dummy.position.set(tree.x + 0.9 * tree.s, 6.8 * tree.s, tree.z - 0.4);
    dummy.scale.set(tree.s * 0.85, tree.s * 0.95, tree.s * 0.8);
    dummy.updateMatrix();
    leafInst.setMatrixAt(i * 2 + 1, dummy.matrix);
  });
  trunkInst.instanceMatrix.needsUpdate = true;
  leafInst.instanceMatrix.needsUpdate = true;
  if (leafInst.instanceColor) leafInst.instanceColor.needsUpdate = true;
  scene.add(trunkInst, leafInst);

  // Dead trees leaning over the Creel property.
  for (let i = 0; i < 15; i++) {
    const x = -110 + rnd(0, 78), z = -218 + rnd(0, 68);
    if (dist2(x, z, -70, -178) < 25) continue;
    const t = new THREE.Group();
    const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.45, 7, 4), new THREE.MeshStandardMaterial({ color: 0x211c1a, roughness: 1 }));
    trunk.position.y = 3.5;
    t.add(trunk);
    for (let b = 0; b < 3; b++) {
      const branch = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.14, 3.4, 4), trunk.material);
      branch.position.set(0, 4.2 + b * 0.7, 0);
      branch.rotation.z = (b - 1) * 0.66 + rnd(-0.2, 0.2);
      branch.rotation.x = rnd(-0.4, 0.4);
      branch.position.x = (b - 1) * 0.7;
      t.add(branch);
    }
    t.position.set(x, 0, z);
    scene.add(t);
  }

  function dist2(x, z, x2, z2) { return Math.hypot(x - x2, z - z2); }
  function distToLake(x, z) { return Math.hypot(x - lakeCenter.x, z - lakeCenter.z); }

  // A few benches and bus stops.
  for (const [x, z, ry] of [[-16, 15, 0], [16, -17, Math.PI], [-16, -25, 0]]) {
    const bench = new THREE.Group();
    bench.add(meshBox(4, 0.22, 0.8, new THREE.MeshStandardMaterial({ color: 0x372a20 }), 0, 0.65, 0));
    bench.add(meshBox(4, 0.22, 0.7, new THREE.MeshStandardMaterial({ color: 0x31251c }), 0, 1.55, 0.45));
    bench.add(meshBox(0.18, 1.5, 0.7, new THREE.MeshStandardMaterial({ color: 0x27201b }), -1.75, 0.75, 0));
    bench.add(meshBox(0.18, 1.5, 0.7, new THREE.MeshStandardMaterial({ color: 0x27201b }), 1.75, 0.75, 0));
    bench.position.set(x, 0, z);
    bench.rotation.y = ry;
    scene.add(bench);
  }

  /* -------------------------------------------------------------------- rifts */
  const portalVertex = /* glsl */`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `;
  const portalFragment = /* glsl */`
    uniform float time;
    uniform vec3 hot;
    uniform vec3 cold;
    varying vec2 vUv;
    float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
    float noise(vec2 p) {
      vec2 i = floor(p); vec2 f = fract(p);
      vec2 u = f * f * (3.0 - 2.0 * f);
      return mix(mix(hash(i), hash(i + vec2(1,0)), u.x), mix(hash(i + vec2(0,1)), hash(i + vec2(1,1)), u.x), u.y);
    }
    void main() {
      vec2 p = vUv - 0.5;
      p.x *= 0.72;
      float r = length(p) * 2.0;
      float a = atan(p.y, p.x);
      float swirl = sin(a * 5.0 + r * 16.0 - time * 2.4 + noise(p * 8.0 + time * 0.2) * 5.0);
      float inner = smoothstep(1.03, 0.16, r);
      float rim = smoothstep(0.84, 0.67, r) * smoothstep(0.38, 0.63, r);
      float veins = smoothstep(0.25, 0.9, swirl * 0.5 + 0.5) * smoothstep(1.0, 0.35, r);
      float alpha = inner * (0.16 + veins * 0.48 + rim * 0.45);
      vec3 col = mix(cold, hot, clamp(rim + veins * 0.6, 0.0, 1.0));
      col += vec3(1.0, 0.32, 0.12) * pow(veins, 3.0) * 0.65;
      gl_FragColor = vec4(col, alpha);
    }
  `;

  function createRift(x, z, color = 0xff3b22) {
    const group = new THREE.Group();
    const portalMat = new THREE.ShaderMaterial({
      vertexShader: portalVertex,
      fragmentShader: portalFragment,
      uniforms: {
        time: { value: 0 },
        hot: { value: new THREE.Color(color) },
        cold: { value: new THREE.Color(0x240406) },
      },
      transparent: true,
      depthWrite: false,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending,
    });
    const portal = new THREE.Mesh(new THREE.PlaneGeometry(9, 12), portalMat);
    portal.position.y = 5.4;
    group.add(portal);

    const ringMat = new THREE.MeshStandardMaterial({ color: 0x150708, emissive: color, emissiveIntensity: 0.9, roughness: 0.35, metalness: 0.2 });
    const ring = new THREE.Mesh(new THREE.TorusGeometry(4.2, 0.14, 5, 56), ringMat);
    ring.scale.y = 1.28;
    ring.position.y = 5.4;
    group.add(ring);
    const ring2 = new THREE.Mesh(new THREE.TorusGeometry(4.55, 0.05, 4, 56), new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.52, blending: THREE.AdditiveBlending, depthWrite: false }));
    ring2.scale.y = 1.28;
    ring2.position.y = 5.4;
    group.add(ring2);

    const groundGlow = new THREE.Mesh(
      new THREE.CircleGeometry(8.5, 40),
      new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.11, blending: THREE.AdditiveBlending, depthWrite: false }),
    );
    groundGlow.rotation.x = -Math.PI / 2;
    groundGlow.position.y = 0.07;
    group.add(groundGlow);

    // Twisted organic tendrils.
    for (let i = 0; i < 9; i++) {
      const angle = (i / 9) * TAU + rnd(-0.25, 0.25);
      const radius = rnd(6, 11);
      const points = [];
      const steps = 5;
      for (let s = 0; s < steps; s++) {
        const t = s / (steps - 1);
        points.push(new THREE.Vector3(
          Math.cos(angle + t * 0.9) * radius * (1 - t * 0.34),
          0.04 + Math.sin(t * Math.PI) * rnd(0.2, 1.1),
          Math.sin(angle + t * 0.9) * radius * (1 - t * 0.34),
        ));
      }
      const curve = new THREE.CatmullRomCurve3(points);
      const tube = new THREE.Mesh(
        new THREE.TubeGeometry(curve, 12, 0.07 + rnd(0, 0.12), 4, false),
        new THREE.MeshStandardMaterial({ color: 0x2b090c, emissive: 0x7d1014, emissiveIntensity: 0.55, roughness: 0.5 }),
      );
      group.add(tube);
    }

    const light = new THREE.PointLight(color, 24, 42, 2);
    light.position.set(0, 5.5, 0);
    group.add(light);
    const glow = new THREE.Sprite(new THREE.SpriteMaterial({
      map: radialGlow, color, transparent: true, opacity: 0.38, blending: THREE.AdditiveBlending, depthWrite: false,
    }));
    glow.scale.set(22, 22, 1);
    glow.position.y = 5.5;
    group.add(glow);

    group.position.set(x, 0, z);
    group.traverse((o) => { o.userData.rift = true; });
    scene.add(group);
    const rift = {
      group, portal, portalMat, ring, ring2, light, glow, groundGlow,
      x, z, active: false, opened: 0, phase: rnd(0, 10),
    };
    rifts.push(rift);
    return rift;
  }

  createRift(CITY.lake.x, CITY.lake.z, 0xff4b27);
  createRift(CITY.creel.x, CITY.creel.z, 0xff2d30);
  createRift(CITY.mall.x, CITY.mall.z, 0xff5135);
  createRift(CITY.lab.x, CITY.lab.z, 0xff2020);

  /* --------------------------------------------------------------- objective */
  const beacon = new THREE.Group();
  const beaconColor = new THREE.Color(0x62ecff);
  const beamMat = new THREE.MeshBasicMaterial({
    color: beaconColor, transparent: true, opacity: 0.16,
    blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide,
  });
  const beam = new THREE.Mesh(new THREE.CylinderGeometry(0.55, 1.5, 70, 8, 1, true), beamMat);
  beam.position.y = 35;
  beacon.add(beam);
  const beaconRingMat = new THREE.MeshBasicMaterial({ color: beaconColor, transparent: true, opacity: 0.8, blending: THREE.AdditiveBlending, depthWrite: false });
  const beaconRing = new THREE.Mesh(new THREE.TorusGeometry(3.4, 0.08, 4, 36), beaconRingMat);
  beaconRing.rotation.x = -Math.PI / 2;
  beaconRing.position.y = 0.09;
  beacon.add(beaconRing);
  const beaconDiamond = new THREE.Mesh(new THREE.OctahedronGeometry(1.15, 0), new THREE.MeshBasicMaterial({ color: beaconColor, transparent: true, opacity: 0.83, blending: THREE.AdditiveBlending, depthWrite: false }));
  beaconDiamond.position.y = 7.6;
  beacon.add(beaconDiamond);
  const beaconLight = new THREE.PointLight(0x62ecff, 5, 20, 2);
  beaconLight.position.y = 2;
  beacon.add(beaconLight);
  scene.add(beacon);
  let beaconTarget = new THREE.Vector3(CITY.forestHills.x, 0, CITY.forestHills.z);
  beacon.position.copy(beaconTarget);
  let beaconVisible = true;

  function setBeacon(x, z, color = 0x62ecff, visible = true) {
    beaconTarget.set(x, 0, z);
    beacon.position.set(x, 0, z);
    beaconColor.set(color);
    beamMat.color.copy(beaconColor);
    beaconRingMat.color.copy(beaconColor);
    beaconDiamond.material.color.copy(beaconColor);
    beaconLight.color.copy(beaconColor);
    beaconVisible = visible;
    beacon.visible = visible;
  }

  /* --------------------------------------------------------------- particles */
  const ashCount = 620;
  const ashGeo = new THREE.BufferGeometry();
  const ashPositions = new Float32Array(ashCount * 3);
  const ashPhase = new Float32Array(ashCount);
  for (let i = 0; i < ashCount; i++) {
    ashPositions[i * 3] = rnd(-64, 64);
    ashPositions[i * 3 + 1] = rnd(0.5, 31);
    ashPositions[i * 3 + 2] = rnd(-64, 64);
    ashPhase[i] = rnd(0, TAU);
  }
  ashGeo.setAttribute('position', new THREE.BufferAttribute(ashPositions, 3));
  const ashMat = new THREE.PointsMaterial({
    color: 0xd8c3a8, size: 0.11, transparent: true, opacity: 0.68,
    depthWrite: false, sizeAttenuation: true, blending: THREE.AdditiveBlending,
  });
  const ash = new THREE.Points(ashGeo, ashMat);
  ash.frustumCulled = false;
  scene.add(ash);

  const fireflyCount = 80;
  const fireflyGeo = new THREE.BufferGeometry();
  const fireflyPositions = new Float32Array(fireflyCount * 3);
  for (let i = 0; i < fireflyCount; i++) {
    fireflyPositions[i * 3] = rnd(-30, 30);
    fireflyPositions[i * 3 + 1] = rnd(0.3, 3.2);
    fireflyPositions[i * 3 + 2] = rnd(-30, 30);
  }
  fireflyGeo.setAttribute('position', new THREE.BufferAttribute(fireflyPositions, 3));
  const fireflies = new THREE.Points(fireflyGeo, new THREE.PointsMaterial({
    color: 0xffc16a, size: 0.2, transparent: true, opacity: 0.48,
    depthWrite: false, blending: THREE.AdditiveBlending,
  }));
  fireflies.frustumCulled = false;
  scene.add(fireflies);

  function updateWorld(dt, time, target) {
    if (target) {
      ash.position.x = target.x;
      ash.position.z = target.z;
      fireflies.position.x = target.x;
      fireflies.position.z = target.z;
      for (let i = 0; i < ashCount; i++) {
        let y = ashPositions[i * 3 + 1] - dt * (0.22 + (i % 7) * 0.055);
        let x = ashPositions[i * 3] + Math.sin(time * 0.25 + ashPhase[i]) * dt * 0.15;
        if (y < 0.2) {
          y = 29 + Math.random() * 2;
          x = rnd(-64, 64);
          ashPositions[i * 3 + 2] = rnd(-64, 64);
        }
        ashPositions[i * 3] = x;
        ashPositions[i * 3 + 1] = y;
      }
      ashGeo.attributes.position.needsUpdate = true;
      for (let i = 0; i < fireflyCount; i++) {
        fireflyPositions[i * 3 + 1] += Math.sin(time * 1.3 + i * 2.1) * dt * 0.11;
      }
      fireflyGeo.attributes.position.needsUpdate = true;
    }

    for (const item of flickerLights) {
      const v = item.base * (0.66 + 0.34 * Math.sin(time * item.speed + item.phase) + (Math.random() < 0.008 ? -0.5 : 0));
      item.light.intensity = Math.max(0, v);
    }

    for (const rift of rifts) {
      rift.portalMat.uniforms.time.value = time + rift.phase;
      rift.ring.rotation.z += dt * 0.22;
      rift.ring2.rotation.z -= dt * 0.13;
      const targetScale = rift.active ? 1 : 0.16;
      rift.group.scale.x = damp(rift.group.scale.x, targetScale, 2.2, dt);
      rift.group.scale.y = rift.group.scale.x;
      rift.group.scale.z = rift.group.scale.x;
      rift.group.visible = rift.group.scale.x > 0.05;
      rift.light.visible = rift.group.scale.x > 0.8;
      rift.light.intensity = rift.active ? 22 + Math.sin(time * 2.3 + rift.phase) * 5 : 4;
      rift.portalMat.uniforms.hot.value.offsetHSL(0, 0, Math.sin(time * 0.7) * 0.006);
      if (rift.active) {
        rift.light.position.x = Math.sin(time * 0.7 + rift.phase) * 0.8;
        rift.glow.material.opacity = 0.3 + Math.sin(time * 1.6) * 0.08;
      }
    }

    if (beaconVisible) {
      beaconDiamond.rotation.y += dt * 1.4;
      beaconDiamond.rotation.x += dt * 0.4;
      beaconDiamond.position.y = 7.6 + Math.sin(time * 2.2) * 0.4;
      beaconRing.scale.setScalar(1 + Math.sin(time * 2.5) * 0.07);
      beamMat.opacity = 0.12 + Math.sin(time * 1.8) * 0.035;
      beaconLight.intensity = 4 + Math.sin(time * 3) * 1.5;
    }

    waterMat.opacity = 0.84 + Math.sin(time * 0.9) * 0.025;
    moonPath.material.opacity = 0.085 + Math.sin(time * 0.6) * 0.025;
  }

  return {
    colliders,
    roads,
    rifts,
    landmarks: LANDMARKS,
    beacon,
    setBeacon,
    blocked,
    onRoad,
    updateWorld,
    lake: { x: lakeCenter.x, z: lakeCenter.z, radius: 52 },
    isInLake(x, z) { return Math.hypot(x - lakeCenter.x, z - lakeCenter.z) < 48; },
  };
}

function cameraPositionApprox(x, y, z) {
  return new THREE.Vector3(x, y, z);
}
