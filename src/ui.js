// DOM presentation layer: subtitles, timed choices, QTEs, exploration,
// chapter cards, pause, endings and transitions.
import { QteSession, displayKey, normalizeKey, qteKeyHint } from './qte.js';

const RING_CIRCUMFERENCE = 2 * Math.PI * 52;
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

export const HOTSPOTS = {
  creel_photo: {
    label: 'THE FAMILY PHOTO',
    title: 'The Creel Family, 1959',
    text: 'Four faces, all of them smiling at something just outside the frame. Someone has scratched out the father. The mother is holding a clock that is not in any of the other photographs. In the corner, in pencil: HE COUNTED US FIRST.'
  },
  wall_scratches: {
    label: 'THE SCRATCHES',
    title: 'Somebody Was Counting',
    text: 'Four tally marks, over and over, cut deep into the wallpaper. Then a fifth, crooked and much newer. Under it, childish handwriting: 3:07 COMES BACK. The plaster beneath is warm to the touch, like something is breathing behind it.'
  },
  clock_face: {
    label: 'THE GRANDFATHER CLOCK',
    title: 'It Is Always 3:07',
    text: 'The pendulum is still. The hands are frozen at three and seven. There is no dust on the glass. Someone has been winding it. On the inside of the case, dozens of names are written in the same cramped hand. Dana\'s is the newest.'
  },
  candles: {
    label: 'FIVE CANDLES',
    title: 'One for Each of Us',
    text: 'Five candles, all burning, though the house has had no power for a year. The wax has pooled into the shape of a hand. When you lean closer, the flames bend toward you, every one of them, like people listening.'
  },
  swing_set: {
    label: 'THE SWING SET',
    title: 'It Is Still Swinging',
    text: 'A rusted swing set with one empty seat, moving in a wind you cannot feel. The chains are warm from small hands. Under the seat, pressed into the mud, are two sets of footprints. One belongs to a child. The other has too many toes.'
  },
  red_tether: {
    label: "DANA'S TETHER",
    title: 'A Pulse Under the Mud',
    text: 'A red vine, thick as a wrist, runs from the ruined house to somewhere beneath your feet. It beats. Not fast. Not slow. The exact rhythm of Dana\'s heart, the one you used to fall asleep to through the wall.'
  },
  clock_door: {
    label: 'THE CLOCK DOOR',
    title: 'A Door With No Hands',
    text: 'The clock in the Hollow house is twelve feet tall and has no face, only a dark opening where the hands should be. Cold air pours out of it, carrying the smell of the foyer. Somewhere inside, a girl is humming Dana\'s song.'
  },
  dead_tree: {
    label: 'THE DEAD TREE',
    title: 'Jonah\'s Tree',
    text: 'You know this tree. It grew in the field behind your house until the Quake took the field. Carved into the bark, at the height a twelve-year-old could reach: R + J. The sap is running. It is red.'
  }
};

const prettify = (id) => id.replace(/_/g, ' ').toUpperCase();

export class UI {
  constructor(audio) {
    this.audio = audio;
    this.engine = null;
    this.paused = false;
    this.mode = 'idle';
    this.inspectOpen = false;
    this._pending = new Set();
    this._keyHandler = null;
    this._pointerHandler = null;
    this._raf = null;
    this._typing = null;
    this._explore = null;
    this._ignorePickUntil = 0;
    this._keyPulse = null;

    const $ = (id) => document.getElementById(id);
    this.$ = $;
    this.el = {
      hud: $('hud'), hudChapter: $('hud-chapter'), hudObjective: $('hud-objective'),
      hudTime: $('hud-time'), hudSignal: $('hud-signal'),
      subtitles: $('subtitles'), speaker: $('speaker'), line: $('line'), advance: $('advance-hint'),
      choices: $('choices'), choicePrompt: $('choice-prompt'), choiceList: $('choice-list'),
      choiceTimer: $('choice-timer-fill'),
      qte: $('qte'), qtePrompt: $('qte-prompt'), qteKey: $('qte-key'), qteHint: $('qte-hint'),
      ring: $('ring-progress'),
      explore: $('explore'), reticle: $('reticle'), hotspotLabel: $('hotspot-label'),
      exploreCounter: $('explore-counter'),
      inspect: $('inspect'), inspectTitle: $('inspect-title'), inspectText: $('inspect-text'),
      inspectCount: $('inspect-count'),
      toast: $('toast'),
      card: $('chapter-card'), cardNumeral: $('chapter-numeral'), cardTitle: $('chapter-title'), cardSub: $('chapter-sub'),
      fade: $('fade'), fadeCaption: $('fade-caption'),
      flash: $('flash'), damage: $('damage'),
      title: $('title-screen'), pause: $('pause-screen'), pauseTime: $('pause-time'), pauseFlags: $('pause-flags'),
      ending: $('ending-screen'), endingKicker: $('ending-kicker'), endingTitle: $('ending-title'),
      endingText: $('ending-text'), endingStats: $('ending-stats')
    };

    this.el.ring.style.strokeDasharray = String(RING_CIRCUMFERENCE);
    this.el.ring.style.strokeDashoffset = '0';

    window.addEventListener('pointermove', (e) => this._onPointerMove(e));
  }

