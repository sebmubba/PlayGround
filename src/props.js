import * as THREE from 'three';

// ─── deterministic RNG ───────────────────────────────────────────
export function mulberry32(seed) {
  let a = seed >>> 0;
  return function () {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function canvasTexture(w, h, draw, { repeat = [1, 1], srgb = true, anisotropy = 4 } = {}) {
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  const ctx = c.getContext('2d');
  draw(ctx, w, h);
  const tex = new THREE.CanvasTexture(c);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(repeat[0], repeat[1]);
  tex.anisotropy = anisotropy;
  if (srgb) tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

export const std = (color, opts = {}) => new THREE.MeshStandardMaterial({
  color, roughness: 0.82, metalness: 0.02, ...opts
});

export function box(group, w, h, d, material, x = 0, y = 0, z = 0, rot = [0, 0, 0], cast = true, receive = true) {
  const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), material);
  m.position.set(x, y, z);
  m.rotation.set(rot[0], rot[1], rot[2]);
  m.castShadow = cast; m.receiveShadow = receive;
  group.add(m);
  return m;
}

export function cyl(group, rTop, rBot, h, material, x = 0, y = 0, z = 0, seg = 10) {
  const m = new THREE.Mesh(new THREE.CylinderGeometry(rTop, rBot, h, seg), material);
  m.position.set(x, y, z);
  m.castShadow = true; m.receiveShadow = true;
  group.add(m);
  return m;
}

export function cylinderBetween(a, b, r1, r2, material, seg = 6) {
  const dir = new THREE.Vector3().subVectors(b, a);
  const len = dir.length();
  const geo = new THREE.CylinderGeometry(r2, r1, len, seg, 1);
  const mesh = new THREE.Mesh(geo, material);
  mesh.position.copy(a).addScaledVector(dir, 0.5);
  mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir.clone().normalize());
  mesh.castShadow = true;
  return mesh;
}

// ─── glow / particles ────────────────────────────────────────────

let _glowTex = null;
export function glowTexture() {
  if (_glowTex) return _glowTex;
  const c = document.createElement('canvas');
  c.width = c.height = 128;
  const ctx = c.getContext('2d');
  const g = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
  g.addColorStop(0, 'rgba(255,255,255,1)');
  g.addColorStop(0.18, 'rgba(255,255,255,0.85)');
  g.addColorStop(0.5, 'rgba(255,255,255,0.2)');
  g.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 128, 128);
  _glowTex = new THREE.CanvasTexture(c);
  _glowTex.colorSpace = THREE.SRGBColorSpace;
  return _glowTex;
}

export function spriteGlow(group, color, scale = 2, opacity = 0.6, pos = [0, 0, 0]) {
  const mat = new THREE.SpriteMaterial({
    map: glowTexture(), color, transparent: true, opacity,
    blending: THREE.AdditiveBlending, depthWrite: false, depthTest: true
  });
  const s = new THREE.Sprite(mat);
  s.scale.set(scale, scale, 1);
  s.position.set(...pos);
  group.add(s);
  return s;
}

export function makeDust(count = 220, size = 0.05, color = 0xd8c9a8, area = [18, 9, 18], seed = 4) {
  const rnd = mulberry32(seed);
  const geo = new THREE.BufferGeometry();
  const pos = new Float32Array(count * 3);
  const speed = new Float32Array(count);
  const phase = new Float32Array(count);
  const scale = new Float32Array(count);
  for (let i = 0; i < count; i++) {
    pos[i * 3] = (rnd() - 0.5) * area[0];
    pos[i * 3 + 1] = rnd() * area[1];
    pos[i * 3 + 2] = (rnd() - 0.5) * area[2];
    speed[i] = 0.08 + rnd() * 0.22;
    phase[i] = rnd() * Math.PI * 2;
    scale[i] = 0.4 + rnd() * 1.2;
  }
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  geo.setAttribute('aSpeed', new THREE.BufferAttribute(speed, 1));
  geo.setAttribute('aPhase', new THREE.BufferAttribute(phase, 1));
  geo.setAttribute('aScale', new THREE.BufferAttribute(scale, 1));
  const mat = new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
    uniforms: { uTime: { value: 0 }, uSize: { value: size }, uColor: { value: new THREE.Color(color) }, uHeight: { value: area[1] } },
    vertexShader: `
      attribute float aSpeed; attribute float aPhase; attribute float aScale;
      uniform float uTime; uniform float uSize; uniform float uHeight;
      varying float vAlpha;
      void main() {
        vec3 p = position;
        p.y = mod(p.y + uTime * aSpeed, uHeight);
        p.x += sin(uTime * 0.22 + aPhase) * 0.55;
        p.z += cos(uTime * 0.17 + aPhase * 1.3) * 0.55;
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        gl_Position = projectionMatrix * mv;
        gl_PointSize = uSize * aScale * (240.0 / max(1.0, -mv.z));
        vAlpha = smoothstep(0.0, 0.8, p.y / uHeight) * (1.0 - smoothstep(0.75, 1.0, p.y / uHeight));
      }`,
    fragmentShader: `
      uniform vec3 uColor; varying float vAlpha;
      void main() {
        float d = length(gl_PointCoord - 0.5);
        float a = smoothstep(0.5, 0.05, d) * 0.7 * vAlpha;
        gl_FragColor = vec4(uColor, a);
      }`
  });
  const points = new THREE.Points(geo, mat);
  points.frustumCulled = false;
  return points;
}

