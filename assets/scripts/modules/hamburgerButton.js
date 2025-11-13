/**
 * 
 * @param {*} theme 
 * Get from categoryThemes in variables.js
 */
export function setHamburgerBtnStyle(theme) {
  const hamburgerBtn = document.getElementById('hamburger-btn');
  if (hamburgerBtn) {
    hamburgerBtn.style.backgroundColor = theme.primary;
    hamburgerBtn.style.borderColor = theme.primary;
  }
}