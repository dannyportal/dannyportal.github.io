import { OUT_FPS, PLAYBACK, LETTERBOX, SECTIONS, MOVES, clip, toSourceTime, trackFor, sectionIndex } from './shots.js';
import { DRUMS, KEY_ROWS, ALWAYS_VISIBLE, pieceForKey } from './drums.js';
import { loadSounds, playSound } from './sounds.js';

const DEV = new URLSearchParams(location.search).has('dev');   // enables the T track-mode tool
const COARSE = window.matchMedia('(pointer: coarse)').matches;
// Phone/tablet treatment is keyed to the DEVICE, not the window size: a narrow
// desktop window keeps the desktop behaviour with only minimal responsiveness.
const MOBILE = COARSE || navigator.maxTouchPoints > 1 || /Android|iPhone|iPad|Mobile/i.test(navigator.userAgent);
document.body.classList.toggle('mobile', MOBILE);

const FOOTAGE = 'footage/tour.mp4';
const EPS = 1 / OUT_FPS;       // one output frame of slack at a clip's end
const SEEK_TIMEOUT = 1500;

const $ = (id) => document.getElementById(id);

// Compact layout is keyed to the viewport WIDTH and follows it live (no reload):
// the zone buttons move into the bottom bar (replacing the hint), the top-right
// menu lists what's in the current zone, the pause button sits in the bottom
// bar, hotspot markers are hidden and the modal is full-screen.
const compactMq = window.matchMedia('(max-width: 640px)');
function applyCompact() {
  const on = compactMq.matches;
  document.body.classList.toggle('compact', on);
  const header = $('ui-header'), footer = $('ui-footer');
  const tabs = $('tabs'), tools = $('tools'), help = $('help-btn'), btn = $('motion-btn');
  if (on) {
    // zone buttons + pause into the bottom bar; the question mark goes left of the menu icon
    if (tabs.parentElement !== footer) footer.appendChild(tabs);
    if (help.parentElement !== header) header.insertBefore(help, $('hs-btn'));
    if (btn.parentElement !== footer) footer.appendChild(btn);
  } else {
    if (tabs.parentElement !== header) header.insertBefore(tabs, $('hs-btn'));
    if (help.parentElement !== tools) tools.appendChild(help);
    if (btn.parentElement !== tools) tools.appendChild(btn);
  }
  return on;
}
applyCompact();
compactMq.addEventListener('change', () => {
  applyCompact();
  closeHsMenu();
  renderChrome();
  if (!modal.hidden && modal.dataset.state === 'open') { releaseModalBox(); updatePill(); }
});
const stage = $('stage');
const video = $('video');
const freeze = $('freeze');
const fctx = freeze.getContext('2d');
const hotspotsEl = $('hotspots');
const overlaysEl = $('overlays');
const modal = $('modal');

document.documentElement.style.setProperty('--dissolve', `${PLAYBACK.dissolveMs}ms`);

const state = {
  sectionIdx: 0,
  targetIdx: 0,
  mode: 'hold',          // 'hold' | 'move'
  phase: 'fwd',          // hold ping-pong direction
  clip: null,            // { name, start, end, forward, kind }
  queue: [],             // remaining move clips
  chained: false,        // current move is a chained (double) move
  motionPaused: false,   // visitor toggled "pause motion"
  playMode: false,       // drums: hold frozen, idle clip looping, keys trigger hits
  seeking: false,
  seekTimer: 0,
  tracking: false,
  pickedHotspot: 0,
  hotspotEls: [],
};

// ---------- stage sizing (16:9 box that covers the viewport) ----------
// On screens narrower than 16:9 the box is wider than the viewport, so which
// part is visible matters. `focus` (a frame point, 0..1) is kept at the centre
// of the viewport when possible; it eases toward each section's own focus so
// the crop pans along with the camera moves.
const stageSize = { w: 0, h: 0 };
// Letterbox bars (shots.js LETTERBOX). fit 'overlay': the stage is laid out as
// full-bleed and the bars sit on top of it. fit 'contain': the whole 16:9 frame
// sits between the bars (top/bottom are minimums, spare height goes into the
// bars, black sides when the window is wider than 16:9).
const bars = { top: 0, bottom: 0 };
const CONTAIN = LETTERBOX.enabled && LETTERBOX.fit === 'contain';
if (LETTERBOX.enabled) { document.body.classList.add('letterbox'); setBars(LETTERBOX.top, LETTERBOX.bottom); }
function setBars(top, bottom) {
  bars.top = top; bars.bottom = bottom;
  document.documentElement.style.setProperty('--bar-top', `${top}px`);
  document.documentElement.style.setProperty('--bar-bottom', `${bottom}px`);
}
const focus = { x: 0.5, y: 0.5, tx: 0.5, ty: 0.5 };

const fitted = { w: 0, h: 0 };   // viewport the stage was last fitted to
function fitStage() {
  const vw = window.innerWidth, vh = window.innerHeight, r = 16 / 9;
  fitted.w = vw; fitted.h = vh;
  let w = vw, h = vw / r;
  if (CONTAIN) {
    const areaH = vh - LETTERBOX.top - LETTERBOX.bottom;
    if (h > areaH) { h = areaH; w = areaH * r; }
    const spare = (areaH - h) / 2;
    setBars(LETTERBOX.top + spare, LETTERBOX.bottom + spare);
  } else if (h < vh) { h = vh; w = vh * r; }   // cover the viewport (full-bleed and 'overlay')
  stageSize.w = w; stageSize.h = h;
  stage.style.width = `${w}px`;
  stage.style.height = `${h}px`;
  layoutStage();
}
function layoutStage() {
  if (CONTAIN) {
    stage.style.left = `${(window.innerWidth - stageSize.w) / 2}px`;
    stage.style.top = `${bars.top}px`;
    return;
  }
  const vw = window.innerWidth, vh = window.innerHeight;
  const left = Math.min(0, Math.max(vw - stageSize.w, vw / 2 - focus.x * stageSize.w));
  const top = Math.min(0, Math.max(vh - stageSize.h, vh / 2 - focus.y * stageSize.h));
  stage.style.left = `${left}px`;
  stage.style.top = `${top}px`;
}
function setFocusTarget(idx, { snap = false } = {}) {
  const f = SECTIONS[idx].focus || { x: 50, y: 50 };
  focus.tx = f.x / 100; focus.ty = f.y / 100;
  if (snap) { focus.x = focus.tx; focus.y = focus.ty; layoutStage(); }
}
function easeFocus() {
  const dx = focus.tx - focus.x, dy = focus.ty - focus.y;
  if (Math.abs(dx) < 0.0005 && Math.abs(dy) < 0.0005) return;
  focus.x += dx * 0.06; focus.y += dy * 0.06;
  layoutStage();
}
window.addEventListener('resize', fitStage);
window.visualViewport?.addEventListener('resize', fitStage);
window.addEventListener('orientationchange', () => setTimeout(fitStage, 60));
fitStage();

// ---------- freeze-frame dissolve ----------
function freezeFrame() {
  if (!video.videoWidth) return;
  freeze.width = video.videoWidth;
  freeze.height = video.videoHeight;
  fctx.drawImage(video, 0, 0);
  freeze.classList.remove('fade');
  freeze.classList.add('show');
}
function releaseFreeze() {
  if (!freeze.classList.contains('show')) return;
  void freeze.offsetWidth; // commit the opaque state before transitioning
  freeze.classList.remove('show');
  freeze.classList.add('fade');
}