export function makeSpores(count = 420, area = [40, 16, 40], seed = 7) {
  const dust = makeDust(count, 0.09, 0xff6a4a, area, seed);
  dust.material.uniforms.uSize.value = 0.13;
  return dust;
}

export function makeRain(count = 900, extent = 46, height = 22) {
  const rnd = mulberry32(22);
  const geo = new THREE.BufferGeometry();
  const pos = new Float32Array(count * 2 * 3);
  const base = new Float32Array(count * 2);
  const speed = new Float32Array(count * 2);
  const len = new Float32Array(count * 2);
  for (let i = 0; i < count; i++) {
    const x = (rnd() - 0.5) * extent;
    const z = (rnd() - 0.5) * extent;
    const y = rnd() * height;
    const l = 0.35 + rnd() * 0.55;
    for (let j = 0; j < 2; j++) {
      const k = (i * 2 + j);
      pos[k * 3] = x;
      pos[k * 3 + 1] = y;
      pos[k * 3 + 2] = z;
      base[k] = y;
      speed[k] = 14 + rnd() * 8;
      len[k] = j === 0 ? 0 : l;
    }
  }
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  geo.setAttribute('aBase', new THREE.BufferAttribute(base, 1));
  geo.setAttribute('aSpeed', new THREE.BufferAttribute(speed, 1));
  geo.setAttribute('aLen', new THREE.BufferAttribute(len, 1));
  const mat = new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
    uniforms: { uTime: { value: 0 }, uHeight: { value: height }, uColor: { value: new THREE.Color(0x9fb6c9) }, uOpacity: { value: 0.32 } },
    vertexShader: `
      attribute float aBase; attribute float aSpeed; attribute float aLen;
      uniform float uTime; uniform float uHeight;
      varying float vA;
      void main() {
        vec3 p = position;
        p.y = mod(aBase - uTime * aSpeed, uHeight) + aLen;
        p.x += aLen * 0.18;
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        gl_Position = projectionMatrix * mv;
        vA = 1.0 - clamp((p.y / uHeight), 0.0, 1.0) * 0.5;
      }`,
    fragmentShader: `
      uniform vec3 uColor; uniform float uOpacity; varying float vA;
      void main() { gl_FragColor = vec4(uColor, uOpacity * vA); }`
  });
  const lines = new THREE.LineSegments(geo, mat);
  lines.frustumCulled = false;
  return lines;
}

export function makeLightShaft(color = 0xffc98a, radius = 2.4, height = 9, opacity = 0.075) {
  const geo = new THREE.ConeGeometry(radius, height, 24, 1, true);
  const mat = new THREE.MeshBasicMaterial({
    color, transparent: true, opacity,
    blending: THREE.AdditiveBlending, side: THREE.DoubleSide,
    depthWrite: false
  });
  const m = new THREE.Mesh(geo, mat);
  m.position.y = height / 2;
  return m;
}

// ─── textures ────────────────────────────────────────────────────

export function woodFloorTexture() {
  return canvasTexture(512, 512, (ctx, w, h) => {
    const rnd = mulberry32(91);
    ctx.fillStyle = '#1d1510';
    ctx.fillRect(0, 0, w, h);
    const plankH = 50;
    for (let y = 0; y < h; y += plankH) {
      const shade = 18 + Math.floor(rnd() * 14);
      ctx.fillStyle = `rgb(${shade + 22}, ${shade + 10}, ${shade})`;
      ctx.fillRect(0, y + 1, w, plankH - 2);
      ctx.strokeStyle = 'rgba(0,0,0,0.6)';
      ctx.lineWidth = 2;
      ctx.strokeRect(-1, y, w + 2, plankH);
      for (let i = 0; i < 30; i++) {
        ctx.strokeStyle = `rgba(${30 + rnd() * 30},${20 + rnd() * 18},12,${0.15 + rnd() * 0.25})`;
        ctx.lineWidth = 0.8;
        const yy = y + rnd() * plankH;
        ctx.beginPath();
        ctx.moveTo(0, yy);
        ctx.bezierCurveTo(w * 0.3, yy + rnd() * 5, w * 0.6, yy - rnd() * 5, w, yy + rnd() * 3);
        ctx.stroke();
      }
      const seam = rnd() * w;
      ctx.fillStyle = 'rgba(0,0,0,0.55)';
      ctx.fillRect(seam, y, 2, plankH);
    }
  }, { repeat: [5, 4] });
}

