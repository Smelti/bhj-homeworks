document.addEventListener('DOMContentLoaded', () => {
  const tooltip = document.createElement('div');
  tooltip.className = 'tooltip';
  document.body.appendChild(tooltip);
    
  const prompt = document.querySelectorAll('.has-tooltip');

  prompt.forEach((element) => {
    element.addEventListener('click', (event) => {
      event.preventDefault();

      const rect = element.getBoundingClientRect();
      const text = element.getAttribute('title');

      if (tooltip.classList.contains('tooltip_active') && tooltip.innerText === text) {
        tooltip.classList.remove('tooltip_active');
        return;
      }

      tooltip.innerHTML = text;
      tooltip.style.left = `${rect.left}px`;
      tooltip.style.top = `${rect.bottom}px`;
      tooltip.classList.add('tooltip_active');
    });
  });

  document.addEventListener('click', (event) => {
    if (!event.target.classList.contains('has-tooltip')) {
      tooltip.classList.remove('tooltip_active');
    }
  });
});
