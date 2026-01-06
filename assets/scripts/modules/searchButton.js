/**
 * 
 * @param {*} theme 
 * Get from categoryThemes in variables.js
 */
export function setSearchBtnStyle(theme, homepage = true) {
  const searchButton = document.querySelector('input[name="commit"][value="Search"]');
  if (searchButton) {
    searchButton.style.setProperty('background-color', theme.primary);
    searchButton.classList.add('category-themed');
    if (homepage) searchButton.style.setProperty('color', 'white')
    else searchButton.style.setProperty('color', 'black')
  }
}