// ---------- seeking (guarded) ----------
function seekTo(t) {
  state.seeking = true;
  clearTimeout(state.seekTimer);
  state.seekTimer = setTimeout(() => { state.seeking = false; releaseFreeze(); }, SEEK_TIMEOUT);
  video.currentTime = t;
}
video.addEventListener('seeked', () => {
  state.seeking = false;
  clearTimeout(state.seekTimer);
  if (state.playMode) video.pause();   // playing: the background is the paused first frame; the hit layers sit above it
  releaseFreeze();
});

// ---------- clip playback ----------
function playClip(c, { dissolve = false, rate = 1 } = {}) {
  if (dissolve) freezeFrame();
  state.clip = c;
  video.playbackRate = rate;
  seekTo(c.start);
  if (!state.tracking) video.play().catch(() => {});
}

function holdShouldRun() {
  return !state.motionPaused;
}

function enterHold(idx, { dissolve = true } = {}) {
  state.sectionIdx = idx;
  state.targetIdx = idx;
  state.mode = 'hold';
  state.phase = 'fwd';
  state.queue = [];
  document.body.classList.remove('moving');
  const section = SECTIONS[idx];
  setFocusTarget(idx, { snap: !dissolve });
  playClip(clip(section.hold.fwd), { dissolve, rate: PLAYBACK.holdSpeed });
  if (!holdShouldRun()) video.pause();
  renderChrome();
  buildHotspots(section);
  if (state.autoMenu && compactMq.matches && !state.playMode) openHsMenu();
  state.autoMenu = false;
}

function moveRate() {
  return PLAYBACK.moveSpeed * (state.chained ? PLAYBACK.chainSpeed : 1);
}

function onClipEnd() {
  if (state.mode === 'move') {
    const next = state.queue.shift();
    if (next) playClip(next, { dissolve: false, rate: moveRate() });
    else enterHold(state.targetIdx, { dissolve: true });
    return;
  }
  // hold
  if (!holdShouldRun()) { video.pause(); return; }
  const section = SECTIONS[state.sectionIdx];
  if (PLAYBACK.pingPong && section.hold.rev) {
    state.phase = state.phase === 'fwd' ? 'rev' : 'fwd';
    const next = clip(state.phase === 'fwd' ? section.hold.fwd : section.hold.rev);
    if (Math.abs(video.currentTime - next.start) <= 2 * EPS) {
      // the reversed half sits right after the forward half in tour.mp4: keep
      // rolling into it, no seek (a seek stalls on phones and showed as a jump)
      state.clip = next;
      if (video.paused) video.play().catch(() => {});
    } else {
      // back to the start of the forward half: the only seek per cycle. Freeze
      // the last frame over it; it is the same picture as the first frame, so
      // the dissolve is invisible and the seek stall is covered.
      playClip(next, { dissolve: true, rate: PLAYBACK.holdSpeed });
    }
  } else {
    playClip(clip(section.hold.fwd), { dissolve: true, rate: PLAYBACK.holdSpeed });
  }
}

function checkBoundary() {
  if (state.playMode || state.seeking || state.tracking || !state.clip) return;   // playing: nothing loops
  const t = video.currentTime;
  if (t >= state.clip.end - EPS || t < state.clip.start - 0.25) onClipEnd();
}
video.addEventListener('timeupdate', checkBoundary);

// Where the left/right arrows (and keys, swipes) lead from the current section:
// a section's `arrows` in shots.js overrides the default previous/next.
function navTarget(dir) {
  const id = SECTIONS[state.sectionIdx].arrows?.[dir < 0 ? 'left' : 'right'];
  return id ? sectionIndex(id) : state.sectionIdx + dir;
}

function goTo(idx) {
  if (state.mode === 'move' || state.tracking) return;
  if (idx < 0 || idx >= SECTIONS.length || idx === state.sectionIdx) return;
  closeHsMenu();
  state.autoMenu = true;   // compact: open the zone menu once the move lands (see enterHold)
  if (state.playMode) exitPlayMode({ resume: false });
  const key = `${SECTIONS[state.sectionIdx].id}>${SECTIONS[idx].id}`;
  const spec = MOVES[key];
  if (!spec) { enterHold(idx); return; }
  const names = Array.isArray(spec) ? spec : spec.segments;
  closePanel();
  state.mode = 'move';
  state.targetIdx = idx;
  state.chained = !Array.isArray(spec) && !!spec.chain;
  state.queue = names.map(clip);
  setFocusTarget(idx);
  document.body.classList.add('moving');
  renderChrome();
  playClip(state.queue.shift(), { dissolve: true, rate: moveRate() });
}

// ---------- hotspots ----------
function sample(track, t) {
  if (!track || !track.length) return null;
  if (t <= track[0].t) return track[0];
  const last = track[track.length - 1];
  if (t >= last.t) return last;
  for (let i = 0; i < track.length - 1; i++) {
    const a = track[i], b = track[i + 1];
    if (t >= a.t && t <= b.t) {
      const u = b.t === a.t ? 0 : (t - a.t) / (b.t - a.t);
      return { x: a.x + (b.x - a.x) * u, y: a.y + (b.y - a.y) * u, w: a.w + (b.w - a.w) * u, h: a.h + (b.h - a.h) * u };
    }
  }
  return last;
}

function buildHotspots(section) {
  lastHotspotKey = null;
  hotspotsEl.innerHTML = '';
  state.hotspotEls = section.hotspots.map((h, i) => {
    const b = document.createElement('button');
    b.className = 'hotspot';
    b.type = 'button';
    b.dataset.id = h.id;
    if (section.id === DRUMS.sectionId && !state.playMode && !ALWAYS_VISIBLE.includes(h.id)) b.hidden = true;
    b.innerHTML = `<span class="dot"><span class="star"></span></span><span class="label">${hotspotLabel(section, h)}</span>`;
    b.addEventListener('click', () => {
      if (state.tracking) { pickHotspot(i); return; }
      onHotspotClick(section, h);
    });
    hotspotsEl.appendChild(b);
    return b;
  });
  updateHotspots();
}

let lastHotspotKey = null;
function updateHotspots() {
  const section = SECTIONS[state.sectionIdx];
  const t = toSourceTime(video.currentTime);
  const key = `${section.id}:${t.toFixed(4)}:${state.hotspotEls?.length}`;
  if (key === lastHotspotKey) return;   // footage paused (play mode) or nothing changed: no style writes this frame
  lastHotspotKey = key;
  section.hotspots.forEach((h, i) => {
    const el = state.hotspotEls[i];
    const p = sample(trackFor(section, h), t);
    if (!el || !p) return;
    el.style.left = `${p.x}%`;
    el.style.top = `${p.y}%`;
    el.style.width = `${p.w}%`;
    el.style.height = `${p.h}%`;
  });
}

// ---------- content modal ----------
// Opens centred, growing out of the hotspot in chunky steps, then the content
// resolves through a grid of tiles that drop away outward from where it came
// from (a "digital" dissolve). Closing runs the same thing backwards.
const modalBox = modal.querySelector('.modal-box');
const modalBackdrop = modal.querySelector('.modal-backdrop');
const modalTiles = $('modal-tiles');
const modalBody = $('modal-body');
const MODAL_GRID = { cols: 24, rows: 14 };
let modalOrigin = { x: 0.5, y: 0.5 };   // where the modal grows from, as a viewport fraction
let modalAnim = null;
let contentCleanup = null;              // returned by module content; stops its animations
let modalEscape = null;                 // module content may claim an Esc press (returns true if handled)

