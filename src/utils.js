import * as THREE from 'three';

export const TAU = Math.PI * 2;
export const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
export const lerp = (a, b, t) => a + (b - a) * t;
export const damp = (a, b, lambda, dt) => lerp(a, b, 1 - Math.exp(-lambda * dt));
export const dist2d = (ax, az, bx, bz) => Math.hypot(ax - bx, az - bz);
export const randRange = (a, b) => a + Math.random() * (b - a);

export function angleLerp(a, b, t) {
  let d = ((b - a + Math.PI) % TAU) - Math.PI;
  if (d < -Math.PI) d += TAU;
  return a + d * t;
}

export function seeded(seed = 1986) {
  let s = seed >>> 0;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 4294967296;
  };
}

export function makeCanvas(width, height) {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  return canvas;
}

export function canvasTexture(canvas, { repeat = null, anisotropy = 4 } = {}) {
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = anisotropy;
  if (repeat) {
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(repeat[0], repeat[1]);
  }
  return texture;
}

export function textTexture(text, color, { sub = '', width = 1024, height = 256, font = 'Impact', bg = null } = {}) {
  const canvas = makeCanvas(width, height);
  const ctx = canvas.getContext('2d');
  if (bg) {
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, width, height);
  } else {
    ctx.clearRect(0, 0, width, height);
  }
  const pad = height * 0.16;
  ctx.strokeStyle = color;
  ctx.lineWidth = Math.max(2, height * 0.018);
  ctx.globalAlpha = 0.7;
  ctx.strokeRect(pad, pad, width - pad * 2, height - pad * 2);
  ctx.globalAlpha = 1;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.font = `${height * (sub ? 0.34 : 0.44)}px ${font}, Arial Black, sans-serif`;
  ctx.shadowColor = color;
  ctx.shadowBlur = height * 0.12;
  ctx.fillStyle = color;
  ctx.fillText(text, width / 2, height * (sub ? 0.44 : 0.52));
  ctx.shadowBlur = height * 0.24;
  ctx.globalAlpha = 0.5;
  ctx.fillText(text, width / 2, height * (sub ? 0.44 : 0.52));
  ctx.globalAlpha = 1;
  ctx.shadowBlur = 0;
  if (sub) {
    ctx.fillStyle = 'rgba(255,245,220,.72)';
    ctx.font = `${height * 0.1}px "Courier New", monospace`;
    ctx.letterSpacing = `${height * 0.02}px`;
    ctx.fillText(sub, width / 2, height * 0.73);
  }
  return canvasTexture(canvas, { anisotropy: 8 });
}

export function disposeObject(object) {
  object.traverse((child) => {
    if (child.geometry) child.geometry.dispose();
    if (child.material) {
      const materials = Array.isArray(child.material) ? child.material : [child.material];
      for (const material of materials) {
        if (material.map) material.map.dispose();
        material.dispose();
      }
    }
  });
}

export function meshBox(w, h, d, material, x = 0, y = 0, z = 0) {
  const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), material);
  mesh.position.set(x, y, z);
  return mesh;
}

export function setShadowBlob(group, radius = 0.9, opacity = 0.34) {
  const canvas = makeCanvas(128, 128);
  const ctx = canvas.getContext('2d');
  const gradient = ctx.createRadialGradient(64, 64, 4, 64, 64, 62);
  gradient.addColorStop(0, `rgba(0,0,0,${opacity})`);
  gradient.addColorStop(0.62, `rgba(0,0,0,${opacity * 0.68})`);
  gradient.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 128, 128);
  const texture = new THREE.CanvasTexture(canvas);
  const material = new THREE.MeshBasicMaterial({
    map: texture,
    transparent: true,
    depthWrite: false,
    toneMapped: false,
  });
  const mesh = new THREE.Mesh(new THREE.PlaneGeometry(radius * 2, radius * 2), material);
  mesh.rotation.x = -Math.PI / 2;
  mesh.position.y = 0.035;
  mesh.renderOrder = 2;
  group.add(mesh);
  return mesh;
}
