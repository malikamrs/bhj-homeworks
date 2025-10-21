function closeAllDropdowns() {
    document
      .querySelectorAll('.dropdown__list_active')
      .forEach(list => list.classList.remove('dropdown__list_active'));
  }
  
  document.addEventListener('click', (e) => {
    const dropdown = e.target.closest('.dropdown');

    if (!dropdown) {
      closeAllDropdowns();
      return;
    }

    const valueBtn = e.target.closest('.dropdown__value');
    if (valueBtn) {
      const list = dropdown.querySelector('.dropdown__list');
      const isOpen = list.classList.contains('dropdown__list_active');

      closeAllDropdowns();

      if (!isOpen) {
        list.classList.add('dropdown__list_active');
      }
      return;
    }

    const link = e.target.closest('.dropdown__link');
    if (link) {
      e.preventDefault(); 
  
      const list = dropdown.querySelector('.dropdown__list');
      const valueEl = dropdown.querySelector('.dropdown__value');
  
      valueEl.textContent = link.textContent.trim();
      list.classList.remove('dropdown__list_active');
    }
  });
  
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeAllDropdowns();
    }
  });