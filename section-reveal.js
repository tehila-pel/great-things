(() => {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (reducedMotion.matches || !('IntersectionObserver' in window)) return;

  const sections = [...document.querySelectorAll('.manifesto-section')].slice(1);
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

  for (const section of sections) {
    if (section.getBoundingClientRect().top <= window.innerHeight * 0.9) continue;
    section.classList.add('will-reveal');
    observer.observe(section);
  }

  reducedMotion.addEventListener?.('change', event => {
    if (!event.matches) return;
    observer.disconnect();
    for (const section of sections) section.classList.add('is-visible');
  });
})();
