(() => {
  const dialog = document.querySelector('#booking-dialog');
  const embed = document.querySelector('#calendly-embed');
  const message = document.querySelector('#booking-message');
  const fallback = document.querySelector('#booking-fallback');
  let bookingInitialized = false;
  let lastTrigger;
  let widgetPromise;
  document.querySelector('#year').textContent = new Date().getFullYear();
  function loadCalendly() {
    if (window.Calendly) return Promise.resolve();
    if (widgetPromise) return widgetPromise;
    widgetPromise = new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      script.onload = resolve;
      script.onerror = () => { script.remove(); widgetPromise = null; reject(new Error('Calendar unavailable')); };
      document.head.appendChild(script);
    });
    return widgetPromise;
  }
  async function openBooking(event) {
    lastTrigger = event.currentTarget;
    dialog.showModal();
    document.body.classList.add('modal-open');
    const configuredUrl = window.GREAT_THINGS_CONFIG?.calendlyUrl;
    if (!configuredUrl || bookingInitialized) return;
    let url;
    try {
      url = new URL(configuredUrl);
      if (url.protocol !== 'https:' || url.hostname !== 'calendly.com') throw new Error('Invalid calendar URL');
    } catch { message.textContent = 'The booking calendar is temporarily unavailable. Please check back shortly.'; return; }
    fallback.href = url.href;
    fallback.hidden = false;
    message.textContent = 'Loading available times…';
    try {
      await loadCalendly();
      url.searchParams.set('primary_color', '7560de');
      window.Calendly.initInlineWidget({ url: url.href, parentElement: embed });
      bookingInitialized = true;
      message.textContent = 'Choose a time that works for you.';
    } catch { message.textContent = 'The calendar couldn’t load here. You can open it in a new tab below.'; }
  }
  document.querySelectorAll('[data-book]').forEach(button => button.addEventListener('click', openBooking));
  dialog.querySelector('.close-dialog').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    const rect = dialog.getBoundingClientRect();
    if (event.target === dialog && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) dialog.close();
  });
  dialog.addEventListener('close', () => { document.body.classList.remove('modal-open'); lastTrigger?.focus(); });
})();
