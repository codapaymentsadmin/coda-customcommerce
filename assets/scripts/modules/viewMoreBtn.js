// Use querySelectorAll to get all button elements
export function setViewMoreBtnStyle(gameName, theme) {
  const viewMoreBtns = document.querySelectorAll('.view-more-btn');
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

  viewMoreBtns.forEach(btn => {
    // Set inline styles using CSS variables
    btn.style.borderColor = primaryColor;
    btn.style.color = primaryColor;

    // Add CSS variable for hover effect
    btn.style.setProperty('--hover-bg-color', primaryColor);

    // Add class for hover effects
    btn.classList.add('view-more-btn-themed');
  });
}