export function wallpaperTexture() {
  return canvasTexture(512, 512, (ctx, w, h) => {
    const rnd = mulberry32(17);
    ctx.fillStyle = '#4a4130';
    ctx.fillRect(0, 0, w, h);
    const stripes = 10;
    for (let i = 0; i < stripes; i++) {
      ctx.fillStyle = i % 2 ? 'rgba(118,102,73,0.18)' : 'rgba(20,18,12,0.1)';
      ctx.fillRect((i * w) / stripes, 0, w / stripes, h);
    }
    ctx.strokeStyle = 'rgba(160,140,98,0.18)';
    ctx.lineWidth = 2;
    for (let y = 0; y < h; y += 128) {
      for (let x = 0; x < w; x += 128) {
        ctx.save();
        ctx.translate(x + 64, y + 64);
        ctx.beginPath();
        for (let a = 0; a < 4; a++) {
          const ang = (a / 4) * Math.PI * 2;
          ctx.ellipse(Math.cos(ang) * 24, Math.sin(ang) * 24, 16, 30, ang, 0, Math.PI * 2);
        }
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(0, 0, 8, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();
      }
    }
    for (let i = 0; i < 200; i++) {
      ctx.fillStyle = `rgba(10,8,5,${rnd() * 0.12})`;
      ctx.fillRect(rnd() * w, rnd() * h, 2 + rnd() * 22, 1 + rnd() * 4);
    }
    const grime = ctx.createLinearGradient(0, 0, 0, h);
    grime.addColorStop(0, 'rgba(0,0,0,0.24)');
    grime.addColorStop(0.55, 'rgba(0,0,0,0)');
    grime.addColorStop(1, 'rgba(0,0,0,0.4)');
    ctx.fillStyle = grime;
    ctx.fillRect(0, 0, w, h);
  }, { repeat: [3, 2] });
}

export function sidingTexture() {
  return canvasTexture(512, 512, (ctx, w, h) => {
    const rnd = mulberry32(41);
    ctx.fillStyle = '#30322b';
    ctx.fillRect(0, 0, w, h);
    for (let y = 0; y < h; y += 26) {
      ctx.fillStyle = y % 52 ? 'rgba(0,0,0,0.22)' : 'rgba(255,255,255,0.03)';
      ctx.fillRect(0, y, w, 3);
      ctx.fillStyle = `rgba(${20 + rnd() * 16},${22 + rnd() * 14},${18 + rnd() * 10},0.35)`;
      ctx.fillRect(0, y + 3, w, 23);
    }
    for (let i = 0; i < 60; i++) {
      ctx.fillStyle = 'rgba(130,140,120,0.06)';
      ctx.fillRect(rnd() * w, rnd() * h, rnd() * 100, 2);
    }
    const g = ctx.createLinearGradient(0, 0, 0, h);
    g.addColorStop(0, 'rgba(0,0,0,0.35)');
    g.addColorStop(1, 'rgba(0,0,0,0.65)');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, w, h);
  }, { repeat: [5, 3] });
}

export function shingleTexture() {
  return canvasTexture(512, 512, (ctx, w, h) => {
    const rnd = mulberry32(5);
    ctx.fillStyle = '#16181a';
    ctx.fillRect(0, 0, w, h);
    for (let y = 0; y < h; y += 28) {
      for (let x = (y / 28) % 2 ? -34 : 0; x < w; x += 68) {
        ctx.fillStyle = `rgba(${20 + rnd() * 12},${22 + rnd() * 10},${24 + rnd() * 10},1)`;
        ctx.fillRect(x + 1, y + 1, 66, 27);
        ctx.strokeStyle = 'rgba(0,0,0,0.5)';
        ctx.strokeRect(x + 1, y + 1, 66, 27);
      }
    }
  }, { repeat: [6, 3] });
}

export function asphaltTexture() {
  return canvasTexture(512, 512, (ctx, w, h) => {
    const rnd = mulberry32(76);
    ctx.fillStyle = '#171a1b';
    ctx.fillRect(0, 0, w, h);
    for (let i = 0; i < 8000; i++) {
      const c = 20 + Math.floor(rnd() * 30);
      ctx.fillStyle = `rgba(${c},${c + 2},${c + 2},${0.2 + rnd() * 0.4})`;
      ctx.fillRect(rnd() * w, rnd() * h, 1 + rnd() * 2, 1 + rnd() * 2);
    }
    for (let i = 0; i < 18; i++) {
      ctx.strokeStyle = 'rgba(0,0,0,0.6)';
      ctx.lineWidth = 1 + rnd() * 2;
      ctx.beginPath();
      let x = rnd() * w, y = rnd() * h;
      ctx.moveTo(x, y);
      for (let j = 0; j < 8; j++) {
        x += (rnd() - 0.5) * 50; y += (rnd() - 0.5) * 50;
        ctx.lineTo(x, y);
      }
      ctx.stroke();
    }
  }, { repeat: [8, 8] });
}

