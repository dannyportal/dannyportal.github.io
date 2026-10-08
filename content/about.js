// The About modal: photo + bio (with the animated waves) ported from the Next.js
// portfolio, and the Resume block ported from the dportal WordPress theme
// (dannyportal.xgroupsystems.kinsta.cloud, Resume section). Edit the data below
// to update the copy.
//
// export default (container, ctx) -> cleanup()
//   ctx.goTo(sectionId) jumps the tour to a section (used by "Get in touch").

export const ABOUT = {
  profile: 'content/images/profile.png',
  heading: "I'm Danny Portal, a multidisciplinary Web Developer and Digital Strategist.",
  paragraphs: [
    'Multidisciplinary developer and digital strategist with 15+ years of experience creating high-performing, user-focused web experiences. Expert in HTML, CSS, JavaScript, PHP, and CMS platforms including WordPress, Webflow, and custom frameworks.',
    'Skilled in ACF, Figma, Adobe Creative Suite, branding, motion graphics, and social-first content. Proficient in PPC, display ads, and Google Analytics/GA4 to drive data-informed decisions that connect design and development.',
  ],
  cta: { label: 'Get In touch', section: 'printer' },
  resumePdf: 'content/Danny-Portal-Resume.pdf',
  experience: [
    { date: '04/2025 – Present', role: 'UI/UX Web Developer', company: 'Centripetal' },
    { date: '02/2021 – 04/2025', role: 'Web & Digital Growth Manager', company: 'Activated Insights' },
    { date: '02/2020 – 01/2021', role: 'Senior Web Developer & Digital Strategist', company: 'The Related Group' },
    { date: '11/2018 – 02/2020', role: 'Web Production Coordinator', company: 'MEDNAX, Health Solutions Partner' },
    { date: '05/2018 – 11/2018', role: 'Digital Media Designer', company: 'Crius Energy, LLC' },
    { date: '01/2018 – 05/2018', role: 'Marketing Manager (Contract)', company: 'Family Office Club' },
    { date: '01/2013 – 01/2018', role: 'Digital Media Manager', company: 'ZipLine' },
    { date: '09/2012 – 12/2012', role: 'Freelance Web Designer & Ad Manager', company: 'Abritt Publishing' },
    { date: '10/2009 – 09/2012', role: 'Jr Art Director', company: 'SapientNitro' },
    { date: '11/2007 – 10/2009', role: 'Web Master', company: 'Auto Alea Global' },
    { date: '07/2006 – 11/2007', role: 'Web Designer', company: 'CompuWizards' },
  ],
  education: [
    { date: '01/2010 – 12/2013', role: 'B.A. Web Design and Development', company: 'Full Sail University' },
    { date: '01/2006 – 12/2009', role: 'A.A. Computer & Information Sciences', company: 'Miami Dade College' },
  ],
  skills: [
    { name: 'WordPress', pct: 99, color: '#3a66e6' },
    { name: 'HTML', pct: 99, color: '#ffc455' },
    { name: 'CSS', pct: 99, color: '#ff754a' },
    { name: 'JavaScript', pct: 85, color: '#ff3430' },
    { name: 'PHP', pct: 75, color: '#1bc9e4' },
    { name: 'Adobe Photoshop', pct: 99, color: '#2a24c1' },
    { name: 'Adobe Illustrator', pct: 85, color: '#8de82c' },
    { name: 'After Effects', pct: 95, color: '#4054b2' },
    { name: 'Premiere Pro', pct: 99, color: '#267f00' },
    { name: 'Figma', pct: 90, color: '#a259ff' },
  ],
  languages: [
    { name: 'English', level: 'Native' },
    { name: 'Spanish', level: 'Conversational' },
  ],
};

const ICONS = {
  mail: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M2 5.5A1.5 1.5 0 0 1 3.5 4h17A1.5 1.5 0 0 1 22 5.5v13a1.5 1.5 0 0 1-1.5 1.5h-17A1.5 1.5 0 0 1 2 18.5v-13zm2 .9V18h16V6.4l-8 5.2-8-5.2zM4.6 6l7.4 4.8L19.4 6H4.6z"/></svg>',
};

const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