function modalIsOpen() { return !modal.hidden && modal.dataset.state !== 'closing'; }

function renderContent(section, hotspot) {
  modalBody.innerHTML = '';
  const wrap = document.createElement('div');
  wrap.className = 'modal-content';
  const c = hotspot.content;
  contentCleanup?.();
  contentCleanup = null;
  if (c?.type === 'module') {
    import(`${c.module}?v=${Date.now()}`).then((m) => {
      if (!modalBody.contains(wrap)) return;   // closed before the module arrived
      contentCleanup = m.default(wrap, {
        goTo: (id) => { closeModal(); goTo(sectionIndex(id)); },
        onEscape: (fn) => { modalEscape = fn; },
      });
    }).catch((err) => { console.error(err); wrap.innerHTML = '<p>Could not load this content.</p>'; });
  } else if (c?.type === 'html') {
    wrap.innerHTML = c.html;
  } else {
    wrap.innerHTML = '<p>Content for this hotspot isn’t wired up yet.</p>';
  }
  modalBody.appendChild(wrap);
  return wrap;
}

function buildTiles() {
  modalTiles.innerHTML = '';
  modalTiles.style.gridTemplateColumns = `repeat(${MODAL_GRID.cols}, 1fr)`;
  modalTiles.style.gridTemplateRows = `repeat(${MODAL_GRID.rows}, 1fr)`;
  const tiles = [];
  for (let r = 0; r < MODAL_GRID.rows; r++) {
    for (let c = 0; c < MODAL_GRID.cols; c++) {
      const t = document.createElement('span');
      modalTiles.appendChild(t);
      tiles.push({ el: t, c, r });
    }
  }
  return tiles;
}

/** Tile reveal order: distance from the point of the box nearest the origin, with a little noise. */
function tileDelays(tiles, originBoxFrac, total) {
  const ox = originBoxFrac.x * MODAL_GRID.cols, oy = originBoxFrac.y * MODAL_GRID.rows;
  const maxD = Math.hypot(MODAL_GRID.cols, MODAL_GRID.rows);
  return tiles.map(({ c, r }) => {
    const d = Math.hypot(c + 0.5 - ox, (r + 0.5 - oy) * (MODAL_GRID.cols / MODAL_GRID.rows) * 0.6);
    const noise = (Math.sin(c * 12.9898 + r * 78.233) * 43758.5453) % 1;   // deterministic jitter
    return Math.max(0, (d / maxD) * total + Math.abs(noise) * total * 0.18);
  });
}

function originFromElement(el) {
  const r = el?.getBoundingClientRect();
  if (!r || !r.width || !r.height) return { x: 0.5, y: 0.5 };   // no marker (hidden on phones): grow from the centre
  // the square the modal grows from: about the marker's size, never the whole hotspot box
  const size = Math.min(160, Math.max(48, Math.min(r.width, r.height) * 0.4));
  return { x: (r.left + r.width / 2) / window.innerWidth, y: (r.top + r.height / 2) / window.innerHeight, size };
}

function openModal(section, hotspot, fromEl) {
  if (modalIsOpen()) {
    if (modal.dataset.hotspot === hotspot.id) return;
    swapModal(section, hotspot);
    return;
  }
  modalAnim?.cancel();
  modal.dataset.hotspot = hotspot.id;
  modal.classList.toggle('modal-small', !!hotspot.small);
  modalOrigin = originFromElement(fromEl);
  $('modal-title').textContent = hotspot.title || hotspot.label;
  const content = renderContent(section, hotspot);
  modal.hidden = false;
  modal.dataset.state = 'open';
  modal.setAttribute('aria-hidden', 'false');

  // geometry: final box vs. a small square at the origin
  const box = modalBox.getBoundingClientRect();
  const startSize = Math.max(24, modalOrigin.size || 48);
  const sx = modalOrigin.x * window.innerWidth - startSize / 2;
  const sy = modalOrigin.y * window.innerHeight - startSize / 2;
  const grow = [
    { transform: `translate(${sx}px, ${sy}px)`, width: `${startSize}px`, height: `${startSize}px`, borderRadius: '0px' },
    { transform: `translate(${box.left}px, ${box.top}px)`, width: `${box.width}px`, height: `${box.height}px`, borderRadius: '0px' },
  ];
  // chunky, stepped growth reads as squares snapping bigger in sequence
  modalBox.style.left = '0'; modalBox.style.top = '0';
  const growAnim = modalBox.animate(grow, { duration: 380, easing: 'steps(9, end)', fill: 'forwards' });
  modalBackdrop.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 300, fill: 'forwards' });

  // digital dissolve on the content once the box has landed
  const tiles = buildTiles();
  const originBoxFrac = { x: Math.min(1, Math.max(0, (modalOrigin.x * window.innerWidth - box.left) / box.width)),
                          y: Math.min(1, Math.max(0, (modalOrigin.y * window.innerHeight - box.top) / box.height)) };
  const delays = tileDelays(tiles, originBoxFrac, 520);
  const GROW = 380;
  // everything is scheduled up front by delay (no finish callbacks), so the
  // sequence is deterministic even if a frame is dropped mid-way
  content.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 200, delay: GROW + 120, fill: 'forwards' });
  tiles.forEach((t, i) => t.el.animate([{ opacity: 1 }, { opacity: 1, offset: 0.5 }, { opacity: 0 }], { duration: 140, delay: GROW + delays[i], easing: 'steps(2, end)', fill: 'forwards' }));
  const token = Symbol('open');
  modal._token = token;
  // once the box has landed, hand it back to CSS so it follows window resizes
  setTimeout(() => { if (modal._token === token && modal.dataset.state === 'open') releaseModalBox(); }, GROW + 20);
  setTimeout(() => { if (modal._token === token && modal.dataset.state === 'open') modalTiles.innerHTML = ''; }, GROW + 520 + 200 + 60);
  modalAnim = growAnim;
  markActiveHint();
}

