import * as THREE from 'three';
import './style.css';
import { buildWorld, CITY } from './world.js';
import {
  createPlayer, createCar, createDemobat, createDemogorgon, createVecna,
  createBlast, createShockwave, createPickup,
} from './entities.js';
import { AudioEngine } from './audio.js';
import { TAU, clamp, damp, dist2d, angleLerp, disposeObject } from './utils.js';

/* ------------------------------------------------------------------ dom */
const $ = (id) => document.getElementById(id);
const ui = {
  canvas: $('game'), hud: $('hud'), title: $('titleScreen'), boot: $('boot'),
  startBtn: $('startBtn'), titleSoundBtn: $('titleSoundBtn'), soundBtn: $('soundBtn'),
  locationText: $('locationText'), signalText: $('signalText'), breachFill: $('breachFill'),
  caseNo: $('caseNo'), missionTitle: $('missionTitle'), missionDesc: $('missionDesc'),
  missionDistance: $('missionDistance'), missionHint: $('missionHint'),
  healthText: $('healthText'), healthFill: $('healthFill'), staminaFill: $('staminaFill'),
  minimap: $('minimap'), interaction: $('interaction'), interactionText: $('interactionText'),
  dialogue: $('dialogue'), portrait: $('portrait'), speaker: $('speaker'), line: $('line'),
  toasts: $('toasts'), carHud: $('carHud'), speedValue: $('speedValue'), gearValue: $('gearValue'),
  nitroFill: $('nitroFill'), crosshair: $('crosshair'), bossBar: $('bossBar'), bossFill: $('bossFill'),
  itemCounter: $('itemCounter'), tapeCount: $('tapeCount'),
  qte: $('qte'), qtePrompt: $('qtePrompt'), qteKey: $('qteKey'), qteFill: $('qteFill'),
  qteCount: $('qteCount'), qteWarn: $('qteWarn'),
  chapter: $('chapter'), chapterNo: $('chapterNo'), chapterTitle: $('chapterTitle'),
  chapterQuote: $('chapterQuote'),
  choiceScreen: $('choiceScreen'), choiceTitle: $('choiceTitle'), choiceText: $('choiceText'),
  choiceA: $('choiceA'), choiceB: $('choiceB'),
  deathScreen: $('deathScreen'), endScreen: $('endScreen'), endBlurb: $('endBlurb'), endTitle: $('endTitle'),
  statRifts: $('statRifts'), statKills: $('statKills'), statTime: $('statTime'),
  restartBtn: $('restartBtn'), touchUI: $('touchUI'), joystick: $('joystick'), stickKnob: $('stickKnob'),
  damageFlash: $('damageFlash'), controlStrip: $('controlStrip'),
};

/* -------------------------------------------------------------- renderer */
const scene = new THREE.Scene();
scene.fog = new THREE.FogExp2(0x070d16, 0.0072);
const camera = new THREE.PerspectiveCamera(56, window.innerWidth / window.innerHeight, 0.1, 800);

let renderer;
try {
  renderer = new THREE.WebGLRenderer({
    canvas: ui.canvas, antialias: true, alpha: false, powerPreference: 'high-performance',
  });
} catch (error) {
  ui.boot.classList.remove('done');
  ui.boot.querySelector('.boot-text').textContent = 'WEBGL UNAVAILABLE — TRY A HARDWARE-ACCELERATED BROWSER';
  throw error;
}
const maxPixelRatio = window.matchMedia('(pointer: coarse)').matches ? 1.1 : 1.5;
renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, maxPixelRatio));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.34;

const world = buildWorld(scene);
const player = createPlayer();
player.group.position.set(CITY.spawn.x, 0, CITY.spawn.z);
scene.add(player.group);

const chevelle = createCar({ paint: 0x101116, stripe: 0xd1152b, lights: true, underglow: true });
chevelle.group.position.set(CITY.car.x, 0, CITY.car.z);
chevelle.group.rotation.y = 0;
scene.add(chevelle.group);

// A small travelling fill light keeps the hero readable in the darkest streets.
const heroLight = new THREE.PointLight(0xbfe7ff, 6.4, 14, 2);
heroLight.position.set(CITY.spawn.x, 2.4, CITY.spawn.z);
scene.add(heroLight);

const audio = new AudioEngine();

/* ------------------------------------------------------------ game data */
const CHAPTERS = [
  {
    title: 'THE FREAK', act: 'ACT I',
    quote: '"Every town has a story. Hawkins has a wound."',
    location: 'FOREST HILLS · 11:47 PM',
    desc: 'Eddie Munson is hiding at Forest Hills. Find him before the hive does.',
    hint: 'FOLLOW THE MARKER', kind: 'reach', color: 0x62ecff,
    target: { x: CITY.forestHills.x, z: CITY.forestHills.z }, riftIndex: -1,
  },
  {
    title: 'BLACK WATER', act: 'ACT II',
    quote: '"The lake remembers what the town tried to forget."',
    location: "LOVER'S LAKE · 12:26 AM",
    desc: "A gate is opening under Lover's Lake. Cut down the hive and seal it.",
    hint: 'CLEAR THE HIVE', kind: 'rift', color: 0xff4b27,
    target: { x: CITY.lake.x, z: CITY.lake.z }, riftIndex: 0, bats: 6, demos: 1,
  },
  {
    title: 'THE HOUSE THAT WAITS', act: 'ACT III',
    quote: '"Some houses are not empty. They are holding their breath."',
    location: 'CREEL HOUSE · 02:04 AM',
    desc: 'The Creel House is awake. Vecna is feeding on everything inside it.',
    hint: 'CLEAR THE HIVE', kind: 'rift', color: 0xff2d30,
    target: { x: CITY.creel.x, z: CITY.creel.z }, riftIndex: 1, bats: 8, demos: 1,
  },
  {
    title: 'MALLRATS', act: 'ACT IV',
    quote: '"The brightest lights cast the longest shadows."',
    location: 'STARCOURT · 03:02 AM',
    desc: "Starcourt is overrun. Cut the hive's supply line before it spreads.",
    hint: 'CLEAR THE HIVE', kind: 'rift', color: 0xff5135,
    target: { x: CITY.mall.x, z: CITY.mall.z }, riftIndex: 2, bats: 9, demos: 2,
  },
  {
    title: 'THE ARCHLICH', act: 'ACT V',
    quote: '"Every story ends. The good ones end with a choice."',
    location: 'HAWKINS LAB · 04:31 AM',
    desc: 'The lab gate is the heart. Kill Vecna. Close everything.',
    hint: 'KILL VECNA', kind: 'rift', color: 0xff2020,
    target: { x: CITY.lab.x, z: CITY.lab.z }, riftIndex: 3, bats: 4, demos: 1, boss: true,
  },
];

const TAPE_SPOTS = [
  { x: -30, z: -26 }, { x: 34, z: -26 }, { x: -82, z: -66 }, { x: -130, z: 156 },
  { x: -70, z: -151 }, { x: 150, z: -136 }, { x: -157, z: -20 }, { x: 70, z: -204 },
];

const state = {
  phase: 'title', started: false, isTouch: false,
  mode: 'foot',
  health: 100, maxHealth: 100, stamina: 100, nitro: 100,
  power: 1, score: 0, kills: 0, riftsSealed: 0, tapeCount: 0,
  time: 0, playTime: 0,
  stage: 0, waveSpawned: false, waveCleared: false, sealDone: false,
  qte: null, qteDelay: 0, qteNext: null, sealTimer: 0, pendingAdvance: 0,
  dialogueActive: false, dialogueQueue: [], dialogueIndex: 0, dialogueDone: null,
  dialogueTyping: false, dialogueTimer: null, dialogueFull: '',
  choiceActive: false, choiceCallback: null,
  attackTime: 0, blastCooldown: 0, invuln: 0, shake: 0,
  playerYaw: 0, camYaw: 0, camPitch: 0.18, cameraPos: new THREE.Vector3(),
  carHeading: 0, carSpeed: 0, carSteer: 0, carNitro: false,
  deathTimer: 0, bossDead: false, titleT: 0,
  flags: { eddieSaved: false, kidsSaved: false, finalChoice: 'seal' },
  hasTarget: false, flashTimer: 0,
};

state.playerYaw = 0;
state.camYaw = Math.PI;
player.group.rotation.y = state.playerYaw;
state.cameraPos.set(
  player.group.position.x + Math.sin(state.camYaw) * 8.6,
  5.2,
  player.group.position.z + Math.cos(state.camYaw) * 8.6,
);
camera.position.copy(state.cameraPos);
camera.lookAt(player.group.position.x, 1.55, player.group.position.z);

/* ------------------------------------------------------------- runtime */
const keys = {};
let enemies = [];
let shots = [];
let effects = [];
let pickups = [];
let tapes = [];
const touch = { active: false, ix: 0, iz: 0, sprint: false, lookId: null, lookX: 0, lookY: 0 };
const particleGeo = new THREE.IcosahedronGeometry(0.09, 0);
const tmpVec = new THREE.Vector3();
const tmpVec2 = new THREE.Vector3();
let chapterTimer = 0;
let lastHudRefresh = 0;

/* ---------------------------------------------------------- title boot */
setTimeout(() => ui.boot.classList.add('done'), 650);
updateAudioLabels();

const coarse = window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;
state.isTouch = coarse;
if (coarse) {
  document.body.classList.add('is-touch');
  ui.touchUI.classList.add('touch-mode');
}

/* ---------------------------------------------------------- collectibles */
for (const spot of TAPE_SPOTS) {
  const group = createPickup('token');
  group.position.set(spot.x, 0, spot.z);
  scene.add(group);
  tapes.push({ group, taken: false, phase: Math.random() * TAU });
}

/* -------------------------------------------------------------- helpers */
function distanceTo(x, z) {
  return dist2d(player.group.position.x, player.group.position.z, x, z);
}

