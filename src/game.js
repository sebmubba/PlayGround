import { story, initialFlags, chapterMeta } from './story.js';

const SAVE_KEY = 'hollowclock.save.v1';
const SETTINGS_KEY = 'hollowclock.settings.v1';
const UNLOCK_KEY = 'hollowclock.unlocked.v1';
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const MOOD_BY_SCENE = {
  exterior: 'house',
  foyer: 'house',
  bedroom: 'bedroom',
  quarry: 'quarry',
  hollow: 'hollow',
  lair: 'lair'
};

const RECORD_NAME = { static: 'Static Bloom', wren: "Wren's mixtape", jonah: "Jonah's tape" };
const METHOD_NAME = { fire: 'The flare', wren: "Wren's hands", self: 'Bare hands' };

function storeGet(key, fallback = null) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}
function storeSet(key, value) {
  try { localStorage.setItem(key, JSON.stringify(value)); } catch { /* storage can be unavailable */ }
}
function storeRemove(key) {
  try { localStorage.removeItem(key); } catch { /* ignore */ }
}

export class Game {
  constructor({ engine, ui, audio }) {
    this.engine = engine;
    this.ui = ui;
    this.audio = audio;
    this.ui.engine = engine;

    this.flags = initialFlags();
    this.chapter = 'chapter1';
    this.chapterStartFlags = initialFlags();
    this.currentTime = '3:04 AM';
    this.currentMood = 'title';
    this.token = 0;
    this.running = false;
    this.paused = false;
    this._black = false;
    this._endingPayload = null;
    this._chaptersReturn = null;
    this._returnToPause = false;
    this._settings = {
      assist: false, reduceFlashes: false, audio: true, grain: true,
      ...storeGet(SETTINGS_KEY, {})
    };
    this._bound = false;
  }

  async boot(onProgress = () => {}) {
    onProgress(0.18, 'TUNING THE SIGNAL');
    this._bind();
    this._applySettings();
    await this.engine.setScene('exterior', { shot: 'title' });
    onProgress(0.72, 'FINDING HAWKINS');
    this.engine.paused = false;
    this.ui.setHUDVisible(false);
    this.ui.setSignal(0);
    this._updateContinueButton();
    this._renderChapters();
    this._setMood('title');
    onProgress(1, 'THE CLOCK IS COUNTING DOWN');
    await sleep(320);
  }

  // ── bindings ───────────────────────────────────────────────────
  _bind() {
    if (this._bound) return;
    this._bound = true;

    const click = (id, fn) => {
      const el = document.getElementById(id);
      if (el) el.addEventListener('click', (e) => { e.preventDefault(); fn(); });
    };

    click('btn-begin', () => this._startFresh());
    click('btn-continue', () => this._continue());
    click('btn-chapters', () => this._openChapters('title'));
    click('btn-settings', () => this._openSettings(false));
    click('btn-resume', () => this._resume());
    click('btn-restart', () => this._restartChapter());
    click('btn-pause-settings', () => this._openSettings(true));
    click('btn-quit', () => this._quitToTitle());
    click('btn-again', () => this._startFresh());
    click('btn-ending-chapters', () => this._openChapters('ending'));
    click('btn-ending-title', () => this._quitToTitle());

    document.querySelectorAll('[data-close]').forEach((btn) => {
      btn.addEventListener('click', () => this._closePanel(btn.dataset.close));
    });

    const bindToggle = (id, key) => {
      const input = document.getElementById(id);
      if (!input) return;
      input.addEventListener('change', () => {
        this._settings[key] = input.checked;
        this._saveSettings();
        this._applySettings();
      });
    };
    bindToggle('opt-qte', 'assist');
    bindToggle('opt-flash', 'reduceFlashes');
    bindToggle('opt-audio', 'audio');
    bindToggle('opt-grain', 'grain');

    window.addEventListener('keydown', (e) => {
      if (e.key !== 'Escape') return;
      if (this.ui.inspectOpen) return; // exploration overlay handles its own escape
      if (!this.running) return;
      e.preventDefault();
      if (this.paused) this._resume();
      else this._pause();
    });

    const kickAudio = () => {
      if (this.audio.started) return;
      this.audio.init().then(() => {
        this.audio.setEnabled(this._settings.audio);
        this.audio.setMood(this.running ? this.currentMood : 'title');
      }).catch(() => {});
    };
    window.addEventListener('pointerdown', kickAudio, { once: true });
    window.addEventListener('keydown', kickAudio, { once: true });
  }

