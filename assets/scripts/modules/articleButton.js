/**
 *
 * @param {*} gameName
 * Get from categoryTitle from a specific page
 *
 * @param {*} theme
 * Get from categoryThemes in variables.js
 */
export function setArticleButtonStyle(theme) {
  const articleBtns = document.querySelectorAll('.article-btn');

  // Use CSS variable that matches the game

  articleBtns.forEach(btn => {
    // Set inline styles using CSS variables
    btn.style.borderColor = theme.primary;
    btn.style.color = theme.primary;

    // Add CSS variable for hover effect
    btn.style.setProperty('--hover-bg-color', theme.primary);

    // Add class for hover effects
    btn.classList.add('article-btn-themed');
  });
}