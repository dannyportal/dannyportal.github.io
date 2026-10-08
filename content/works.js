// Portfolio, ported from the dportal WordPress plugin (sanity-portfolio.js):
// filter chips, 3-column cards, and a side-by-side project detail. Projects
// come from Sanity.
//
// createPortfolio({ include, exclude, filters }) -> (container, ctx) -> cleanup()
//   include  only these projectType titles (default: all)
//   exclude  drop these projectType titles (default: none)
//   filters  show the type filter chips (default: true)
// export default = the Portfolio hotspot: everything except "Art", which gets
// its own gallery on the snare (content/art.js).

const SANITY = {
  projectId: 'kz27vn4i',
  dataset: 'production',
  apiVersion: '2024-01-01',
};
// Hosted HTML5 banner ads referenced by animationPath (which starts with /animation/).
const ANIMATION_HOST = 'content';
// Live from Sanity when this origin is on the project's CORS list; otherwise the
// baked copy made by fetch-projects.py (rerun it after editing projects).
const LOCAL_COPY = 'content/projects.json';

const QUERY = `*[_type == "project"] | order(year desc) {
  _id, title, "slug": slug.current, year, client, services,
  "projectType": projectType->title,
  description, vimeoUrl, videoEmbed, animationPath, animationWidth, animationHeight,
  "image": image.asset->url
}`;

const esc = (s) => String(s ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const img = (url, w) => (url ? `${url}?w=${w}&auto=format&q=80` : null);

async function fetchProjects({ include, exclude } = {}) {
  let result;
  try {
    const url = `https://${SANITY.projectId}.apicdn.sanity.io/v${SANITY.apiVersion}/data/query/${SANITY.dataset}?query=${encodeURIComponent(QUERY)}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Sanity ${res.status}`);
    result = (await res.json()).result;
  } catch (err) {
    console.info('[works] live Sanity query unavailable from this origin, using local copy', err.message);
    const res = await fetch(LOCAL_COPY);
    if (!res.ok) throw new Error(`projects.json ${res.status}`);
    result = await res.json();
  }
  return (result || []).filter((p) => p.projectType
    && (!include || include.includes(p.projectType))
    && (!exclude || !exclude.includes(p.projectType)));
}

function embedSrc(embed) {
  if (!embed) return null;
  const t = embed.trim();
  const m = t.match(/src\s*=\s*["']([^"']+)["']/i);
  if (m?.[1]) return m[1];
  return /^https?:\/\//i.test(t) ? t : null;
}

function card(p) {
  const thumb = img(p.image, 800);
  return `<div class="dp-card" data-type="${esc(p.projectType)}">
    <div class="dp-card__image">
      <button type="button" class="dp-card__btn" data-open="${esc(p._id)}" aria-label="Open ${esc(p.title)}">
        ${thumb ? `<img src="${thumb}" alt="${esc(p.title)}" loading="lazy" />` : '<div class="dp-card__placeholder"></div>'}
      </button>
      <button type="button" class="dp-card__arrow" data-open="${esc(p._id)}" aria-label="Open ${esc(p.title)}">&#8599;</button>
    </div>
    <div class="dp-card__content">
      <span class="dp-card__type">${esc(p.projectType)}</span>
      <h3 class="dp-card__title">${esc(p.title)}</h3>
    </div>
  </div>`;
}

function media(p) {
  if (p.animationPath) {
    const w = p.animationWidth ? `${p.animationWidth}px` : '100%';
    const h = p.animationHeight ? `${p.animationHeight}px` : '46vh';
    return `<div class="dp-modal__animation" style="width:${w};height:${h}"><iframe src="${esc(ANIMATION_HOST + p.animationPath)}" title="${esc(p.title)} animation" scrolling="no" allow="autoplay; fullscreen"></iframe></div>`;
  }
  const video = embedSrc(p.videoEmbed) || p.vimeoUrl;
  if (video) return `<div class="dp-modal__video"><iframe src="${esc(video)}" title="${esc(p.title)} video" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div>`;
  if (p.image) return `<a href="${img(p.image, 2000)}" target="_blank" rel="noreferrer" aria-label="Open full image for ${esc(p.title)}"><img src="${img(p.image, 1200)}" alt="${esc(p.title)}" /></a>`;
  return '';
}