  // ── settings / storage ────────────────────────────────────────
  _applySettings() {
    const s = this._settings;
    const qte = document.getElementById('opt-qte');
    const flash = document.getElementById('opt-flash');
    const audio = document.getElementById('opt-audio');
    const grain = document.getElementById('opt-grain');
    if (qte) qte.checked = !!s.assist;
    if (flash) flash.checked = !!s.reduceFlashes;
    if (audio) audio.checked = !!s.audio;
    if (grain) grain.checked = !!s.grain;

    this.engine.reduceFlashes = !!s.reduceFlashes;
    this.engine.grainOn = !!s.grain;
    const grainUniform = this.engine.grade?.uniforms?.uGrain;
    if (grainUniform) {
      grainUniform.value = s.grain ? (this.engine.spec?.grain ?? 0.06) : 0;
    }
    this.audio.setEnabled(!!s.audio);
  }

  _saveSettings() { storeSet(SETTINGS_KEY, this._settings); }

  _savedGame() {
    const save = storeGet(SAVE_KEY, null);
    if (!save || !save.nodeId || !story.nodes[save.nodeId]) return null;
    return save;
  }

  _saveCheckpoint(nodeId) {
    storeSet(SAVE_KEY, {
      nodeId,
      chapter: this.chapter,
      flags: this._cloneFlags(this.flags),
      time: this.currentTime
    });
    this._updateContinueButton();
  }

  _clearSave() {
    storeRemove(SAVE_KEY);
    this._updateContinueButton();
  }

  _cloneFlags(flags) { return JSON.parse(JSON.stringify(flags)); }

  _unlocked() {
    const list = storeGet(UNLOCK_KEY, ['chapter1']);
    return Array.isArray(list) && list.length ? list : ['chapter1'];
  }

  _unlock(chapterId) {
    const list = this._unlocked();
    if (!list.includes(chapterId)) {
      list.push(chapterId);
      storeSet(UNLOCK_KEY, list);
    }
  }

  _setMood(mood) {
    this.currentMood = mood;
    if (this.audio.started) this.audio.setMood(mood, mood === 'lair' ? 0.9 : 0.6);
  }

  // ── title / panels ────────────────────────────────────────────
  _updateContinueButton() {
    const btn = document.getElementById('btn-continue');
    if (btn) btn.classList.toggle('hidden', !this._savedGame());
    this._shiftTitleMenu();
  }

  _shiftTitleMenu() {
    const hasSave = !!this._savedGame();
    const dyn = document.querySelectorAll('.title-menu .dyn');
    dyn.forEach((el, i) => { el.textContent = String((hasSave ? 3 : 2) + i); });
  }

  _showTitleScreen() {
    document.getElementById('title-screen')?.classList.remove('hidden');
  }

  _hideTitleScreen() {
    document.getElementById('title-screen')?.classList.add('hidden');
  }

  _hideAllScreens() {
    ['title-screen', 'chapters-screen', 'settings-screen', 'pause-screen', 'ending-screen']
      .forEach((id) => document.getElementById(id)?.classList.add('hidden'));
  }

  _openChapters(from = 'title') {
    this._chaptersReturn = from;
    this._renderChapters();
    document.getElementById('chapters-screen')?.classList.remove('hidden');
  }

  _renderChapters() {
    const list = document.getElementById('chapter-list');
    if (!list) return;
    const unlocked = this._unlocked();
    const hasSave = this._savedGame();
    list.innerHTML = '';
    chapterMeta.forEach((c) => {
      const isUnlocked = c.id === 'chapter1' || unlocked.includes(c.id);
      const row = document.createElement('button');
      row.type = 'button';
      row.className = `chapter-row${isUnlocked ? '' : ' locked'}`;
      row.disabled = !isUnlocked;
      const state = !isUnlocked ? 'LOCKED' : (hasSave?.chapter === c.id ? 'CONTINUE FROM HERE' : 'REPLAY CHAPTER');
      row.innerHTML = `
        <span class="num">${c.numeral}</span>
        <span class="name">${c.name}<span class="sub">${this._chapterSub(c.id)}</span></span>
        <span class="state">${state}</span>`;
      if (isUnlocked) row.addEventListener('click', () => this._startChapter(c.id));
      list.appendChild(row);
    });
  }

