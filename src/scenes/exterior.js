import * as THREE from 'three';
import {
  mulberry32, std, box, cyl, cylinderBetween, canvasTexture, glowTexture,
  spriteGlow, makeRain, makeLightShaft, makeGround, makePuddle,
  buildHouse, buildTree, asphaltTexture, sidingTexture, shingleTexture,
  silhouetteTexture
} from '../props.js';
import { actor, skyDome, rainFor, dustFor, lightningCycle, flickerLight } from '../scene-helpers.js';

function makeCar(group, x, z, rot) {
  const car = new THREE.Group();
  car.position.set(x, 0, z);
  car.rotation.y = rot;
  const bodyMat = std(0x1b2428, { roughness: 0.38, metalness: 0.45 });
  const chrome = std(0x8a9297, { roughness: 0.2, metalness: 0.9 });
  const glass = new THREE.MeshStandardMaterial({ color: 0x070d12, roughness: 0.08, metalness: 0.6 });
  box(car, 4.8, 0.62, 1.95, bodyMat, 0, 0.72, 0);
  box(car, 3.0, 0.62, 1.75, bodyMat, -0.2, 1.3, 0);
  box(car, 2.6, 0.48, 1.62, glass, -0.2, 1.34, 0.04);
  box(car, 1.5, 0.5, 1.73, bodyMat, 1.35, 1.28, 0);
  box(car, 4.85, 0.12, 1.7, chrome, 0, 0.98, 0);
  for (const sx of [-1.55, 1.55]) {
    for (const sz of [-0.98, 0.98]) {
      const wheel = new THREE.Mesh(new THREE.CylinderGeometry(0.38, 0.38, 0.24, 14), std(0x0a0a0b));
      wheel.rotation.x = Math.PI / 2;
      wheel.position.set(sx, 0.4, sz);
      car.add(wheel);
      const hub = new THREE.Mesh(new THREE.CylinderGeometry(0.17, 0.17, 0.26, 10), chrome);
      hub.rotation.x = Math.PI / 2;
      hub.position.set(sx, 0.4, sz);
      car.add(hub);
    }
  }
  for (const sx of [-2.42, 2.42]) {
    box(car, 0.1, 0.22, 1.9, chrome, sx, 0.55, 0);
  }
  for (const sz of [-0.72, 0.72]) {
    const tail = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.14, 0.22), new THREE.MeshStandardMaterial({ color: 0x5a0d0c, emissive: 0x7a0f08, emissiveIntensity: 0.5 }));
    tail.position.set(-2.44, 0.76, sz);
    car.add(tail);
  }
  const cabLight = new THREE.Sprite(new THREE.SpriteMaterial({ color: 0xffd9a0, transparent: true, opacity: 0.06, blending: THREE.AdditiveBlending, depthWrite: false }));
  cabLight.scale.setScalar(2.4);
  cabLight.position.set(0, 1.4, 0);
  car.add(cabLight);
  group.add(car);
  return car;
}

function makeLamp(group) {
  const g = new THREE.Group();
  g.position.set(-8.4, 0, 9.2);
  const metal = std(0x14181a, { roughness: 0.55, metalness: 0.35 });
  cyl(g, 0.09, 0.16, 6.6, metal, 0, 3.3, 0, 8);
  box(g, 1.7, 0.11, 0.11, metal, 0.8, 6.5, 0);
  box(g, 0.2, 0.34, 0.42, metal, 1.65, 6.36, 0);
  const lamp = new THREE.Mesh(new THREE.SphereGeometry(0.17, 10, 8), new THREE.MeshStandardMaterial({ color: 0xffe0a0, emissive: 0xffb050, emissiveIntensity: 4 }));
  lamp.position.set(1.65, 6.2, 0);
  g.add(lamp);
  const pl = new THREE.PointLight(0xffb066, 46, 25, 2);
  pl.position.set(1.65, 6.1, 0);
  g.add(pl);
  spriteGlow(g, 0xffb066, 3.2, 0.28, [1.65, 6.2, 0]);
  spriteGlow(g, 0xffb066, 10, 0.06, [1.65, 6.2, 0]);
  const shaft = makeLightShaft(0xffb066, 3.4, 7.5, 0.028);
  shaft.position.set(1.65, 0.3, 0);
  g.add(shaft);
  group.add(g);
  return { group: g, light: pl };
}

