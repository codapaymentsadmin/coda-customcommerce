// Use querySelectorAll to get all button elements
export function setViewMoreBtnStyle(theme) {
  const viewMoreBtns = document.querySelectorAll('.view-more-btn');

  viewMoreBtns.forEach(btn => {
    // Set inline styles using CSS variables
    btn.style.borderColor = theme.primary;
    btn.style.color = theme.primary;

    // Add CSS variable for hover effect
    btn.style.setProperty('--hover-bg-color', theme.primary);

    // Add class for hover effects
    btn.classList.add('view-more-btn-themed');
  });
}