  _chapterSub(id) {
    const map = {
      chapter1: 'THE HOUSE ON MAPLE STREET',
      chapter2: '3:06 AM — UPSTAIRS',
      chapter3: 'THREE MILES OUTSIDE HAWKINS',
      chapter4: 'SOMEWHERE UNDER HAWKINS',
      chapter5: 'THE ROOM BETWEEN SECONDS'
    };
    return map[id] || '';
  }

  _openSettings(fromPause = false) {
    this._returnToPause = fromPause;
    if (fromPause) document.getElementById('pause-screen')?.classList.add('hidden');
    document.getElementById('settings-screen')?.classList.remove('hidden');
  }

  _closePanel(id) {
    document.getElementById(id)?.classList.add('hidden');
    if (id === 'settings-screen' && this._returnToPause && this.paused) {
      this._returnToPause = false;
      this.ui.showPause({ time: this.currentTime, flags: this.flags });
      return;
    }
    this._returnToPause = false;
    if (id === 'chapters-screen' && this._chaptersReturn === 'ending' && this._endingPayload) {
      this.ui.showEnding(this._endingPayload);
      this._chaptersReturn = null;
    }
  }

  // ── run lifecycle ─────────────────────────────────────────────
  async _startFresh() {
    await this._startRun('chapter1', initialFlags(), 'chapter1');
  }

  async _continue() {
    const save = this._savedGame();
    if (!save) { this._startFresh(); return; }
    await this._startRun(save.nodeId, { ...initialFlags(), ...save.flags }, save.chapter);
  }

  async _startChapter(id) {
    const save = this._savedGame();
    const flags = save ? { ...initialFlags(), ...save.flags } : { ...this.flags };
    await this._startRun(id, flags, id);
  }

  async _startRun(nodeId, flags, chapter) {
    this.token++;
    const token = this.token;
    this.running = true;
    this.paused = false;
    this.ui.paused = false;
    this.engine.paused = false;
    this.ui.hidePause();
    this.ui.hideEnding();
    this.ui.cancelPending();
    document.getElementById('chapter-card')?.classList.add('hidden');
    this.flags = { ...initialFlags(), ...this._cloneFlags(flags) };
    this.chapter = chapter;
    this.currentTime = '3:04 AM';
    this._endingPayload = null;
    this._chaptersReturn = null;
    this._returnToPause = false;
    this.audio.resume();

    try { await this.audio.init(); } catch { /* audio is optional */ }
    this.audio.setEnabled(this._settings.audio);

    await this.ui.fadeOut();
    if (token !== this.token) return;
    this._hideAllScreens();
    this._black = true;
    this.ui.setHUDVisible(true);
    this.ui.setSignal(0);
    this.ui.setHUD({ chapter: 'CHAPTER I', objective: 'Find Dana.', time: this.currentTime });

    try {
      await this._runFrom(nodeId, token);
    } catch (err) {
      if (err?.name !== 'Cancelled') {
        console.error('[THE HOLLOW CLOCK] run failed', err);
        this.ui.toast('THE SIGNAL BROKE — RETURNING TO TITLE', 3000);
        await sleep(1600);
        await this._returnToTitle();
      }
    }
  }

  _cancelRun() {
    this.token++;
    this.running = false;
    this.paused = false;
    this.ui.paused = false;
    this.engine.paused = false;
    this.ui.cancelPending();
    this.ui.hidePause();
  }

  async _runFrom(nodeId, token) {
    let id = nodeId;
    while (this.running && token === this.token) {
      const node = story.nodes[id];
      if (!node) throw new Error(`Missing story node: ${id}`);
      this.currentNode = id;

      const nextId = await this._enterNode(id, node, token);
      if (token !== this.token) return;
      if (node.t === 'end') return;
      if (nextId === null) return;
      id = nextId || node.next;
      if (!id) throw new Error(`Story node has no continuation: ${this.currentNode}`);
    }
  }

