(() => {
  const header = document.querySelector('.header');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let compact = false;
  let framePending = false;

  function updateHeader() {
    const scrollPosition = window.scrollY;
    if (reducedMotion.matches) compact = false;
    else if (scrollPosition > 130) compact = true;
    else if (scrollPosition < 60) compact = false;
    header.classList.toggle('is-compact', compact);
    framePending = false;
  }

  function scheduleUpdate() {
    if (framePending) return;
    framePending = true;
    window.requestAnimationFrame(updateHeader);
  }

  updateHeader();
  window.addEventListener('scroll', scheduleUpdate, { passive: true });
  reducedMotion.addEventListener?.('change', scheduleUpdate);
})();
