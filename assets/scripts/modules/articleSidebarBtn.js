/**
 * @param {*} theme
 * Get from categoryThemes in variables.js
 */
export function setArticleSidebarBtnStyle(theme) {
  const sidebarBtns = document.querySelectorAll('.article-sidebar-btn');
  sidebarBtns.forEach(btn => {
    if (btn.classList.contains('bg-cta')) {
      // Active button - use inline styles for dynamic theming
      btn.style.backgroundColor = theme.primary;
      btn.style.color = 'white';
    } else {
      // Inactive buttons - use inline styles for dynamic theming
      btn.style.borderColor = theme.primary;
      btn.style.color = theme.primary;
      btn.addEventListener('mouseenter', function () {
        this.style.backgroundColor = theme.primary;
        this.style.color = 'white';
      });
      btn.addEventListener('mouseleave', function () {
        this.style.backgroundColor = 'white';
        this.style.color = theme.primary;
      });
    }
  });
}