  async _enterNode(id, node, token) {
    if (node.set) this._applySet(node.set);
    if (node.wrenWeak) this.flags.wrenWeak = true;
    if (node.time) {
      this.currentTime = node.time;
      this.ui.setHUD({ time: node.time });
    }
    if (node.objective) this.ui.setHUD({ objective: node.objective });
    if (node.signal != null) this.ui.setSignal(node.signal);
    if (node.shake) this.engine.addShake(node.shake, 0.55);
    if (node.damage) {
      this.flags.strain += 1;
      this.ui.damage();
      this.audio.impact(false);
    }
    if (node.sfx) this._playSfx(node.sfx);
    if (node.flash) {
      const color = node.flash === 'blood' ? 0xd2141f : 0xff7a3a;
      this.engine.flash(1.5, color, 0.5);
      this.ui.flash(node.flash === 'blood' ? 'blood' : 'fire', 1);
    }

    switch (node.t) {
      case 'chapter':
        return this._enterChapter(id, node, token);
      case 'line':
        await this._prepareShot(node, token);
        if (token !== this.token) return null;
        this._applyNodeActions(id, node);
        await this.ui.say({
          who: node.who,
          text: node.text,
          narrator: !!node.narrator,
          voice: node.voice,
          signal: node.signal
        });
        return token === this.token ? node.next : null;
      case 'choice': {
        await this._prepareShot(node, token);
        if (token !== this.token) return null;
        const index = await this.ui.showChoices({
          prompt: node.prompt,
          options: node.options,
          timer: node.timer || 12,
          defaultIndex: node.defaultIndex ?? 0
        });
        if (index == null || token !== this.token) return null;
        const opt = node.options[index] || node.options[0];
        this._applySet(opt.set || {});
        this.audio.choose();
        if (opt.set?.method === 'fire') this.engine.spec?.actions?.burnTether?.();
        return opt.next;
      }
      case 'qte': {
        await this._prepareShot(node, token);
        if (token !== this.token) return null;
        if (id === 'c2_qte_music') {
          this.engine.spec?.actions?.setRecordSpin?.(true, 7);
          this.audio.recordTone();
        }
        const success = await this.ui.runQte(node, { assist: this._settings.assist });
        if (success == null || token !== this.token) return null;
        if (success) {
          this.audio.success();
          return node.success;
        }
        this.flags.fails += 1;
        this.flags.strain += 1;
        this._applySet(node.failSet || {}, { additive: true });
        this.ui.damage();
        this.engine.addShake(0.5, 0.7);
        this.audio.fail();
        return node.fail;
      }
      case 'explore': {
        await this._prepareShot(node, token);
        if (token !== this.token) return null;
        this.ui.setHUD({ objective: node.objective || 'Search.' });
        const found = await this.ui.startExplore({
          hotspots: node.hotspots,
          required: node.required || 3,
          prompt: node.prompt
        });
        if (found == null || token !== this.token) return null;
        this.flags.found += found.length;
        this.ui.toast(id === 'c1_explore' ? 'THE HOUSE REMEMBERS' : 'THE HOLLOW REMEMBERS', 2200);
        await sleep(420);
        return node.next;
      }
      case 'scene':
        await this._prepareShot(node, token);
        return node.next;
      case 'branch':
        return node.when(this.flags) ? node.yes : node.no;
      case 'fx':
        return node.next;
      case 'end':
        await this._finishEnding(node, token);
        return null;
      default:
        throw new Error(`Unknown node type: ${node.t}`);
    }
  }

  async _enterChapter(id, node, token) {
    this.chapter = id;
    this.chapterStartFlags = this._cloneFlags(this.flags);
    this._unlock(id);
    this._saveCheckpoint(id);
    this.currentTime = node.time || this.currentTime;
    this.ui.setHUD({
      chapter: `CHAPTER ${node.numeral} · ${node.title}`,
      objective: node.objective || '',
      time: this.currentTime
    });
    this.ui.setSignal(0);

    if (!this._black) await this.ui.fadeOut();
    if (token !== this.token) return null;
    await this._changeScene(node.scene, node.shot, token);
    if (token !== this.token) return null;

    const card = this.ui.showChapterCard({ numeral: node.numeral, title: node.title, sub: node.sub });
    await this.ui.fadeIn({ wait: 0 });
    await card;
    this._black = false;
    if (token !== this.token) {
      document.getElementById('chapter-card')?.classList.add('hidden');
      return null;
    }
    this.ui.setHUDVisible(true);
    this.ui.toast(`CHAPTER ${node.numeral} — ${node.objective || ''}`, 2400);
    return node.next;
  }

  async _prepareShot(node, token) {
    if (node.scene && node.scene !== this.engine.sceneId) {
      await this.ui.fadeOut();
      if (token !== this.token) return;
      await this._changeScene(node.scene, node.shot, token);
      if (token !== this.token) return;
      await this.ui.fadeIn({ wait: 250 });
      return;
    }
    if (!this.engine.spec) return;
    if (node.shot && node.shot !== this.engine.shotName) {
      this.engine.setShot(node.shot, { duration: 1.2 });
    }
  }