// ---------- custom scroll pill for the modal body ----------
const pill = $('scrollpill');
const pillThumb = pill.querySelector('.scrollpill-thumb');
function updatePill() {
  const sh = modalBody.scrollHeight, ch = modalBody.clientHeight;
  if (sh <= ch + 1 || modal.hidden) { pill.classList.remove('show'); return; }
  // outside the box (which clips sideways): 6px to the right of the content edge
  const b = modalBox.getBoundingClientRect(), br = modalBody.getBoundingClientRect();
  const h = br.height;
  pill.style.left = `${Math.round(b.right) + 6}px`;
  pill.style.top = `${Math.round(br.top)}px`;
  pill.style.height = `${Math.round(h)}px`;
  const thumbH = Math.max(28, (ch / sh) * h);
  const y = (modalBody.scrollTop / (sh - ch)) * (h - thumbH);
  pillThumb.style.height = `${thumbH}px`;
  pillThumb.style.transform = `translateY(${y}px)`;
  pill.classList.add('show');
}
modalBody.addEventListener('scroll', updatePill, { passive: true });
new ResizeObserver(updatePill).observe(modalBody);
new MutationObserver(() => requestAnimationFrame(updatePill)).observe(modalBody, { childList: true, subtree: true });
window.addEventListener('resize', updatePill);
// drag the pill
let pillDrag = null;
pillThumb.addEventListener('pointerdown', (e) => {
  pillDrag = { y: e.clientY, top: modalBody.scrollTop };
  pill.classList.add('dragging');
  pillThumb.setPointerCapture(e.pointerId);
  e.preventDefault();
});
pillThumb.addEventListener('pointermove', (e) => {
  if (!pillDrag) return;
  const sh = modalBody.scrollHeight, ch = modalBody.clientHeight, h = modalBody.getBoundingClientRect().height;
  const thumbH = Math.max(28, (ch / sh) * h);
  modalBody.scrollTop = pillDrag.top + ((e.clientY - pillDrag.y) / (h - thumbH)) * (sh - ch);
});
const endPillDrag = () => { pillDrag = null; pill.classList.remove('dragging'); };
pillThumb.addEventListener('pointerup', endPillDrag);
pillThumb.addEventListener('pointercancel', endPillDrag);

/** Drop the pixel geometry the grow animation left behind; CSS centring and
 *  min(…, vw/vh) sizing take over, so the open modal is responsive. */
function releaseModalBox() {
  modalBox.getAnimations().forEach((a) => a.cancel());
  modalBox.style.left = ''; modalBox.style.top = '';
}
window.addEventListener('resize', () => {
  if (!modal.hidden && modal.dataset.state === 'open') { releaseModalBox(); updatePill(); }
});

/** Modal already open: tiles close over the old content, new content resolves through them. */
function swapModal(section, hotspot) {
  modal.dataset.hotspot = hotspot.id;
  modal.classList.toggle('modal-small', !!hotspot.small);
  const tiles = buildTiles();
  const centre = { x: 0.5, y: 0.5 };
  const delays = tileDelays(tiles, centre, 260);
  const far = Math.max(...delays);
  tiles.forEach((t, i) => t.el.animate([{ opacity: 0 }, { opacity: 0, offset: 0.5 }, { opacity: 1 }], { duration: 100, delay: far - delays[i], easing: 'steps(2, end)', fill: 'forwards' }));
  const token = Symbol('swap');
  modal._token = token;
  setTimeout(() => {
    if (modal._token !== token) return;
    $('modal-title').textContent = hotspot.title || hotspot.label;
    const content = renderContent(section, hotspot);
    content.style.opacity = '1';
    modalBody.scrollTop = 0;
    const out = tileDelays(tiles, centre, 360);
    tiles.forEach((t, i) => t.el.animate([{ opacity: 1 }, { opacity: 1, offset: 0.5 }, { opacity: 0 }], { duration: 120, delay: out[i], easing: 'steps(2, end)', fill: 'forwards' }));
    setTimeout(() => { if (modal._token === token) modalTiles.innerHTML = ''; }, 360 + 120 + 40);
  }, far + 120);
  markActiveHint();
}

function closeModal() {
  if (modal.hidden || modal.dataset.state === 'closing') return;
  // Leave the open animations running: their forwards-fill is what holds the
  // box in place until the shrink begins. Everything is cancelled at cleanup.
  modal.dataset.state = 'closing';
  modal.setAttribute('aria-hidden', 'true');
  pill.classList.remove('show');
  const box = modalBox.getBoundingClientRect();
  // the box may have been handed back to CSS centring (left/top 50%); pin it to
  // the origin so the translate keyframes below describe its real position
  modalBox.getAnimations().forEach((a) => a.cancel());
  modalBox.style.left = '0'; modalBox.style.top = '0';
  modalBox.style.transform = `translate(${box.left}px, ${box.top}px)`;
  modalBox.style.width = `${box.width}px`; modalBox.style.height = `${box.height}px`;
  const content = modalBody.querySelector('.modal-content');
  const tiles = buildTiles();
  const originBoxFrac = { x: Math.min(1, Math.max(0, (modalOrigin.x * window.innerWidth - box.left) / box.width)),
                          y: Math.min(1, Math.max(0, (modalOrigin.y * window.innerHeight - box.top) / box.height)) };
  const delays = tileDelays(tiles, originBoxFrac, 320);
  // tiles come back in from the far side toward the origin, then the box shrinks home
  const far = Math.max(...delays);
  tiles.forEach((t, i) => t.el.animate([{ opacity: 0 }, { opacity: 0, offset: 0.5 }, { opacity: 1 }], { duration: 120, delay: far - delays[i], easing: 'steps(2, end)', fill: 'forwards' }));
  content?.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 160, delay: far - 60, fill: 'forwards' });
  const startSize = Math.max(24, modalOrigin.size || 48);
  const sx = modalOrigin.x * window.innerWidth - startSize / 2;
  const sy = modalOrigin.y * window.innerHeight - startSize / 2;
  const shrink = modalBox.animate([
    { transform: `translate(${box.left}px, ${box.top}px)`, width: `${box.width}px`, height: `${box.height}px`, borderRadius: '0px' },
    { transform: `translate(${sx}px, ${sy}px)`, width: `${startSize}px`, height: `${startSize}px`, borderRadius: '0px' },
  ], { duration: 300, delay: far + 80, easing: 'steps(8, end)', fill: 'both' });
  modalBackdrop.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 260, delay: far + 80, fill: 'both' });
  const token = Symbol('close');
  modal._token = token;
  setTimeout(() => {
    if (modal._token !== token) return;
    modal.hidden = true;
    modal.dataset.state = '';
    delete modal.dataset.hotspot;
    markActiveHint();
    contentCleanup?.();
    contentCleanup = null;
    modalEscape = null;
    modalBody.innerHTML = '';
    modalTiles.innerHTML = '';
    modalBox.getAnimations().forEach((a) => a.cancel());
    modalBackdrop.getAnimations().forEach((a) => a.cancel());
    modalBox.style.left = ''; modalBox.style.top = '';
    modalBox.style.transform = ''; modalBox.style.width = ''; modalBox.style.height = '';
  }, far + 80 + 300 + 30);
  modalAnim = shrink;
}
$('modal-close').addEventListener('click', closeModal);
modalBackdrop.addEventListener('click', closeModal);

// Compatibility with the rest of the file.
function openPanel(section, hotspot) {
  openModal(section, hotspot, hotspotsEl.querySelector(`.hotspot[data-id="${hotspot.id}"]`));
}
function closePanel() { closeModal(); }

// ---------- chrome ----------
function renderChrome() {
  const idx = state.sectionIdx;
  document.querySelectorAll('.tab').forEach((t, i) => t.classList.toggle('active', i === idx));
  $('prev').disabled = navTarget(-1) < 0;
  $('next').disabled = navTarget(1) >= SECTIONS.length;
  $('caption').textContent = SECTIONS[idx].caption || '';
  hotspotsEl.classList.toggle('hidden', state.mode === 'move');
  document.body.classList.toggle('playmode', state.playMode);
  renderHint();
  $('keys').hidden = !state.playMode;
  const btn = $('motion-btn');
  btn.classList.toggle('active', state.motionPaused);
  btn.setAttribute('aria-pressed', String(state.motionPaused));
  btn.title = state.motionPaused ? 'Resume motion' : 'Pause motion';
  renderHsMenu();
  $('stop-btn').hidden = !(state.playMode && compactMq.matches);
  $('hs-btn').hidden = state.playMode;
  if (state.playMode) closeHsMenu();
}