  // ── transitions ───────────────────────────────────────────────
  async fadeOut(caption = '') {
    if (caption) {
      this.el.fadeCaption.textContent = caption;
      this.el.fadeCaption.classList.add('on');
    }
    this.el.fade.classList.remove('clear');
    this.el.fade.classList.add('visible');
    await sleep(1050);
  }

  async fadeIn({ caption = false, wait = 900 } = {}) {
    this.el.fade.classList.remove('visible');
    this.el.fade.classList.add('clear');
    await sleep(450);
    if (!caption) this.el.fadeCaption.classList.remove('on');
    await sleep(Math.max(0, wait - 450));
    this.el.fadeCaption.classList.remove('on');
  }

  async showChapterCard({ numeral, title, sub }) {
    this.el.cardNumeral.textContent = numeral || '';
    this.el.cardTitle.textContent = title || '';
    this.el.cardSub.textContent = sub || '';
    this.el.card.classList.remove('hidden');
    await sleep(3000);
    this.el.card.classList.add('hidden');
    await sleep(950);
  }

  setHUD({ chapter = null, objective = null, time = null } = {}) {
    if (chapter != null) this.el.hudChapter.textContent = chapter;
    if (objective != null) this.el.hudObjective.textContent = objective;
    if (time != null) this.el.hudTime.innerHTML = `<span class="clock-dot"></span>${time}`;
  }

  setSignal(level = 0) {
    this.el.hudSignal.classList.toggle('hot', level >= 3);
    this.el.hudSignal.style.opacity = level <= 0 ? '0.35' : '1';
  }

  setHUDVisible(on) {
    this.el.hud.classList.toggle('hidden', !on);
  }

  // ── subtitles ─────────────────────────────────────────────────
  say({ who = '', text = '', narrator = false, voice = '', signal = null }) {
    return new Promise((resolve) => {
      if (signal != null) this.setSignal(signal);
      this.mode = 'line';
      this.el.subtitles.classList.remove('hidden');
      this.el.speaker.textContent = narrator ? '' : (who || '');
      this.el.speaker.className = narrator ? 'narrator' : (voice === 'unknown' ? 'unknown' : '');
      this.el.line.textContent = '';
      this.el.advance.classList.remove('on');

      let index = 0;
      let done = false;
      let last = performance.now();
      let acc = 0;
      const total = text.length;
      const charsPerSecond = narrator ? 42 : 34;

      const finishTyping = () => {
        index = total;
        this.el.line.textContent = text;
        this.el.advance.classList.add('on');
        done = true;
      };

      const advance = () => {
        if (this.mode !== 'line') return;
        if (!done) {
          finishTyping();
          return;
        }
        cleanup();
        resolve(true);
      };

      const key = (e) => {
        if (this.paused) return;
        const k = normalizeKey(e.key);
        if (k === 'space' || k === 'enter') {
          e.preventDefault();
          advance();
        }
      };
      const click = (e) => {
        if (this.paused) return;
        if (e.target.closest('button, input, .screen')) return;
        advance();
      };
      const tick = (now) => {
        if (this.mode !== 'line') return;
        if (this.paused) {
          last = now;
          this._raf = requestAnimationFrame(tick);
          return;
        }
        const dt = Math.min(0.05, (now - last) / 1000);
        last = now;
        if (!done) {
          acc += dt * charsPerSecond;
          const add = Math.floor(acc);
          if (add > 0) {
            acc -= add;
            index = Math.min(total, index + add);
            this.el.line.textContent = text.slice(0, index);
            if (index >= total) finishTyping();
          }
        }
        this._raf = requestAnimationFrame(tick);
      };

      const cleanup = () => {
        this.mode = 'idle';
        this._pending.delete(cancel);
        window.removeEventListener('keydown', key);
        window.removeEventListener('pointerdown', click);
        if (this._raf) cancelAnimationFrame(this._raf);
        this._raf = null;
        this.el.subtitles.classList.add('hidden');
        this.el.advance.classList.remove('on');
      };
      const cancel = () => {
        cleanup();
        resolve(null);
      };
      this._pending.add(cancel);
      this._typing = { finishTyping };

      window.addEventListener('keydown', key);
      window.addEventListener('pointerdown', click);
      this._raf = requestAnimationFrame(tick);
    });
  }