const metaItem = (label, value) => `<div class="dp-modal__meta-item"><span>${esc(label)}</span><strong>${esc(value)}</strong></div>`;

function detail(p) {
  const services = Array.isArray(p.services) && p.services.length ? p.services.join(', ') : '—';
  return `
    <button type="button" class="dp-back" data-back>&larr; All projects</button>
    <div class="dp-modal__content">
      <div class="dp-modal__media">${media(p)}</div>
      <div class="dp-modal__body">
        <h3 class="dp-modal__title">${esc(p.title)}</h3>
        <div class="dp-modal__meta">
          ${metaItem('Year', p.year || '—')}${metaItem('Client', p.client || '—')}${metaItem('Services', services)}${metaItem('Project', p.projectType || '—')}
        </div>
        <div class="dp-modal__desc"><h3>Description</h3><p>${esc(p.description || 'No description provided.')}</p></div>
      </div>
    </div>`;
}

export function createPortfolio({ include = null, exclude = null, filters = true } = {}) {
  return function renderPortfolio(container, ctx = {}) {
  const root = document.createElement('div');
  root.className = 'dp-about dp-works';
  root.innerHTML = `
    <div class="dp-portfolio">
      ${filters ? '<div class="dp-filter-bar"></div>' : ''}
      <div class="dp-grid"><div class="dp-loading">Loading projects…</div></div>
    </div>
    <div class="dp-detail" hidden></div>`;
  container.appendChild(root);
  const scrollRoot = container.closest('.modal-body') || null;
  const listEl = root.querySelector('.dp-portfolio');
  const bar = root.querySelector('.dp-filter-bar');
  const grid = root.querySelector('.dp-grid');
  const detailEl = root.querySelector('.dp-detail');
  let projects = [], category = 'All';

  const renderFilters = () => {
    if (!bar) return;
    const types = ['All', ...new Set(projects.map((p) => p.projectType))];
    bar.innerHTML = types.map((t) => `<button type="button" class="dp-filter-btn${t === category ? ' dp-active' : ''}" data-cat="${esc(t)}">${esc(t)}</button>`).join('');
  };
  const renderGrid = () => {
    const visible = category === 'All' ? projects : projects.filter((p) => p.projectType === category);
    grid.innerHTML = visible.map(card).join('') || '<p class="dp-empty">No projects found.</p>';
  };
  const openDetail = (id) => {
    const p = projects.find((x) => x._id === id);
    if (!p) return;
    detailEl.innerHTML = detail(p);
    detailEl.hidden = false;
    listEl.hidden = true;
    if (scrollRoot) scrollRoot.scrollTop = 0;
  };
  const closeDetail = () => {
    detailEl.hidden = true;
    detailEl.innerHTML = '';
    listEl.hidden = false;
  };

  root.addEventListener('click', (e) => {
    const cat = e.target.closest('[data-cat]');
    if (cat) { category = cat.dataset.cat; renderFilters(); renderGrid(); return; }
    const open = e.target.closest('[data-open]');
    if (open) { openDetail(open.dataset.open); return; }
    if (e.target.closest('[data-back]')) closeDetail();
  });

  let cancelled = false;
  fetchProjects({ include, exclude }).then((list) => {
    if (cancelled) return;
    projects = list;
    renderFilters();
    renderGrid();
  }).catch((err) => {
    console.error(err);
    grid.innerHTML = '<p class="dp-empty">Could not load projects right now.</p>';
  });

  // let the host close the detail view with Esc before closing the modal
  ctx.onEscape?.(() => { if (!detailEl.hidden) { closeDetail(); return true; } return false; });

  return () => { cancelled = true; root.remove(); };
  };
}

export default createPortfolio({ exclude: ['Art'] });