export function carpetTexture() {
  return canvasTexture(256, 256, (ctx, w, h) => {
    const rnd = mulberry32(9);
    ctx.fillStyle = '#2a1d1f';
    ctx.fillRect(0, 0, w, h);
    for (let i = 0; i < 5000; i++) {
      const c = 35 + rnd() * 30;
      ctx.fillStyle = `rgba(${c},${c * 0.72},${c * 0.7},0.5)`;
      ctx.fillRect(rnd() * w, rnd() * h, 1.5, 1.5);
    }
    ctx.strokeStyle = 'rgba(140,110,80,0.14)';
    ctx.lineWidth = 1;
    for (let i = 0; i < 6; i++) {
      ctx.beginPath();
      ctx.arc(w / 2, h / 2, 20 + i * 18, 0, Math.PI * 2);
      ctx.stroke();
    }
  }, { repeat: [4, 4] });
}

export function rockTexture() {
  return canvasTexture(512, 512, (ctx, w, h) => {
    const rnd = mulberry32(33);
    ctx.fillStyle = '#586264';
    ctx.fillRect(0, 0, w, h);
    for (let i = 0; i < 4000; i++) {
      const c = 62 + rnd() * 76;
      ctx.fillStyle = `rgba(${c},${c + 3},${c + 4},${0.2 + rnd() * 0.5})`;
      ctx.fillRect(rnd() * w, rnd() * h, 2 + rnd() * 8, 1 + rnd() * 5);
    }
    for (let i = 0; i < 30; i++) {
      ctx.strokeStyle = `rgba(0,0,0,${0.2 + rnd() * 0.5})`;
      ctx.lineWidth = 1 + rnd() * 3;
      ctx.beginPath();
      let x = rnd() * w, y = rnd() * h;
      ctx.moveTo(x, y);
      for (let j = 0; j < 5; j++) {
        x += (rnd() - 0.5) * 120; y += (rnd() - 0.5) * 120;
        ctx.lineTo(x, y);
      }
      ctx.stroke();
    }
  }, { repeat: [4, 3] });
}

