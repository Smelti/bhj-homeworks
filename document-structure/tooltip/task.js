const prompt = document.querySelectorAll('.has-tooltip');
let activeTooltip = null;

prompt.forEach(tooltip => {
    tooltip.addEventListener('click', event => {
        event.preventDefault();

        if (activeTooltip && activeTooltip === tooltip.nextElementSibling) {
            activeTooltip.classList.remove('tooltip_active');
            activeTooltip = null;
            return;
        }

        if (activeTooltip) {
            activeTooltip.classList.remove('tooltip_active');
        }

        let tooltipBox = tooltip.nextElementSibling;
        if (!tooltipBox || !tooltipBox.classList.contains('tooltip')) {
            tooltipBox = document.createElement('div');
            tooltipBox.className = 'tooltip';
            tooltipBox.textContent = tooltip.getAttribute('title');
            document.body.appendChild(tooltipBox);
        }

        const rect = tooltip.getBoundingClientRect();
        tooltipBox.style.left = `${rect.left}px`;
        tooltipBox.style.top = `${rect.bottom}px`;

        tooltipBox.classList.add('tooltip_active');
        activeTooltip = tooltipBox;
    });
});

document.addEventListener('click', event => {
    if (!event.target.classList.contains('has-tooltip') && activeTooltip) {
        activeTooltip.classList.remove('tooltip_active');
        activeTooltip = null;
    }
});