// Bottom-right hint: a short instruction plus one numbered button per hotspot
// on the current section, for anyone who doesn't spot the markers. Clicking a
// number does exactly what clicking that marker does; keys 1-9 do the same.
function visibleHotspots(section) {
  return section.hotspots.filter((h) => !(section.id === DRUMS.sectionId && !state.playMode && !ALWAYS_VISIBLE.includes(h.id)));
}
function renderHint() {
  const hint = $('hint');
  const section = SECTIONS[state.sectionIdx];
  hint.innerHTML = '';
  const text = document.createElement('span');
  if (state.playMode) {
    text.textContent = MOBILE ? 'tap the right cymbal to stop' : 'Esc or the right cymbal to stop';
    hint.appendChild(text);
    return;
  }
  text.textContent = compactMq.matches ? 'tap a number' : MOBILE ? 'tap a hotspot' : 'click a hotspot';
  hint.appendChild(text);
  visibleHotspots(section).forEach((h, i) => {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'hint-btn';
    b.textContent = String(i + 1);
    b.title = h.label;
    b.setAttribute('aria-label', `${i + 1}: ${h.label}`);
    b.dataset.id = h.id;
    b.addEventListener('click', () => { onHotspotClick(section, h); b.blur(); });
    hint.appendChild(b);
  });
  markActiveHint();
}
function markActiveHint() {
  const current = modal.hidden ? null : modal.dataset.hotspot;
  $('hint').querySelectorAll('.hint-btn').forEach((b) => b.classList.toggle('active', b.dataset.id === current));
}

// "Zone:" then one numbered button per section; the section name stays as the tooltip.
const tabsEl = $('tabs');
const zoneLabel = document.createElement('span');
zoneLabel.className = 'tabs-label';
zoneLabel.textContent = 'Zone:';
tabsEl.appendChild(zoneLabel);
SECTIONS.forEach((s, i) => {
  const b = document.createElement('button');
  b.className = 'tab';
  b.textContent = String(i + 1);
  b.title = s.label;
  b.setAttribute('aria-label', `Zone ${i + 1}: ${s.label}`);
  b.addEventListener('click', () => goTo(i));
  tabsEl.appendChild(b);
});
// Compact menu (top-right icon): what's in the current zone, one row per
// hotspot. Rebuilt by renderChrome; a row does what tapping that marker does.
const hsBtn = $('hs-btn'), hsMenu = $('hs-menu');
function renderHsMenu() {
  const section = SECTIONS[state.sectionIdx];
  hsMenu.innerHTML = '';
  visibleHotspots(section).forEach((h, i) => {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'hs-item';
    b.setAttribute('role', 'menuitem');
    const name = (h.id === DRUMS.activator || h.id === DRUMS.stopper) ? hotspotLabel(section, h) : (h.title || h.label);   // About, Portfolio, Art, Play the drums, Contact, Misc
    b.innerHTML = `<span class="hs-item__num">${i + 1}</span><span>${name}</span>`;
    b.classList.toggle('active', !modal.hidden && modal.dataset.hotspot === h.id);
    b.addEventListener('click', () => { closeHsMenu(); onHotspotClick(section, h); });
    hsMenu.appendChild(b);
  });
}
function openHsMenu() {
  if (state.playMode) return;
  renderHsMenu();
  hsMenu.hidden = false;
  hsBtn.setAttribute('aria-expanded', 'true');
}
function closeHsMenu() { hsMenu.hidden = true; hsBtn.setAttribute('aria-expanded', 'false'); }
hsBtn.addEventListener('click', (e) => { e.stopPropagation(); hsMenu.hidden ? openHsMenu() : closeHsMenu(); });
document.addEventListener('click', (e) => { if (!hsMenu.hidden && !hsMenu.contains(e.target)) closeHsMenu(); });
$('stop-btn').addEventListener('click', () => exitPlayMode());

// Help panel (question mark next to the pause button): a short welcome and a
// way out to the standard WordPress site for anyone who doesn't want the tour.
const STANDARD_SITE = 'https://dannyportal.xgroupsystems.kinsta.cloud';
const HELP = {
  id: 'help', title: '', small: true,   // no header text: the card's own heading does the job (the close button stays)
  content: { type: 'html', html: `
    <div class="help">
      <h3>Welcome to my room.</h3>
      <p>Explore around and click to learn more about me.</p>
      <p class="help-sub">If you want a standard experience,</p>
      <a class="help-cta" href="${STANDARD_SITE}" target="_blank" rel="noopener">Click here</a>
    </div>` },
};
$('help-btn').addEventListener('click', () => {
  const helpBtn = $('help-btn');
  if (modalIsOpen()) {
    if (modal.dataset.hotspot === HELP.id) { closeModal(); return; }
    closeModal();   // another panel is up: let it close, then open the welcome
    setTimeout(() => { if (!modalIsOpen()) openModal(SECTIONS[state.sectionIdx], HELP, helpBtn); }, 700);
    return;
  }
  openModal(SECTIONS[state.sectionIdx], HELP, helpBtn);
});

$('prev').addEventListener('click', () => goTo(navTarget(-1)));
$('next').addEventListener('click', () => goTo(navTarget(1)));

function toggleMotion() {
  state.motionPaused = !state.motionPaused;
  if (state.playMode) {
    if (state.motionPaused) idleVideo?.pause();
    else idleVideo?.play().catch(() => {});
  } else if (state.mode === 'hold' && !state.tracking) {
    if (state.motionPaused) video.pause();
    else video.play().catch(() => {});
  }
  renderChrome();
}
$('motion-btn').addEventListener('click', toggleMotion);

// ---------- keyboard ----------
window.addEventListener('keydown', (e) => {
  if (e.target.matches('input, textarea')) return;
  if (state.tracking) { trackKeys(e); return; }
  if (state.playMode) {
    if (e.key === 'Escape') { if (modalIsOpen()) { if (!modalEscape?.()) closePanel(); } else exitPlayMode(); e.preventDefault(); return; }
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') { goTo(navTarget(e.key === 'ArrowLeft' ? -1 : 1)); return; }
    const piece = pieceForKey(e.key);
    if (piece && !e.repeat) { hit(piece); e.preventDefault(); }
    return;
  }
  if (/^[1-9]$/.test(e.key) && state.mode === 'hold') {
    const section = SECTIONS[state.sectionIdx];
    const h = visibleHotspots(section)[parseInt(e.key, 10) - 1];
    if (h) onHotspotClick(section, h);
    return;
  }
  switch (e.key) {
    case 'ArrowLeft': goTo(navTarget(-1)); break;
    case 'ArrowRight': goTo(navTarget(1)); break;
    case 'Escape': if (!(modalIsOpen() && modalEscape?.())) closePanel(); break;
    case ' ': toggleMotion(); e.preventDefault(); break;
    case 't': case 'T': if (DEV) enterTracking(); break;
  }
});

