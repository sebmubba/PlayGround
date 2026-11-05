// Pure quick-time-event state machine. No DOM, no timers — the caller ticks it.

export function normalizeKey(value) {
  if (value == null) return '';
  if (value === ' ') return 'space';
  const k = String(value).toLowerCase();
  if (k === 'spacebar') return 'space';
  if (k === 'esc') return 'escape';
  if (k === 'control') return 'control';
  return k;
}

export function displayKey(key) {
  const k = normalizeKey(key);
  const map = {
    space: 'SPACE',
    arrowleft: '←',
    arrowright: '→',
    arrowup: '↑',
    arrowdown: '↓',
    escape: 'ESC',
    enter: 'ENTER'
  };
  return map[k] || k.toUpperCase();
}

export class QteSession {
  constructor(config, { assist = false } = {}) {
    this.config = config;
    this.kind = config.kind || 'press';
    this.assist = assist;
    this.mult = assist ? 1.45 : 1;
    this.window = (config.window || 1800) * this.mult;
    this.keys = (config.keys || [config.key || 'e']).map(normalizeKey);
    this.target = config.target || 12;
    this.hold = (config.hold || 1500) * (assist ? 0.75 : 1);
    this.remaining = this.window;
    this.index = 0;
    this.mashCount = 0;
    this.holdTime = 0;
    this.holding = false;
    this.status = 'active';
    this.lastInput = null;
    this.keyWindow = (config.window || 1800) * (config.assistPerKey === false ? 1 : 1) * this.mult;
  }

  get progress() {
    if (this.kind === 'mash') return Math.min(1, this.mashCount / this.target);
    if (this.kind === 'hold') return Math.min(1, this.holdTime / this.hold);
    if (this.kind === 'sequence') {
      const per = Math.min(1, 1 - this.remaining / this.keyWindow);
      return Math.min(1, (this.index + per * 0.85) / this.keys.length);
    }
    return Math.max(0, 1 - this.remaining / this.window);
  }

  get displayKeys() {
    if (this.kind === 'sequence') return this.keys;
    return [this.keys[0]];
  }

  get activeKey() {
    if (this.kind === 'sequence') return this.keys[this.index];
    return this.keys[0];
  }

  fail() {
    if (this.status === 'active') this.status = 'failed';
  }

  succeed() {
    if (this.status === 'active') this.status = 'succeeded';
  }

  tick(dt) {
    if (this.status !== 'active') return this.status;
    const d = Math.min(dt, 0.1);
    if (this.kind === 'hold') {
      if (this.holding) {
        this.holdTime += d;
        if (this.holdTime >= this.hold) {
          this.succeed();
          return this.status;
        }
      } else {
        this.remaining -= d;
        if (this.remaining <= 0) this.fail();
      }
      return this.status;
    }
    this.remaining -= d;
    if (this.remaining <= 0) {
      if (this.kind === 'sequence') {
        // allow a tiny grace if the final key was just pressed
        this.fail();
      } else {
        this.fail();
      }
    }
    return this.status;
  }

  press(key) {
    if (this.status !== 'active') return this.status;
    const k = normalizeKey(key);
    this.lastInput = k;
    if (this.kind === 'press') {
      if (this.keys.includes(k)) this.succeed();
      return this.status;
    }
    if (this.kind === 'mash') {
      if (this.keys.includes(k)) {
        this.mashCount += 1;
        if (this.mashCount >= this.target) this.succeed();
      }
      return this.status;
    }
    if (this.kind === 'sequence') {
      if (k === this.keys[this.index]) {
        this.index += 1;
        if (this.index >= this.keys.length) {
          this.succeed();
        } else {
          this.remaining = this.keyWindow;
        }
      } else {
        this.fail();
      }
      return this.status;
    }
    if (this.kind === 'hold') {
      if (this.keys.includes(k) && !this.holding) {
        this.holding = true;
        this.lastInput = k;
      }
      return this.status;
    }
    return this.status;
  }

  release(key) {
    if (this.status !== 'active') return this.status;
    const k = normalizeKey(key);
    if (this.kind === 'hold' && this.keys.includes(k) && this.holding) {
      if (this.holdTime < this.hold) this.fail();
    }
    return this.status;
  }
}

export function qteKeyHint(config) {
  if (config.kind === 'sequence') return config.keys.map(displayKey).join('  —  ');
  if (config.kind === 'mash') return `MASH ${displayKey(config.key)}`;
  if (config.kind === 'hold') return `HOLD ${displayKey(config.key)}`;
  return `PRESS ${displayKey(config.key)}`;
}

export function isQteConfigValid(config) {
  if (!config || !config.success || !config.fail) return false;
  const kind = config.kind || 'press';
  if (!['press', 'mash', 'sequence', 'hold'].includes(kind)) return false;
  if (kind === 'sequence' && (!Array.isArray(config.keys) || !config.keys.length)) return false;
  if (kind !== 'sequence' && !config.key) return false;
  if ((config.window || 0) < 400) return false;
  return true;
}
