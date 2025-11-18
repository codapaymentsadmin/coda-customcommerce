// Use querySelectorAll to get all button elements
export function setContactBtnStyle(theme) {
  const contactBtns = document.querySelectorAll('.contact-support-btn');

  contactBtns.forEach(btn => {
    // Remove default classes
    btn.classList.remove('bg-cta/80', 'hover:bg-cta');

    // Set inline styles using CSS variables
    btn.style.backgroundColor = theme.primary;
    btn.style.opacity = '0.8';
    btn.style.color = 'white';

    // Add CSS variable for hover effect
    btn.style.setProperty('--hover-bg-color', theme.primary);

    // Add class for hover effects
    btn.classList.add('contact-btn-themed');
  });
}