function findClearSpot(cx, cz, minR = 3, maxR = 16, radius = 0.8) {
  for (let i = 0; i < 52; i++) {
    const a = Math.random() * TAU;
    const r = minR + Math.random() * (maxR - minR);
    const x = cx + Math.cos(a) * r;
    const z = cz + Math.sin(a) * r;
    if (!world.blocked(x, z, radius)) return { x, z };
  }
  return { x: cx + minR, z: cz };
}

function toast(text, sub = '', tone = '') {
  const el = document.createElement('div');
  el.className = `toast ${tone}`;
  el.innerHTML = `<span>${text}</span>${sub ? `<small>${sub}</small>` : ''}`;
  ui.toasts.appendChild(el);
  while (ui.toasts.children.length > 4) ui.toasts.firstElementChild.remove();
  setTimeout(() => {
    el.classList.add('out');
    setTimeout(() => el.remove(), 380);
  }, 3400);
}

function updateAudioLabels() {
  const on = audio.started && audio.enabled;
  ui.soundBtn.textContent = on ? 'AUDIO ON' : 'AUDIO OFF';
  ui.titleSoundBtn.textContent = on ? 'AUDIO ON' : 'AUDIO OFF';
}

function toggleAudio() {
  if (!audio.started) {
    audio.init();
    audio.setEnabled(true);
  } else {
    audio.toggle();
  }
  updateAudioLabels();
}

function startAudio() {
  audio.init();
  audio.setEnabled(true);
  updateAudioLabels();
}

function flashDamage() {
  state.flashTimer = 0.22;
  ui.damageFlash.classList.add('hit');
}

/* --------------------------------------------------------------- player */
function canControl() {
  return state.phase === 'playing'
    && !state.qte && !state.choiceActive && !state.dialogueActive;
}

function moveWithCollisions(object, dx, dz, radius) {
  const p = object.position;
  const nx = p.x + dx;
  if (!world.blocked(nx, p.z, radius)) p.x = nx;
  const nz = p.z + dz;
  if (!world.blocked(p.x, nz, radius)) p.z = nz;
}

function updatePlayer(dt) {
  if (state.mode !== 'foot') {
    player.group.visible = false;
    return;
  }
  player.group.visible = true;
  const control = canControl();
  let ix = 0;
  let iz = 0;

  if (control) {
    if (keys.KeyW || keys.ArrowUp) iz += 1;
    if (keys.KeyS || keys.ArrowDown) iz -= 1;
    if (keys.KeyD) ix += 1;
    if (keys.KeyA) ix -= 1;
    if (touch.active) {
      ix += touch.ix;
      iz += touch.iz;
    }
    if (keys.ArrowLeft) state.camYaw += 1.8 * dt;
    if (keys.ArrowRight) state.camYaw -= 1.8 * dt;
  }

  const inputLen = Math.hypot(ix, iz);
  if (inputLen > 1) {
    ix /= inputLen;
    iz /= inputLen;
  }

  const wantSprint = control && (keys.ShiftLeft || keys.ShiftRight || touch.sprint);
  const moving = inputLen > 0.08;
  const sprinting = wantSprint && moving && state.stamina > 1;
  if (sprinting) state.stamina = Math.max(0, state.stamina - 23 * dt);
  else state.stamina = Math.min(100, state.stamina + 15 * dt);
  if (state.stamina <= 0) touch.sprint = false;

  const speed = sprinting ? 10.4 : 6.15;
  const forwardX = -Math.sin(state.camYaw);
  const forwardZ = -Math.cos(state.camYaw);
  const rightX = Math.cos(state.camYaw);
  const rightZ = -Math.sin(state.camYaw);
  const dx = (forwardX * iz + rightX * ix) * speed * dt;
  const dz = (forwardZ * iz + rightZ * ix) * speed * dt;

  if (moving) {
    moveWithCollisions(player.group, dx, dz, 0.62);
    const targetYaw = Math.atan2(dx, dz);
    state.playerYaw = angleLerp(state.playerYaw, targetYaw, 1 - Math.exp(-13 * dt));
    player.group.rotation.y = state.playerYaw;
  }

  state.attackTime = Math.max(0, state.attackTime - dt);
  state.blastCooldown = Math.max(0, state.blastCooldown - dt);
  state.invuln = Math.max(0, state.invuln - dt);
  player.animate(dt, moving ? speed : 0, state.time, state.attackTime > 0);

  // The lake shallows are wrong. Slow, but not fatal.
  if (world.isInLake(player.group.position.x, player.group.position.z)) {
    player.group.position.x += Math.sin(state.time * 1.7) * 0.002;
  }
}

/* -------------------------------------------------------------- combat */
function findBlastTarget() {
  const px = player.group.position.x;
  const pz = player.group.position.z;
  const dirX = -Math.sin(state.camYaw);
  const dirZ = -Math.cos(state.camYaw);
  let best = null;
  let bestScore = Infinity;
  for (const enemy of enemies) {
    if (!enemy.alive) continue;
    const ex = enemy.group.position.x;
    const ez = enemy.group.position.z;
    const d = Math.hypot(ex - px, ez - pz);
    if (d > 31 || d < 0.001) continue;
    const dot = ((ex - px) / d) * dirX + ((ez - pz) / d) * dirZ;
    if (dot < 0.05 && d > 6.5) continue;
    const score = d - dot * 6.5;
    if (score < bestScore) {
      bestScore = score;
      best = enemy;
    }
  }
  return best;
}

function fireBlast() {
  if (state.phase !== 'playing' || state.mode !== 'foot') return;
  if (!canControl() || state.blastCooldown > 0) return;
  state.blastCooldown = 0.52;
  state.attackTime = 0.3;
  audio.blast();

  const target = findBlastTarget();
  const from = new THREE.Vector3(
    player.group.position.x - Math.sin(state.camYaw) * 0.2,
    1.35,
    player.group.position.z - Math.cos(state.camYaw) * 0.2,
  );

  if (target) {
    const dx = target.group.position.x - player.group.position.x;
    const dz = target.group.position.z - player.group.position.z;
    state.playerYaw = Math.atan2(dx, dz);
    player.group.rotation.y = state.playerYaw;
    const to = target.group.position.clone();
    to.y = Math.max(1, to.y + 0.6);
    spawnBolt(from, to, state.power > 1.2 ? 0xff8a5e : 0x78f6ff);
    damageEnemy(target, 44 * state.power);
  } else {
    const to = from.clone().add(new THREE.Vector3(
      -Math.sin(state.camYaw) * 18, -0.3, -Math.cos(state.camYaw) * 18,
    ));
    spawnBolt(from, to, 0x78f6ff);
  }
}

function damageEnemy(enemy, amount) {
  if (!enemy.alive) return;
  enemy.hp -= amount;
  enemy.flash = 0.16;
  audio.hit();
  const y = enemy.kind === 'bat' ? enemy.group.position.y : 1.4;
  spawnBurst(new THREE.Vector3(enemy.group.position.x, y, enemy.group.position.z), 0x8ff8ff, 5, 3.2);
  if (enemy.boss) updateBossBar();
  if (enemy.hp <= 0) killEnemy(enemy);
}

function killEnemy(enemy) {
  if (!enemy.alive) return;
  enemy.alive = false;
  scene.remove(enemy.group);
  const pos = enemy.group.position.clone();
  pos.y = enemy.kind === 'bat' ? enemy.group.position.y : 1.2;
  spawnBurst(pos, enemy.boss ? 0xff6b3d : 0xff4c3a, enemy.boss ? 28 : 12, enemy.boss ? 8 : 4.5);
  spawnShockwave(pos, enemy.boss ? 0xff8a4f : 0x8ff8ff, enemy.boss ? 11 : 2.4);
  disposeObject(enemy.group);
  state.kills += 1;
  state.score += enemy.boss ? 5000 : enemy.kind === 'demo' ? 350 : 100;

  if (enemy.boss) {
    state.bossDead = true;
    state.shake = 1.1;
    audio.success();
    toast('VECNA FALLS', 'THE ARCHLICH IS UNMADE · +5000', 'cyan');
    updateBossBar();
  }

  if (!enemy.boss && Math.random() < (enemy.kind === 'demo' ? 0.62 : 0.22)) {
    spawnPickup(enemy.group.position, 'health');
  }
  enemies = enemies.filter((e) => e.alive);
}

function damagePlayer(amount) {
  if (state.phase !== 'playing' || state.invuln > 0 || state.deathTimer > 0) return;
  state.health = Math.max(0, state.health - amount);
  state.invuln = 0.72;
  state.shake = Math.min(0.8, state.shake + 0.36);
  audio.hurt();
  flashDamage();
  if (state.health <= 0) die();
}

function die() {
  if (state.phase !== 'playing') return;
  state.phase = 'dead';
  state.deathTimer = 3.6;
  state.qte = null;
  ui.qte.classList.add('is-hidden');
  ui.interaction.classList.add('is-hidden');
  ui.deathScreen.classList.remove('is-hidden');
  audio.setEngine(false, 0, 0);
  if (document.pointerLockElement) document.exitPointerLock();
}

function respawn() {
  state.health = state.maxHealth;
  state.stamina = 100;
  state.nitro = 100;
  state.mode = 'foot';
  state.phase = 'playing';
  state.deathTimer = 0;
  state.invuln = 1.2;
  state.waveSpawned = false;
  state.waveCleared = false;
  state.sealDone = false;
  state.sealTimer = 0;
  state.qte = null;
  state.qteDelay = 0;
  state.qteNext = null;
  state.choiceActive = false;
  state.dialogueActive = false;
  clearEnemies();
  clearShots();
  player.group.visible = true;
  player.group.position.set(CITY.spawn.x, 0, CITY.spawn.z);
  state.playerYaw = 0;
  state.camYaw = Math.PI;
  chevelle.group.position.set(CITY.car.x, 0, CITY.car.z);
  chevelle.group.rotation.y = 0;
  state.carHeading = 0;
  state.carSpeed = 0;
  ui.deathScreen.classList.add('is-hidden');
  ui.carHud.classList.add('is-hidden');
  ui.crosshair.classList.remove('is-hidden');
  snapCamera();
  toast('SIGNAL RESTORED', 'THE ARCHIVIST IS NOT DONE WITH YOU', 'cyan');
  updateMissionHud();
}

