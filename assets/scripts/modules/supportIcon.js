// Exception, can use querySelector
export function setSupportIconStyle(gameName, theme) {
  const supportIconBg = document.querySelector('.support-icon-bg');
  let currentGameTitle = sessionStorage.getItem('currentGameTitle');

  if (!supportIconBg) return;

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

  // Set inline styles using CSS variables
  supportIconBg.style.backgroundColor = primaryColor;
  supportIconBg.style.opacity = '0.85';

  // Add CSS variable for hover effect
  supportIconBg.style.setProperty('--hover-bg-color', primaryColor);

  // Add class for hover effects
  supportIconBg.classList.add('support-icon-themed');
}