function makeBike(group) {
  const g = new THREE.Group();
  g.position.set(-3.7, 0, 8.2);
  g.rotation.y = -0.5;
  g.rotation.z = 0.12;
  const metal = std(0x2a2e30, { roughness: 0.3, metalness: 0.8 });
  const wheelGeo = new THREE.TorusGeometry(0.34, 0.028, 6, 20);
  for (const x of [-0.55, 0.55]) {
    const w = new THREE.Mesh(wheelGeo, metal);
    w.position.set(x, 0.36, 0);
    g.add(w);
    for (let i = 0; i < 8; i++) {
      const spoke = new THREE.Mesh(new THREE.CylinderGeometry(0.006, 0.006, 0.62, 3), metal);
      spoke.position.set(x, 0.36, 0);
      spoke.rotation.z = (i / 8) * Math.PI;
      g.add(spoke);
    }
  }
  const pts = [[-0.55, 0.36], [-0.1, 0.85], [0.4, 0.85], [0.55, 0.36], [0.1, 0.36]];
  for (let i = 0; i < pts.length - 1; i++) {
    const a = new THREE.Vector3(pts[i][0], pts[i][1], 0);
    const b = new THREE.Vector3(pts[i + 1][0], pts[i + 1][1], 0);
    const mesh = cylinderBetween(a, b, 0.018, 0.018, metal, 5);
    g.add(mesh);
  }
  const handle = new THREE.Mesh(new THREE.CylinderGeometry(0.016, 0.016, 0.42, 5), metal);
  handle.rotation.x = Math.PI / 2;
  handle.position.set(0.42, 1.0, 0);
  g.add(handle);
  const seat = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.05, 0.14), std(0x121212));
  seat.position.set(-0.13, 0.95, 0);
  g.add(seat);
  group.add(g);
}

function makeFence(group) {
  const mat = std(0x2a2721, { roughness: 0.96 });
  for (let i = 0; i < 12; i++) {
    const x = -14 + i * 0.9;
    const h = 0.9 + Math.random() * 0.2;
    const post = box(group, 0.06, h, 0.06, mat, x, h / 2, 11.8);
    post.rotation.z = (Math.random() - 0.5) * 0.16;
  }
  for (const y of [0.42, 0.74]) {
    const rail = box(group, 10.5, 0.06, 0.04, mat, -10, y, 11.8);
    rail.rotation.z = 0.012;
  }
  for (let i = 0; i < 2; i++) {
    const rail = box(group, 2.2, 0.06, 0.04, mat, 2.8 + i * 1.4, 0.6, 11.8);
    rail.rotation.z = i ? 0.3 : -0.22;
  }
}