function resumeItem({ date, role, company, details }, edu = false) {
  return `<div class="dp-resume__item${edu ? ' dp-resume__item--edu' : ''}">
    <div class="dp-resume__dot${edu ? ' dp-resume__dot--edu' : ''}"></div>
    <div class="dp-resume__content">
      <span class="dp-resume__date">${esc(date)}</span>
      <h4 class="dp-resume__role">${esc(role)}</h4>
      <span class="dp-resume__company">${esc(company)}</span>
      ${details ? `<div class="dp-resume__details">${esc(details)}</div>` : ''}
    </div>
  </div>`;
}

function markup(d) {
  return `
  <section class="about-single-area">
    <div class="row-about">
      <div data-slide>
        <div class="about-image-part"><img src="${d.profile}" alt="Danny Portal" /></div>
      </div>
      <div data-slide>
        <div class="about-content-part">
          <canvas class="about-waves-canvas"></canvas>
          <h2>${esc(d.heading)}</h2>
          ${d.paragraphs.map((p) => `<p>${esc(p)}</p>`).join('')}
          <div class="hero-btns"><a href="#${d.cta.section}" class="theme-btn" data-goto="${d.cta.section}">${esc(d.cta.label)}<i>${ICONS.mail}</i></a></div>
        </div>
      </div>
    </div>
  </section>
  <section class="dp-resume-card" data-slide>
    <div class="dp-resume">
      <div class="dp-resume__left">
        <h3 class="dp-resume__heading">Experience</h3>
        ${d.experience.map((x) => resumeItem(x)).join('')}
        <h3 class="dp-resume__heading dp-resume__heading--edu">Education</h3>
        ${d.education.map((x) => resumeItem(x, true)).join('')}
      </div>
      <div class="dp-resume__right">
        <a href="${d.resumePdf}" class="dp-btn" download>Download CV</a>
        <h3 class="dp-resume__heading">Skills</h3>
        ${d.skills.map((s) => `
        <div class="dp-skill">
          <div class="dp-skill__label"><span>${esc(s.name)}</span><span>${s.pct}%</span></div>
          <div class="dp-skill__track"><div class="dp-skill__bar" data-width="${s.pct}" style="background:${s.color}"></div></div>
        </div>`).join('')}
        <h3 class="dp-resume__heading">Languages</h3>
        ${d.languages.map((l) => `<div class="dp-lang"><span>${esc(l.name)}</span><span class="dp-lang__level">${esc(l.level)}</span></div>`).join('')}
      </div>
    </div>
  </section>`;
}

// ---- SlideUp (framer-motion whileInView port): y 40 -> 0, fade, once ----
function slideUps(root, scrollRoot) {
  const els = [...root.querySelectorAll('[data-slide]')];
  for (const el of els) { el.style.opacity = '0'; el.style.transform = 'translateY(40px)'; }
  const io = new IntersectionObserver((entries) => {
    for (const e of entries) {
      if (!e.isIntersecting) continue;
      const el = e.target;
      io.unobserve(el);
      el.animate([{ opacity: 0, transform: 'translateY(40px)' }, { opacity: 1, transform: 'translateY(0)' }], { duration: 600, easing: 'ease-out', fill: 'forwards' })
        .onfinish = () => { el.style.opacity = ''; el.style.transform = ''; };
    }
  }, { root: scrollRoot, threshold: 0 });
  els.forEach((el) => io.observe(el));
  return () => io.disconnect();
}

// ---- skill bars grow to their value when scrolled into view (js-skill-bar port) ----
function skillBars(root, scrollRoot) {
  const bars = [...root.querySelectorAll('.dp-skill__bar')];
  const io = new IntersectionObserver((entries) => {
    for (const e of entries) {
      if (!e.isIntersecting) continue;
      io.unobserve(e.target);
      requestAnimationFrame(() => { e.target.style.width = `${e.target.dataset.width}%`; });
    }
  }, { root: scrollRoot, threshold: 0.2 });
  bars.forEach((b) => io.observe(b));
  return () => io.disconnect();
}

