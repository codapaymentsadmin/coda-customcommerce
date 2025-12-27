/**
 * Apply theme styling to breadcrumbs
 * @param {*} theme - Theme object from categoryThemes in variables.js
 */
export function setBreadcrumbsStyle(theme) {
  const breadcrumbsNav = document.querySelector('.custom-breadcrumbs');

  if (!breadcrumbsNav) {
    console.warn('Breadcrumbs navigation not found');
    return;
  }

  // Get all breadcrumb items (li elements)
  //const breadcrumbItems = breadcrumbsNav.querySelectorAll('ol.breadcrumbs > li');

  // Get all breadcrumb links
  const breadcrumbLinks = breadcrumbsNav.querySelectorAll('a');

  // Check if breadcrumbs have rendered
  if (breadcrumbLinks.length === 0) {
    return;
  }

  // Debug: Log breadcrumb links
  // breadcrumbLinks.forEach((link, index) => {
  //   console.log(`Link ${index}:`, link.textContent.trim(), '- href:', link.href);
  // });

  // Style all breadcrumb links
  breadcrumbLinks.forEach((breadcrumb) => {
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