/* ------------------------------------------------------------- enemies */
function spawnBat(x, z, y = 2.4) {
  const model = createDemobat();
  model.group.position.set(x, y, z);
  scene.add(model.group);
  enemies.push({
    kind: 'bat', model, group: model.group, hp: 34, maxHp: 34,
    radius: 1.1, speed: 7.4 + Math.random() * 1.8, cooldown: Math.random() * 1.4,
    alive: true, phase: Math.random() * TAU, baseY: y, scale: 0.82 + Math.random() * 0.24,
    flash: 0,
  });
}

function spawnDemo(x, z) {
  const model = createDemogorgon();
  model.group.position.set(x, 0, z);
  scene.add(model.group);
  enemies.push({
    kind: 'demo', model, group: model.group, hp: 126, maxHp: 126,
    radius: 1.5, speed: 2.5 + Math.random() * 0.5, cooldown: Math.random() * 1.2,
    alive: true, phase: Math.random() * TAU, flash: 0,
  });
}

function spawnVecna(x, z) {
  const model = createVecna();
  model.group.position.set(x, 0, z);
  scene.add(model.group);
  const hp = 520 * (state.flags.kidsSaved ? 0.86 : 1);
  enemies.push({
    kind: 'vecna', model, group: model.group, hp, maxHp: hp,
    radius: 2.1, cooldown: 2, shootTimer: 2.4, alive: true, boss: true,
    phase: Math.random() * TAU, summoned1: false, summoned2: false, flash: 0,
  });
  ui.bossBar.classList.remove('is-hidden');
  updateBossBar();
}

function spawnWave(chapter) {
  state.waveSpawned = true;
  state.waveCleared = false;
  state.sealDone = false;
  const rift = world.rifts[chapter.riftIndex];
  if (rift) rift.active = true;
  audio.portal();
  state.shake = 0.34;
  toast('THE HIVE STIRS', 'THE GATE IS OPEN · CLEAR THEM OUT', 'red');

  for (let i = 0; i < (chapter.bats || 0); i++) {
    const spot = findClearSpot(rift.x, rift.z, 6, 19, 0.4);
    spawnBat(spot.x, spot.z, 2.1 + Math.random() * 2.4);
  }
  for (let i = 0; i < (chapter.demos || 0); i++) {
    const spot = findClearSpot(rift.x, rift.z, 10, 21, 1.5);
    spawnDemo(spot.x, spot.z);
  }
  if (chapter.boss) {
    const spot = findClearSpot(rift.x, rift.z, 7, 12, 2.2);
    spawnVecna(spot.x, spot.z);
    toast('VECNA', 'THE ARCHLICH HAS BEEN WAITING', 'red');
  }

  state.qteDelay = 1.9;
  state.qteNext = {
    mode: 'dodge',
    prompt: 'A DEMOBAT LUNGES',
    key: 'SPACE',
    duration: 3.2,
    warn: 'PRESS SPACE TO DODGE',
    onSuccess: () => {
      toast('CLEAN DODGE', 'THE HIVE MISSES', 'cyan');
      state.score += 75;
    },
    onFail: () => {
      damagePlayer(12);
      toast('THE HIVE DRAWS BLOOD', '−12 VITALS', 'red');
    },
  };
}

function spawnExtraBats(count = 3) {
  const chapter = CHAPTERS[state.stage];
  const rift = world.rifts[chapter.riftIndex];
  for (let i = 0; i < count; i++) {
    const spot = findClearSpot(rift.x, rift.z, 5, 14, 0.4);
    spawnBat(spot.x, spot.z, 2.2 + Math.random() * 1.8);
  }
  state.waveCleared = false;
  toast('THE GATE SPITS THEM OUT', 'MORE OF THE HIVE ARRIVES', 'red');
}

function clearEnemies() {
  for (const enemy of enemies) {
    if (enemy.alive) {
      scene.remove(enemy.group);
      disposeObject(enemy.group);
    }
  }
  enemies = [];
  ui.bossBar.classList.add('is-hidden');
}

function updateEnemies(dt) {
  const activeAI = canControl();
  const px = player.group.position.x;
  const pz = player.group.position.z;

  for (const enemy of enemies) {
    if (!enemy.alive) continue;
    const g = enemy.group.position;
    const dx = px - g.x;
    const dz = pz - g.z;
    const d = Math.max(0.001, Math.hypot(dx, dz));
    enemy.flash = Math.max(0, (enemy.flash || 0) - dt);
    enemy.group.rotation.y = Math.atan2(dx, dz);

    if (enemy.kind === 'bat') {
      if (activeAI) {
        enemy.cooldown -= dt;
        if (d > 4.6) {
          g.x += (dx / d) * enemy.speed * dt;
          g.z += (dz / d) * enemy.speed * dt;
        } else {
          const strafe = Math.sin(state.time * 1.7 + enemy.phase);
          g.x += ((dx / d) * 0.25 + (-dz / d) * strafe) * enemy.speed * dt;
          g.z += ((dz / d) * 0.25 + (dx / d) * strafe) * enemy.speed * dt;
        }
        g.y = enemy.baseY + Math.sin(state.time * 2.4 + enemy.phase) * 0.38;
        if (d < 2.6 && enemy.cooldown <= 0) {
          damagePlayer(7);
          enemy.cooldown = 1.55 + Math.random() * 0.5;
        }
      }
      g.y = clamp(g.y, 0.9, 6);
      enemy.model.animate(dt, state.time, enemy.scale * (1 + enemy.flash * 0.35));
    } else if (enemy.kind === 'demo') {
      if (activeAI) {
        enemy.cooldown -= dt;
        g.y = 0;
        if (d > 3.0) {
          moveWithCollisions(enemy.group, (dx / d) * enemy.speed * dt, (dz / d) * enemy.speed * dt, 1.05);
        } else if (enemy.cooldown <= 0) {
          damagePlayer(15);
          state.shake = Math.min(0.9, state.shake + 0.24);
          enemy.cooldown = 1.7;
        }
      }
      enemy.model.animate(dt, state.time, d > 3 ? 1 : 0.5);
    } else if (enemy.kind === 'vecna') {
      if (activeAI) {
        enemy.shootTimer -= dt;
        if (d < 4.4) damagePlayer(18);
        if (enemy.shootTimer <= 0) {
          enemy.shootTimer = 2.5 + Math.random() * 0.8;
          shootOrb(enemy);
        }
        const ratio = enemy.hp / enemy.maxHp;
        if (!enemy.summoned1 && ratio < 0.68) {
          enemy.summoned1 = true;
          for (let i = 0; i < 3; i++) {
            const a = Math.random() * TAU;
            spawnBat(g.x + Math.cos(a) * 7, g.z + Math.sin(a) * 7, 2.5);
          }
          toast('VECNA CALLS THE HIVE', 'THE ARCHLICH SUMMONS HELP', 'red');
        }
        if (!enemy.summoned2 && ratio < 0.34) {
          enemy.summoned2 = true;
          for (let i = 0; i < 4; i++) {
            const a = Math.random() * TAU;
            spawnBat(g.x + Math.cos(a) * 8, g.z + Math.sin(a) * 8, 2.3);
          }
          state.qteDelay = 0.15;
          state.qteNext = {
            mode: 'still', prompt: "DON'T MOVE", key: 'HOLD STILL', duration: 2.8,
            warn: 'THE ARCHLICH IS IN YOUR HEAD · KEEP STILL',
            onSuccess: () => { toast('MIND HELD', 'VECNA FINDS NOTHING', 'cyan'); state.score += 200; },
            onFail: () => { damagePlayer(22); toast('YOUR MIND OPENS', '−22 VITALS', 'red'); },
          };
        }
      }
      enemy.model.animate(dt, state.time);
    }
  }
  enemies = enemies.filter((e) => e.alive);

  if (state.bossDead) updateBossBar();
}

function updateBossBar() {
  const boss = enemies.find((e) => e.boss && e.alive);
  if (!boss) {
    ui.bossBar.classList.add('is-hidden');
    return;
  }
  ui.bossBar.classList.remove('is-hidden');
  ui.bossFill.style.width = `${clamp((boss.hp / boss.maxHp) * 100, 0, 100)}%`;
}

function shootOrb(enemy) {
  const group = new THREE.Group();
  const core = new THREE.Mesh(new THREE.SphereGeometry(0.3, 8, 6), new THREE.MeshBasicMaterial({ color: 0xff5a3d, toneMapped: false }));
  const halo = new THREE.Sprite(new THREE.SpriteMaterial({
    map: makeGlowTexture(), color: 0xff2d1e, transparent: true, opacity: 0.85,
    blending: THREE.AdditiveBlending, depthWrite: false, toneMapped: false,
  }));
  halo.scale.set(3, 3, 1);
  group.add(core, halo);
  const start = new THREE.Vector3(enemy.group.position.x, 4.3, enemy.group.position.z);
  group.position.copy(start);
  scene.add(group);
  const target = new THREE.Vector3(player.group.position.x, 1.1, player.group.position.z);
  const dir = target.sub(start).normalize();
  shots.push({ group, vel: dir.multiplyScalar(13), life: 4.5, damage: 14 });
  audio.blast();
}

const glowTextureCache = { texture: null };
function makeGlowTexture() {
  if (glowTextureCache.texture) return glowTextureCache.texture;
  const canvas = document.createElement('canvas');
  canvas.width = 128;
  canvas.height = 128;
  const ctx = canvas.getContext('2d');
  const g = ctx.createRadialGradient(64, 64, 2, 64, 64, 64);
  g.addColorStop(0, 'rgba(255,255,255,1)');
  g.addColorStop(0.2, 'rgba(255,255,255,.82)');
  g.addColorStop(0.55, 'rgba(255,255,255,.18)');
  g.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 128, 128);
  glowTextureCache.texture = new THREE.CanvasTexture(canvas);
  return glowTextureCache.texture;
}

function clearShots() {
  for (const shot of shots) {
    scene.remove(shot.group);
    disposeObject(shot.group);
  }
  shots = [];
}

