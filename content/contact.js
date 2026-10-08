// The Contact modal (printer zone, monitor hotspot), ported from the Next.js
// portfolio's /contact page: the "Get in Touch with Me!" title, the location and
// phone cards, and the Formspree form. The form posts with fetch so the reply
// shows inside the modal instead of bouncing to another page.
//
// export default (container, ctx) -> cleanup()

export const CONTACT = {
  eyebrow: 'contact',
  heading: 'Get in Touch with Me!',
  options: [
    { icon: 'pin', label: 'Location:', value: 'Miami, Florida' },
    { icon: 'phone', label: 'contact number:', value: '(802)459-1992' },
  ],
  endpoint: 'https://formspree.io/f/xqeararq',
  subject: 'Email from Folio Site',
  submit: 'Send Me Message',
  success: 'Thanks! Your message has been sent.',
  failure: 'Sorry, that didn’t go through. Please try again or email me directly.',
};

const ICONS = {
  pin: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s-7-6.1-7-11a7 7 0 0 1 14 0c0 4.9-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/></svg>',
  phone: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/></svg>',
  mail: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>',
  user: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></svg>',
  envelope: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>',
};

const esc = (s) => String(s ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

function markup(c) {
  return `
    <section class="dp-contact-area">
      <div class="dp-section-title">
        <p>${esc(c.eyebrow)}</p>
        <h2>${esc(c.heading)}</h2>
      </div>
      <div class="dp-contact-row">
        <div class="dp-contact-options">
          ${c.options.map((o) => `
            <div class="dp-single-contact">
              <div class="dp-contact-icon">${ICONS[o.icon] || ''}</div>
              <h3>${esc(o.label)}</h3>
              <p>${esc(o.value)}</p>
            </div>`).join('')}
        </div>
        <div class="dp-contact-form-area">
          <form class="dp-contact-form" action="${esc(c.endpoint)}" method="POST" novalidate>
            <input type="hidden" name="_subject" value="${esc(c.subject)}" />
            <input type="text" name="_gotcha" class="dp-visually-hidden" tabindex="-1" autocomplete="off" />
            <div class="dp-form-grid">
              <div class="dp-form-group">
                <label for="dp-c-name">Full Name</label>
                <input type="text" id="dp-c-name" name="name" placeholder="Steve Milner" required autocomplete="name" />
                <span class="dp-for-icon">${ICONS.user}</span>
              </div>
              <div class="dp-form-group">
                <label for="dp-c-email">Email Address</label>
                <input type="email" id="dp-c-email" name="_replyto" placeholder="hello@websitename.com" required autocomplete="email" />
                <span class="dp-for-icon">${ICONS.envelope}</span>
              </div>
              <div class="dp-form-group dp-form-group--full">
                <label for="dp-c-message">Your Message</label>
                <textarea id="dp-c-message" name="message" rows="4" placeholder="Write Your message" required></textarea>
              </div>
              <div class="dp-form-group dp-form-group--full dp-form-actions">
                <button type="submit" class="theme-btn">${esc(c.submit)} <i>${ICONS.mail}</i></button>
                <p class="dp-form-status" aria-live="polite" hidden></p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>`;
}

export default function renderContact(container) {
  const root = document.createElement('div');
  root.className = 'dp-about dp-contact';
  root.innerHTML = markup(CONTACT);
  container.appendChild(root);

  const form = root.querySelector('.dp-contact-form');
  const status = root.querySelector('.dp-form-status');
  const button = form.querySelector('button[type="submit"]');
  const say = (text, kind) => { status.textContent = text; status.dataset.kind = kind; status.hidden = false; };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!form.reportValidity()) return;
    button.disabled = true;
    say('Sending…', 'pending');
    try {
      const res = await fetch(form.action, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } });
      if (!res.ok) throw new Error(`Formspree ${res.status}`);
      say(CONTACT.success, 'ok');
      form.reset();
    } catch (err) {
      console.error('[contact]', err);
      say(CONTACT.failure, 'error');
    } finally {
      button.disabled = false;
    }
  };
  form.addEventListener('submit', onSubmit);

  return () => { form.removeEventListener('submit', onSubmit); root.remove(); };
}
