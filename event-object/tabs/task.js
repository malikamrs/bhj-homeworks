document.querySelectorAll('.tabs').forEach((group) => {
    const nav = group.querySelector('.tab__navigation');
    if (!nav) return;
  
    nav.addEventListener('click', (e) => {
      const tab = e.target.closest('.tab');
      if (!tab || !group.contains(tab)) return;

      const tabs = [...group.querySelectorAll('.tab')];
      const i = tabs.indexOf(tab);
      if (i < 0) return;

      group.querySelector('.tab_active')?.classList.remove('tab_active');
      group.querySelector('.tab__content_active')?.classList.remove('tab__content_active');

      tab.classList.add('tab_active');
      const contents = group.querySelectorAll('.tab__content');
      contents[i]?.classList.add('tab__content_active');
    });
  });