function updateShots(dt) {
  const live = canControl();
  const px = player.group.position.x;
  const pz = player.group.position.z;
  for (const shot of shots) {
    shot.life -= dt;
    if (live) {
      shot.group.position.addScaledVector(shot.vel, dt);
      const d = dist2d(shot.group.position.x, shot.group.position.z, px, pz);
      if (d < 1.5) {
        damagePlayer(shot.damage);
        spawnBurst(shot.group.position.clone(), 0xff5a3d, 8, 3);
        shot.life = 0;
      }
    }
    if (shot.life <= 0) {
      scene.remove(shot.group);
      disposeObject(shot.group);
    }
  }
  shots = shots.filter((s) => s.life > 0);
}

/* ------------------------------------------------------------------ fx */
function spawnBolt(from, to, color) {
  const bolt = createBlast(color);
  bolt.group.position.copy(from);
  scene.add(bolt.group);
  effects.push({ kind: 'bolt', group: bolt.group, from: from.clone(), to: to.clone(), life: 0.16, maxLife: 0.16 });
}

function spawnBurst(position, color, count = 8, spread = 4) {
  const group = new THREE.Group();
  const mat = new THREE.MeshBasicMaterial({
    color, transparent: true, opacity: 1, depthWrite: false,
    blending: THREE.AdditiveBlending, toneMapped: false,
  });
  const parts = [];
  for (let i = 0; i < count; i++) {
    const mesh = new THREE.Mesh(particleGeo, mat);
    mesh.position.copy(position);
    group.add(mesh);
    parts.push({
      mesh,
      vel: new THREE.Vector3(
        (Math.random() - 0.5) * spread,
        Math.random() * spread * 0.75,
        (Math.random() - 0.5) * spread,
      ),
    });
  }
  scene.add(group);
  effects.push({ kind: 'burst', group, mat, parts, life: 0.72, maxLife: 0.72 });
}

function spawnShockwave(position, color, radius = 2.2) {
  const mesh = createShockwave(color);
  mesh.position.copy(position);
  mesh.position.y = 0.14;
  scene.add(mesh);
  effects.push({ kind: 'wave', group: mesh, mat: mesh.material, life: 0.6, maxLife: 0.6, radius });
}

function updateEffects(dt) {
  for (const fx of effects) {
    fx.life -= dt;
    const t = clamp(fx.life / fx.maxLife, 0, 1);
    if (fx.kind === 'bolt') {
      const p = 1 - t;
      fx.group.position.lerpVectors(fx.from, fx.to, p);
      fx.group.scale.setScalar(0.7 + Math.sin(p * Math.PI) * 0.8);
    } else if (fx.kind === 'burst') {
      fx.mat.opacity = t;
      for (const part of fx.parts) {
        part.mesh.position.addScaledVector(part.vel, dt);
        part.vel.y -= 5.4 * dt;
      }
    } else if (fx.kind === 'wave') {
      const s = 1 + (1 - t) * fx.radius;
      fx.group.scale.setScalar(s);
      fx.mat.opacity = t * 0.62;
    }
    if (fx.life <= 0) {
      scene.remove(fx.group);
      if (fx.mat) fx.mat.dispose();
      if (fx.kind === 'bolt') disposeObject(fx.group);
    }
  }
  effects = effects.filter((fx) => fx.life > 0);
}

/* ---------------------------------------------------------- collectibles */
function spawnPickup(position, kind = 'health') {
  const group = createPickup(kind);
  group.position.set(position.x, 0, position.z);
  scene.add(group);
  pickups.push({ group, kind, phase: Math.random() * TAU, life: 26 });
}

function collectTape(tape) {
  tape.taken = true;
  scene.remove(tape.group);
  disposeObject(tape.group);
  state.tapeCount += 1;
  state.score += 500;
  state.health = Math.min(state.maxHealth, state.health + 6);
  ui.tapeCount.textContent = `${state.tapeCount} / 8`;
  ui.itemCounter.classList.remove('pulse');
  void ui.itemCounter.offsetWidth;
  ui.itemCounter.classList.add('pulse');
  audio.pickup();
  toast('MIXTAPE FOUND', `${state.tapeCount} OF 8 · +500`, 'cyan');
  if (state.tapeCount === 8) {
    toast('THE COMPLETE MIXTAPE', 'THE ARCHIVIST IS IMPRESSED · +2500', 'cyan');
    state.score += 2500;
    state.health = state.maxHealth;
  }
}

function updateCollectibles(dt) {
  if (state.phase !== 'playing') return;
  const px = player.group.position.x;
  const pz = player.group.position.z;

  for (const tape of tapes) {
    if (tape.taken) continue;
    const mesh = tape.group.userData.mesh;
    tape.phase += dt;
    mesh.rotation.z += dt * 1.4;
    mesh.position.y = 1.05 + Math.sin(state.time * 2.2 + tape.phase) * 0.18;
    tape.group.userData.glow.material.opacity = 0.3 + Math.sin(state.time * 3 + tape.phase) * 0.1;
    if (dist2d(tape.group.position.x, tape.group.position.z, px, pz) < 2.2) collectTape(tape);
  }

  for (const pickup of pickups) {
    pickup.life -= dt;
    pickup.phase += dt;
    const mesh = pickup.group.userData.mesh;
    mesh.rotation.y += dt * 2.1;
    mesh.position.y = 0.9 + Math.sin(state.time * 2.6 + pickup.phase) * 0.16;
    pickup.group.userData.glow.material.opacity = 0.32 + Math.sin(state.time * 4 + pickup.phase) * 0.1;
    if (dist2d(pickup.group.position.x, pickup.group.position.z, px, pz) < 2.3) {
      const heal = 18;
      state.health = Math.min(state.maxHealth, state.health + heal);
      audio.pickup();
      toast('FIRST AID', `+${heal} VITALS`, 'cyan');
      spawnBurst(new THREE.Vector3(pickup.group.position.x, 0.9, pickup.group.position.z), 0x6fffc2, 8, 2.6);
      pickup.life = 0;
    }
    if (pickup.life <= 0) {
      scene.remove(pickup.group);
      disposeObject(pickup.group);
    }
  }
  pickups = pickups.filter((p) => p.life > 0);
}

/* ------------------------------------------------------------------ car */
function enterCar() {
  if (state.mode !== 'foot' || distanceTo(chevelle.group.position.x, chevelle.group.position.z) > 10.5) return;
  state.mode = 'car';
  state.carSpeed = 0;
  state.carNitro = false;
  player.group.visible = false;
  ui.carHud.classList.remove('is-hidden');
  ui.crosshair.classList.add('is-hidden');
  ui.interaction.classList.add('is-hidden');
  audio.setEngine(true, 0, 0);
  audio.ui();
  toast('HELLFIRE CHEVELLE', 'WASD DRIVE · SHIFT NITRO · E EXIT', 'cyan');
}

function exitCar() {
  if (state.mode !== 'car') return;
  state.mode = 'foot';
  state.carSpeed = 0;
  const h = state.carHeading;
  const sideX = Math.cos(h);
  const sideZ = -Math.sin(h);
  const spot = findClearSpot(chevelle.group.position.x + sideX * 2.8, chevelle.group.position.z + sideZ * 2.8, 0, 1.6, 0.6);
  player.group.position.set(spot.x, 0, spot.z);
  player.group.visible = true;
  state.playerYaw = h;
  player.group.rotation.y = h;
  state.camYaw = h + Math.PI;
  ui.carHud.classList.add('is-hidden');
  ui.crosshair.classList.remove('is-hidden');
  audio.setEngine(false, 0, 0);
  audio.ui();
}

function summonRide() {
  if (state.mode === 'car') return;
  const px = player.group.position.x;
  const pz = player.group.position.z;
  const behindX = Math.sin(state.camYaw);
  const behindZ = Math.cos(state.camYaw);
  let spot = { x: px + behindX * 8, z: pz + behindZ * 8 };
  if (world.blocked(spot.x, spot.z, 1.7)) spot = findClearSpot(px, pz, 5, 11, 1.7);
  chevelle.group.position.set(spot.x, 0, spot.z);
  state.carSpeed = 0;
  state.carHeading = Math.atan2(px - spot.x, pz - spot.z);
  chevelle.group.rotation.y = state.carHeading;
  spawnShockwave(new THREE.Vector3(spot.x, 0, spot.z), 0x55e7ff, 5);
  audio.portal();
  toast('RIDE SUMMONED', 'THE CHEVELLE COMES WHEN CALLED', 'cyan');
}