  hideSubtitles() {
    this.el.subtitles.classList.add('hidden');
  }

  // ── timed choices ─────────────────────────────────────────────
  showChoices({ prompt, options, timer = 12, defaultIndex = 0 }) {
    return new Promise((resolve) => {
      this.mode = 'choice';
      this.hideSubtitles();
      this.el.choices.classList.remove('hidden');
      this.el.choicePrompt.textContent = prompt || '';
      this.el.choiceList.innerHTML = '';

      let focused = Math.min(defaultIndex, options.length - 1);
      let picked = null;
      let remaining = timer;
      let last = performance.now();
      const buttons = [];

      const setFocus = (i) => {
        focused = (i + options.length) % options.length;
        buttons.forEach((b, j) => b.classList.toggle('focused', j === focused));
      };

      const cleanup = () => {
        this.mode = 'idle';
        this._pending.delete(cancel);
        window.removeEventListener('keydown', key);
        if (this._raf) cancelAnimationFrame(this._raf);
        this._raf = null;
        this.el.choices.classList.add('hidden');
      };

      const choose = (index, fromTimer = false) => {
        if (picked != null) return;
        picked = index;
        buttons[index]?.classList.add('picked');
        this.audio?.uiTick?.();
        const result = index;
        setTimeout(() => {
          cleanup();
          resolve(result);
        }, fromTimer ? 160 : 330);
      };

      options.forEach((opt, i) => {
        const btn = document.createElement('button');
        btn.className = 'choice-item';
        btn.type = 'button';
        const idx = document.createElement('span');
        idx.className = 'idx';
        idx.textContent = String(i + 1).padStart(2, '0');
        const label = document.createElement('span');
        label.className = 'label';
        label.textContent = opt.label;
        if (opt.sub) {
          const sub = document.createElement('span');
          sub.className = 'sub';
          sub.textContent = opt.sub;
          label.appendChild(sub);
        }
        btn.append(idx, label);
        btn.addEventListener('click', () => choose(i));
        this.el.choiceList.appendChild(btn);
        buttons.push(btn);
      });
      setFocus(focused);

      const key = (e) => {
        if (this.paused) return;
        const k = normalizeKey(e.key);
        if (k === 'arrowup' || k === 'w') { e.preventDefault(); setFocus(focused - 1); this.audio?.uiTick?.(); }
        else if (k === 'arrowdown' || k === 's') { e.preventDefault(); setFocus(focused + 1); this.audio?.uiTick?.(); }
        else if (k === 'enter' || k === 'space') { e.preventDefault(); choose(focused); }
        else if (/^[1-9]$/.test(k) && Number(k) <= options.length) { choose(Number(k) - 1); }
      };

      const tick = (now) => {
        if (this.mode !== 'choice') return;
        if (!this.paused) {
          const dt = (now - last) / 1000;
          remaining = Math.max(0, remaining - dt);
          this.el.choiceTimer.style.transform = `scaleX(${remaining / timer})`;
          if (remaining <= 0) {
            choose(Math.min(defaultIndex, options.length - 1), true);
            this._raf = null;
            return;
          }
        }
        last = now;
        this._raf = requestAnimationFrame(tick);
      };

      const cancel = () => {
        cleanup();
        resolve(null);
      };
      this._pending.add(cancel);
      window.addEventListener('keydown', key);
      this._raf = requestAnimationFrame(tick);
    });
  }