// ---------- swipe (touch) ----------
let swipe = null;
stage.addEventListener('pointerdown', (ev) => {
  if (!MOBILE || state.tracking || ev.pointerType === 'mouse') return;
  swipe = { x: ev.clientX, y: ev.clientY, t: performance.now() };
});
stage.addEventListener('pointerup', (ev) => {
  if (!swipe) return;
  const dx = ev.clientX - swipe.x, dy = ev.clientY - swipe.y, dt = performance.now() - swipe.t;
  swipe = null;
  if (dt > 800 || Math.abs(dx) < 60 || Math.abs(dx) < Math.abs(dy) * 1.5) return;
  goTo(navTarget(dx < 0 ? 1 : -1));
});
stage.addEventListener('pointercancel', () => { swipe = null; });

// ---------- visibility ----------
document.addEventListener('visibilitychange', () => {
  if (document.hidden) { video.pause(); idleVideo?.pause(); return; }
  if (state.tracking) return;
  if (state.playMode) exitPlayMode({ resume: false });
  enterHold(state.targetIdx, { dissolve: true });
});

// ---------- playable drums ----------
// Enter: freeze the hold on its first frame (the frame every clip starts on) and
// loop the idle clip over it. Hits play a per-piece clip on its own overlay video.
const idleVideo = DRUMS.idle ? (() => {
  const v = document.createElement('video');
  v.className = 'overlay idle';
  v.src = DRUMS.idle;
  v.loop = true; v.muted = true; v.playsInline = true; v.preload = 'auto';
  overlaysEl.appendChild(v);
  return v;
})() : null;

// Hit clips sit BELOW the piece canvases and impact rings (see .overlay.hit /
// .piece / .impact z-indexes), so a playing snare clip never hides the other
// pieces' animations.
const hitVideos = {};
for (const [id, piece] of Object.entries(DRUMS.pieces)) {
  if (!piece.clip) continue;
  const v = document.createElement('video');
  v.className = 'overlay hit';
  v.src = piece.clip;
  v.muted = true; v.playsInline = true; v.preload = 'auto';
  v.addEventListener('ended', () => v.classList.remove('show'));
  overlaysEl.appendChild(v);
  hitVideos[id] = v;
}

function drumsSection() {
  return SECTIONS[state.sectionIdx].id === DRUMS.sectionId ? SECTIONS[state.sectionIdx] : null;
}

function hotspotLabel(section, h) {
  if (section.id !== DRUMS.sectionId) return h.label;
  if (h.id === DRUMS.stopper) return 'Stop';
  if (h.id === DRUMS.activator && !state.playMode) return 'Play the drums';
  const piece = DRUMS.pieces[h.id];
  return state.playMode && piece ? `${piece.keyLabel} · ${h.label}` : h.label;
}

function onHotspotClick(section, h) {
  if (section.id === DRUMS.sectionId) {
    if (state.playMode) {   // playing: the far-right cymbal stops, every piece (snare included) is a hit, nothing opens
      if (h.id === DRUMS.stopper) exitPlayMode();
      else if (DRUMS.pieces[h.id]) hit(h.id);
      return;
    }
    if (h.id === DRUMS.activator) { enterPlayMode(); return; }
    if (h.id === DRUMS.modal) { openPanel(section, h); return; }
  }
  openPanel(section, h);
}

function enterPlayMode() {
  const section = drumsSection();
  if (!section || state.mode !== 'hold' || state.playMode) return;
  state.playMode = true;
  loadSounds(DRUMS.pieces).catch(() => {});   // first user gesture: safe to create the AudioContext
  freezeFrame();
  video.pause();
  seekTo(clip(section.hold.fwd).start);
  if (idleVideo) {
    idleVideo.currentTime = 0;
    idleVideo.classList.add('show');
    if (!state.motionPaused) idleVideo.play().catch(() => {});
  }
  buildPieceLayers(section);
  video.addEventListener('seeked', drawPieceLayers, { once: true });
  renderChrome();
  buildHotspots(section);
}

function exitPlayMode({ resume = true } = {}) {
  if (!state.playMode) return;
  state.playMode = false;
  idleVideo?.classList.remove('show');
  idleVideo?.pause();
  clearPieceLayers();
  for (const v of Object.values(hitVideos)) { v.classList.remove('show'); v.pause(); }
  if (resume) enterHold(state.sectionIdx, { dissolve: true });
  else renderChrome();
}

function hit(id) {
  const piece = DRUMS.pieces[id];
  if (!piece) return;
  playSound(id);
  const v = hitVideos[id];
  if (v) {
    if (!v.seeking) v.currentTime = 0;   // a seek already in flight lands on 0 anyway
    v.classList.add('show');
    v.play().catch(() => {});
  } else if (piece.effect) {
    vibrate(id, piece.effect);
  }
  impactRing(id);
  const dot = hotspotsEl.querySelector(`.hotspot[data-id="${id}"] .dot`);
  if (dot) restart(dot, FX.dot, { duration: 260, easing: 'ease-out' });
  const cap = keysEl.querySelector(`.keycap[data-id="${id}"]`);
  if (cap) restart(cap, FX.keycap, { duration: 220, easing: 'ease-out' });
}

// One Animation per element, created on the first hit and rewound on every
// later one. Rewinding is far cheaper than cancelling and creating a new
// Animation per hit (which stalled the compositor under fast rolls), and it
// still restarts reliably when several hits land in the same frame.
const running = new WeakMap();   // el -> { keyframes, anim }
function restart(el, keyframes, options) {
  let r = running.get(el);
  if (!r || r.keyframes !== keyframes) {
    r = { keyframes, anim: el.animate(keyframes, options) };
    running.set(el, r);
  } else {
    r.anim.currentTime = 0;
    r.anim.play();
  }
  return r.anim;
}

const FX = {
  cymbal: [
    { transform: 'perspective(500px) rotateX(0deg) rotate(0deg)', opacity: 1, offset: 0 },
    { transform: 'perspective(500px) rotateX(12deg) rotate(2.5deg) translateY(1.5%)', offset: 0.10 },
    { transform: 'perspective(500px) rotateX(-8deg) rotate(-2deg) translateY(-0.5%)', offset: 0.28 },
    { transform: 'perspective(500px) rotateX(5deg) rotate(1.2deg)', offset: 0.46 },
    { transform: 'perspective(500px) rotateX(-3deg) rotate(-0.7deg)', offset: 0.64 },
    { transform: 'perspective(500px) rotateX(1.5deg) rotate(0.3deg)', offset: 0.82 },
    { transform: 'perspective(500px) rotateX(0deg) rotate(0deg)', opacity: 1, offset: 1 },
  ],
  drum: [
    { transform: 'scale(1)', opacity: 1, offset: 0 },
    { transform: 'scale(1.05, 0.965) translateY(1.5%)', offset: 0.18 },
    { transform: 'scale(0.98, 1.02) translateY(-0.5%)', offset: 0.42 },
    { transform: 'scale(1.015, 0.99)', offset: 0.66 },
    { transform: 'scale(1)', opacity: 1, offset: 1 },
  ],
  kick: [
    { transform: 'scale(1)', opacity: 1, offset: 0 },
    { transform: 'scale(1.06)', offset: 0.2 },
    { transform: 'scale(0.975)', offset: 0.48 },
    { transform: 'scale(1.015)', offset: 0.72 },
    { transform: 'scale(1)', opacity: 1, offset: 1 },
  ],
  ring: [
    { transform: 'translate(-50%, -50%) scale(0.35)', opacity: 0.95 },
    { transform: 'translate(-50%, -50%) scale(1.35)', opacity: 0 },
  ],
  dot: [
    { transform: 'scale(1) rotate(0deg)' },
    { transform: 'scale(1.8) rotate(45deg)', offset: 0.4 },
    { transform: 'scale(1) rotate(90deg)' },
  ],
  keycap: [
    { transform: 'translateY(2px)', background: 'rgba(195, 255, 61,0.35)', borderColor: '#c3ff3d', borderBottomWidth: '1px' },
    { transform: 'translateY(0)', background: 'rgba(10,16,32,0.28)', borderColor: 'rgba(255,255,255,0.35)', borderBottomWidth: '3px' },
  ],
};
const FX_TIMING = {
  cymbal: { duration: 700, easing: 'cubic-bezier(0.2, 0.7, 0.3, 1)' },
  drum: { duration: 340, easing: 'ease-out' },
  kick: { duration: 320, easing: 'ease-out' },
};