function updateCar(dt) {
  if (state.mode !== 'car') return;
  const control = canControl();
  let throttle = 0;
  let steer = 0;
  if (control) {
    if (keys.KeyW || keys.ArrowUp) throttle += 1;
    if (keys.KeyS || keys.ArrowDown) throttle -= 1;
    if (keys.KeyA) steer += 1;
    if (keys.KeyD) steer -= 1;
    if (touch.active) {
      throttle += -touch.iz;
      steer += -touch.ix;
    }
    if (keys.ArrowLeft) state.camYaw += 1.8 * dt;
    if (keys.ArrowRight) state.camYaw -= 1.8 * dt;
  }
  throttle = clamp(throttle, -1, 1);
  steer = clamp(steer, -1, 1);

  const nitro = control && (keys.ShiftLeft || keys.ShiftRight || touch.sprint) && state.nitro > 1 && throttle > 0;
  state.carNitro = nitro;
  if (nitro) state.nitro = Math.max(0, state.nitro - 34 * dt);
  else state.nitro = Math.min(100, state.nitro + 13 * dt);

  const maxSpeed = nitro ? 47 : 35;
  if (throttle > 0) {
    const accel = nitro ? 21 : 12.5;
    state.carSpeed += accel * dt * (1 - Math.abs(state.carSpeed) / (maxSpeed + 2));
  } else if (throttle < 0) {
    state.carSpeed -= 22 * dt;
  } else {
    state.carSpeed -= Math.sign(state.carSpeed) * Math.min(Math.abs(state.carSpeed), (1.8 + Math.abs(state.carSpeed) * 0.5) * dt);
  }
  if (control && keys.Space) state.carSpeed *= Math.exp(-4.4 * dt);
  state.carSpeed = clamp(state.carSpeed, -12, maxSpeed);
  if (Math.abs(state.carSpeed) < 0.12) state.carSpeed = 0;

  if (Math.abs(state.carSpeed) > 0.2) {
    const turn = steer * 1.28 * clamp(Math.abs(state.carSpeed) / 11, 0, 1) * Math.sign(state.carSpeed);
    state.carHeading += turn * dt;
  }
  state.carSteer = damp(state.carSteer, steer, 8, dt);
  chevelle.group.rotation.y = state.carHeading;

  const fx = Math.sin(state.carHeading);
  const fz = Math.cos(state.carHeading);
  const moveX = fx * state.carSpeed * dt;
  const moveZ = fz * state.carSpeed * dt;
  const nx = chevelle.group.position.x + moveX;
  const nz = chevelle.group.position.z + moveZ;
  if (world.blocked(nx, nz, 1.45)) {
    const impact = Math.abs(state.carSpeed);
    if (impact > 17) {
      damagePlayer(7);
      toast('METAL ON BRICK', '−7 VITALS', 'red');
    }
    state.carSpeed *= -0.2;
    state.shake = Math.min(1, state.shake + impact * 0.015);
    spawnBurst(new THREE.Vector3(nx, 0.7, nz), 0xffc06a, 7, 3);
    audio.hit();
  } else {
    chevelle.group.position.x = nx;
    chevelle.group.position.z = nz;
  }

  player.group.position.copy(chevelle.group.position);
  chevelle.animate(dt, state.carSpeed, state.carSteer);
  audio.setEngine(true, state.carSpeed, throttle);

  // Roadkill is still roadkill.
  if (Math.abs(state.carSpeed) > 7) {
    for (const enemy of enemies) {
      if (!enemy.alive) continue;
      if (dist2d(enemy.group.position.x, enemy.group.position.z, chevelle.group.position.x, chevelle.group.position.z) < 3.3) {
        if (enemy.kind === 'bat') damageEnemy(enemy, 60);
        else damageEnemy(enemy, 20 + Math.abs(state.carSpeed) * 1.6);
      }
    }
  }

  if (!canControl()) state.carSpeed *= Math.exp(-2.4 * dt);
}

/* ---------------------------------------------------------------- story */
function setStage(stage) {
  state.stage = stage;
  state.waveSpawned = false;
  state.waveCleared = false;
  state.sealDone = false;
  state.sealTimer = 0;
  state.qteDelay = 0;
  state.qteNext = null;
  state.qte = null;
  state.dialogueActive = false;
  clearShots();
  const chapter = CHAPTERS[stage];
  world.setBeacon(chapter.target.x, chapter.target.z, chapter.color, true);
  updateMissionHud();
  showChapter(chapter);
}

function showChapter(chapter) {
  ui.chapterNo.textContent = chapter.act;
  ui.chapterTitle.textContent = chapter.title;
  ui.chapterQuote.textContent = chapter.quote;
  ui.chapter.classList.remove('is-hidden', 'out');
  void ui.chapter.offsetWidth;
  clearTimeout(chapterTimer);
  chapterTimer = setTimeout(() => {
    ui.chapter.classList.add('out');
    chapterTimer = setTimeout(() => ui.chapter.classList.add('is-hidden'), 450);
  }, 4200);
}

function updateMissionHud() {
  const chapter = CHAPTERS[state.stage];
  if (!chapter) return;
  ui.caseNo.textContent = `CASE 0${state.stage + 1} / 05`;
  ui.missionTitle.textContent = chapter.title;
  ui.missionDesc.textContent = chapter.desc;
  ui.locationText.textContent = chapter.location;
  let hint = chapter.hint;
  if (chapter.kind === 'rift') {
    if (state.waveSpawned && !state.waveCleared) hint = 'CLEAR THE HIVE';
    else if (state.waveCleared) hint = state.sealDone ? 'RIFT SEALED' : 'SEAL THE RIFT';
  }
  ui.missionHint.textContent = hint;
  const d = distanceTo(chapter.target.x, chapter.target.z);
  ui.missionDistance.textContent = `${Math.round(d)} M`;
  ui.breachFill.style.width = `${Math.max(8, 82 - state.riftsSealed * 18)}%`;
  if (state.health < 30) ui.signalText.textContent = 'CRITICAL';
  else if (state.health < 60) ui.signalText.textContent = 'FADING';
  else ui.signalText.textContent = state.riftsSealed >= 3 ? 'STRONG' : 'UNSTABLE';
}

function showDialogue(lines, onDone) {
  if (!lines || !lines.length) {
    if (onDone) onDone();
    return;
  }
  state.dialogueActive = true;
  state.dialogueQueue = lines;
  state.dialogueIndex = 0;
  state.dialogueDone = onDone;
  ui.dialogue.classList.remove('is-hidden');
  ui.interaction.classList.add('is-hidden');
  renderDialogueLine();
}

function renderDialogueLine() {
  const line = state.dialogueQueue[state.dialogueIndex];
  if (!line) {
    endDialogue();
    return;
  }
  ui.portrait.textContent = line.portrait;
  ui.speaker.textContent = line.speaker;
  state.dialogueFull = line.line;
  state.dialogueTyping = true;
  ui.line.textContent = '';
  clearInterval(state.dialogueTimer);
  let i = 0;
  state.dialogueTimer = setInterval(() => {
    i += 2;
    ui.line.textContent = state.dialogueFull.slice(0, i);
    if (i >= state.dialogueFull.length) {
      clearInterval(state.dialogueTimer);
      ui.line.textContent = state.dialogueFull;
      state.dialogueTyping = false;
    }
  }, 16);
  audio.ui();
}

function advanceDialogue() {
  if (!state.dialogueActive) return;
  if (state.dialogueTyping) {
    clearInterval(state.dialogueTimer);
    ui.line.textContent = state.dialogueFull;
    state.dialogueTyping = false;
    return;
  }
  state.dialogueIndex += 1;
  if (state.dialogueIndex >= state.dialogueQueue.length) endDialogue();
  else renderDialogueLine();
}

function endDialogue() {
  clearInterval(state.dialogueTimer);
  state.dialogueActive = false;
  ui.dialogue.classList.add('is-hidden');
  const done = state.dialogueDone;
  state.dialogueDone = null;
  if (done) done();
}

function showChoice(config) {
  state.choiceActive = true;
  ui.choiceTitle.textContent = config.title;
  ui.choiceText.textContent = config.text;
  ui.choiceA.innerHTML = `<span>1</span><b>${config.a.label}</b><small>${config.a.desc}</small>`;
  ui.choiceB.innerHTML = `<span>2</span><b>${config.b.label}</b><small>${config.b.desc}</small>`;
  ui.choiceScreen.classList.remove('is-hidden');
  state.choiceCallback = config.callback;
  audio.ui();
}

function pickChoice(index) {
  if (!state.choiceActive) return;
  state.choiceActive = false;
  ui.choiceScreen.classList.add('is-hidden');
  audio.ui();
  const callback = state.choiceCallback;
  state.choiceCallback = null;
  if (callback) callback(index);
}

function triggerEddieScene() {
  if (state.missionTriggered) return;
  state.missionTriggered = true;
  showDialogue([
    { speaker: 'EDDIE', portrait: 'E', line: "You came. I knew you'd come. They're in the walls, man. All of them." },
    { speaker: 'YOU', portrait: 'H', line: "Where's the gate, Eddie?" },
    { speaker: 'EDDIE', portrait: 'E', line: "Lover's Lake. Under the water. It's singing, dude. It knows my name." },
    { speaker: 'THE ARCHIVIST', portrait: 'A', line: "And so the story begins. Four gates. One long night. The rest is up to you." },
  ], () => {
    toast('CASE FILE UPDATED', "LOVER'S LAKE · A GATE UNDER THE WATER", 'cyan');
    completeChapter();
  });
}

function completeChapter() {
  if (state.stage >= 4) {
    endGame();
    return;
  }
  state.stage += 1;
  state.health = Math.min(state.maxHealth, state.health + 14);
  state.stamina = 100;
  state.waveSpawned = false;
  state.waveCleared = false;
  state.sealDone = false;
  state.qte = null;
  state.qteNext = null;
  state.qteDelay = 0;
  state.missionTriggered = false;
  clearEnemies();
  const chapter = CHAPTERS[state.stage];
  world.setBeacon(chapter.target.x, chapter.target.z, chapter.color, true);
  updateMissionHud();
  showChapter(chapter);
  toast(chapter.act, chapter.title, 'cyan');
}

function startStageChoice(config) {
  setTimeout(() => {
    if (state.phase !== 'playing') return;
    showChoice(config);
  }, 1000);
}

