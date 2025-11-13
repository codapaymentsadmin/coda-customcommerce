/**
 *
 * @param {*} gameName
 * Get from categoryTitle from a specific page
 *
 * @param {*} theme
 * Get from categoryThemes in variables.js
 */
export function setSubsectionBtnStyle(gameName, theme) {
  const subsectionBtns = document.querySelectorAll('.subsection-btn');
  let currentGameTitle = sessionStorage.getItem('currentGameTitle');

  if (currentGameTitle === 'eFootball™') {
    gameName = 'efootball';
  } else if (currentGameTitle === 'Blockman go') {
    gameName = 'blockman';
  } else if (currentGameTitle === 'Moba 5v5') {
    gameName = 'moba';
  } else {
    gameName = 'default';
  }

  // Use CSS variable that matches the game
  const primaryColor = `var(--color-${gameName}-primary)`;

  subsectionBtns.forEach(btn => {
    // Set inline styles using CSS variables
    btn.style.backgroundColor = primaryColor;
    btn.style.color = 'white';

    // Add CSS variable for hover effect (slightly darker)
    btn.style.setProperty('--hover-bg-color', primaryColor);
    btn.style.setProperty('--hover-opacity', '0.9');

    // Add class for hover effects
    btn.classList.add('subsection-btn-themed');
  });
}