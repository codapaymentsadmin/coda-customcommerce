/**
 * 
 * @param {*} theme 
 * Get from categoryThemes in variables.js
 */
export function setBreadcrumbsStyle(theme) {
  const breadcrumbsNav = document.querySelector('.custom-breadcrumbs');

  if (!breadcrumbsNav) return;

  // Get all breadcrumb list items (li elements)
  const breadcrumbItems = breadcrumbsNav.querySelectorAll('ol.breadcrumbs > li');

  // Remove the first two breadcrumb items from the DOM
  breadcrumbItems.forEach((item, index) => {
    if (index < 2) {
      item.remove();
    }
  });

  // Get remaining breadcrumb links after removal
  const remainingLinks = breadcrumbsNav.querySelectorAll('a');

  sessionStorage.setItem('currentGameTitle', remainingLinks[0]?.textContent.trim() || '');

  // Style the remaining breadcrumb links
  remainingLinks.forEach((breadcrumb) => {
    breadcrumb.style.setProperty("--hover-color", theme.primary);
    breadcrumb.classList.add("category-themed");
    breadcrumb.classList.add("notranslate");
  });
}

export function getGameFromBreadcrumbIndex() {
  const breadcrumbItems = document.querySelectorAll('ol.breadcrumbs > li');
  return breadcrumbItems[2]?.textContent.trim() ?? '';
}
// Legacy
// const breadcrumbLinksElement = document.querySelectorAll('.custom-breadcrumbs ol.breadcrumbs li a');
// breadcrumbLinksElement.forEach(link => {
//   const linkText = link.textContent;
//   if (linkText.includes('eFootball™') || linkText.includes('eBaseball™: MLB PRO SPIRIT') || linkText.includes('Web Store Support')) {
//     link.classList.add('notranslate');
//   }
// });

// const categoryLink = breadcrumbLinks[index];
// if (categoryLink) {
//   categoryLink.style.setProperty('--hover-color', theme.primary);
//   categoryLink.classList.add('category-themed');
// }