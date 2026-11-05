/* A tiny all-synth 80s score and foley kit. No audio files required. */
export class AudioEngine {
  constructor() {
    this.ctx = null;
    this.master = null;
    this.musicGain = null;
    this.sfxGain = null;
    this.enabled = true;
    this.started = false;
    this.musicTimer = null;
    this.step = 0;
    this.engine = null;
  }

  init() {
    if (this.started) {
      if (this.ctx?.state === 'suspended') this.ctx.resume();
      return;
    }
    const Ctx = window.AudioContext || window.webkitAudioContext;
    if (!Ctx) return;
    this.ctx = new Ctx();
    this.master = this.ctx.createGain();
    this.master.gain.value = 0.52;
    this.master.connect(this.ctx.destination);

    this.musicGain = this.ctx.createGain();
    this.musicGain.gain.value = 0.22;
    this.musicGain.connect(this.master);

    this.sfxGain = this.ctx.createGain();
    this.sfxGain.gain.value = 0.62;
    this.sfxGain.connect(this.master);

    this.started = true;
    this.startDrone();
    this.startScore();
    this.setEnabled(true);
    this.ctx.resume();
  }

  setEnabled(enabled) {
    this.enabled = enabled;
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    this.master.gain.cancelScheduledValues(t);
    this.master.gain.linearRampToValueAtTime(enabled ? 0.52 : 0, t + 0.2);
    if (enabled && this.ctx.state === 'suspended') this.ctx.resume();
  }

  toggle() {
    this.setEnabled(!this.enabled);
    return this.enabled;
  }

  startDrone() {
    const ctx = this.ctx;
    const bus = ctx.createGain();
    bus.gain.value = 0.045;
    const lowpass = ctx.createBiquadFilter();
    lowpass.type = 'lowpass';
    lowpass.frequency.value = 230;
    bus.connect(lowpass);
    lowpass.connect(this.musicGain);
    for (const [freq, type] of [[55, 'sawtooth'], [82.4, 'triangle'], [110.3, 'sine']]) {
      const osc = ctx.createOscillator();
      osc.type = type;
      osc.frequency.value = freq;
      osc.detune.value = Math.random() * 12 - 6;
      osc.connect(bus);
      osc.start();
    }
    // Slow breathing LFO.
    const lfo = ctx.createOscillator();
    lfo.frequency.value = 0.055;
    const lfoGain = ctx.createGain();
    lfoGain.gain.value = 36;
    lfo.connect(lfoGain);
    lfoGain.connect(lowpass.frequency);
    lfo.start();
  }

  startScore() {
    if (this.musicTimer) return;
    const bpm = 92;
    const stepTime = 60 / bpm / 4;
    const bass = [55, 55, 65.4, 55, 49, 49, 43.65, 49];
    const arp = [440, 523.25, 659.25, 523.25, 392, 493.88, 587.33, 493.88];
    const tick = () => {
      if (!this.ctx || !this.enabled) return;
      const now = this.ctx.currentTime;
      const s = this.step;
      if (s % 4 === 0) this.note(bass[(s / 4) % bass.length], now + 0.02, stepTime * 3.3, 'sawtooth', 0.055, 170);
      if (s % 2 === 0) this.note(arp[(s / 2) % arp.length] * 0.5, now + 0.02, stepTime * 1.2, 'triangle', 0.016, 1200);
      if (s === 0 || s === 8) this.note(130.8, now, stepTime * 7, 'sine', 0.012, 320);
      if (s % 4 === 2) this.hat(now + 0.02, 0.015);
      this.step = (s + 1) % 32;
    };
    tick();
    this.musicTimer = setInterval(tick, stepTime * 1000);
  }

