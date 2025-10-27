(() => {
    const reveals = Array.from(document.querySelectorAll('.reveal'));
    if (!reveals.length) return;
  
    const activate = (el, on) => el.classList.toggle('reveal_active', on);
  
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          activate(entry.target, entry.isIntersecting);
        });
      }, {
        root: null,
        rootMargin: '0px 0px -15% 0px', 
        threshold: 0.1
      });
  
      reveals.forEach((el) => observer.observe(el));
      return;
    }
  
    const check = () => {
      const vh = window.innerHeight || document.documentElement.clientHeight;
      reveals.forEach((el) => {
        const r = el.getBoundingClientRect();
        const visible = r.top < vh * 0.9 && r.bottom > 0;
        activate(el, visible);
      });
    };
    window.addEventListener('scroll', () => requestAnimationFrame(check), { passive: true });
    window.addEventListener('resize', check);
    check();
  })();