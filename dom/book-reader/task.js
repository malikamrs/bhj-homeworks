document.addEventListener('click', (event) => {
    const clickedControl = event.target.closest('.font-size, .color');
    if (!clickedControl) return;
    event.preventDefault();
  
    const bookElement = document.getElementById('book');

    if (clickedControl.classList.contains('font-size')) {
      const fontSizePanel = clickedControl.closest('.book__control_font-size');
  
      fontSizePanel
        .querySelectorAll('.font-size')
        .forEach((linkElement) => linkElement.classList.remove('font-size_active'));
  
      clickedControl.classList.add('font-size_active');
  
      bookElement.classList.remove('book_fs-small', 'book_fs-big');
  
      const sizeName = clickedControl.dataset.size; 
      if (sizeName === 'small') bookElement.classList.add('book_fs-small');
      else if (sizeName === 'big') bookElement.classList.add('book_fs-big');
    }
});