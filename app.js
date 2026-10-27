(() => {
  const dialog = document.querySelector('#booking-dialog');
  const embed = document.querySelector('#calendly-embed');
  const message = document.querySelector('#booking-message');
  const fallback = document.querySelector('#booking-fallback');
  let bookingInitialized = false;
  let lastTrigger;
  let widgetPromise;
  function setMessage(key) {
    message.dataset.i18n = key;
    message.textContent = window.GREAT_THINGS_TRANSLATIONS[document.documentElement.lang][key];
  }
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
    if (bookingInitialized) return;
    let url;
    try {
      url = new URL(configuredUrl);
      if (url.protocol !== 'https:' || url.hostname !== 'calendly.com') throw new Error('Invalid calendar URL');
    } catch { setMessage('unavailable'); return; }
    fallback.href = url.href;
    fallback.hidden = false;
    setMessage('loading');
    try {
      await loadCalendly();
      url.searchParams.set('hide_event_type_details', '1');
      url.searchParams.set('background_color', 'EFEBE3');
      url.searchParams.set('text_color', '171714');
      url.searchParams.set('primary_color', '171714');
      window.Calendly.initInlineWidget({ url: url.href, parentElement: embed });
      bookingInitialized = true;
      setMessage('ready');
    } catch { setMessage('fallback'); }
  }
  document.querySelectorAll('[data-book]').forEach(button => button.addEventListener('click', openBooking));
  dialog.querySelector('.close-dialog').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    const rect = dialog.getBoundingClientRect();
    if (event.target === dialog && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) dialog.close();
  });
  dialog.addEventListener('close', () => { document.body.classList.remove('modal-open'); lastTrigger?.focus(); });
})();
