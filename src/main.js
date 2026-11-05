import '@fontsource/cormorant-garamond/400.css';
import '@fontsource/cormorant-garamond/500.css';
import '@fontsource/cormorant-garamond/600.css';
import '@fontsource/cormorant-garamond/400-italic.css';
import '@fontsource/barlow-condensed/300.css';
import '@fontsource/barlow-condensed/400.css';
import '@fontsource/barlow-condensed/500.css';
import '@fontsource/barlow-condensed/600.css';
import './styles.css';

import { Engine, setSharedGlow } from './engine.js';
import { glowTexture } from './props.js';
import { UI } from './ui.js';
import { Game } from './game.js';
import { AudioEngine } from './audio.js';

const loadFill = document.getElementById('load-fill');
const loadStatus = document.getElementById('load-status');
const loading = document.getElementById('loading');

function progress(value, label) {
  if (loadFill) loadFill.style.width = `${Math.round(value * 100)}%`;
  if (label && loadStatus) loadStatus.textContent = `${label}…`;
}

async function boot() {
  progress(0.05, 'WAKING THE HOUSE');
  const canvas = document.getElementById('stage');
  if (!canvas) throw new Error('Stage canvas missing');

  // Share the procedural glow sprite texture before any scene is built, so
  // scene disposal never tears down a texture still used by another scene.
  setSharedGlow(glowTexture());

  const audio = new AudioEngine();
  const ui = new UI(audio);
  const engine = new Engine(canvas);
  const game = new Game({ engine, ui, audio });

  await game.boot((p, label) => progress(p, label));

  progress(1, 'THE CLOCK IS COUNTING DOWN');
  await new Promise((r) => setTimeout(r, 220));
  loading?.classList.add('done');
  ui.el.fade.classList.remove('visible');
  ui.el.fade.classList.add('clear');
  window.__HOLLOW_CLOCK__ = { engine, ui, game, audio };
}

boot().catch((err) => {
  console.error('[THE HOLLOW CLOCK] boot failed', err);
  progress(1, 'THE SIGNAL BROKE');
  if (loadStatus) {
    loadStatus.textContent = 'THE SIGNAL BROKE — SEE CONSOLE';
    loadStatus.style.color = '#ff3b2f';
  }
});