export function clockFaceTexture(cracked = false) {
  return canvasTexture(512, 512, (ctx, w, h) => {
    const cx = w / 2, cy = h / 2;
    const g = ctx.createRadialGradient(cx, cy, 20, cx, cy, 250);
    g.addColorStop(0, '#d8cbb0');
    g.addColorStop(0.72, '#c3b28f');
    g.addColorStop(1, '#8f7f62');
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.arc(cx, cy, 250, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = 'rgba(60,45,30,0.85)';
    ctx.lineWidth = 10;
    ctx.beginPath(); ctx.arc(cx, cy, 238, 0, Math.PI * 2); ctx.stroke();
    ctx.lineWidth = 2;
    ctx.beginPath(); ctx.arc(cx, cy, 208, 0, Math.PI * 2); ctx.stroke();
    const numerals = ['XII', 'I', 'II', 'III', 'IIII', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI'];
    ctx.fillStyle = '#2d2318';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = '600 46px "Cormorant Garamond", Georgia, serif';
    for (let i = 0; i < 12; i++) {
      const a = (i / 12) * Math.PI * 2 - Math.PI / 2;
      ctx.fillText(numerals[i], cx + Math.cos(a) * 170, cy + Math.sin(a) * 170);
    }
    for (let i = 0; i < 60; i++) {
      const a = (i / 60) * Math.PI * 2;
      const r1 = 200, r2 = i % 5 === 0 ? 190 : 196;
      ctx.strokeStyle = 'rgba(50,38,24,0.7)';
      ctx.lineWidth = i % 5 === 0 ? 3 : 1.5;
      ctx.beginPath();
      ctx.moveTo(cx + Math.cos(a) * r1, cy + Math.sin(a) * r1);
      ctx.lineTo(cx + Math.cos(a) * r2, cy + Math.sin(a) * r2);
      ctx.stroke();
    }
    ctx.font = 'italic 30px "Cormorant Garamond", Georgia, serif';
    ctx.fillStyle = 'rgba(70,50,30,0.8)';
    ctx.fillText('Hollow', cx, cy + 62);
    if (cracked) {
      ctx.strokeStyle = 'rgba(20,12,6,0.85)';
      ctx.lineWidth = 3;
      for (let i = 0; i < 7; i++) {
        ctx.beginPath();
        let x = cx + (Math.random() - 0.5) * 80, y = cy + (Math.random() - 0.5) * 80;
        ctx.moveTo(x, y);
        for (let j = 0; j < 4; j++) {
          x += (Math.random() - 0.5) * 120; y += (Math.random() - 0.5) * 120;
          ctx.lineTo(x, y);
        }
        ctx.stroke();
      }
    }
  }, { repeat: [1, 1] });
}

export function photoTexture() {
  return canvasTexture(360, 460, (ctx, w, h) => {
    const rnd = mulberry32(58);
    const g = ctx.createLinearGradient(0, 0, 0, h);
    g.addColorStop(0, '#8b7c5e'); g.addColorStop(1, '#4e4534');
    ctx.fillStyle = g; ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = 'rgba(40,34,24,0.5)';
    ctx.fillRect(0, h * 0.62, w, h * 0.38);
    const heads = [[80, 190, 0.3], [150, 160, 0.24], [230, 175, 0.27], [300, 200, 0.2], [185, 230, 0.17]];
    heads.forEach(([x, y, s], i) => {
      ctx.fillStyle = i === 4 ? 'rgba(230,220,190,0.9)' : 'rgba(52,44,32,0.92)';
      ctx.beginPath(); ctx.arc(x, y, 30 * s * 2, 0, Math.PI * 2); ctx.fill();
      ctx.beginPath();
      ctx.moveTo(x - 50 * s * 2, h * 0.78);
      ctx.quadraticCurveTo(x, h * 0.44, x + 50 * s * 2, h * 0.78);
      ctx.fill();
    });
    ctx.strokeStyle = 'rgba(240,230,200,0.28)';
    ctx.lineWidth = 1;
    for (let i = 0; i < 30; i++) {
      ctx.beginPath();
      ctx.moveTo(rnd() * w, rnd() * h);
      ctx.lineTo(rnd() * w, rnd() * h);
      ctx.stroke();
    }
    ctx.strokeStyle = 'rgba(20,15,10,0.8)';
    ctx.lineWidth = 4;
    for (let i = 0; i < 5; i++) {
      ctx.beginPath();
      ctx.arc(210 + rnd() * 30, 190 + rnd() * 20, 30 + rnd() * 40, 0, Math.PI * 2);
      ctx.stroke();
    }
    ctx.fillStyle = 'rgba(25,20,14,0.65)';
    ctx.fillRect(0, 0, w, 12); ctx.fillRect(0, h - 12, w, 12);
  }, { repeat: [1, 1] });
}

export function posterTexture(kind = 0) {
  return canvasTexture(320, 460, (ctx, w, h) => {
    const rnd = mulberry32(50 + kind);
    if (kind === 0) {
      const g = ctx.createLinearGradient(0, 0, 0, h);
      g.addColorStop(0, '#18112d'); g.addColorStop(0.55, '#4c1c44'); g.addColorStop(1, '#e0532f');
      ctx.fillStyle = g; ctx.fillRect(0, 0, w, h);
      ctx.fillStyle = '#f7c86c';
      ctx.beginPath(); ctx.arc(w / 2, h * 0.34, 70, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = '#1a0f26';
      for (let i = 0; i < 6; i++) {
        ctx.beginPath();
        ctx.moveTo(0, h * 0.52 + i * 24);
        ctx.lineTo(w * 0.3, h * 0.42 + i * 24);
        ctx.lineTo(w * 0.6, h * 0.56 + i * 24);
        ctx.lineTo(w, h * 0.46 + i * 24);
        ctx.lineTo(w, h);
        ctx.lineTo(0, h);
        ctx.fill();
      }
      ctx.fillStyle = '#f5e9d0';
      ctx.textAlign = 'center';
      ctx.font = '700 44px "Barlow Condensed", sans-serif';
      ctx.fillText('STARFALL', w / 2, h * 0.8);
      ctx.font = '400 14px "Barlow Condensed", sans-serif';
      ctx.fillText('NOW PLAYING — HAWKINS THEATRE', w / 2, h * 0.86);
    } else if (kind === 1) {
      ctx.fillStyle = '#0c1a22'; ctx.fillRect(0, 0, w, h);
      const g = ctx.createRadialGradient(w / 2, h * 0.42, 10, w / 2, h * 0.42, 190);
      g.addColorStop(0, 'rgba(120,200,220,0.85)'); g.addColorStop(1, 'rgba(10,30,40,0)');
      ctx.fillStyle = g; ctx.fillRect(0, 0, w, h);
      ctx.strokeStyle = 'rgba(150,220,230,0.6)';
      ctx.lineWidth = 2;
      for (let i = 0; i < 12; i++) {
        ctx.beginPath();
        ctx.arc(w / 2, h * 0.42, 20 + i * 14, 0, Math.PI * 2);
        ctx.stroke();
      }
      ctx.fillStyle = '#e7f4f5';
      ctx.textAlign = 'center';
      ctx.font = '700 38px "Barlow Condensed", sans-serif';
      ctx.fillText('THE THING', w / 2, h * 0.72);
      ctx.font = '400 13px "Barlow Condensed", sans-serif';
      ctx.fillText('MAN IS THE WARMEST PLACE', w / 2, h * 0.79);
    } else {
      ctx.fillStyle = '#151515'; ctx.fillRect(0, 0, w, h);
      ctx.fillStyle = '#c8a020';
      ctx.font = '700 52px "Barlow Condensed", sans-serif';
      ctx.textAlign = 'left';
      ctx.fillText('HAWKINS', 20, 78);
      ctx.fillText('TIGERS', 20, 128);
      ctx.fillStyle = '#e8e2d4';
      ctx.font = '400 20px "Barlow Condensed", sans-serif';
      ctx.fillText('HOMECOMING \'86', 22, 166);
      ctx.strokeStyle = '#c8a020'; ctx.lineWidth = 3;
      ctx.beginPath(); ctx.moveTo(22, 190); ctx.lineTo(w - 22, 190); ctx.stroke();
      ctx.fillStyle = '#8a1414';
      ctx.beginPath(); ctx.moveTo(w / 2, 240); ctx.lineTo(w / 2 + 60, 340); ctx.lineTo(w / 2 - 60, 340); ctx.fill();
      ctx.fillStyle = '#e8e2d4';
      ctx.font = 'italic 16px "Cormorant Garamond", serif';
      ctx.fillText('Go Tigers.', 22, 400);
    }
    ctx.fillStyle = 'rgba(0,0,0,0.18)';
    ctx.fillRect(0, 0, 8, h);
  }, { repeat: [1, 1] });
}

export function vinylTexture() {
  return canvasTexture(512, 512, (ctx, w, h) => {
    const cx = w / 2, cy = h / 2;
    ctx.fillStyle = '#080808'; ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = '#0d0d0d';
    ctx.beginPath(); ctx.arc(cx, cy, 250, 0, Math.PI * 2); ctx.fill();
    for (let i = 0; i < 70; i++) {
      ctx.strokeStyle = `rgba(255,255,255,${0.02 + Math.random() * 0.05})`;
      ctx.lineWidth = 0.8;
      ctx.beginPath(); ctx.arc(cx, cy, 70 + i * 2.5, 0, Math.PI * 2); ctx.stroke();
    }
    ctx.fillStyle = '#a83a2b';
    ctx.beginPath(); ctx.arc(cx, cy, 66, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = '#f0e3c4';
    ctx.textAlign = 'center';
    ctx.font = 'italic 22px "Cormorant Garamond", serif';
    ctx.fillText('Static Bloom', cx, cy - 4);
    ctx.font = '10px "Barlow Condensed", sans-serif';
    ctx.fillText('THE NEON VULTURES', cx, cy + 16);
    ctx.fillStyle = '#0a0a0a';
    ctx.beginPath(); ctx.arc(cx, cy, 6, 0, Math.PI * 2); ctx.fill();
  }, { repeat: [1, 1] });
}

export function silhouetteTexture() {
  return canvasTexture(256, 512, (ctx, w, h) => {
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = 'rgba(8,8,10,0.94)';
    ctx.beginPath(); ctx.arc(128, 96, 46, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath();
    ctx.moveTo(128, 136);
    ctx.bezierCurveTo(74, 142, 64, 240, 60, 360);
    ctx.lineTo(196, 360);
    ctx.bezierCurveTo(192, 240, 182, 142, 128, 136);
    ctx.fill();
    ctx.fillStyle = 'rgba(8,8,10,0.94)';
    ctx.beginPath(); ctx.ellipse(128, 50, 50, 30, 0, Math.PI, 0); ctx.fill();
  }, { repeat: [1, 1] });
}

// ─── architecture ────────────────────────────────────────────────

export function addWindow(parent, {
  x = 0, y = 0, z = 0, w = 1.5, h = 2, lit = false, color = 0xffb56a,
  rotY = 0, hollow = false, frameMat = null, glassMat = null
} = {}) {
  const g = new THREE.Group();
  g.position.set(x, y, z);
  g.rotation.y = rotY;
  const fm = frameMat || std(0x181512, { roughness: 0.6 });
  box(g, w + 0.28, h + 0.28, 0.16, fm, 0, 0, 0, [0, 0, 0]);
  const glass = new THREE.Mesh(
    new THREE.PlaneGeometry(w, h),
    glassMat || new THREE.MeshStandardMaterial({
      color: hollow ? 0x2a0806 : (lit ? 0x6f4b25 : 0x0a1119),
      emissive: hollow ? 0x5e0b06 : (lit ? 0xff9c45 : 0x030608),
      emissiveIntensity: hollow ? 1.4 : (lit ? 0.55 : 0.15),
      roughness: 0.2, metalness: 0.1
    })
  );
  glass.position.z = 0.09;
  g.add(glass);
  const barMat = fm;
  box(g, 0.05, h, 0.1, barMat, 0, 0, 0.1);
  box(g, w, 0.05, 0.1, barMat, 0, 0, 0.1);
  box(g, w, 0.07, 0.18, fm, 0, h / 2 + 0.06, 0.04);
  parent.add(g);
  return { group: g, glass };
}

export function buildTree(seed = 1, height = 9, color = 0x161616) {
  const rnd = mulberry32(seed);
  const g = new THREE.Group();
  const mat = std(color, { roughness: 0.95 });
  const branch = (start, dir, len, radius, depth) => {
    const end = start.clone().addScaledVector(dir, len);
    const mesh = cylinderBetween(start, end, radius, radius * 0.55, mat, 5);
    mesh.castShadow = true;
    g.add(mesh);
    if (depth <= 0) return;
    const n = depth > 2 ? 3 : 2;
    for (let i = 0; i < n; i++) {
      const nd = dir.clone();
      nd.x += (rnd() - 0.5) * 1.1;
      nd.z += (rnd() - 0.5) * 1.1;
      nd.y = Math.abs(nd.y) * (0.75 + rnd() * 0.4);
      nd.normalize();
      branch(end, nd, len * (0.55 + rnd() * 0.22), radius * 0.56, depth - 1);
    }
  };
  branch(new THREE.Vector3(0, 0, 0), new THREE.Vector3((rnd() - 0.5) * 0.2, 1, (rnd() - 0.5) * 0.2).normalize(), height * 0.46, height * 0.045, 4);
  return g;
}

export function buildHouse({ hollow = false } = {}) {
  const g = new THREE.Group();
  const siding = new THREE.MeshStandardMaterial({
    map: sidingTexture(), color: hollow ? 0x3a3232 : 0x8b9188,
    roughness: 0.88, metalness: 0.02
  });
  const trim = std(hollow ? 0x171416 : 0x24261f, { roughness: 0.8 });
  const roofMat = new THREE.MeshStandardMaterial({ map: shingleTexture(), color: hollow ? 0x2c2626 : 0x8b8d8e, roughness: 0.92 });
  const dark = std(hollow ? 0x0d0a0a : 0x15130f);

  // main body
  box(g, 13, 4.3, 9, siding, 0, 2.15, -2);
  box(g, 12.4, 3.7, 8.2, siding, 0, 5.9, -2.3);
  // foundation
  box(g, 13.3, 0.55, 9.3, std(0x1b1b1a, { roughness: 0.95 }), 0, 0.27, -2);

  // roof planes
  const slope = 0.68;
  const roofL = box(g, 7.9, 0.28, 9.8, roofMat, -3.6, 8.15, -2.1, [0, 0, slope]);
  const roofR = box(g, 7.9, 0.28, 9.8, roofMat, 3.6, 8.15, -2.1, [0, 0, -slope]);
  if (hollow) {
    roofL.rotation.z = 0.42;
    roofL.position.y = 7.7;
    roofL.position.x = -4.3;
    roofR.rotation.x = 0.08;
  }
  // gable triangle (front)
  const triShape = new THREE.Shape();
  triShape.moveTo(-6.5, 0); triShape.lineTo(6.5, 0); triShape.lineTo(0, 3.2); triShape.lineTo(-6.5, 0);
  const triGeo = new THREE.ExtrudeGeometry(triShape, { depth: 0.2, bevelEnabled: false });
  const tri = new THREE.Mesh(triGeo, siding);
  tri.position.set(0, 7.15, 2.35);
  tri.castShadow = true;
  g.add(tri);
  // chimney
  box(g, 1.1, 3.4, 1.1, std(hollow ? 0x1a1716 : 0x4b3430), 4.2, 9.2, -4.5);

  // porch
  box(g, 7.2, 0.22, 3.4, std(0x211c17, { roughness: 0.9 }), 0, 0.55, 3.4);
  box(g, 7.4, 0.2, 0.35, trim, 0, 0.66, 5.1);
  for (const x of [-3.2, -1.1, 1.1, 3.2]) {
    box(g, 0.24, 3.1, 0.24, trim, x, 2.15, 4.85);
  }
  box(g, 7.4, 0.22, 3.6, roofMat, 0, 3.75, 3.45, [-0.07, 0, 0]);
  // steps
  for (let i = 0; i < 3; i++) {
    box(g, 4.2, 0.18, 0.55, std(0x2b2620), 0, 0.14 + i * 0.18, 5.55 + (2 - i) * 0.55);
  }

  // front door
  box(g, 2.1, 3.15, 0.2, trim, 0, 1.9, 2.5);
  const door = box(g, 1.7, 2.85, 0.16, std(hollow ? 0x120d0c : 0x2a1911, { roughness: 0.65 }), 0, 1.8, 2.62);
  door.castShadow = true;
  const knob = new THREE.Mesh(new THREE.SphereGeometry(0.055, 8, 8), std(0x8f7a4a, { metalness: 0.8, roughness: 0.3 }));
  knob.position.set(0.65, 1.8, 2.72);
  g.add(knob);
  // fanlight
  const fan = new THREE.Mesh(
    new THREE.CircleGeometry(0.62, 20, 0, Math.PI),
    new THREE.MeshStandardMaterial({ color: 0x332414, emissive: hollow ? 0x6a0a06 : 0xffbe76, emissiveIntensity: hollow ? 1.2 : 0.5, roughness: 0.3 })
  );
  fan.position.set(0, 3.63, 2.6);
  fan.rotation.z = Math.PI;
  g.add(fan);

  // windows
  addWindow(g, { x: -4.2, y: 2.5, z: 2.53, w: 1.5, h: 2.2, lit: !hollow, hollow });
  addWindow(g, { x: 4.2, y: 2.5, z: 2.53, w: 1.5, h: 2.2, lit: !hollow, hollow });
  addWindow(g, { x: -4.0, y: 6.2, z: 1.72, w: 1.35, h: 1.9, lit: false, hollow });
  addWindow(g, { x: 4.0, y: 6.2, z: 1.72, w: 1.35, h: 1.9, lit: false, hollow });
  addWindow(g, { x: 0, y: 8.15, z: 2.5, w: 1.1, h: 1.3, lit: false, hollow });
  // side windows
  addWindow(g, { x: -6.53, y: 2.7, z: -2.4, w: 1.4, h: 2.1, rotY: Math.PI / 2, lit: false, hollow });
  addWindow(g, { x: 6.53, y: 2.7, z: -2.4, w: 1.4, h: 2.1, rotY: -Math.PI / 2, lit: false, hollow });
  addWindow(g, { x: -6.53, y: 6.2, z: -2.4, w: 1.3, h: 1.8, rotY: Math.PI / 2, lit: false, hollow });
  addWindow(g, { x: 6.53, y: 6.2, z: -2.4, w: 1.3, h: 1.8, rotY: -Math.PI / 2, lit: false, hollow });

  // porch light
  const lamp = new THREE.Mesh(new THREE.SphereGeometry(0.13, 10, 10), new THREE.MeshStandardMaterial({
    color: 0xffd9a0, emissive: hollow ? 0x5c0b06 : 0xffa64b, emissiveIntensity: hollow ? 1.6 : 3
  }));
  lamp.position.set(0.95, 3.2, 2.9);
  g.add(lamp);
  if (!hollow) {
    const pl = new THREE.PointLight(0xffa258, 9, 11, 2);
    pl.position.set(0.95, 3.2, 3.1);
    g.add(pl);
    spriteGlow(g, 0xffb066, 1.5, 0.35, [0.95, 3.2, 2.95]);
  } else {
    const pl = new THREE.PointLight(0xff351f, 12, 14, 2);
    pl.position.set(0.95, 3.2, 3.1);
    g.add(pl);
    spriteGlow(g, 0xff4422, 2.6, 0.45, [0.95, 3.2, 2.95]);
  }

  // house number
  const num = canvasTexture(128, 96, (ctx, w, h) => {
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = '#d8c9a8';
    ctx.font = '600 54px "Cormorant Garamond", serif';
    ctx.textAlign = 'center';
    ctx.fillText('37', w / 2, 66);
  }, { repeat: [1, 1] });
  const numMesh = new THREE.Mesh(new THREE.PlaneGeometry(0.5, 0.38), new THREE.MeshBasicMaterial({ map: num, transparent: true }));
  numMesh.position.set(1.55, 2.9, 2.55);
  g.add(numMesh);

  // bushes / neglect
  const bushMat = std(hollow ? 0x0c0a0a : 0x1d261c, { roughness: 1 });
  const rnd = mulberry32(71);
  for (let i = 0; i < 9; i++) {
    const side = i % 2 ? 1 : -1;
    const b = new THREE.Mesh(new THREE.IcosahedronGeometry(0.5 + rnd() * 0.65, 1), bushMat);
    b.position.set(side * (3.3 + rnd() * 3.4), 0.5 + rnd() * 0.3, 2.4 + rnd() * 0.9);
    b.scale.set(1, 0.75, 1);
    b.castShadow = true;
    g.add(b);
  }

  // vines for hollow
  if (hollow) {
    const vineMat = std(0x1a0a08, { roughness: 0.9 });
    for (let i = 0; i < 12; i++) {
      const pts = [];
      let x = -6 + rnd() * 12, y = 8.6, z = 2.6;
      for (let j = 0; j < 6; j++) {
        pts.push(new THREE.Vector3(x + (rnd() - 0.5) * 1.4, y, z + (rnd() - 0.5) * 0.4));
        y -= 0.55 + rnd() * 0.9;
        x += (rnd() - 0.5) * 0.8;
      }
      const curve = new THREE.CatmullRomCurve3(pts);
      const tube = new THREE.Mesh(new THREE.TubeGeometry(curve, 20, 0.025 + rnd() * 0.045, 4, false), vineMat);
      g.add(tube);
      // leaves / pods
      for (let k = 1; k < pts.length - 1; k += 2) {
        const pod = new THREE.Mesh(new THREE.SphereGeometry(0.05 + rnd() * 0.06, 5, 4), std(0x2b0b08));
        pod.position.copy(pts[k]).add(new THREE.Vector3((rnd() - 0.5) * 0.2, 0, 0.05));
        g.add(pod);
      }
    }
  }

  return { group: g, roofL, roofR };
}

export function makeGround(size = 180, color = 0x0a0f0c, roughness = 0.9) {
  const mat = new THREE.MeshStandardMaterial({ color, roughness, metalness: 0.08 });
  const m = new THREE.Mesh(new THREE.PlaneGeometry(size, size), mat);
  m.rotation.x = -Math.PI / 2;
  m.receiveShadow = true;
  return m;
}

export function makePuddle(size = 4, color = 0x1b2a30) {
  const mat = new THREE.MeshStandardMaterial({
    color, roughness: 0.06, metalness: 0.6, transparent: true, opacity: 0.65
  });
  const m = new THREE.Mesh(new THREE.CircleGeometry(size, 26), mat);
  m.rotation.x = -Math.PI / 2;
  m.position.y = 0.012;
  return m;
}