// ---- about content waves (aboutContentWaves.jsx port) ----
const grad3 = [[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]];
class SimplexNoise {
  constructor() {
    const p = new Uint8Array(256);
    for (let i = 0; i < 256; i++) p[i] = i;
    for (let i = 255; i > 0; i--) { const n = Math.floor((i + 1) * Math.random()); [p[i], p[n]] = [p[n], p[i]]; }
    this.perm = new Uint8Array(512); this.permMod12 = new Uint8Array(512);
    for (let i = 0; i < 512; i++) { this.perm[i] = p[i & 255]; this.permMod12[i] = this.perm[i] % 12; }
  }
  noise3D(xin, yin, zin) {
    const F3 = 1 / 3, G3 = 1 / 6;
    const s = (xin + yin + zin) * F3;
    const i = Math.floor(xin + s), j = Math.floor(yin + s), k = Math.floor(zin + s);
    const t = (i + j + k) * G3;
    const x0 = xin - (i - t), y0 = yin - (j - t), z0 = zin - (k - t);
    let i1, j1, k1, i2, j2, k2;
    if (x0 >= y0) {
      if (y0 >= z0) { i1 = 1; j1 = 0; k1 = 0; i2 = 1; j2 = 1; k2 = 0; }
      else if (x0 >= z0) { i1 = 1; j1 = 0; k1 = 0; i2 = 1; j2 = 0; k2 = 1; }
      else { i1 = 0; j1 = 0; k1 = 1; i2 = 1; j2 = 0; k2 = 1; }
    } else if (y0 < z0) { i1 = 0; j1 = 0; k1 = 1; i2 = 0; j2 = 1; k2 = 1; }
    else if (x0 < z0) { i1 = 0; j1 = 1; k1 = 0; i2 = 0; j2 = 1; k2 = 1; }
    else { i1 = 0; j1 = 1; k1 = 0; i2 = 1; j2 = 1; k2 = 0; }
    const x1 = x0 - i1 + G3, y1 = y0 - j1 + G3, z1 = z0 - k1 + G3;
    const x2 = x0 - i2 + 2 * G3, y2 = y0 - j2 + 2 * G3, z2 = z0 - k2 + 2 * G3;
    const x3 = x0 - 1 + 3 * G3, y3 = y0 - 1 + 3 * G3, z3 = z0 - 1 + 3 * G3;
    const ii = i & 255, jj = j & 255, kk = k & 255;
    const gi0 = this.permMod12[ii + this.perm[jj + this.perm[kk]]];
    const gi1 = this.permMod12[ii + i1 + this.perm[jj + j1 + this.perm[kk + k1]]];
    const gi2 = this.permMod12[ii + i2 + this.perm[jj + j2 + this.perm[kk + k2]]];
    const gi3 = this.permMod12[ii + 1 + this.perm[jj + 1 + this.perm[kk + 1]]];
    const c = (g, x, y, z) => { let t0 = 0.6 - x * x - y * y - z * z; if (t0 <= 0) return 0; t0 *= t0; return t0 * t0 * (grad3[g][0] * x + grad3[g][1] * y + grad3[g][2] * z); };
    return 32 * (c(gi0, x0, y0, z0) + c(gi1, x1, y1, z1) + c(gi2, x2, y2, z2) + c(gi3, x3, y3, z3));
  }
}
const TAU = Math.PI * 2;
const map = (v, a, b, c, d) => ((v - a) * (d - c)) / (b - a) + c;
const hsl = (h, s, l, a = 1) => `hsla(${h}, ${s}%, ${l}%, ${a})`;

// Performance notes vs the original component:
//  - the glow pass used ctx.filter = 'blur(10px)', which is rasterised on the CPU
//    every frame. It now draws unblurred onto a second canvas that CSS blurs on
//    the GPU (.about-waves-glow).
//  - both canvases render at a fraction of the display size (RES) and are
//    scaled up by CSS; the lines are soft anyway so nothing is lost.
//  - capped at FPS frames per second, and paused while scrolled out of view or
//    the tab is hidden.
const WAVES_RES = 0.5;
const WAVES_FPS = 30;