function sealRift() {
  const chapter = CHAPTERS[state.stage];
  if (state.sealDone) return;
  state.sealDone = true;
  state.riftsSealed += 1;
  const rift = chapter.riftIndex >= 0 ? world.rifts[chapter.riftIndex] : null;
  if (rift) rift.active = false;
  spawnShockwave(new THREE.Vector3(chapter.target.x, 0.1, chapter.target.z), chapter.color, 16);
  spawnBurst(new THREE.Vector3(chapter.target.x, 4, chapter.target.z), 0xff9a63, 24, 9);
  state.shake = 0.7;
  audio.success();
  toast('RIFT SEALED', `${state.riftsSealed} OF 4 · THE SIGNAL STEADIES`, 'cyan');
  updateMissionHud();

  if (state.stage === 1) {
    startStageChoice({
      title: "EDDIE'S SONG",
      text: 'The bats are gone. Eddie is bleeding on the dock, still holding his guitar. The hive is listening. You can carry him home, or take the guitar and burn the nest.',
      a: { label: 'SAVE EDDIE', desc: 'Carry him to the van. Let him play one more song.' },
      b: { label: 'BURN THE NEST', desc: 'Take the guitar. End it with fire.' },
      callback: (choice) => {
        if (choice === 0) {
          state.flags.eddieSaved = true;
          state.health = Math.min(state.maxHealth, state.health + 38);
          toast('EDDIE WILL REMEMBER THIS', 'HE PLAYS ONE LAST SONG · +38 VITALS', 'cyan');
        } else {
          state.power = 1.35;
          state.flags.eddieSaved = false;
          toast('HELLFIRE BURNS BRIGHTER', 'PSIONIC DAMAGE +35%', 'red');
        }
        completeChapter();
      },
    });
  } else if (state.stage === 3) {
    startStageChoice({
      title: 'THE FOOD COURT',
      text: 'The gate is collapsing and the kids are trapped behind it. You can hold it open long enough to get them out, or close it while Vecna is still weak.',
      a: { label: 'SAVE THE KIDS', desc: 'Hold the gate. Take the wounded with you.' },
      b: { label: 'CLOSE IT NOW', desc: 'Seal the gate. Keep the power for yourself.' },
      callback: (choice) => {
        if (choice === 0) {
          state.flags.kidsSaved = true;
          state.health = state.maxHealth;
          toast('THE KIDS GET OUT', 'VECNA IS WEAKENED · VITALS RESTORED', 'cyan');
        } else {
          state.power += 0.18;
          toast('POWER SURGE', 'PSIONIC DAMAGE +18%', 'red');
        }
        completeChapter();
      },
    });
  } else if (state.stage === 4) {
    startStageChoice({
      title: 'THE LAST DOOR',
      text: 'Vecna is gone. The hive is silent. One gate remains, breathing under the lab. You can seal it and let Hawkins heal, or burn it all and make sure nothing ever comes back.',
      a: { label: 'SEAL THE HIVE', desc: 'Close it forever. Let the town heal.' },
      b: { label: 'BURN IT ALL', desc: 'End the story with fire.' },
      callback: (choice) => {
        state.flags.finalChoice = choice === 0 ? 'seal' : 'burn';
        endGame();
      },
    });
  } else {
    state.pendingAdvance = 1.4;
  }
}

function updateMission(dt) {
  if (!canControl()) return;
  const chapter = CHAPTERS[state.stage];
  if (!chapter) return;
  const d = distanceTo(chapter.target.x, chapter.target.z);

  if (chapter.kind === 'reach') {
    if (!state.missionTriggered && d < 10) triggerEddieScene();
    return;
  }

  if (!state.waveSpawned && d < 43) spawnWave(chapter);

  if (state.waveSpawned && !state.waveCleared && enemies.length === 0) {
    state.waveCleared = true;
    state.sealTimer = 1.8;
    state.qteDelay = 0;
    state.qteNext = null;
    audio.success();
    if (chapter.boss) toast('THE ARCHLICH IS DOWN', 'THE GATE IS EXPOSED · SEAL IT', 'cyan');
    else toast('HIVE CLEARED', 'THE GATE IS EXPOSED · SEAL IT', 'cyan');
  }

  if (state.waveCleared && !state.sealDone) {
    if (state.sealTimer > 0) {
      state.sealTimer -= dt;
      if (state.sealTimer <= 0 && d < 42) startSealQTE();
    } else if (d < 42 && state.qteDelay <= 0) {
      // Keep the prompt available; E also triggers the event.
      ui.interactionText.textContent = 'SEAL THE RIFT';
    }
  }

  if (state.pendingAdvance > 0) {
    state.pendingAdvance -= dt;
    if (state.pendingAdvance <= 0) completeChapter();
  }
}

function startSealQTE() {
  if (!state.waveCleared || state.sealDone || state.qte) return;
  startQte({
    mode: 'tap',
    prompt: 'TEAR THE GATE CLOSED',
    key: 'F',
    duration: 5.4,
    need: state.stage === 4 ? 13 : 10,
    warn: 'MASH F · KEEP THE GATE OPEN',
    onSuccess: () => {
      audio.success();
      toast('GATE COLLAPSED', 'THE OTHER SIDE GOES QUIET', 'cyan');
      sealRift();
    },
    onFail: () => {
      damagePlayer(15);
      spawnExtraBats(3);
      state.sealTimer = 4.2;
      toast('THE RIFT SPITS YOU OUT', '−15 VITALS · IT IS NOT DONE WITH YOU', 'red');
    },
  });
}

/* ------------------------------------------------------------------ QTE */
function startQte(config) {
  if (state.qte) return;
  state.qte = {
    ...config,
    remaining: config.duration,
    progress: 0,
    moved: 0,
    resolved: false,
    lastBeep: 99,
  };
  state.qteDelay = 0;
  state.qteNext = null;
  ui.qte.classList.remove('is-hidden');
  ui.qtePrompt.textContent = config.prompt;
  const touchLabel = state.isTouch && config.mode !== 'still';
  ui.qteKey.textContent = touchLabel ? 'TAP BLAST' : config.key;
  ui.qteWarn.textContent = config.warn || '';
  ui.qteCount.textContent = config.mode === 'tap' ? `0 / ${config.need}` : `${config.duration.toFixed(1)}s`;
  ui.qteFill.style.width = config.mode === 'tap' ? '0%' : '100%';
  ui.crosshair.classList.add('is-hidden');
  audio.qteTick();
}

function updateQte(dt) {
  if (state.qte) {
    const qte = state.qte;
    qte.remaining -= dt;
    if (qte.mode === 'tap') {
      ui.qteFill.style.width = `${clamp((qte.progress / qte.need) * 100, 0, 100)}%`;
      ui.qteCount.textContent = `${qte.progress} / ${qte.need}`;
    } else {
      ui.qteFill.style.width = `${clamp((qte.remaining / qte.duration) * 100, 0, 100)}%`;
      ui.qteCount.textContent = `${Math.max(0, qte.remaining).toFixed(1)}s`;
    }
    if (qte.mode === 'still' && qte.moved > 3) {
      finishQte(false);
      return;
    }
    if (qte.remaining <= 0) {
      if (qte.mode === 'still') finishQte(true);
      else finishQte(false);
      return;
    }
    const whole = Math.ceil(qte.remaining);
    if (whole !== qte.lastBeep && qte.remaining < 2.8) {
      qte.lastBeep = whole;
      audio.qteTick(true);
    }
    return;
  }
  if (state.qteDelay > 0 && state.phase === 'playing' && !state.choiceActive && !state.dialogueActive) {
    state.qteDelay -= dt;
    if (state.qteDelay <= 0 && state.qteNext) {
      const next = state.qteNext;
      state.qteNext = null;
      startQte(next);
    }
  }
}

function qtePress() {
  if (!state.qte) return;
  const qte = state.qte;
  if (qte.mode === 'tap') {
    qte.progress += 1;
    audio.qteTick(qte.progress > qte.need * 0.7);
    ui.qteFill.style.width = `${clamp((qte.progress / qte.need) * 100, 0, 100)}%`;
    ui.qteCount.textContent = `${qte.progress} / ${qte.need}`;
    if (qte.progress >= qte.need) finishQte(true);
  } else if (qte.mode === 'dodge') {
    finishQte(true);
  } else if (qte.mode === 'still') {
    qte.moved += 4;
  }
}

function finishQte(success) {
  if (!state.qte) return;
  const qte = state.qte;
  state.qte = null;
  ui.qte.classList.add('is-hidden');
  ui.crosshair.classList.remove('is-hidden');
  if (success) audio.success();
  else audio.failure();
  if (success && qte.onSuccess) qte.onSuccess();
  if (!success && qte.onFail) qte.onFail();
}

/* ------------------------------------------------------------- interaction */
function currentInteraction() {
  if (state.phase !== 'playing' || state.qte || state.choiceActive || state.dialogueActive) return null;
  if (state.mode === 'car') return { text: 'EXIT VEHICLE', action: 'exit' };
  const chapter = CHAPTERS[state.stage];
  if (chapter && chapter.kind === 'rift' && state.waveCleared && !state.sealDone) {
    if (distanceTo(chapter.target.x, chapter.target.z) < 32) {
      return { text: 'SEAL THE RIFT', action: 'seal' };
    }
  }
  if (distanceTo(chevelle.group.position.x, chevelle.group.position.z) < 10.5) {
    return { text: 'STEAL THE HELLFIRE CHEVELLE', action: 'enter' };
  }
  return null;
}

function updateInteraction() {
  const interaction = currentInteraction();
  if (!interaction) {
    ui.interaction.classList.add('is-hidden');
    return;
  }
  ui.interaction.classList.remove('is-hidden');
  ui.interactionText.textContent = interaction.text;
}

function doInteract() {
  const interaction = currentInteraction();
  if (!interaction) return;
  if (interaction.action === 'enter') enterCar();
  else if (interaction.action === 'exit') exitCar();
  else if (interaction.action === 'seal') startSealQTE();
}

/* ------------------------------------------------------------- game loop */
function updateHud(dt) {
  ui.healthText.textContent = Math.ceil(state.health);
  ui.healthFill.style.width = `${clamp(state.health / state.maxHealth * 100, 0, 100)}%`;
  ui.healthFill.classList.toggle('low', state.health < 32);
  ui.staminaFill.style.width = `${clamp(state.stamina, 0, 100)}%`;
  ui.nitroFill.style.width = `${clamp(state.nitro, 0, 100)}%`;
  const mph = Math.round(Math.abs(state.carSpeed) * 2.237);
  ui.speedValue.textContent = String(mph).padStart(3, '0');
  ui.gearValue.textContent = state.mode === 'car' ? (state.carSpeed < -0.4 ? 'R' : state.carSpeed > 0.4 ? 'D' : 'N') : 'ON FOOT';
  const chapter = CHAPTERS[state.stage];
  if (chapter) {
    const d = Math.round(distanceTo(chapter.target.x, chapter.target.z));
    ui.missionDistance.textContent = `${d} M`;
    world.beacon.visible = d > 18;
    if (chapter.kind === 'rift') {
      if (state.sealDone) ui.missionHint.textContent = 'RIFT SEALED';
      else if (state.waveCleared) ui.missionHint.textContent = 'SEAL THE RIFT';
      else if (state.waveSpawned) ui.missionHint.textContent = 'CLEAR THE HIVE';
      else ui.missionHint.textContent = chapter.hint;
    }
  }
  if (state.mode === 'foot') {
    state.hasTarget = Boolean(findBlastTarget());
    ui.crosshair.classList.toggle('locked', state.hasTarget);
  }
  if (state.flashTimer > 0) {
    state.flashTimer -= dt;
    if (state.flashTimer <= 0) ui.damageFlash.classList.remove('hit');
  }
}

