/**
 *
 * @param {*} theme
 * Get from categoryThemes in variables.js
 * @param {boolean} removeFirstTwo - Whether to remove the first two breadcrumb items (default: false)
 */
export function setBreadcrumbsStyle(theme, removeFirstTwo = false) {
  const breadcrumbsNav = document.querySelector('.custom-breadcrumbs');

  if (!breadcrumbsNav) {
    console.warn('Breadcrumbs navigation not found');
    return;
  }

  // Get all breadcrumb list items (li elements)
  const breadcrumbItems = breadcrumbsNav.querySelectorAll('ol.breadcrumbs > li');

  // Check if breadcrumbs have rendered
  if (breadcrumbItems.length === 0) {
    console.warn('Breadcrumb items not found or not yet rendered');
    return;
  }

  // Remove the first two breadcrumb items from the DOM if specified
  if (removeFirstTwo) {
    breadcrumbItems.forEach((item, index) => {
      if (index < 2) {
        item.remove();
      }
    });
  }

  // Get remaining breadcrumb links after removal
  const remainingLinks = breadcrumbsNav.querySelectorAll('a');
  console.log("remainingLinks:", remainingLinks);

  // Store game title - if removed first two, use index 0, otherwise use index 2
  const gameTitleIndex = removeFirstTwo ? 0 : 2;
  sessionStorage.setItem('currentGameTitle', remainingLinks[gameTitleIndex]?.textContent.trim() || '');

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