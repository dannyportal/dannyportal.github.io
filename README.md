# Interactive Desk Tour

A single-page portfolio site built on one piece of footage. The video is cut into shots: three "hold" shots (desk, drums, 3D printer) that loop while you're on a section, and camera moves that play once when you switch sections. Each section has clickable hotspots that follow the object they sit on and open a content panel.

## Files

- `index.html`, `styles.css`, `app.js` — the site
- `shots.js` — the shot map: timeline, playback settings, sections, hotspots, moves. Edit this to retime things, not app.js.
- `tracks.js` — generated hotspot motion tracks (do not hand-edit; rerun `track-hotspots.py`)
- `track-hotspots.py` — generates `tracks.js` by tracking the camera drift in each hold with OpenCV
- `build-footage.sh` — builds `footage/tour.mp4` with ffmpeg
- `footage/source.mp4` — original footage (26s, 1920×1080, 16 fps)
- `footage/tour.mp4` — what the site plays (see below)
- `frames/` — contact sheets and check renders used to find cut points and verify tracks
- `serve.bat` — local server on http://localhost:4880

## Shot map

Timestamps in seconds, measured from `source.mp4`.

Holds (loop):
- Desk: 1.0–3.0
- Drums: 10.0–14.0
- Printer: 20.0–23.0

Moves (play once):
- Desk → Drums: 7.0–9.25 (whip pan)
- Drums → Printer: 16.75–18.5 (whip pan)
- Drums → Desk and Printer → Drums: the same two whips played in reverse
- Desk ↔ Printer: both whips chained at 1.8× with no drums hold between them

## How tour.mp4 is built

The footage only travels desk → drums → printer, and its 16 fps makes the handheld drift look steppy. `build-footage.sh` rebuilds the file as a sequence of segments (the `TIMELINE` table, mirrored in `shots.js`): each hold forward, then the same hold reversed, with the whip pans in between. Holds are motion-interpolated to 48 fps (ffmpeg `minterpolate`); moves are just frame-duplicated to 48 fps because interpolating a whip pan only smears it.

The site plays holds at half speed (`PLAYBACK.holdSpeed` in `shots.js`), which at 48 fps is still smooth. That is what keeps the hotspots easy to click. Ping-pong (2026-10-08): the forward-to-reverse turn does NOT seek, because the reversed half follows the forward half contiguously in tour.mp4; playback just rolls into it. Only the reverse-to-forward turn seeks, and it is covered by a freeze-frame dissolve between two identical frames. Before this, both turns seeked and phones showed a stall and a jump at every turn.

Keep the two `TIMELINE` tables identical and the bounds on 1/16 s multiples. Rebuild with `bash build-footage.sh` (about 5 minutes; `CRF=24 bash build-footage.sh` for a smaller file).

## How playback works

- One `<video>` element. Every section change freezes the current frame on a canvas and dissolves it over 0.6s while the video seeks.
- Holds ping-pong: play the hold forward, then its reversed copy, so the loop seam is the same frame twice and needs no dissolve. `PLAYBACK.pingPong = false` loops with a dissolve instead.
- The file is fetched as a blob and played from an object URL, so seeking works no matter what the server supports.
- Shot boundaries are checked every animation frame and on `timeupdate`. The video pauses when the tab is hidden and re-enters the current hold when visible.
- Seeks are guarded: boundary checks are skipped until `seeked` fires (1.5s timeout).

## Visitor controls

- Side arrows, header tabs, ← / → keys to change section
- Pause/resume motion button (top right) or the space bar, for anyone who finds the drift uncomfortable
- Esc closes the content panel (or leaves drum play mode)
- Bottom-right hint: "click a hotspot" plus one numbered button per hotspot on the current section; a button does what clicking that marker does, and keys 1-9 do the same. Clicking another number while a modal is open swaps its content through the tile dissolve.
- Hotspot markers are four-point stars with two expanding pulse rings (`.hotspot .star`, `.hotspot .dot::before/::after` in styles.css)
- UI and hotspots fade out during moves
- `#drums` or `#printer` in the URL starts on that section

Speed, ping-pong and the like are deliberately not exposed to visitors; they live in `PLAYBACK` in `shots.js`.

## Playable drums

