// Procedural score + sound design. Everything is synthesized — no external audio assets.

export class AudioEngine {
  constructor() {
    this.ctx = null;
    this.started = false;
    this.enabled = true;
    this.mood = 'title';
    this.intensity = 0.5;
    this.nextArp = 0;
    this.scheduler = null;
    this.heartTimer = null;
    this.heartBpm = 64;
    this.clockTimer = null;
    this.crackleTimer = null;
    this._drone = null;
    this._moodTargets = { gain: 0.34, cutoff: 420, detune: 0 };
  }

  async init() {
    if (this.started) {
      if (this.ctx?.state === 'suspended') await this.ctx.resume();
      return;
    }
    const Ctx = window.AudioContext || window.webkitAudioContext;
    if (!Ctx) return;
    const ctx = new Ctx();
    this.ctx = ctx;
    this.started = true;

    this.master = ctx.createGain();
    this.master.gain.value = this.enabled ? 0.85 : 0;
    const comp = ctx.createDynamicsCompressor();
    comp.threshold.value = -16;
    comp.knee.value = 20;
    comp.ratio.value = 3;
    comp.attack.value = 0.006;
    comp.release.value = 0.25;
    this.master.connect(comp);
    comp.connect(ctx.destination);

    this.reverb = ctx.createConvolver();
    this.reverb.buffer = this._makeImpulse(3.4, 2.6);
    this.reverbGain = ctx.createGain();
    this.reverbGain.gain.value = 0.34;
    this.reverb.connect(this.reverbGain);
    this.reverbGain.connect(this.master);

    this.delay = ctx.createDelay(1.2);
    this.delay.delayTime.value = 0.34;
    this.delayFb = ctx.createGain();
    this.delayFb.gain.value = 0.32;
    this.delayFilter = ctx.createBiquadFilter();
    this.delayFilter.type = 'lowpass';
    this.delayFilter.frequency.value = 1400;
    this.delay.connect(this.delayFilter);
    this.delayFilter.connect(this.delayFb);
    this.delayFb.connect(this.delay);
    this.delayGain = ctx.createGain();
    this.delayGain.gain.value = 0.18;
    this.delayFilter.connect(this.delayGain);
    this.delayGain.connect(this.master);
    this.delayGain.connect(this.reverb);

    this.noiseBuffer = this._makeNoise(4, true);
    this._buildDrone();
    this._buildWind();
    this.startScheduler();
    this.setMood('title');
  }

  _makeImpulse(seconds, decay) {
    const rate = this.ctx.sampleRate;
    const len = Math.floor(rate * seconds);
    const buf = this.ctx.createBuffer(2, len, rate);
    for (let c = 0; c < 2; c++) {
      const d = buf.getChannelData(c);
      for (let i = 0; i < len; i++) {
        const t = i / len;
        d[i] = (Math.random() * 2 - 1) * Math.pow(1 - t, decay) * (i < rate * 0.02 ? 0.4 : 1);
      }
    }
    return buf;
  }

  _makeNoise(seconds, stereo = false) {
    const rate = this.ctx.sampleRate;
    const len = Math.floor(rate * seconds);
    const buf = this.ctx.createBuffer(stereo ? 2 : 1, len, rate);
    for (let c = 0; c < buf.numberOfChannels; c++) {
      const d = buf.getChannelData(c);
      let last = 0;
      for (let i = 0; i < len; i++) {
        const w = Math.random() * 2 - 1;
        last = last * 0.86 + w * 0.14;
        d[i] = last;
      }
    }
    return buf;
  }

  _noiseSource(loop = false) {
    const src = this.ctx.createBufferSource();
    src.buffer = this.noiseBuffer;
    src.loop = loop;
    return src;
  }

  _buildDrone() {
    const ctx = this.ctx;
    const out = ctx.createGain();
    out.gain.value = 0.0;
    this.droneGain = out;
    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 380;
    filter.Q.value = 3.2;
    this.droneFilter = filter;
    filter.connect(out);
    out.connect(this.master);
    out.connect(this.reverb);

    this.droneOscs = [];
    const freqs = [41.2, 55, 82.4, 110];
    const gains = [0.34, 0.24, 0.12, 0.05];
    freqs.forEach((f, i) => {
      const osc = ctx.createOscillator();
      osc.type = i % 2 ? 'sawtooth' : 'sine';
      osc.frequency.value = f;
      const g = ctx.createGain();
      g.gain.value = gains[i];
      osc.connect(g);
      g.connect(filter);
      osc.start();
      this.droneOscs.push({ osc, gain: g, base: f });
    });

    const lfo = ctx.createOscillator();
    lfo.frequency.value = 0.07;
    const lfoGain = ctx.createGain();
    lfoGain.gain.value = 130;
    lfo.connect(lfoGain);
    lfoGain.connect(filter.frequency);
    lfo.start();

    this._drone = { out, filter };
  }