function waves(canvas) {
  const parent = canvas.parentElement;
  const glow = document.createElement('canvas');
  glow.className = 'about-waves-canvas about-waves-glow';
  parent.insertBefore(glow, canvas);
  const ctx = canvas.getContext('2d');
  const gtx = glow.getContext('2d');
  const noise = new SimplexNoise();
  let frame = 0, width = 0, height = 0, wh = 0, hh = 0, last = 0, visible = true, running = false;

  function resize() {
    const r = parent.getBoundingClientRect();
    width = r.width; height = r.height; wh = width / 2; hh = height / 2;
    for (const c of [canvas, glow]) {
      c.width = Math.max(1, Math.floor(width * WAVES_RES));
      c.height = Math.max(1, Math.floor(height * WAVES_RES));
      c.style.width = `${width}px`; c.style.height = `${height}px`;
      c.getContext('2d').setTransform(WAVES_RES, 0, 0, WAVES_RES, 0, 0);
    }
  }

  function path(c, time) {
    const xCount = 40, yCount = 60, iX = 1 / (xCount - 1), iY = 1 / (yCount - 1);
    c.save(); c.translate(wh, hh + height * 0.32); c.scale(1.08, 1.08); c.beginPath();
    let lt = time;
    for (let j = 0; j < yCount; j++) {
      const cz = Math.cos(j * iY * TAU + time) * 0.1;
      for (let i = 0; i < xCount; i++) {
        const tt = i * iX, y = noise.noise3D(tt, lt, cz) * hh, x = tt * (width + 20) - wh - 10;
        if (i === 0) c.moveTo(x, y); else c.lineTo(x, y);
      }
      lt += 0.01;
    }
  }

  function draw(ms) {
    frame = requestAnimationFrame(draw);
    if (ms - last < 1000 / WAVES_FPS) return;
    last = ms;
    const time = ms * 0.00025;
    const t = time % 1, side = Math.floor(time % 2) === 0, hueA = side ? 120 : 210, hueB = side ? 210 : 120;
    const grad = ctx.createLinearGradient(-width, 0, width, height);
    grad.addColorStop(map(t, 0, 1, 1 / 3, 0), hsl(hueA, 90, 45));
    grad.addColorStop(map(t, 0, 1, 2 / 3, 1 / 3), hsl(hueB, 90, 45));
    grad.addColorStop(map(t, 0, 1, 1, 2 / 3), hsl(hueA, 90, 45));

    ctx.clearRect(0, 0, width, height);
    ctx.globalAlpha = map(Math.cos(time), -1, 1, 0.12, 0.28);
    ctx.fillStyle = grad; ctx.fillRect(0, 0, width, height); ctx.globalAlpha = 1;
    path(ctx, time);
    ctx.strokeStyle = hsl(0, 0, 100, 0.7); ctx.lineWidth = 2; ctx.stroke();
    ctx.restore();

    gtx.clearRect(0, 0, width, height);
    path(gtx, time);
    gtx.globalCompositeOperation = 'lighter';
    gtx.strokeStyle = grad; gtx.lineWidth = 5; gtx.stroke();
    gtx.restore();
  }

  function start() { if (!running && visible && !document.hidden) { running = true; last = 0; frame = requestAnimationFrame(draw); } }
  function stop() { if (running) { running = false; cancelAnimationFrame(frame); } }
  const onVis = () => (document.hidden ? stop() : start());
  const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; visible ? start() : stop(); }, { threshold: 0 });

  resize();
  io.observe(parent);
  document.addEventListener('visibilitychange', onVis);
  const ro = new ResizeObserver(resize);
  ro.observe(parent);
  start();
  return () => { stop(); io.disconnect(); ro.disconnect(); document.removeEventListener('visibilitychange', onVis); glow.remove(); };
}

export default function renderAbout(container, ctx = {}) {
  const root = document.createElement('div');
  root.className = 'dp-about';
  root.innerHTML = markup(ABOUT);
  container.appendChild(root);
  const scrollRoot = container.closest('.modal-body') || null;
  const stops = [
    waves(root.querySelector('.about-waves-canvas')),
    slideUps(root, scrollRoot),
    skillBars(root, scrollRoot),
  ];
  root.querySelector('[data-goto]')?.addEventListener('click', (e) => {
    if (!ctx.goTo) return;
    e.preventDefault();
    ctx.goTo(e.currentTarget.dataset.goto);
  });
  return () => { stops.forEach((s) => s()); root.remove(); };
}
