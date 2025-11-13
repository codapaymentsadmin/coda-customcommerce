/**
 *
 * @param {*} gameName
 * Get from categoryTitle from a specific page
 *
 * @param {*} theme
 * Get from categoryThemes in variables.js
 */
export function setArticleButtonStyle(gameName, theme) {
  const articleBtns = document.querySelectorAll('.article-btn');
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

  console.log("Game name for styling:", gameName);

  // Use CSS variable that matches the game
  const primaryColor = `var(--color-${gameName}-primary)`;

  articleBtns.forEach(btn => {
    // Set inline styles using CSS variables
    btn.style.borderColor = primaryColor;
    btn.style.color = primaryColor;

    // Add CSS variable for hover effect
    btn.style.setProperty('--hover-bg-color', primaryColor);

    // Add class for hover effects
    btn.classList.add('article-btn-themed');
  });
}