  _buildWind() {
    const ctx = this.ctx;
    const src = this._noiseSource(true);
    const bp = ctx.createBiquadFilter();
    bp.type = 'bandpass';
    bp.frequency.value = 420;
    bp.Q.value = 0.7;
    const g = ctx.createGain();
    g.gain.value = 0.055;
    const pan = ctx.createStereoPanner();
    pan.pan.value = 0;
    src.connect(bp);
    bp.connect(g);
    g.connect(pan);
    pan.connect(this.master);
    pan.connect(this.reverb);
    src.start();
    this.wind = { src, bp, g, pan };
    const lfo = ctx.createOscillator();
    lfo.frequency.value = 0.045;
    const lg = ctx.createGain();
    lg.gain.value = 260;
    lfo.connect(lg);
    lg.connect(bp.frequency);
    lfo.start();
    const panLfo = ctx.createOscillator();
    panLfo.frequency.value = 0.021;
    const plg = ctx.createGain();
    plg.gain.value = 0.7;
    panLfo.connect(plg);
    plg.connect(pan.pan);
    panLfo.start();
  }

  setEnabled(on) {
    this.enabled = on;
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    this.master.gain.cancelScheduledValues(t);
    this.master.gain.linearRampToValueAtTime(on ? 0.85 : 0, t + 0.35);
  }

  suspend() { this.ctx?.suspend(); }
  resume() { this.ctx?.resume(); }

  setMood(mood, intensity = 0.5) {
    this.mood = mood;
    this.intensity = intensity;
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    const presets = {
      title:   { gain: 0.30, cutoff: 300, detune: -8, arp: false, arpRate: 0.46, wind: 0.05, notes: [0, 7, 3, 10], base: 55 },
      house:   { gain: 0.28, cutoff: 330, detune: 4, arp: false, arpRate: 0.6, wind: 0.06, notes: [0, 7, 10], base: 55 },
      bedroom: { gain: 0.32, cutoff: 520, detune: 2, arp: false, arpRate: 0.7, wind: 0.03, notes: [0, 3, 7, 10], base: 65.4 },
      tension: { gain: 0.40, cutoff: 700, detune: 8, arp: true, arpRate: 0.34, wind: 0.07, notes: [0, 1, 7, 8, 3], base: 55 },
      quarry:  { gain: 0.38, cutoff: 560, detune: -5, arp: true, arpRate: 0.5, wind: 0.09, notes: [0, 1, 5, 7], base: 49 },
      hollow:  { gain: 0.46, cutoff: 460, detune: 12, arp: true, arpRate: 0.42, wind: 0.11, notes: [0, 1, 6, 7], base: 41.2 },
      lair:    { gain: 0.5, cutoff: 380, detune: -12, arp: true, arpRate: 0.3, wind: 0.06, notes: [0, 1, 6, 8], base: 36.7 },
      ending:  { gain: 0.26, cutoff: 620, detune: 0, arp: false, arpRate: 0.8, wind: 0.02, notes: [0, 3, 7], base: 65.4 },
      silence: { gain: 0.0, cutoff: 300, detune: 0, arp: false, arpRate: 0.6, wind: 0.0, notes: [0], base: 55 }
    };
    const p = presets[mood] || presets.house;
    this._mood = p;
    this.droneGain.gain.cancelScheduledValues(t);
    this.droneGain.gain.linearRampToValueAtTime(p.gain, t + 2.2);
    this.droneFilter.frequency.cancelScheduledValues(t);
    this.droneFilter.frequency.linearRampToValueAtTime(p.cutoff, t + 2.6);
    this.droneOscs.forEach((o, i) => {
      const mult = [1, 1, 2, 2][i] || 1;
      o.osc.frequency.cancelScheduledValues(t);
      o.osc.frequency.linearRampToValueAtTime(p.base * mult + (i === 1 ? p.detune * 0.2 : 0), t + 2.4);
    });
    this.wind.g.gain.cancelScheduledValues(t);
    this.wind.g.gain.linearRampToValueAtTime(p.wind, t + 2.4);
    if (p.arp) this.startClockTicks(mood === 'lair' || mood === 'hollow');
    else this.stopClockTicks();
  }