  // ── quick time events ─────────────────────────────────────────
  runQte(config, { assist = false } = {}) {
    return new Promise((resolve) => {
      this.mode = 'qte';
      this.hideSubtitles();
      const session = new QteSession(config, { assist });
      this._qteSession = session;
      const keys = session.displayKeys;
      this.el.qte.classList.remove('hidden');
      this.el.qtePrompt.innerHTML = config.prompt ? `<span class="danger">${escapeHTML(config.prompt)}</span>` : 'QUICK';
      this.el.qteHint.textContent = config.hint || qteKeyHint(config);
      this.el.qteKey.textContent = config.kind === 'sequence' ? displayKey(keys[0]) : displayKey(keys[0]);
      this.el.qteKey.classList.remove('hit', 'good', 'bad');
      this._keyPulse = null;

      if (config.kind === 'sequence') {
        this.el.qteKey.textContent = displayKey(keys[0]);
      }

      let last = performance.now();
      let finished = false;

      const render = () => {
        const p = Math.max(0, Math.min(1, session.progress));
        let shown = p;
        if (session.kind === 'press') shown = Math.max(0, 1 - session.remaining / session.window);
        if (session.kind === 'sequence' && session.status === 'active') {
          this.el.qteKey.textContent = displayKey(session.activeKey);
        }
        this.el.ring.style.strokeDashoffset = String(RING_CIRCUMFERENCE * (1 - shown));
        if (session.kind === 'mash') {
          this.el.qteHint.textContent = `${config.hint || 'MASH'} — ${session.mashCount} / ${session.target}`;
        } else if (session.kind === 'hold') {
          const secs = Math.max(0, session.hold - session.holdTime) / 1000;
          this.el.qteHint.textContent = session.holding
            ? `HOLD — ${secs.toFixed(1)}s`
            : `${config.hint || 'HOLD'} — ${(session.remaining).toFixed(1)}s`;
        } else if (session.kind === 'sequence') {
          this.el.qteHint.textContent = keys.map((k, i) => i < session.index ? `[${displayKey(k)}]` : displayKey(k)).join('  ');
        }
      };

      const finish = (ok) => {
        if (finished) return;
        finished = true;
        this.el.qteKey.classList.add(ok ? 'good' : 'bad');
        render();
        setTimeout(() => {
          cleanup();
          resolve(ok);
        }, 430);
      };

      const pressPulse = () => {
        this.el.qteKey.classList.add('hit');
        clearTimeout(this._keyPulse);
        this._keyPulse = setTimeout(() => this.el.qteKey.classList.remove('hit'), 90);
      };

      const keydown = (e) => {
        if (this.paused) return;
        const k = normalizeKey(e.key);
        if (['space', 'arrowup', 'arrowdown', 'arrowleft', 'arrowright', 'tab'].includes(k)) e.preventDefault();
        if (e.repeat) return;
        if (session.kind === 'hold') {
          session.press(k);
        } else {
          session.press(k);
        }
        pressPulse();
        this.audio?.uiTick?.();
      };
      const keyup = (e) => session.release(e.key);

      const cleanup = () => {
        this.mode = 'idle';
        this._qteSession = null;
        this._pending.delete(cancel);
        window.removeEventListener('keydown', keydown);
        window.removeEventListener('keyup', keyup);
        if (this._raf) cancelAnimationFrame(this._raf);
        this._raf = null;
        this.el.qte.classList.add('hidden');
        this.el.qteKey.classList.remove('hit', 'good', 'bad');
      };

      const cancel = () => {
        cleanup();
        resolve(null);
      };
      this._pending.add(cancel);

      const loop = (now) => {
        if (this.mode !== 'qte') return;
        if (this.paused) {
          last = now;
          this._raf = requestAnimationFrame(loop);
          return;
        }
        const dt = Math.min(0.1, (now - last) / 1000);
        this._qteLastDt = dt;
        this._qteNow = now;
        last = now;
        session.tick(dt);
        render();
        if (session.status !== 'active') {
          this._raf = null;
          finish(session.status === 'succeeded');
          return;
        }
        this._raf = requestAnimationFrame(loop);
      };

      window.addEventListener('keydown', keydown);
      window.addEventListener('keyup', keyup);
      this._raf = requestAnimationFrame(loop);
      render();
    });
  }

