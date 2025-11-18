/**
 * @param {*} theme
 * Get from categoryThemes in variables.js
 */
export function setSubsectionBtnStyle(theme) {
  const subsectionBtns = document.querySelectorAll('.subsection-btn');

  subsectionBtns.forEach(btn => {
    // Set inline styles using CSS variables
    btn.style.backgroundColor = theme.primary;
    btn.style.color = 'white';

    // Add CSS variable for hover effect (slightly darker)
    btn.style.setProperty('--hover-bg-color', theme.primary);
    btn.style.setProperty('--hover-opacity', '0.9');

    // Add class for hover effects
    btn.classList.add('subsection-btn-themed');
  });
}