  startScheduler() {
    if (!this.ctx) return;
    this.nextArp = this.ctx.currentTime + 0.1;
    if (this.scheduler) clearInterval(this.scheduler);
    this.scheduler = setInterval(() => this._schedule(), 40);
  }

  _schedule() {
    if (!this.ctx || !this._mood?.arp || !this.enabled) {
      if (this.ctx) this.nextArp = this.ctx.currentTime + 0.1;
      return;
    }
    const p = this._mood;
    const rate = p.arpRate;
    while (this.nextArp < this.ctx.currentTime + 0.12) {
      const step = this.arpStep = (this.arpStep || 0) + 1;
      if (step % 2 === 0 || Math.random() < 0.6) {
        const idx = Math.floor(Math.random() * p.notes.length);
        const semis = p.notes[idx] + (Math.random() < 0.18 ? 12 : 0);
        const freq = p.base * Math.pow(2, semis / 12) * 4;
        this._pluck(freq, rate * 0.85, 0.045 + Math.random() * 0.02);
      }
      this.nextArp += rate;
    }
  }

  _pluck(freq, dur = 0.3, vol = 0.05) {
    const ctx = this.ctx;
    const t = ctx.currentTime;
    const osc = ctx.createOscillator();
    const osc2 = ctx.createOscillator();
    osc.type = 'triangle';
    osc2.type = 'sine';
    osc.frequency.value = freq;
    osc2.frequency.value = freq * 2.01;
    const g = ctx.createGain();
    g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(vol, t + 0.008);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    const f = ctx.createBiquadFilter();
    f.type = 'lowpass';
    f.frequency.value = 2600;
    osc.connect(g);
    osc2.connect(g);
    g.connect(f);
    f.connect(this.master);
    f.connect(this.reverb);
    f.connect(this.delay);
    osc.start(t); osc2.start(t);
    osc.stop(t + dur + 0.05); osc2.stop(t + dur + 0.05);
  }

  // ─── one-shot sfx ──────────────────────────────────────────────

  noiseBurst({ dur = 0.5, vol = 0.2, type = 'lowpass', freq = 900, q = 0.8, sweep = null, dest = null }) {
    if (!this.ctx || !this.enabled) return;
    const ctx = this.ctx;
    const t = ctx.currentTime;
    const src = this._noiseSource();
    const f = ctx.createBiquadFilter();
    f.type = type;
    f.frequency.setValueAtTime(freq, t);
    f.Q.value = q;
    if (sweep) f.frequency.exponentialRampToValueAtTime(Math.max(40, sweep), t + dur);
    const g = ctx.createGain();
    g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(vol, t + 0.012);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    src.connect(f); f.connect(g);
    g.connect(dest || this.master);
    g.connect(this.reverb);
    src.start(t); src.stop(t + dur + 0.05);
  }

