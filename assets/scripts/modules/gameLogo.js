/**
 * 
 * @param {*} theme 
 * Get from categoryThemes in variables.js
 */
export function setGameLogo(theme) {
  const logoContainer = document.getElementById('game-logo');
  const logoImg = document.getElementById('game-logo-img');
  if (logoContainer && logoImg && theme.logo !== '') {
    logoImg.src = theme.logo;
    logoContainer.style.display = 'block';
  }
}