// ---------- code-driven hit effects ----------
// In play mode the main video sits frozen on the hold's first frame. For each
// piece we copy its patch of that frame onto a canvas placed exactly over it
// (invisible at rest) and animate the canvas on a hit. Boxes come from the
// hotspot track's first keyframe, which is that same frame.
const pieceLayers = {};   // id -> { canvas, box }
const pctx = {};

function pieceBox(section, id) {
  const h = section.hotspots.find((x) => x.id === id);
  const track = h ? trackFor(section, h) : [];
  return track.length ? track[0] : null;
}

function buildPieceLayers(section) {
  clearPieceLayers();
  for (const [id, piece] of Object.entries(DRUMS.pieces)) {
    if (!piece.effect || piece.clip) continue;
    const box = pieceBox(section, id);
    if (!box) continue;
    const c = document.createElement('canvas');
    c.className = `piece piece-${piece.effect}`;
    c.dataset.id = id;
    // a little margin so the feathered mask has room and the wobble never clips
    const pad = piece.effect === 'cymbal' ? 1.35 : 1.2;
    const w = box.w * pad, hgt = box.h * pad;
    Object.assign(c.style, { left: `${box.x - w / 2}%`, top: `${box.y - hgt / 2}%`, width: `${w}%`, height: `${hgt}%` });
    overlaysEl.appendChild(c);
    pieceLayers[id] = { canvas: c, box: { x: box.x, y: box.y, w, h: hgt } };
  }
  drawPieceLayers();
}

function drawPieceLayers() {
  if (!video.videoWidth) return;
  const VW = video.videoWidth, VH = video.videoHeight;
  for (const { canvas, box } of Object.values(pieceLayers)) {
    const sx = (box.x - box.w / 2) / 100 * VW, sy = (box.y - box.h / 2) / 100 * VH;
    const sw = box.w / 100 * VW, sh = box.h / 100 * VH;
    canvas.width = Math.round(sw);
    canvas.height = Math.round(sh);
    const g = canvas.getContext('2d');
    g.drawImage(video, sx, sy, sw, sh, 0, 0, canvas.width, canvas.height);
    // feather the edge into the alpha channel: opaque to 52% of the radius, clear by 72%
    const cx = canvas.width / 2, cy = canvas.height / 2;
    g.save();
    g.globalCompositeOperation = 'destination-in';
    g.translate(cx, cy);
    g.scale(1, canvas.height / canvas.width);   // elliptical, like the old radial-gradient mask
    const grad = g.createRadialGradient(0, 0, 0, 0, 0, cx);
    grad.addColorStop(0.52, 'rgba(0,0,0,1)');
    grad.addColorStop(0.72, 'rgba(0,0,0,0)');
    g.fillStyle = grad;
    g.fillRect(-cx, -cx, canvas.width, canvas.width);
    g.restore();
  }
}

function clearPieceLayers() {
  for (const { canvas } of Object.values(pieceLayers)) canvas.remove();
  for (const k of Object.keys(pieceLayers)) delete pieceLayers[k];
  for (const r of rings) r.remove();
  rings.length = 0; ringNext = 0;
}

function vibrate(id, effect) {
  const layer = pieceLayers[id];
  if (!layer || !FX[effect]) return;
  const c = layer.canvas;
  if (c.width === 0) drawPieceLayers();
  c.style.opacity = '1';
  const a = restart(c, FX[effect], FX_TIMING[effect]);
  if (!a.onfinish) a.onfinish = () => { c.style.opacity = '0'; };
}

// Impact rings come from a small pool that is reused round-robin: no element is
// created or removed per hit, and each ring keeps one Animation that is rewound.
const RING_POOL = 6;
const rings = [];
let ringNext = 0;
function impactRing(id) {
  const section = SECTIONS[state.sectionIdx];
  const box = pieceBox(section, id);
  if (!box) return;
  if (rings.length < RING_POOL) {
    const el = document.createElement('div');
    el.className = 'impact';
    overlaysEl.appendChild(el);
    rings.push(el);
  }
  const ring = rings[ringNext];
  ringNext = (ringNext + 1) % RING_POOL;
  const size = Math.min(box.w, box.h * (16 / 9)) * 0.5;    // % of stage width; keeps the ring inside the piece
  Object.assign(ring.style, { left: `${box.x}%`, top: `${box.y}%`, width: `${size}%` });
  restart(ring, FX.ring, { duration: 360, easing: 'ease-out' });
}

// ---------- on-screen keycaps ----------
const keysEl = $('keys');
(function buildKeycaps() {
  const section = SECTIONS.find((s) => s.id === DRUMS.sectionId);
  KEY_ROWS.forEach((row, r) => {
    const rowEl = document.createElement('div');
    rowEl.className = 'keyrow';
    rowEl.style.setProperty('--stagger', String(r));
    for (const key of row) {
      const id = pieceForKey(key);
      const piece = id ? DRUMS.pieces[id] : null;
      const h = id ? section.hotspots.find((x) => x.id === id) : null;
      const cap = document.createElement('button');
      cap.type = 'button';
      cap.className = 'keycap';
      if (id) cap.dataset.id = id;
      cap.innerHTML = `<span class="keycap-key">${piece ? piece.keyLabel : key.toUpperCase()}</span><span class="keycap-name">${h ? h.label : ''}</span>`;
      cap.addEventListener('click', () => { if (id) hit(id); cap.blur(); });
      rowEl.appendChild(cap);
    }
    keysEl.appendChild(rowEl);
  });
})();

// ---------- rAF loop ----------
function frame() {
  // DevTools device mode and some phone browsers change the viewport without a
  // resize event we can rely on, so re-fit whenever the size differs from the last fit
  if (window.innerWidth !== fitted.w || window.innerHeight !== fitted.h) fitStage();
  checkBoundary();
  easeFocus();
  updateHotspots();
  if (state.tracking) updateTrackHud();
  requestAnimationFrame(frame);
}

// ---------- track mode (dev tool for keyframing hotspots by hand) ----------
// Generated tracks live in tracks.js. This mode is for spot-fixing: drag boxes
// at a few times, press E, and paste the JSON as an inline `track` on the hotspot.
const trackhud = $('trackhud');
const trackbox = $('trackbox');
let drag = null;