  thunder() {
    if (!this.ctx) return;
    this.noiseBurst({ dur: 2.6, vol: this.intensity > 0.7 ? 0.28 : 0.18, type: 'lowpass', freq: 340, sweep: 55, q: 0.5 });
    const ctx = this.ctx, t = ctx.currentTime;
    const osc = ctx.createOscillator();
    const g = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(58, t);
    osc.frequency.exponentialRampToValueAtTime(24, t + 2.2);
    g.gain.setValueAtTime(0.0001, t);
    g.gain.linearRampToValueAtTime(0.22, t + 0.08);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 2.6);
    osc.connect(g); g.connect(this.master); g.connect(this.reverb);
    osc.start(t); osc.stop(t + 2.7);
  }

  impact(strong = false) {
    if (!this.ctx || !this.enabled) return;
    const ctx = this.ctx, t = ctx.currentTime;
    const osc = ctx.createOscillator();
    const g = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(strong ? 130 : 95, t);
    osc.frequency.exponentialRampToValueAtTime(34, t + 0.8);
    g.gain.setValueAtTime(strong ? 0.5 : 0.3, t);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.9);
    osc.connect(g); g.connect(this.master); g.connect(this.reverb);
    osc.start(t); osc.stop(t + 1);
    this.noiseBurst({ dur: 0.3, vol: strong ? 0.3 : 0.18, type: 'bandpass', freq: 1100, sweep: 180, q: 0.6 });
  }

  success() {
    if (!this.ctx) return;
    [880, 1174.7, 1760].forEach((f, i) => {
      const ctx = this.ctx, t = ctx.currentTime + i * 0.045;
      const osc = ctx.createOscillator();
      const g = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.value = f;
      g.gain.setValueAtTime(0, t);
      g.gain.linearRampToValueAtTime(0.07 - i * 0.015, t + 0.01);
      g.gain.exponentialRampToValueAtTime(0.0001, t + 1.1);
      osc.connect(g); g.connect(this.master); g.connect(this.reverb);
      osc.start(t); osc.stop(t + 1.2);
    });
  }

  fail() {
    if (!this.ctx) return;
    [92, 96.5, 138].forEach((f, i) => {
      const ctx = this.ctx, t = ctx.currentTime;
      const osc = ctx.createOscillator();
      const g = ctx.createGain();
      osc.type = i === 2 ? 'square' : 'sawtooth';
      osc.frequency.value = f;
      osc.detune.value = i * 9;
      g.gain.setValueAtTime(0.001, t);
      g.gain.linearRampToValueAtTime(0.08, t + 0.015);
      g.gain.exponentialRampToValueAtTime(0.0001, t + 0.7);
      const f2 = ctx.createBiquadFilter();
      f2.type = 'lowpass'; f2.frequency.value = 700;
      osc.connect(f2); f2.connect(g); g.connect(this.master); g.connect(this.reverb);
      osc.start(t); osc.stop(t + 0.8);
    });
    this.noiseBurst({ dur: 0.2, vol: 0.12, type: 'bandpass', freq: 2400, q: 0.8 });
  }

  uiTick() {
    if (!this.ctx) return;
    const ctx = this.ctx, t = ctx.currentTime;
    const osc = ctx.createOscillator();
    const g = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.value = 1680;
    g.gain.setValueAtTime(0.02, t);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.045);
    osc.connect(g); g.connect(this.master);
    osc.start(t); osc.stop(t + 0.06);
  }

  choose() {
    if (!this.ctx) return;
    this.noiseBurst({ dur: 0.4, vol: 0.08, type: 'bandpass', freq: 300, sweep: 1600, q: 0.5 });
    const ctx = this.ctx, t = ctx.currentTime;
    const osc = ctx.createOscillator();
    const g = ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.value = 220;
    g.gain.setValueAtTime(0.001, t);
    g.gain.linearRampToValueAtTime(0.05, t + 0.02);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.5);
    osc.connect(g); g.connect(this.master); g.connect(this.reverb);
    osc.start(t); osc.stop(t + 0.55);
  }

  clockChime() {
    if (!this.ctx) return;
    const base = 196;
    [0, 4, 7, 12].forEach((s, i) => {
      const ctx = this.ctx, t = ctx.currentTime + i * 0.16;
      const osc = ctx.createOscillator();
      const g = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.value = base * Math.pow(2, s / 12);
      g.gain.setValueAtTime(0.0001, t);
      g.gain.linearRampToValueAtTime(0.1, t + 0.01);
      g.gain.exponentialRampToValueAtTime(0.0001, t + 2.2);
      osc.connect(g); g.connect(this.master); g.connect(this.reverb);
      osc.start(t); osc.stop(t + 2.3);
    });
  }

  whisper() {
    if (!this.ctx) return;
    this.noiseBurst({ dur: 1.4, vol: 0.12, type: 'bandpass', freq: 700, sweep: 1500, q: 5 });
    this.noiseBurst({ dur: 0.8, vol: 0.07, type: 'bandpass', freq: 1800, sweep: 500, q: 7 });
  }

  gate() {
    if (!this.ctx) return;
    this.noiseBurst({ dur: 2.4, vol: 0.24, type: 'bandpass', freq: 160, sweep: 3200, q: 0.8 });
    const ctx = this.ctx, t = ctx.currentTime;
    [55, 110, 220, 330].forEach((f, i) => {
      const osc = ctx.createOscillator();
      const g = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(f, t);
      osc.frequency.exponentialRampToValueAtTime(f * 2, t + 2.2);
      g.gain.setValueAtTime(0.0001, t);
      g.gain.linearRampToValueAtTime(0.04, t + 0.4);
      g.gain.exponentialRampToValueAtTime(0.0001, t + 2.4);
      osc.connect(g); g.connect(this.master); g.connect(this.reverb);
      osc.start(t); osc.stop(t + 2.5);
    });
  }

  creak() {
    if (!this.ctx) return;
    this.noiseBurst({ dur: 1.1, vol: 0.06, type: 'bandpass', freq: 380, sweep: 900, q: 14 });
  }

  tick() {
    if (!this.ctx || !this.enabled) return;
    const ctx = this.ctx, t = ctx.currentTime;
    const osc = ctx.createOscillator();
    const g = ctx.createGain();
    osc.type = 'square';
    osc.frequency.value = 2100;
    g.gain.setValueAtTime(0.018, t);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.02);
    osc.connect(g); g.connect(this.master);
    osc.start(t); osc.stop(t + 0.03);
    this.noiseBurst({ dur: 0.03, vol: 0.05, type: 'highpass', freq: 3000 });
  }

  startHeartbeat(bpm = 78) {
    if (!this.ctx) return;
    this.heartBpm = bpm;
    if (this.heartTimer) clearInterval(this.heartTimer);
    const period = 60000 / bpm;
    const beat = () => {
      if (!this.enabled) return;
      this._thump(0);
      this._thump(0.16, 0.55);
    };
    beat();
    this.heartTimer = setInterval(beat, period);
  }

  stopHeartbeat() {
    if (this.heartTimer) clearInterval(this.heartTimer);
    this.heartTimer = null;
  }

  _thump(delay = 0, scale = 1) {
    if (!this.ctx) return;
    const ctx = this.ctx, t = ctx.currentTime + delay;
    const osc = ctx.createOscillator();
    const g = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(62, t);
    osc.frequency.exponentialRampToValueAtTime(30, t + 0.22);
    g.gain.setValueAtTime(0.0001, t);
    g.gain.linearRampToValueAtTime(0.18 * scale, t + 0.012);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.25);
    osc.connect(g); g.connect(this.master);
    osc.start(t); osc.stop(t + 0.3);
  }

  startClockTicks(active = true) {
    if (this.clockTimer) clearInterval(this.clockTimer);
    this.clockTimer = null;
    if (!active) return;
    this.clockTimer = setInterval(() => this.tick(), 1000);
  }

  stopClockTicks() {
    if (this.clockTimer) clearInterval(this.clockTimer);
    this.clockTimer = null;
  }

  startCrackle() {
    if (!this.ctx) return;
    if (this.crackleTimer) clearInterval(this.crackleTimer);
    this.crackleTimer = setInterval(() => {
      if (!this.enabled) return;
      if (Math.random() < 0.5) {
        const vol = 0.008 + Math.random() * 0.018;
        this.noiseBurst({ dur: 0.02 + Math.random() * 0.03, vol, type: 'highpass', freq: 2200 + Math.random() * 2400 });
      }
    }, 170);
  }

  stopCrackle() {
    if (this.crackleTimer) clearInterval(this.crackleTimer);
    this.crackleTimer = null;
  }

  recordTone() {
    if (!this.ctx) return;
    const ctx = this.ctx, t = ctx.currentTime;
    [261.6, 329.6, 392, 523.2].forEach((f, i) => {
      const osc = ctx.createOscillator();
      const g = ctx.createGain();
      osc.type = i === 0 ? 'triangle' : 'sine';
      osc.frequency.value = f;
      g.gain.setValueAtTime(0.0001, t);
      g.gain.linearRampToValueAtTime(0.035, t + 0.2);
      g.gain.setValueAtTime(0.035, t + 1.2);
      g.gain.exponentialRampToValueAtTime(0.0001, t + 3.6);
      osc.connect(g); g.connect(this.master); g.connect(this.reverb);
      osc.start(t); osc.stop(t + 3.7);
    });
  }

  stinger() {
    if (!this.ctx) return;
    this.impact(true);
    this.noiseBurst({ dur: 0.9, vol: 0.2, type: 'highpass', freq: 1800, sweep: 600, q: 0.7 });
    const ctx = this.ctx, t = ctx.currentTime;
    const osc = ctx.createOscillator();
    const g = ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(1400, t);
    osc.frequency.exponentialRampToValueAtTime(180, t + 0.5);
    g.gain.setValueAtTime(0.0001, t);
    g.gain.linearRampToValueAtTime(0.10, t + 0.01);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.6);
    osc.connect(g); g.connect(this.master); g.connect(this.reverb);
    osc.start(t); osc.stop(t + 0.7);
  }
}