  async _changeScene(sceneId, shot, token) {
    if (!sceneId) return;
    await this.engine.setScene(sceneId, { shot: shot || null });
    if (token !== this.token) return;
    this._applySceneState(sceneId);
    this._setMood(MOOD_BY_SCENE[sceneId] || 'house');
  }

  _applySceneState(sceneId) {
    const actions = this.engine.spec?.actions;
    if (!actions) return;
    if (['quarry', 'hollow', 'lair'].includes(sceneId)) {
      actions.showSam?.(!!this.flags.broughtSam);
    }
  }

  _applyNodeActions(id, node) {
    const actions = this.engine.spec?.actions;
    if (!actions) return;
    if (id === 'c2_music_ok' || id === 'c2_music_fail') {
      actions.levitate?.(true);
      actions.setRecordSpin?.(true, 7);
    }
    if (id === 'c2_10') {
      actions.levitate?.(false);
      actions.setRecordSpin?.(false, 0.35);
    }
    if (node.shot === 'shatter') {
      actions.shatter?.();
      this.audio.stinger();
      this.engine.addShake(1, 1.2);
      this.ui.flash('blood', 1.2);
    }
  }

  _applySet(set = {}, { additive = false } = {}) {
    for (const [key, value] of Object.entries(set)) {
      if (additive && typeof value === 'number' && typeof this.flags[key] === 'number') {
        this.flags[key] += value;
      } else {
        this.flags[key] = value;
      }
    }
  }

  _playSfx(name) {
    const map = {
      clock_chime: () => this.audio.clockChime(),
      whisper: () => this.audio.whisper(),
      impact: () => this.audio.impact(true),
      gate: () => this.audio.gate(),
      thunder: () => this.audio.thunder(),
      creak: () => this.audio.creak(),
      record: () => this.audio.recordTone(),
      stinger: () => this.audio.stinger()
    };
    (map[name] || map.creak)();
  }

  async _finishEnding(node, token) {
    this.running = false;
    this.ui.hideSubtitles();
    this.ui.setHUDVisible(false);
    this._clearSave();
    await this.ui.fadeOut();
    if (token !== this.token) return;
    this.engine.paused = true;
    this._setMood('ending');
    this._endingPayload = {
      number: node.number,
      title: node.title,
      text: node.text,
      epigraph: node.epigraph,
      stats: [
        { label: 'THE DOOR', value: this.flags.entry === 'loud' ? 'Kicked in' : 'Quiet' },
        { label: 'THE RECORD', value: RECORD_NAME[this.flags.record] || 'Static' },
        { label: 'THE TETHER', value: METHOD_NAME[this.flags.method] || 'Unknown' },
        { label: 'CLOSE CALLS', value: String(this.flags.fails) }
      ]
    };
    this.ui.showEnding(this._endingPayload);
    this.audio.clockChime();
    await sleep(350);
    await this.ui.fadeIn({ wait: 900 });
  }

  // ── pause / quit ──────────────────────────────────────────────
  _pause() {
    if (!this.running || this.paused) return;
    this.paused = true;
    this.engine.paused = true;
    this.ui.paused = true;
    this.audio.suspend();
    this.ui.showPause({ time: this.currentTime, flags: this.flags });
  }

  _resume() {
    if (!this.paused) return;
    this.paused = false;
    this.engine.paused = false;
    this.ui.paused = false;
    this.audio.resume();
    this.ui.hidePause();
  }

  async _restartChapter() {
    const meta = chapterMeta.find((c) => c.id === this.chapter) || chapterMeta[0];
    this._cancelRun();
    document.getElementById('chapter-card')?.classList.add('hidden');
    await this._startRun(meta.id, this.chapterStartFlags, meta.id);
  }

  async _quitToTitle() {
    this._cancelRun();
    document.getElementById('chapter-card')?.classList.add('hidden');
    await this._returnToTitle();
  }

  async _returnToTitle() {
    this._cancelRun();
    this._hideAllScreens();
    await this.ui.fadeOut();
    this.engine.paused = false;
    await this.engine.setScene('exterior', { shot: 'title' });
    this.engine.paused = false;
    this.ui.setHUDVisible(false);
    this.ui.hideSubtitles();
    this.ui.setSignal(0);
    this._setMood('title');
    this._updateContinueButton();
    this._renderChapters();
    this._showTitleScreen();
    await this.ui.fadeIn({ wait: 900 });
  }
}
