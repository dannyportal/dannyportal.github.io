// Playable drums: which hotspot activates play mode, key bindings, hit clips, sounds.
//
// Clips come from Higgsfield (see higgsfield/SHOT-LIST.md), trimmed by trim-hits.py
// and copied into footage/drums/. Every clip starts and ends on the hold's first
// frame, so they can be cut in over the frozen hold with no visible jump.
//
// sound: null -> a synthesized placeholder (sounds.js). Set a path like
// 'sounds/snare.wav' to use a recording instead.
//
// effect: how a hit is shown when there is no clip. The piece's patch of the
// frozen frame is copied onto a canvas over it and animated:
//   'cymbal' -> decaying tilt/wobble      'drum' -> quick head ripple
//   'kick'   -> shell pulse               null   -> clip only
// Every hit also gets an impact ring. A piece with a clip plays the clip instead.

export const DRUMS = {
  sectionId: 'drums',
  activator: 'floortom',   // click this hotspot to START play mode (it is a normal drum once playing)
  stopper: 'crash2',       // the far-right cymbal (not a playable piece): shown only while playing, click to STOP
  modal: 'snare',          // click this hotspot to open the content panel
  // Ambient clip looped over the frozen frame in play mode. null = fully static:
  // nothing moves unless it is hit. (footage/drums/idle.mp4 exists but its
  // hi-hat shimmer read as a wobble, so it is off.)
  idle: null,
  // Left-hand layout: WASD are the four main pieces, QE and FR the rest.
  pieces: {
    hihat:    { key: 'a', keyLabel: 'A', clip: null, effect: 'cymbal', sound: null },
    snare:    { key: 's', keyLabel: 'S', clip: 'footage/drums/hit-snare.mp4', effect: null, sound: null },
    floortom: { key: 'd', keyLabel: 'D', clip: null, effect: 'drum',   sound: null },
    kick:     { key: 'w', keyLabel: 'W', clip: null, effect: 'kick',   sound: null },
    crash:    { key: 'q', keyLabel: 'Q', clip: null, effect: 'cymbal', sound: null },
    ride:     { key: 'e', keyLabel: 'E', clip: null, effect: 'cymbal', sound: null },
    tom:      { key: 'f', keyLabel: 'F', clip: null, effect: 'drum',   sound: null },
    // Generated clips for hihat/floortom/kick/tom are still in footage/drums/ but
    // show hands or misfire; set `clip:` on a piece to use one instead of its effect.
  },
};

// On-screen keycap layout (bottom right in play mode), by key.
export const KEY_ROWS = [
  ['q', 'w', 'e'],
  ['a', 's', 'd', 'f'],
];

/** Hotspots shown on the drums outside play mode. The rest appear in play mode. */
export const ALWAYS_VISIBLE = [DRUMS.activator, DRUMS.modal];

export function pieceForKey(key) {
  const k = key.length === 1 ? key.toLowerCase() : key;
  return Object.keys(DRUMS.pieces).find((id) => DRUMS.pieces[id].key === k) || null;
}
