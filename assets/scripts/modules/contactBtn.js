// Use querySelectorAll to get all button elements
export function setContactBtnStyle(gameName, theme) {
  const contactBtns = document.querySelectorAll('.contact-support-btn');
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

  contactBtns.forEach(btn => {
    // Remove default classes
    btn.classList.remove('bg-cta/80', 'hover:bg-cta');

    // Set inline styles using CSS variables
    btn.style.backgroundColor = primaryColor;
    btn.style.opacity = '0.8';
    btn.style.color = 'white';

    // Add CSS variable for hover effect
    btn.style.setProperty('--hover-bg-color', primaryColor);

    // Add class for hover effects
    btn.classList.add('contact-btn-themed');
  });
}