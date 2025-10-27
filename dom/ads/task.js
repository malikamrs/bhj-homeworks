document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.rotator').forEach(rotator => {
      const items = rotator.querySelectorAll('.rotator__case');
      if (!items.length) return;
  
      let i = [...items].findIndex(el => el.classList.contains('rotator__case_active'));
      if (i === -1) {
        i = 0;
        items[0].classList.add('rotator__case_active');
      }
  
      const step = () => {
        items[i].classList.remove('rotator__case_active');
        i = (i + 1) % items.length;
        const cur = items[i];
        cur.classList.add('rotator__case_active');
        const delay = Number(cur.dataset.speed) || 1000;
        setTimeout(step, delay);
      };
  
      setTimeout(step, Number(items[i].dataset.speed) || 1000);
    });
  });
