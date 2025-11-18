// Exception, can use querySelector
export function setSupportIconStyle(theme) {
  const supportIconBg = document.querySelector('.support-icon-bg');

  if (!supportIconBg) return;

  // Set inline styles using CSS variables
  supportIconBg.style.backgroundColor = theme.primary;
  supportIconBg.style.opacity = '0.85';

  // Add CSS variable for hover effect
  supportIconBg.style.setProperty('--hover-bg-color', theme.primary);
  // Add class for hover effects
  supportIconBg.classList.add('support-icon-themed');
}