On the drums section, clicking the floor tom ("Play the drums") enters play mode:

- The hold dissolves to its first frame and freezes. Every generated clip starts and ends on that exact frame, so clips can be cut in with no visible jump.
- Nothing else moves. (`footage/drums/idle.mp4` can be looped on top by setting `idle` in `drums.js`, but its hi-hat shimmer read as a wobble, so it's off.)
- Keys trigger hits. The snare plays its generated clip on an overlay video. Every other piece is animated in code: its patch of the frozen frame is copied onto a canvas over it and shaken (cymbals tilt and wobble, drum heads ripple, the kick shell pulses), with an expanding impact ring on top. The sound fires at the same time. Layering: hit clips (`.overlay.hit`) are z 5, piece canvases z 20, impact rings z 21 inside the overlays stacking context, so a playing snare clip never hides the other pieces' animations (it used to be pushed on top on every hit, which froze the rest of the kit while it played). Performance (2026-10-08, after fast floor-tom rolls stalled the animations): each element keeps ONE Web Animation that is rewound per hit (`restart()`), impact rings come from a 6-element pool, the feathered edge is baked into each piece canvas's alpha instead of a CSS mask, and `updateHotspots()` skips frames where the footage time has not changed. Set `clip:` on a piece in `drums.js` to use a generated clip instead of the effect.
- Clicking a drum hotspot in play mode is the same as pressing its key (the snare included; the Art panel only opens outside play mode). The floor tom starts play mode (`DRUMS.activator`) and is a normal drum once playing; the far-right cymbal (`crash2`, `DRUMS.stopper`, not a playable piece) appears only while playing and stops it, as does Esc. In the compact layout a Stop button also appears in the top bar. Play mode is static: the footage is paused on the hold's first frame (the `seeked` handler pauses it in play mode) and `checkBoundary` is off, so nothing loops underneath. The freeze canvas must NOT stay up in play mode: it sits above the hit overlays and would hide the snare clip and the ripples.
- Config lives in `drums.js`: activator, modal hotspot, key map, clip paths, sound files. `sounds.js` synthesizes placeholder kick/snare/hi-hat/tom/cymbal sounds with Web Audio; set `sound: 'sounds/snare.wav'` on a piece to use a recording instead.

Keys: A hi-hat · S snare · D floor tom · W kick · Q crash · E ride · F tom · Esc stop. On touch devices (`body.mobile`) the keycaps are round pads labelled with the drum name instead of a letter. In play mode the keys are drawn as translucent keycaps bottom-right (`KEY_ROWS` in `drums.js`); clicking a keycap also hits.

Outside play mode only the snare and the floor tom show hotspots (`ALWAYS_VISIBLE` in `drums.js`). The other pieces appear once you're playing.

Clips so far: tom (no arms, good), plus snare, kick, hi-hat, floor tom from the first batch, which show arms and should be replaced with the v2 no-arms prompt. Still to generate: crash, ride, crash 2. Higgsfield credits are used up; the Firefly route is in `higgsfield/SHOT-LIST.md`. See `higgsfield/SHOT-LIST.md` for prompts; run `python -I check-clip.py <clip>` to verify the camera lock and `python -I trim-hits.py` to cut the lead-in before copying into `footage/drums/`.

## Phones and narrow screens

The stage is always a 16:9 box covering the viewport, so a portrait phone sees a slice of it. Each section has a `focus` point in `shots.js` (percent of the frame); `layoutStage()` in `app.js` keeps that point at the centre of the viewport, clamped so the footage always covers the screen, and eases toward the next section's focus during a move so the crop pans with the camera. On landscape screens the box matches the viewport and focus has no effect.

Also on touch: swipe left/right changes section and the hint text changes to tap wording. Compact layout (2026-10-08) is keyed to the viewport WIDTH, not the device, and follows it live: at 640px and under `applyCompact()` in app.js adds `body.compact` (a `matchMedia` change listener, no reload needed). Compact = hotspot markers hidden and the numbered buttons in the bottom bar open the content (the modal grows from the centre); the zone buttons move into the bottom bar in place of the hint (DOM move, reversed when widening) and the menu icon top-right (`#hs-btn` / `#hs-menu`) drops down the current zone's hotspots, opening by itself when the site loads and whenever a zone change lands; the pause button is moved into the bottom bar; the modal is full-screen but starts under the top bar (`body.compact .modal-box`). `body.mobile` (touch device) now only drives swipe, tap wording and 44px hit areas. `fitStage()` also reruns on visualViewport resize, orientation change and when the loader finishes, because phone simulators report the final viewport late. The drum keycaps already work by tap.

This is the "same footage, smarter crop" approach. Alternatives still open: redirect small screens to the base portfolio, a portrait cut of the footage, or a stills-based card version.

## Publishing

The site is live on GitHub Pages from the `dannyportal/dannyportal.github.io` repo (custom domain daniloportal.com; the Pages workflow uploads the checkout as-is, no build). To publish a change:

    python -I publish.py
    cd D:\website\dannyportal.github.io
    git add -A && git commit -m "..." && git push

`publish.py` copies only what the browser needs (page, modules, content/, tour.mp4, the snare clip, this README) and clears whatever was there before. Source footage, frames, Higgsfield material and the tooling stay in this folder.

## Hotspots

Defined per section in `shots.js` as `{ id, label, title }`. Position comes from `tracks.js`: a list of keyframes `{ t, x, y, w, h }` per hotspot (`t` in source seconds, the rest as percent of the frame, `x`/`y` the centre). The position is interpolated between keyframes as the hold plays, so the hotspot follows the camera drift.

Current hotspots: desk monitor and keyboard; drums hi-hat, crash, ride, rack tom, snare, kick, floor tom, far-right cymbal (stop switch, play mode only); printer monitor and the printer itself.

Arrows, arrow keys and swipes go to the previous/next section unless the section sets `arrows: { left, right }` in `shots.js` (`navTarget()` in app.js). No section does right now: a room-relative mapping on the drums was tried on 2026-10-08 and reverted as confusing. The arrow buttons are the same narrow lime rectangles as the zone buttons.

Clicking a hotspot opens a centred modal. What it shows comes from the hotspot's `content` in `shots.js`: `{ type: 'module', module }` loads an ES module whose default export renders into the modal body and returns a cleanup function; `{ type: 'html', html }` is inline markup; nothing means a placeholder.

The desk monitor shows About (`content/about.js` + `content/about.css`): the photo and bio with the animated waves canvas, ported from the Next.js portfolio, followed by the Resume block ported from the dportal WordPress theme (dannyportal.xgroupsystems.kinsta.cloud → Resume): a two-column card with the Experience/Education timeline on the left and Download CV, skill bars (animate in on scroll) and Languages on the right. Copy and data live at the top of `content/about.js`; the CV is `content/Danny-Portal-Resume.pdf`; images in `content/images/`. "Get in touch" jumps the tour to the printer section. Testimonials were dropped on request.

The desk keyboard opens Portfolio (`content/works.js` + `content/works.css`), ported from the dportal WordPress plugin's Sanity portfolio (sanity-portfolio.js/css): purple filter chips, the 3-column card grid (type label, title, hover lift and arrow), and a side-by-side project detail (media left, title/year/client/services/type and description right) that replaces the grid inside the modal; Esc or "All projects" returns to the grid. The **Art** type is excluded here; it has its own gallery on the drums snare. Projects come from Sanity (`kz27vn4i`/`production`): the modal queries the CDN live when the page's origin is on the Sanity project's CORS list, otherwise it reads `content/projects.json`, which `python -I fetch-projects.py` regenerates. HTML5 banner ads referenced by `animationPath` are copied into `content/animation/`. A clip uploaded to the project's **Video file** field in Sanity (added 2026-10-09, `videoFile`) plays inline in the detail view (muted, looping, project image as poster) and takes priority over the Vimeo / embed fields.

The drums snare opens Art (`content/art.js`): the same cards and detail view, built by `createPortfolio({ include: ['Art'], filters: false })` from `works.js`, so it shows only the Sanity **Art** projects and skips the filter chips. Portfolio is the same factory with `exclude: ['Art']`.

To allow live queries from a new origin: sanity.io/manage → project → API → CORS origins → add the origin (no credentials needed).

The printer monitor opens Contact (`content/contact.js` + `content/contact.css`), ported from the Next.js portfolio's /contact page: "Get in Touch with Me!", the Location (Miami, Florida) and contact number cards, and the Formspree form (`https://formspree.io/f/xqeararq`, subject "Email from Folio Site", `_replyto` + honeypot). The form posts with fetch (`Accept: application/json`) and shows the reply inline. The 3D printer opens a "Coming soon" placeholder (inline html in `shots.js`). Modal boxes are fully transparent: no background, border or shadow; the content cards carry the visual weight.

### Letterbox

`LETTERBOX` in `shots.js` (experiment, 2026-10-08): thin solid black bars top and bottom (`top`/`bottom` are minimum heights in px, 48/40). The header (logo at 30px, tabs, pause) sits in the top bar and the footer (caption, hint, numbered buttons) in the bottom one; the drum keycaps and the arrows stay on the footage. `fit: 'overlay'` (current) lays the footage out exactly as full-bleed, viewport cover with the focus crop, and draws the bars on top of it, so the frame keeps its full width and the bars hide its outer 48/40 px. `fit: 'contain'` fits the whole frame between the bars instead: spare height goes into the bars and a window wider than 16:9 gets black sides. Danny tried contain (black sides) and crop-from-the-top (ceiling lost) on 2026-10-08 and chose overlay. Set `enabled: false` to go back to full-bleed; the CSS is all under `body.letterbox` in `styles.css`.

### Help panel

The question mark next to the pause button (`#help-btn`; both live in `#tools` on desktop with a 6px gap, and in the compact layout the question mark sits left of the menu icon in the top bar while the pause button goes to the bottom bar) opens a small centred welcome panel: "Welcome to my room. Explore around and click to learn more about me." plus a lime "Click here" button to the standard WordPress site (`STANDARD_SITE` in app.js, dannyportal.xgroupsystems.kinsta.cloud, new tab). It is a pseudo-hotspot (`HELP`, `small: true`) run through the normal modal, so it grows from the button and closes like everything else; `.modal-small` sizes the box. All buttons share the narrow lime rectangle treatment (`.icon-btn`, `.tab`, `.hint-btn`, `.arrow`).

### Modal animation

The box starts as a small square at the hotspot and grows to the centre in chunky steps (`steps(9)`), then the content resolves through a 24×14 grid of opaque tiles that drop away outward from the side the box came from, each in two hard steps: a digital dissolve. Closing runs it backwards. All of it is Web Animations API in `openModal` / `closeModal` in `app.js`; grid size is `MODAL_GRID`, durations are the literals next to it.

### Regenerating tracks

`track-hotspots.py` has an `INITIAL_BOXES` table: each hotspot's box at the hold's start frame, in percent. It tracks sparse features through the hold with optical flow, fits a similarity transform per frame, and moves the boxes with it. Run `python -I track-hotspots.py`. Check renders of the end-of-hold frames are in `frames/track-check-*.png` (regenerate them with the snippet in the script's docstring if needed).

To add a hotspot: add its box to `INITIAL_BOXES`, rerun the script, add `{ id, label, title }` to the section in `shots.js`.

### Spot-fixing by hand (dev tool)

Open the page with `?dev` in the URL and press `T` on a section. The video pauses and a HUD appears bottom-left. `,` / `.` step a frame, `[` / `]` jump half a second, `1`–`9` pick a hotspot, drag a box to set a keyframe at the current time, `Backspace` deletes the keyframe at the current time, `E` copies the section's tracks as JSON. Paste the result as an inline `track:` on the hotspot in `shots.js`; inline tracks override `tracks.js`. `T` or `Esc` exits.

## To change the footage

1. Drop the new clip in as `footage/source.mp4`.
2. Make a contact sheet and find the hold and move ranges (ffmpeg `fps=1,tile=6x5` is enough).
3. Update `TIMELINE` in both `build-footage.sh` and `shots.js`, plus `SECTIONS`, `MOVES`, `SOURCE_FPS`.
4. Update `HOLDS` and `INITIAL_BOXES` in `track-hotspots.py`, run it.
5. Run `bash build-footage.sh`.

## Open items

- Contact content for the printer monitor; the drums snare modal will show Art once that section exists in Sanity
- Drums: decide on content, or sample sounds per drum (needs animated footage of hits)
- Smaller encode for faster first load (fetched in full before anything plays)