  note(freq, when, duration, type = 'sine', volume = 0.05, cutoff = 900) {
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(cutoff, when);
    filter.frequency.exponentialRampToValueAtTime(Math.max(100, cutoff * 0.55), when + duration);
    osc.type = type;
    osc.frequency.setValueAtTime(freq, when);
    gain.gain.setValueAtTime(0.0001, when);
    gain.gain.exponentialRampToValueAtTime(volume, when + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, when + duration);
    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.musicGain);
    osc.start(when);
    osc.stop(when + duration + 0.05);
  }

  hat(when, volume) {
    if (!this.ctx) return;
    const buffer = this.ctx.createBuffer(1, 1024, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < data.length; i++) data[i] = (Math.random() * 2 - 1) * (1 - i / data.length);
    const src = this.ctx.createBufferSource();
    src.buffer = buffer;
    const hp = this.ctx.createBiquadFilter();
    hp.type = 'highpass';
    hp.frequency.value = 6000;
    const gain = this.ctx.createGain();
    gain.gain.value = volume;
    src.connect(hp);
    hp.connect(gain);
    gain.connect(this.musicGain);
    src.start(when);
  }

  noiseBurst(duration = 0.2, volume = 0.12, frequency = 700) {
    if (!this.ctx) return;
    const ctx = this.ctx;
    const buffer = ctx.createBuffer(1, ctx.sampleRate * duration, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < data.length; i++) data[i] = (Math.random() * 2 - 1) * (1 - i / data.length);
    const src = ctx.createBufferSource();
    src.buffer = buffer;
    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.value = frequency;
    filter.Q.value = 0.7;
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(volume, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);
    src.connect(filter);
    filter.connect(gain);
    gain.connect(this.sfxGain);
    src.start();
  }

  boom(volume = 0.25, frequency = 90) {
    if (!this.ctx) return;
    const ctx = this.ctx;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(frequency, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(28, ctx.currentTime + 0.55);
    gain.gain.setValueAtTime(volume, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.6);
    osc.connect(gain);
    gain.connect(this.sfxGain);
    osc.start();
    osc.stop(ctx.currentTime + 0.65);
    this.noiseBurst(0.34, volume * 0.36, 180);
  }

  blast() {
    if (!this.ctx) return;
    const ctx = this.ctx;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(1100, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(160, ctx.currentTime + 0.16);
    gain.gain.setValueAtTime(0.055, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.2);
    osc.connect(gain);
    gain.connect(this.sfxGain);
    osc.start();
    osc.stop(ctx.currentTime + 0.22);
    this.noiseBurst(0.09, 0.03, 1700);
  }

  hit() {
    this.noiseBurst(0.12, 0.08, 420);
    this.boom(0.08, 140);
  }

  hurt() {
    this.boom(0.2, 120);
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'square';
    osc.frequency.setValueAtTime(84, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(42, this.ctx.currentTime + 0.35);
    gain.gain.setValueAtTime(0.04, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.4);
    osc.connect(gain);
    gain.connect(this.sfxGain);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.42);
  }

  pickup() {
    if (!this.ctx) return;
    [660, 880, 1320].forEach((freq, i) => this.note(freq, this.ctx.currentTime + i * 0.06, 0.28, 'sine', 0.03, 2500));
  }

  ui() {
    if (!this.ctx) return;
    this.note(880, this.ctx.currentTime, 0.06, 'square', 0.012, 2200);
  }

  success() {
    if (!this.ctx) return;
    [220, 277.2, 329.6, 440].forEach((freq, i) => this.note(freq, this.ctx.currentTime + i * 0.07, 0.65, 'triangle', 0.04, 1800));
  }

  failure() {
    if (!this.ctx) return;
    [110, 103.8, 98].forEach((freq, i) => this.note(freq, this.ctx.currentTime + i * 0.12, 0.6, 'sawtooth', 0.045, 260));
  }

  qteTick(urgent = false) {
    if (!this.ctx) return;
    this.note(urgent ? 660 : 440, this.ctx.currentTime, 0.06, 'square', 0.012, 1800);
  }

  portal() {
    if (!this.ctx) return;
    const ctx = this.ctx;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(42, ctx.currentTime);
    osc.frequency.linearRampToValueAtTime(72, ctx.currentTime + 0.9);
    osc.frequency.linearRampToValueAtTime(36, ctx.currentTime + 1.9);
    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.value = 380;
    filter.Q.value = 7;
    gain.gain.setValueAtTime(0.0001, ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.08, ctx.currentTime + 0.3);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 2);
    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.sfxGain);
    osc.start();
    osc.stop(ctx.currentTime + 2.1);
  }

  initEngine() {
    if (!this.ctx || this.engine) return;
    const osc = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    const filter = this.ctx.createBiquadFilter();
    const gain = this.ctx.createGain();
    osc.type = 'sawtooth';
    osc2.type = 'square';
    osc.frequency.value = 52;
    osc2.frequency.value = 26;
    filter.type = 'lowpass';
    filter.frequency.value = 360;
    filter.Q.value = 2.2;
    gain.gain.value = 0.0001;
    osc.connect(filter);
    osc2.connect(filter);
    filter.connect(gain);
    gain.connect(this.sfxGain);
    osc.start();
    osc2.start();
    this.engine = { osc, osc2, filter, gain };
  }

  setEngine(active, speed = 0, throttle = 0) {
    if (!this.ctx) return;
    this.initEngine();
    if (!this.engine) return;
    const t = this.ctx.currentTime;
    const target = active ? 0.026 + Math.min(0.06, speed * 0.0011) + throttle * 0.035 : 0.0001;
    this.engine.gain.gain.cancelScheduledValues(t);
    this.engine.gain.gain.linearRampToValueAtTime(target, t + 0.08);
    const freq = 44 + Math.min(130, Math.abs(speed) * 2.4) + throttle * 12;
    this.engine.osc.frequency.setTargetAtTime(freq, t, 0.06);
    this.engine.osc2.frequency.setTargetAtTime(freq * 0.502, t, 0.06);
    this.engine.filter.frequency.setTargetAtTime(260 + Math.abs(speed) * 8 + throttle * 180, t, 0.09);
  }
}