function updateCamera(dt) {
  const carMode = state.mode === 'car';
  const target = carMode ? chevelle.group.position : player.group.position;
  if (carMode) {
    const desired = state.carHeading + Math.PI;
    state.camYaw = angleLerp(state.camYaw, desired, 1 - Math.exp(-4.2 * dt));
  }
  const dist = carMode ? 13.4 : 8.7;
  const height = carMode ? 6.4 : 4.9 + state.camPitch * 2.6;
  const desiredX = target.x + Math.sin(state.camYaw) * dist;
  const desiredZ = target.z + Math.cos(state.camYaw) * dist;
  state.cameraPos.x = damp(state.cameraPos.x, desiredX, 7.5, dt);
  state.cameraPos.z = damp(state.cameraPos.z, desiredZ, 7.5, dt);
  state.cameraPos.y = damp(state.cameraPos.y, height, 6, dt);
  camera.position.copy(state.cameraPos);
  if (state.shake > 0) {
    camera.position.x += (Math.random() - 0.5) * state.shake;
    camera.position.y += (Math.random() - 0.5) * state.shake * 0.55;
    camera.position.z += (Math.random() - 0.5) * state.shake;
    state.shake = Math.max(0, state.shake - dt * 1.8);
  }
  camera.lookAt(target.x, target.y + (carMode ? 1.15 : 1.55), target.z);
  const wantFov = carMode && state.carNitro ? 64 : 56;
  if (Math.abs(camera.fov - wantFov) > 0.05) {
    camera.fov = damp(camera.fov, wantFov, 4, dt);
    camera.updateProjectionMatrix();
  }
}

function snapCamera() {
  const carMode = state.mode === 'car';
  const target = carMode ? chevelle.group.position : player.group.position;
  if (carMode) state.camYaw = state.carHeading + Math.PI;
  const dist = carMode ? 13.4 : 8.7;
  const height = carMode ? 6.4 : 4.9 + state.camPitch * 2.6;
  state.cameraPos.set(
    target.x + Math.sin(state.camYaw) * dist,
    height,
    target.z + Math.cos(state.camYaw) * dist,
  );
  camera.position.copy(state.cameraPos);
  camera.lookAt(target.x, target.y + (carMode ? 1.15 : 1.55), target.z);
}

function updateTitleCamera(dt) {
  state.titleT += dt;
  const t = state.titleT * 0.075;
  const radius = 56;
  camera.position.set(Math.sin(t) * radius, 19 + Math.sin(t * 2.1) * 2.2, Math.cos(t) * radius);
  camera.lookAt(0, 3.4, 0);
  if (camera.fov !== 56) {
    camera.fov = 56;
    camera.updateProjectionMatrix();
  }
}

/* --------------------------------------------------------------- minimap */
const mapCtx = ui.minimap.getContext('2d');
function updateMinimap() {
  const size = 220;
  const cx = size / 2;
  const cy = size / 2;
  const scale = 0.35;
  const px = player.group.position.x;
  const pz = player.group.position.z;
  const chapter = CHAPTERS[state.stage];

  mapCtx.clearRect(0, 0, size, size);
  mapCtx.save();
  mapCtx.beginPath();
  mapCtx.arc(cx, cy, 106, 0, TAU);
  mapCtx.clip();
  mapCtx.fillStyle = '#070b0f';
  mapCtx.fillRect(0, 0, size, size);

  // Roads.
  mapCtx.fillStyle = 'rgba(53, 62, 68, .82)';
  for (const road of world.roads) {
    const x = cx + (road.x - px) * scale - (road.w * scale) / 2;
    const y = cy + (road.z - pz) * scale - (road.d * scale) / 2;
    mapCtx.fillRect(x, y, road.w * scale, road.d * scale);
  }

  // Landmarks.
  for (const landmark of world.landmarks) {
    const x = cx + (landmark.x - px) * scale;
    const y = cy + (landmark.z - pz) * scale;
    if (Math.hypot(x - cx, y - cy) > 100) continue;
    mapCtx.fillStyle = 'rgba(243, 234, 216, .34)';
    mapCtx.fillRect(x - 1.5, y - 1.5, 3, 3);
    if (Math.hypot(x - cx, y - cy) < 74) {
      mapCtx.font = '6px "Courier New", monospace';
      mapCtx.fillStyle = 'rgba(243, 234, 216, .26)';
      mapCtx.fillText(landmark.label, x + 4, y + 2);
    }
  }

  // Rifts.
  for (const rift of world.rifts) {
    const x = cx + (rift.x - px) * scale;
    const y = cy + (rift.z - pz) * scale;
    if (Math.hypot(x - cx, y - cy) > 104) continue;
    mapCtx.beginPath();
    mapCtx.arc(x, y, rift.active ? 4.5 : 2.4, 0, TAU);
    mapCtx.fillStyle = rift.active ? 'rgba(255, 62, 45, .92)' : 'rgba(255, 62, 45, .3)';
    mapCtx.fill();
    if (rift.active) {
      mapCtx.beginPath();
      mapCtx.arc(x, y, 6.5 + Math.sin(state.time * 3) * 1.4, 0, TAU);
      mapCtx.strokeStyle = 'rgba(255, 62, 45, .45)';
      mapCtx.lineWidth = 1;
      mapCtx.stroke();
    }
  }

  // Enemies.
  for (const enemy of enemies) {
    if (!enemy.alive) continue;
    const x = cx + (enemy.group.position.x - px) * scale;
    const y = cy + (enemy.group.position.z - pz) * scale;
    if (Math.hypot(x - cx, y - cy) > 104) continue;
    mapCtx.beginPath();
    mapCtx.arc(x, y, enemy.boss ? 4 : enemy.kind === 'demo' ? 3 : 1.5, 0, TAU);
    mapCtx.fillStyle = enemy.boss ? '#ff8a4f' : '#ff3b38';
    mapCtx.fill();
  }

  // Tapes.
  for (const tape of tapes) {
    if (tape.taken) continue;
    const x = cx + (tape.group.position.x - px) * scale;
    const y = cy + (tape.group.position.z - pz) * scale;
    if (Math.hypot(x - cx, y - cy) > 100) continue;
    mapCtx.fillStyle = '#62ecff';
    mapCtx.fillRect(x - 1, y - 1, 2, 2);
  }

  // Objective.
  if (chapter) {
    let x = (chapter.target.x - px) * scale;
    let y = (chapter.target.z - pz) * scale;
    const d = Math.hypot(x, y);
    if (d > 93) {
      x = (x / d) * 93;
      y = (y / d) * 93;
    }
    const pulse = 1 + Math.sin(state.time * 3.5) * 0.2;
    mapCtx.save();
    mapCtx.translate(cx + x, cy + y);
    mapCtx.rotate(Math.PI / 4);
    mapCtx.fillStyle = '#ffc866';
    mapCtx.shadowColor = '#ffb347';
    mapCtx.shadowBlur = 7;
    mapCtx.fillRect(-3 * pulse, -3 * pulse, 6 * pulse, 6 * pulse);
    mapCtx.restore();
  }

  // Car.
  if (state.mode === 'foot') {
    const x = cx + (chevelle.group.position.x - px) * scale;
    const y = cy + (chevelle.group.position.z - pz) * scale;
    if (Math.hypot(x - cx, y - cy) < 104) {
      mapCtx.fillStyle = '#8ff8ff';
      mapCtx.fillRect(x - 2.5, y - 1.5, 5, 3);
    }
  }

  // Player arrow.
  const yaw = player.group.rotation.y;
  const fx = Math.sin(yaw);
  const fy = Math.cos(yaw);
  const rx = Math.cos(yaw);
  const ry = -Math.sin(yaw);
  mapCtx.beginPath();
  mapCtx.moveTo(cx + fx * 8, cy + fy * 8);
  mapCtx.lineTo(cx - fx * 4 + rx * 4.5, cy - fy * 4 + ry * 4.5);
  mapCtx.lineTo(cx - fx * 2, cy - fy * 2);
  mapCtx.lineTo(cx - fx * 4 - rx * 4.5, cy - fy * 4 - ry * 4.5);
  mapCtx.closePath();
  mapCtx.fillStyle = '#fff4de';
  mapCtx.fill();
  mapCtx.strokeStyle = 'rgba(0,0,0,.5)';
  mapCtx.lineWidth = 1;
  mapCtx.stroke();

  mapCtx.restore();
}

/* --------------------------------------------------------------- start/end */
function startGame() {
  if (state.phase !== 'title') return;
  state.phase = 'playing';
  state.started = true;
  startAudio();
  ui.title.classList.add('leaving');
  setTimeout(() => ui.title.classList.add('is-hidden'), 900);
  ui.hud.classList.remove('is-hidden');
  if (state.isTouch) {
    ui.touchUI.classList.remove('is-hidden');
    ui.touchUI.classList.add('touch-mode');
  }
  snapCamera();
  setStage(0);
  state.missionTriggered = false;
  toast('THE ARCHIVIST', 'Hawkins, 1986. Four gates. One long night. Let us see how this ends.', 'cyan');
  setTimeout(() => {
    if (state.phase === 'playing') toast('CASE 01', 'Find Eddie at Forest Hills. Your ride is in the alley.', '');
  }, 1400);
}