  // ── exploration ───────────────────────────────────────────────
  startExplore({ hotspots = [], required = 3, prompt = 'SEARCH' } = {}) {
    return new Promise((resolve) => {
      this.mode = 'explore';
      this.inspectOpen = false;
      this.el.explore.classList.remove('hidden');
      this.el.exploreCounter.textContent = `0 / ${required} FOUND`;
      this.el.hotspotLabel.classList.remove('on');
      this.el.reticle.classList.remove('hot');
      this.el.inspect.classList.add('hidden');
      this.hideSubtitles();
      this.toast(prompt, 1700);

      const found = new Set();
      let ready = false;
      let hovered = null;
      let labelTimer = null;

      const updateCounter = () => {
        this.el.exploreCounter.textContent = `${found.size} / ${required} FOUND`;
      };

      const onHover = (id) => {
        hovered = id;
        this.el.reticle.classList.toggle('hot', !!id);
        if (id) {
          const meta = HOTSPOTS[id];
          this.el.hotspotLabel.textContent = meta?.label || prettify(id);
          this.el.hotspotLabel.classList.add('on');
        } else {
          this.el.hotspotLabel.classList.remove('on');
        }
      };

      const closeInspect = () => {
        if (!this.inspectOpen) return;
        if (performance.now() - (this._inspectAt || 0) < 260) return;
        this.inspectOpen = false;
        this.el.inspect.classList.add('hidden');
        this._ignorePickUntil = performance.now() + 320;
        this.mode = 'explore';
        if (ready) finish();
        else if (hovered) onHover(hovered);
      };

      const globalClose = (e) => {
        if (!this.inspectOpen) return;
        if (e.type === 'keydown') {
          const k = normalizeKey(e.key);
          if (k !== 'space' && k !== 'enter' && k !== 'escape') return;
          e.preventDefault();
        }
        closeInspect();
      };

      const onClick = (id) => {
        if (!this.explore || this.mode !== 'explore') return;
        if (performance.now() < this._ignorePickUntil) return;
        if (!id) return;
        const meta = HOTSPOTS[id] || { label: prettify(id), title: prettify(id), text: '' };
        this.mode = 'inspect';
        this.inspectOpen = true;
        this._inspectAt = performance.now();
        this.engine?.markHotspot?.(id);
        found.add(id);
        updateCounter();
        this.audio?.uiTick?.();
        this.el.inspectTitle.textContent = meta.title;
        this.el.inspectText.textContent = meta.text;
        this.el.inspectCount.textContent = `${found.size} / ${required} FOUND`;
        this.el.inspect.classList.remove('hidden');
        this.el.hotspotLabel.classList.remove('on');
        this.el.reticle.classList.remove('hot');
        if (found.size >= required) ready = true;
      };

      const finish = () => {
        if (!this.explore) return;
        this.mode = 'idle';
        this.explore = null;
        this.engine?.setExplore?.(false);
        this.el.explore.classList.add('hidden');
        this.el.inspect.classList.add('hidden');
        this.el.hotspotLabel.classList.remove('on');
        this.el.reticle.classList.remove('hot');
        this._pending.delete(cancel);
        window.removeEventListener('keydown', globalClose);
        window.removeEventListener('pointerdown', globalClose);
        clearTimeout(labelTimer);
        this.audio?.success?.();
        resolve([...found]);
      };

      const cancel = () => {
        this.mode = 'idle';
        this.explore = null;
        this.engine?.setExplore?.(false);
        this.el.explore.classList.add('hidden');
        this.el.inspect.classList.add('hidden');
        this.el.hotspotLabel.classList.remove('on');
        window.removeEventListener('keydown', globalClose);
        window.removeEventListener('pointerdown', globalClose);
        resolve(null);
      };
      this._pending.add(cancel);
      this.explore = { found, required, onHover, onClick, finish };
      window.addEventListener('keydown', globalClose);
      window.addEventListener('pointerdown', globalClose);
      this.engine?.setExplore?.(true, { onHover, onClick });
    });
  }