export function buildExterior() {
  const group = new THREE.Group();
  const spec = { group, shots: {}, actors: [], hotspotData: [], updaters: [], defaultShot: 'establish' };

  const ground = makeGround(180, 0x070d09, 0.92);
  group.add(ground);

  const road = new THREE.Mesh(
    new THREE.PlaneGeometry(180, 8),
    new THREE.MeshStandardMaterial({ map: asphaltTexture(), color: 0x6a7073, roughness: 0.38, metalness: 0.24 })
  );
  road.rotation.x = -Math.PI / 2;
  road.position.set(0, 0.012, 15);
  road.receiveShadow = true;
  group.add(road);

  const path = new THREE.Mesh(
    new THREE.PlaneGeometry(4.6, 7),
    new THREE.MeshStandardMaterial({ map: asphaltTexture(), color: 0x3a3e3f, roughness: 0.5, metalness: 0.15 })
  );
  path.rotation.x = -Math.PI / 2;
  path.position.set(0, 0.016, 8.4);
  group.add(path);

  for (const [x, z, s] of [[2.2, 10.4, 2.4], [-2.8, 7.1, 1.4], [5.5, 12.2, 2.2], [-6, 14, 1.6]]) {
    const p = makePuddle(s);
    p.position.set(x, 0.02, z);
    group.add(p);
  }
  // fallen leaves
  const leafMat = std(0x2a1c0d, { roughness: 1 });
  const rnd = mulberry32(404);
  for (let i = 0; i < 220; i++) {
    const leaf = new THREE.Mesh(new THREE.CircleGeometry(0.025 + rnd() * 0.04, 3), leafMat);
    leaf.rotation.x = -Math.PI / 2;
    leaf.rotation.z = rnd() * Math.PI;
    leaf.position.set((rnd() - 0.5) * 26, 0.022, 6 + rnd() * 14);
    group.add(leaf);
  }

  const house = buildHouse();
  group.add(house.group);

  // lit window with Dana's silhouette
  const figureTex = canvasTexture(256, 320, (ctx, w, h) => {
    const g = ctx.createRadialGradient(w / 2, h * 0.5, 20, w / 2, h * 0.5, w * 0.72);
    g.addColorStop(0, 'rgba(255,190,110,0.92)');
    g.addColorStop(0.65, 'rgba(180,96,38,0.55)');
    g.addColorStop(1, 'rgba(20,12,6,0.3)');
    ctx.fillStyle = g; ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = 'rgba(16,10,8,0.92)';
    ctx.beginPath(); ctx.arc(w / 2, h * 0.4, 32, 0, Math.PI * 2); ctx.fill();
    ctx.fillRect(w / 2 - 13, h * 0.42, 26, 25);
    ctx.beginPath();
    ctx.moveTo(w / 2 - 44, h * 0.95);
    ctx.quadraticCurveTo(w / 2 - 30, h * 0.48, w / 2, h * 0.47);
    ctx.quadraticCurveTo(w / 2 + 30, h * 0.48, w / 2 + 44, h * 0.95);
    ctx.closePath(); ctx.fill();
    ctx.fillStyle = 'rgba(0,0,0,0.35)';
    for (let y = 0; y < h; y += 7) ctx.fillRect(0, y, w, 2);
  }, { repeat: [1, 1] });
  const fig = new THREE.Mesh(new THREE.PlaneGeometry(1.28, 1.75), new THREE.MeshBasicMaterial({ map: figureTex, transparent: true }));
  fig.position.set(-4.0, 6.2, 1.845);
  group.add(fig);
  const windowGlow = new THREE.PointLight(0xffa050, 8, 7, 2);
  windowGlow.position.set(-4.0, 6.2, 2.8);
  group.add(windowGlow);

  // moonlight
  const moon = new THREE.DirectionalLight(0x9db9dc, 2.0);
  moon.position.set(-16, 24, 18);
  moon.castShadow = true;
  moon.shadow.mapSize.set(1024, 1024);
  moon.shadow.camera.left = -28;
  moon.shadow.camera.right = 28;
  moon.shadow.camera.top = 26;
  moon.shadow.camera.bottom = -12;
  moon.shadow.camera.near = 1;
  moon.shadow.camera.far = 70;
  moon.shadow.bias = -0.0015;
  group.add(moon);

  const lamp = makeLamp(group);
  flickerLight(lamp.light, spec, { base: 46, speed: 2.1, amount: 0.1 });

  makeCar(group, 7.6, 7.0, 0.22);
  makeBike(group);
  makeFence(group);

  // mailbox
  const mailbox = new THREE.Group();
  mailbox.position.set(3.4, 0, 11.2);
  box(mailbox, 0.1, 1.1, 0.1, std(0x2a2721), 0, 0.55, 0);
  box(mailbox, 0.46, 0.3, 0.34, std(0x303a3a, { metalness: 0.5, roughness: 0.5 }), 0, 1.15, 0);
  const flag = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.18, 0.04), std(0x7c1a12));
  flag.position.set(0.26, 1.26, 0);
  mailbox.add(flag);
  group.add(mailbox);

  // trees
  const treeData = [
    [-12.5, 1.2, 12, 1.0], [12.8, -1.5, 10, 0.9], [-15.5, 9, 11, 1.1],
    [15.5, 9.5, 9, 0.85], [6.5, -6.5, 11, 1.0], [-7.5, -5.5, 9, 0.75],
    [-21, -3, 12, 1.2], [21, -4, 12, 1.1]
  ];
  treeData.forEach(([x, z, h, s], i) => {
    const t = buildTree(100 + i, h, 0x0c0e0d);
    t.position.set(x, 0, z);
    t.scale.setScalar(s);
    t.rotation.y = i * 0.8;
    group.add(t);
  });

  // distant houses across the road
  for (const [x, z, lit] of [[-23, -7, true], [22, -9, false], [-30, -14, false]]) {
    const g = new THREE.Group();
    g.position.set(x, 0, z);
    box(g, 8, 4.5, 7, std(0x11171a), 0, 2.2, 0);
    box(g, 8.6, 0.3, 7.6, std(0x0b0f11), 0, 4.6, 0, [0, 0, 0.32]);
    if (lit) {
      const w = new THREE.Mesh(new THREE.PlaneGeometry(1.1, 1.3), new THREE.MeshBasicMaterial({ color: 0xffbd77 }));
      w.position.set(-2, 2.7, 3.52);
      g.add(w);
      const pl = new THREE.PointLight(0xffae60, 14, 12, 2);
      pl.position.set(-2, 2.7, 4.4);
      g.add(pl);
    }
    group.add(g);
  }

  // foreground framing tree
  const frameTree = buildTree(909, 13, 0x050606);
  frameTree.position.set(-14, 0, 18);
  frameTree.rotation.y = 2.2;
  group.add(frameTree);

  // ground mist
  for (let i = 0; i < 5; i++) {
    const mist = new THREE.Sprite(new THREE.SpriteMaterial({
      map: glowTexture(), color: 0x233742, transparent: true, opacity: 0.035,
      blending: THREE.AdditiveBlending, depthWrite: false
    }));
    mist.scale.set(24, 7, 1);
    mist.position.set(-12 + i * 6, 1.6, 6 + (i % 2) * 4);
    group.add(mist);
  }

  // actors
  const ryan = actor(group, spec, 'RYAN', {
    height: 1.78, jacket: 0x30404a, shirt: 0x1a1c1e, pants: 0x262a2e, hair: 0x241811, flashlight: true
  }, [1.25, 0, 8.0], Math.PI, 'stand');
  const sam = actor(group, spec, 'SAM', {
    height: 1.72, jacket: 0x4a3d2a, shirt: 0x1e1a16, pants: 0x24262a, hair: 0x18120e, hairStyle: 'curly', flashlight: true
  }, [3.0, 0, 8.5], Math.PI - 0.18, 'stand');
  ryan.setPose('slump');
  sam.lookAtYaw(-0.2);

  // atmosphere
  rainFor(group, spec, { count: 1000, extent: 60, height: 26, opacity: 0.26 });
  dustFor(group, spec, { count: 110, area: [26, 8, 26], color: 0x9ab0c0, size: 0.04 });
  lightningCycle(spec, { min: 8, max: 14, first: 2.4 });

  const sky = skyDome(0x010307, 0x0a171f, 130, 0x17303d, { cloud: 0.65, cloudColor: 0x08121a });
  group.add(sky);
  spec.updaters.push((t) => { sky.material.uniforms.uTime.value = t; });

  const moonGlow = new THREE.Sprite(new THREE.SpriteMaterial({
    map: glowTexture(), color: 0x9ab4ce, transparent: true, opacity: 0.09, blending: THREE.AdditiveBlending, depthWrite: false
  }));
  moonGlow.scale.set(38, 38, 1);
  moonGlow.position.set(-36, 40, -60);
  group.add(moonGlow);

  spec.shots = {
    establish: { pos: [-10.5, 2.5, 16.5], look: [2.0, 5.0, -0.5], fov: 38, handheld: 0.2 },
    title: { pos: [-12, 2.6, 18.5], look: [2.4, 5.3, 0], fov: 37, handheld: 0.16 },
    approach: { pos: [-2.6, 1.9, 12.6], look: [0, 3.5, 2.2], fov: 42, handheld: 0.5 },
    porch: { pos: [0.6, 1.72, 9.6], look: [0, 3.0, 2.6], fov: 45, handheld: 0.55 },
    door: { pos: [0, 1.68, 6.2], look: [0, 1.9, 2.5], fov: 48, handheld: 0.7 },
    group: { pos: [-1.4, 1.58, 11.7], look: [2.0, 1.8, 5.0], fov: 44, handheld: 0.5 },
    window: { pos: [-1.0, 1.62, 10.8], look: [-4.0, 6.2, 2.4], fov: 31, handheld: 0.25 },
    lawn: { pos: [5.6, 1.35, 9.2], look: [-2.0, 3.2, 2.0], fov: 43, handheld: 0.4 },
    street: { pos: [12, 2.0, 15], look: [0, 3.5, 0], fov: 44, handheld: 0.3 }
  };
  spec.updaters.push((t) => {
    // subtle idle motion for actors
    ryan.lookAtYaw(Math.sin(t * 0.23) * 0.12);
    sam.lookAtYaw(-0.2 + Math.sin(t * 0.31 + 1) * 0.15);
  });

  spec.fog = new THREE.FogExp2(0x07121a, 0.0115);
  spec.background = new THREE.Color(0x03080d);
  spec.hemi = 5.0;
  spec.hemiColor = 0x7d93aa;
  spec.hemiGround = 0x24282c;
  spec.exposure = 1.18;
  spec.bloom = 0.68;
  spec.bloomThreshold = 0.6;
  spec.tint = 0xdfeaf5;
  spec.saturation = 0.9;
  spec.contrast = 1.04;
  spec.grain = 0.06;
  spec.aberration = 1.4;

  spec.update = (t, dt, engine) => {
    for (const u of spec.updaters) u(t, dt, engine);
  };
  spec.onEngine = (engine) => {
    spec._engine = engine;
  };
  return spec;
}