function endGame() {
  state.phase = 'end';
  state.qte = null;
  ui.qte.classList.add('is-hidden');
  ui.choiceScreen.classList.add('is-hidden');
  ui.interaction.classList.add('is-hidden');
  ui.carHud.classList.add('is-hidden');
  ui.crosshair.classList.add('is-hidden');
  if (document.pointerLockElement) document.exitPointerLock();
  audio.setEngine(false, 0, 0);
  audio.success();

  const flags = state.flags;
  let blurb;
  if (flags.finalChoice === 'burn') {
    blurb = 'Hawkins burns behind you. The hive is ash. The story ends the way it began: with fire.';
  } else if (flags.eddieSaved && flags.kidsSaved) {
    blurb = 'Eddie plays one last song as the sun comes up. The kids go home. Hawkins will never be the same.';
  } else if (flags.eddieSaved) {
    blurb = 'The gate is closed. Eddie plays for the ones who did not make it. Some songs get a second verse after all.';
  } else if (flags.kidsSaved) {
    blurb = "The gate is closed. The kids get out. Eddie's guitar is all that is left of him, still humming in the dark.";
  } else {
    blurb = "The gate is closed. Hawkins is quiet. Some stories end with a scar, and no one left to sing about it.";
  }
  let headline;
  if (flags.finalChoice === 'burn') headline = 'HAWKINS<br><em>BURNS</em>';
  else if (flags.eddieSaved && flags.kidsSaved) headline = 'HAWKINS<br><em>LIVES</em>';
  else if (flags.eddieSaved || flags.kidsSaved) headline = 'SOME<br><em>SURVIVE</em>';
  else headline = 'THE NIGHT<br><em>ENDS</em>';
  ui.endTitle.innerHTML = headline;
  ui.endBlurb.textContent = blurb;
  ui.statRifts.textContent = String(state.riftsSealed);
  ui.statKills.textContent = String(state.kills);
  ui.statTime.textContent = formatTime(state.playTime);
  ui.endScreen.classList.remove('is-hidden');
}

function formatTime(seconds) {
  const total = Math.max(0, Math.floor(seconds));
  const m = String(Math.floor(total / 60)).padStart(2, '0');
  const s = String(total % 60).padStart(2, '0');
  return `${m}:${s}`;
}

/* ----------------------------------------------------------------- input */
function onKeyDown(event) {
  const code = event.code;

  if (state.dialogueActive) {
    if (code === 'Enter' || code === 'Space' || code === 'KeyE') {
      event.preventDefault();
      advanceDialogue();
    }
    return;
  }
  if (state.choiceActive) {
    if (code === 'Digit1' || code === 'KeyA') pickChoice(0);
    else if (code === 'Digit2' || code === 'KeyB') pickChoice(1);
    return;
  }
  if (state.qte) {
    if (['KeyF', 'Space', 'Enter', 'KeyE'].includes(code)) {
      event.preventDefault();
      if (!event.repeat) qtePress();
    } else if (['KeyW', 'KeyA', 'KeyS', 'KeyD', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(code)) {
      state.qte.moved += 1.5;
    }
    return;
  }
  if (state.phase !== 'playing') return;

  keys[code] = true;
  if (code === 'KeyF' && !event.repeat) fireBlast();
  if (code === 'KeyE' && !event.repeat) doInteract();
  if (code === 'KeyV' && !event.repeat) summonRide();
  if (code === 'Space') event.preventDefault();
}

function onKeyUp(event) {
  keys[event.code] = false;
}

window.addEventListener('keydown', onKeyDown);
window.addEventListener('keyup', onKeyUp);

// Mouse look / fire.
document.addEventListener('mousemove', (event) => {
  if (document.pointerLockElement === ui.canvas && state.phase === 'playing' && !state.choiceActive && !state.dialogueActive) {
    state.camYaw -= event.movementX * 0.0023;
    state.camPitch = clamp(state.camPitch + event.movementY * 0.0017, -0.38, 0.72);
    if (state.qte && state.qte.mode === 'still') state.qte.moved += Math.abs(event.movementX) + Math.abs(event.movementY);
  }
});

ui.canvas.addEventListener('pointerdown', (event) => {
  if (event.pointerType === 'mouse') {
    if (state.qte) {
      qtePress();
      return;
    }
    if (state.phase === 'playing' && !state.choiceActive && !state.dialogueActive) {
      if (document.pointerLockElement !== ui.canvas) {
        ui.canvas.requestPointerLock?.();
      } else if (event.button === 0) {
        fireBlast();
      }
    }
  } else if (event.pointerType === 'touch') {
    if (state.qte) {
      qtePress();
      return;
    }
    touch.lookId = event.pointerId;
    touch.lookX = event.clientX;
    touch.lookY = event.clientY;
  }
});

ui.canvas.addEventListener('pointermove', (event) => {
  if (event.pointerType === 'touch' && touch.lookId === event.pointerId && state.phase === 'playing') {
    const dx = event.clientX - touch.lookX;
    const dy = event.clientY - touch.lookY;
    touch.lookX = event.clientX;
    touch.lookY = event.clientY;
    if (!state.choiceActive && !state.dialogueActive) {
      state.camYaw -= dx * 0.005;
      state.camPitch = clamp(state.camPitch + dy * 0.004, -0.38, 0.72);
      if (state.qte && state.qte.mode === 'still') state.qte.moved += Math.abs(dx) + Math.abs(dy);
    }
  }
});

window.addEventListener('pointerup', (event) => {
  if (event.pointerType === 'touch') touch.lookId = null;
});

function updateJoystick(event) {
  const rect = ui.joystick.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;
  let dx = event.clientX - centerX;
  let dy = event.clientY - centerY;
  const max = rect.width * 0.34;
  const len = Math.hypot(dx, dy);
  if (len > max) {
    dx = (dx / len) * max;
    dy = (dy / len) * max;
  }
  ui.stickKnob.style.transform = `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px))`;
  touch.ix = dx / max;
  touch.iz = -dy / max;
  touch.active = Math.hypot(touch.ix, touch.iz) > 0.08;
}

ui.joystick.addEventListener('pointerdown', (event) => {
  event.preventDefault();
  ui.joystick.setPointerCapture(event.pointerId);
  updateJoystick(event);
});
ui.joystick.addEventListener('pointermove', (event) => {
  if (ui.joystick.hasPointerCapture(event.pointerId)) updateJoystick(event);
});
function releaseJoystick(event) {
  if (event.pointerType && ui.joystick.hasPointerCapture?.(event.pointerId)) ui.joystick.releasePointerCapture(event.pointerId);
  touch.active = false;
  touch.ix = 0;
  touch.iz = 0;
  ui.stickKnob.style.transform = 'translate(-50%, -50%)';
}
ui.joystick.addEventListener('pointerup', releaseJoystick);
ui.joystick.addEventListener('pointercancel', releaseJoystick);
ui.joystick.addEventListener('pointerleave', (event) => {
  if (!ui.joystick.hasPointerCapture?.(event.pointerId)) releaseJoystick(event);
});

ui.touchUI.querySelectorAll('[data-action]').forEach((button) => {
  const action = button.dataset.action;
  if (action === 'sprint') {
    button.addEventListener('pointerdown', (event) => {
      event.preventDefault();
      touch.sprint = true;
    });
    button.addEventListener('pointerup', () => { touch.sprint = false; });
    button.addEventListener('pointercancel', () => { touch.sprint = false; });
  } else {
    button.addEventListener('pointerdown', (event) => {
      event.preventDefault();
      if (state.qte) {
        qtePress();
        return;
      }
      if (state.phase !== 'playing') return;
      if (action === 'blast') fireBlast();
      else if (action === 'car') {
        const interaction = currentInteraction();
        if (interaction) doInteract();
        else if (state.mode === 'foot') summonRide();
      }
    });
  }
});

// Keep the desktop canvas from swallowing keyboard focus.
ui.canvas.setAttribute('tabindex', '0');

ui.startBtn.addEventListener('click', startGame);
ui.titleSoundBtn.addEventListener('click', toggleAudio);
ui.soundBtn.addEventListener('click', toggleAudio);
ui.choiceA.addEventListener('click', () => pickChoice(0));
ui.choiceB.addEventListener('click', () => pickChoice(1));
ui.dialogue.addEventListener('click', advanceDialogue);
ui.restartBtn.addEventListener('click', () => window.location.reload());

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, maxPixelRatio));
});

/* ------------------------------------------------------------------ loop */
let lastFrame = performance.now();
function loop(now) {
  const dt = Math.min(0.05, Math.max(0.001, (now - lastFrame) / 1000));
  lastFrame = now;
  state.time += dt;

  if (state.phase === 'title') {
    updateTitleCamera(dt);
  } else {
    if (state.phase === 'playing') state.playTime += dt;
    if (state.phase === 'dead') {
      state.deathTimer -= dt;
      if (state.deathTimer <= 0) respawn();
    }

    updateQte(dt);
    updatePlayer(dt);
    updateCar(dt);
    updateEnemies(dt);
    updateShots(dt);
    updateEffects(dt);
    updateCollectibles(dt);
    if (state.phase === 'playing') updateMission(dt);
    updateInteraction();
    updateHud(dt);
    updateCamera(dt);

    if (state.mode === 'car' && state.phase === 'playing') {
      ui.speedValue.textContent = String(Math.round(Math.abs(state.carSpeed) * 2.237)).padStart(3, '0');
    }
  }

  const focus = state.mode === 'car' ? chevelle.group.position : player.group.position;
  heroLight.position.set(focus.x, state.mode === 'car' ? 3.1 : 2.35, focus.z);
  world.updateWorld(dt, state.time, state.phase === 'title' ? null : focus);
  updateMinimap();
  renderer.render(scene, camera);
  requestAnimationFrame(loop);
}

updateMissionHud();
ui.tapeCount.textContent = '0 / 8';
ui.itemCounter.classList.remove('is-hidden');
requestAnimationFrame(loop);

// Exposed for the in-browser smoke test. Harmless in normal play.
window.__hawkins = {
  state, world, player, chevelle,
  get enemies() { return enemies; },
  get pickups() { return pickups; },
  get effects() { return effects; },
  startGame, enterCar, exitCar, summonRide, fireBlast, doInteract, startSealQTE,
  advanceDialogue, completeChapter, sealRift, startQte, qtePress, damagePlayer,
  respawn, spawnWave, updateMissionHud, setStage,
};