function enterTracking() {
  if (state.mode === 'move') return;
  state.tracking = true;
  document.body.classList.add('tracking');
  trackhud.hidden = false;
  video.pause();
  video.playbackRate = 1;
  pickHotspot(0);
  console.info('[track] mode on. Drag a box over the object at several times; E exports keyframes.');
}
function exitTracking() {
  state.tracking = false;
  document.body.classList.remove('tracking');
  trackhud.hidden = true;
  trackbox.hidden = true;
  enterHold(state.sectionIdx, { dissolve: true });
}
function pickHotspot(i) {
  const section = SECTIONS[state.sectionIdx];
  if (i < 0 || i >= section.hotspots.length) return;
  state.pickedHotspot = i;
  state.hotspotEls.forEach((el, j) => el.classList.toggle('picked', j === i));
  updateTrackHud();
}
function stepTo(t) {
  const max = video.duration || Infinity;
  const snapped = Math.round(Math.max(0, Math.min(max - 1 / OUT_FPS, t)) * OUT_FPS) / OUT_FPS;
  seekTo(snapped + 0.001); // nudge past the frame boundary so the decoder lands on this frame
}
function currentSourceTime() {
  return Math.round(toSourceTime(video.currentTime) * 1000) / 1000;
}
function ensureInlineTrack(section, hot) {
  if (!hot.track) hot.track = trackFor(section, hot).map((k) => ({ ...k }));
  return hot.track;
}
function trackKeys(e) {
  const section = SECTIONS[state.sectionIdx];
  const hot = section.hotspots[state.pickedHotspot];
  switch (e.key) {
    case 't': case 'T': case 'Escape': exitTracking(); break;
    case ',': stepTo(video.currentTime - 1 / OUT_FPS); break;
    case '.': stepTo(video.currentTime + 1 / OUT_FPS); break;
    case '[': stepTo(video.currentTime - 0.5); break;
    case ']': stepTo(video.currentTime + 0.5); break;
    case 'Backspace': {
      if (!hot) break;
      const t = currentSourceTime();
      const track = ensureInlineTrack(section, hot);
      const n = track.length;
      hot.track = track.filter((k) => Math.abs(k.t - t) > 0.03);
      console.info(`[track] removed ${n - hot.track.length} keyframe(s) at ${t}s on ${hot.id}`);
      break;
    }
    case 'e': case 'E': exportTracks(section); break;
    default:
      if (/^[1-9]$/.test(e.key)) pickHotspot(parseInt(e.key, 10) - 1);
      return;
  }
  e.preventDefault();
}
function stagePercent(ev) {
  const r = stage.getBoundingClientRect();
  return { x: ((ev.clientX - r.left) / r.width) * 100, y: ((ev.clientY - r.top) / r.height) * 100 };
}
stage.addEventListener('pointerdown', (ev) => {
  if (!state.tracking) return;
  drag = { a: stagePercent(ev) };
  trackbox.hidden = false;
  stage.setPointerCapture(ev.pointerId);
  ev.preventDefault();
});
stage.addEventListener('pointermove', (ev) => {
  if (!drag) return;
  drag.b = stagePercent(ev);
  const x = Math.min(drag.a.x, drag.b.x), y = Math.min(drag.a.y, drag.b.y);
  const w = Math.abs(drag.a.x - drag.b.x), h = Math.abs(drag.a.y - drag.b.y);
  Object.assign(trackbox.style, { left: `${x}%`, top: `${y}%`, width: `${w}%`, height: `${h}%` });
});
stage.addEventListener('pointerup', () => {
  if (!drag) return;
  const { a, b } = drag;
  drag = null;
  trackbox.hidden = true;
  if (!b || Math.abs(a.x - b.x) < 1 || Math.abs(a.y - b.y) < 1) return; // a click, not a drag
  const section = SECTIONS[state.sectionIdx];
  const hot = section.hotspots[state.pickedHotspot];
  if (!hot) return;
  const r = (v) => Math.round(v * 10) / 10;
  const kf = { t: currentSourceTime(), x: r((a.x + b.x) / 2), y: r((a.y + b.y) / 2), w: r(Math.abs(a.x - b.x)), h: r(Math.abs(a.y - b.y)) };
  const track = ensureInlineTrack(section, hot);
  hot.track = track.filter((k) => Math.abs(k.t - kf.t) > 0.03).concat(kf).sort((p, q) => p.t - q.t);
  console.info(`[track] ${hot.id} @ ${kf.t}s`, kf);
  updateHotspots();
});
function updateTrackHud() {
  $('th-src').textContent = toSourceTime(video.currentTime).toFixed(3);
  $('th-tour').textContent = video.currentTime.toFixed(3);
  $('th-seg').textContent = state.clip ? state.clip.name : '–';
  const section = SECTIONS[state.sectionIdx];
  const hot = section.hotspots[state.pickedHotspot];
  $('th-hot').textContent = hot ? `${state.pickedHotspot + 1}: ${hot.id} (${trackFor(section, hot).length} kf${hot.track ? ', edited' : ''})` : '–';
}
function exportTracks(section) {
  const out = section.hotspots.map((h) => ({ id: h.id, track: trackFor(section, h) }));
  const json = JSON.stringify(out, null, 2);
  console.info(`[track] ${section.id} hotspots:\n${json}`);
  navigator.clipboard?.writeText(json).then(
    () => console.info('[track] copied to clipboard'),
    () => {},
  );
}

// ---------- boot: fetch footage as a blob so seeking never depends on the server ----------
async function loadFootage() {
  const fill = $('loader-fill'), text = $('loader-text');
  const res = await fetch(FOOTAGE);
  if (!res.ok) throw new Error(`Footage fetch failed: ${res.status}`);
  const total = Number(res.headers.get('content-length')) || 0;
  const reader = res.body.getReader();
  const chunks = [];
  let got = 0;
  for (;;) {
    const { done, value } = await reader.read();
    if (done) break;
    chunks.push(value);
    got += value.length;
    if (total) {
      fill.style.width = `${(got / total) * 100}%`;
      text.textContent = `${(got / 1048576).toFixed(1)} / ${(total / 1048576).toFixed(1)} MB`;
    } else {
      text.textContent = `${(got / 1048576).toFixed(1)} MB`;
    }
  }
  const blob = new Blob(chunks, { type: 'video/mp4' });
  return URL.createObjectURL(blob);
}

async function boot() {
  try {
    const url = await loadFootage();
    video.src = url;
    video.load();
    video.play().catch(() => {}); // kicks off decoding even in a background tab, where preload is deferred
    await new Promise((resolve, reject) => {
      video.addEventListener('loadedmetadata', resolve, { once: true });
      video.addEventListener('error', () => reject(new Error('Video failed to decode')), { once: true });
    });
    const startIdx = Math.max(0, sectionIndex(location.hash.slice(1)));
    state.autoMenu = true;   // compact: open the zone menu on the first zone too, not only after a switch
    enterHold(startIdx, { dissolve: false });
    requestAnimationFrame(frame);
    fitStage();   // the viewport can change while the footage loads (phones, simulators)
    $('loader').classList.add('done');
  } catch (err) {
    $('loader-text').textContent = err.message;
    console.error(err);
  }
}
boot();

// expose for console poking
window.tour = { state, PLAYBACK, goTo, SECTIONS, video, enterPlayMode, exitPlayMode, hit, openPanel, closePanel, setFocusTarget, focus, stageSize, enterHold, buildHotspots, updatePill };