  // ── atmosphere ────────────────────────────────────────────────
  _onPointerMove(e) {
    if (this.mode !== 'explore' && this.mode !== 'inspect') return;
    const x = e.clientX, y = e.clientY;
    this.el.reticle.style.left = `${x}px`;
    this.el.reticle.style.top = `${y}px`;
    this.el.hotspotLabel.style.left = `${x}px`;
    this.el.hotspotLabel.style.top = `${y}px`;
  }

  toast(text, duration = 2200) {
    this.el.toast.textContent = text;
    this.el.toast.classList.add('on');
    clearTimeout(this._toastTimer);
    this._toastTimer = setTimeout(() => this.el.toast.classList.remove('on'), duration);
  }

  flash(kind = 'white', strength = 1) {
    const el = this.el.flash;
    el.className = kind === 'blood' ? 'blood' : kind === 'fire' ? 'fire' : '';
    el.style.transition = 'none';
    el.style.opacity = String(Math.min(0.85, 0.4 + strength * 0.3));
    requestAnimationFrame(() => {
      el.style.transition = 'opacity 0.5s ease';
      el.style.opacity = '0';
    });
  }

  damage() {
    this.el.damage.style.opacity = '1';
    clearTimeout(this._damageTimer);
    this._damageTimer = setTimeout(() => { this.el.damage.style.opacity = '0'; }, 1100);
  }

  // ── pause ─────────────────────────────────────────────────────
  showPause({ time = '', flags = {} } = {}) {
    this.el.pauseTime.textContent = time || '';
    const rows = [];
    const describe = (label, value) => rows.push(`<div class="flag-row"><span>${escapeHTML(label)}</span><span>${escapeHTML(value)}</span></div>`);
    describe('Door', flags.entry === 'loud' ? 'Kicked in' : 'Slip in quiet');
    if (flags.record) describe('Record', flags.record === 'static' ? 'Static Bloom' : flags.record === 'wren' ? "Wren's mixtape" : "Jonah's tape");
    if (flags.method) describe('Tether', flags.method === 'fire' ? 'Burned' : flags.method === 'wren' ? "Wren's hands" : 'Bare hands');
    describe('Sam', flags.broughtSam ? 'At your side' : 'Watching Dana');
    if (flags.strain) describe('Strain', `${flags.strain} / 3`);
    if (flags.fails) describe('Close calls', String(flags.fails));
    this.el.pauseFlags.innerHTML = rows.join('');
    this.el.pause.classList.remove('hidden');
  }

  hidePause() {
    this.el.pause.classList.add('hidden');
  }

  // ── ending ────────────────────────────────────────────────────
  showEnding({ number, title, text, epigraph, stats = [] }) {
    this.mode = 'ending';
    this.hideSubtitles();
    this.setHUDVisible(false);
    this.el.endingKicker.textContent = `ENDING ${number} OF 4`;
    this.el.endingTitle.textContent = title;
    this.el.endingText.textContent = epigraph ? `${text}\n\n${epigraph}` : text;
    this.el.endingStats.innerHTML = stats.map((s) => `<div class="ending-stat">${escapeHTML(s.label)}<b>${escapeHTML(s.value)}</b></div>`).join('');
    this.el.ending.classList.remove('hidden');
  }

  hideEnding() {
    this.el.ending.classList.add('hidden');
  }

  cancelPending() {
    const pending = [...this._pending];
    this._pending.clear();
    for (const cancel of pending) cancel();
    this.mode = 'idle';
    if (this._raf) cancelAnimationFrame(this._raf);
    this._raf = null;
    if (this._typing) this._typing = null;
    this.el.subtitles.classList.add('hidden');
    this.el.choices.classList.add('hidden');
    this.el.qte.classList.add('hidden');
    this.el.explore.classList.add('hidden');
    this.el.inspect.classList.add('hidden');
    this.engine?.setExplore?.(false);
    this.engine?.showRings?.(false);
    this.explore = null;
  }
}

function escapeHTML(value) {
  return String(value ?? '').replace(/[&<>"']/g, (c) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[c]));
}
