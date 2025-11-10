const tooltips = document.querySelectorAll('.has-tooltip');

tooltips.forEach(element => {
  const tooltip = document.createElement('div');
  tooltip.className = 'tooltip';
  tooltip.textContent = element.getAttribute('title');
  document.body.appendChild(tooltip);

  element.addEventListener('click', (e) => {
    e.preventDefault();
    
    document.querySelectorAll('.tooltip').forEach(t => {
      if (t !== tooltip) {
        t.classList.remove('tooltip_active');
      }
    });

    if (tooltip.classList.contains('tooltip_active')) {
      tooltip.classList.remove('tooltip_active');
    } else {
      tooltip.style.display = 'block';
      tooltip.style.visibility = 'hidden';
      
      const rect = element.getBoundingClientRect();
      tooltip.style.left = rect.left + 'px';
      tooltip.style.top = (rect.top - tooltip.offsetHeight - 5) + 'px';
      
      tooltip.style.visibility = 'visible';
      tooltip.style.display = '';
      tooltip.classList.add('tooltip_active');
    }
  });
});