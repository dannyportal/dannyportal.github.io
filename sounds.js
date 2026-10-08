// Drum sounds. Plays a recorded file when one is configured, otherwise a small
// Web Audio synth stands in. The AudioContext is created lazily on the first
// user gesture (browsers block audio before one).

let ctx = null;
const buffers = new Map();   // piece id -> AudioBuffer
let noiseBuffer = null;

function audio() {
  if (!ctx) ctx = new (window.AudioContext || window.webkitAudioContext)();
  if (ctx.state === 'suspended') ctx.resume();
  return ctx;
}

function noise() {
  if (noiseBuffer) return noiseBuffer;
  const c = audio();
  noiseBuffer = c.createBuffer(1, c.sampleRate, c.sampleRate);
  const d = noiseBuffer.getChannelData(0);
  for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
  return noiseBuffer;
}

/** Preload any recorded sounds. pieces = { id: { sound: 'path' | null } } */
export async function loadSounds(pieces) {
  const c = audio();
  await Promise.all(Object.entries(pieces).map(async ([id, p]) => {
    if (!p.sound) return;
    try {
      const res = await fetch(p.sound);
      buffers.set(id, await c.decodeAudioData(await res.arrayBuffer()));
    } catch (err) {
      console.warn(`[sounds] ${id}: could not load ${p.sound}, using synth`, err);
    }
  }));
}

export function playSound(id) {
  const c = audio();
  const t = c.currentTime;
  const buf = buffers.get(id);
  if (buf) {
    const s = c.createBufferSource();
    s.buffer = buf;
    s.connect(c.destination);
    s.start(t);
    return;
  }
  (SYNTH[id] || SYNTH.tom)(c, t);
}

// ---- placeholder synths ----

function env(c, t, peak, decay) {
  const g = c.createGain();
  g.gain.setValueAtTime(peak, t);
  g.gain.exponentialRampToValueAtTime(0.001, t + decay);
  g.connect(c.destination);
  return g;
}

function thump(c, t, from, to, decay, peak = 0.9) {
  const o = c.createOscillator();
  o.type = 'sine';
  o.frequency.setValueAtTime(from, t);
  o.frequency.exponentialRampToValueAtTime(to, t + decay * 0.6);
  o.connect(env(c, t, peak, decay));
  o.start(t);
  o.stop(t + decay);
}

function hiss(c, t, filterType, freq, q, decay, peak = 0.5) {
  const s = c.createBufferSource();
  s.buffer = noise();
  const f = c.createBiquadFilter();
  f.type = filterType;
  f.frequency.value = freq;
  f.Q.value = q;
  s.connect(f);
  f.connect(env(c, t, peak, decay));
  s.start(t);
  s.stop(t + decay);
}

const SYNTH = {
  kick(c, t) { thump(c, t, 150, 40, 0.35, 1.0); hiss(c, t, 'lowpass', 400, 1, 0.03, 0.4); },
  snare(c, t) { thump(c, t, 220, 150, 0.12, 0.5); hiss(c, t, 'bandpass', 1800, 0.8, 0.2, 0.7); hiss(c, t, 'highpass', 4000, 1, 0.15, 0.3); },
  hihat(c, t) { hiss(c, t, 'highpass', 8000, 1, 0.08, 0.5); },
  tom(c, t) { thump(c, t, 200, 120, 0.4, 0.8); },
  floortom(c, t) { thump(c, t, 120, 70, 0.55, 0.9); },
  crash(c, t) { hiss(c, t, 'bandpass', 5000, 0.4, 1.2, 0.5); hiss(c, t, 'highpass', 9000, 1, 0.6, 0.3); },
  crash2(c, t) { hiss(c, t, 'bandpass', 4200, 0.4, 1.4, 0.5); hiss(c, t, 'highpass', 8000, 1, 0.7, 0.3); },
  ride(c, t) { hiss(c, t, 'bandpass', 6500, 2.5, 0.5, 0.35); hiss(c, t, 'highpass', 10000, 1, 0.12, 0.3); },
};
