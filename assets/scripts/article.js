import categoryThemes from './variables.js';
import { setArticleButtonStyle } from "./modules/articleButton.js";
import { setHamburgerBtnStyle } from "./modules/hamburgerButton.js";
import { setArticleSidebarBtnStyle } from "./modules/articleSidebarBtn.js";
import { getGameFromBreadcrumbIndex, setBreadcrumbsStyle } from "./modules/breadcrumbs.js";

document.addEventListener('DOMContentLoaded', function () {
  // Only run on article pages (check URL path)
  if (!window.location.pathname.includes('/articles/')) {
    return;
  }

  // Get game name from breadcrumbs to apply proper theming
  const currentGameSection = getGameFromBreadcrumbIndex();
  let theme = categoryThemes['default'];
  const mainContent = document.querySelector('#main-content');

  // Apply game-specific theming based on breadcrumb detection
  switch(currentGameSection) {
    case 'Yalla Live':
      theme = categoryThemes['Yalla Live'];
      break;
    case 'Yalla Ludo':
      theme = categoryThemes['Yalla Ludo'];
      break;
    default:
      theme = categoryThemes['default'];
  }

  // Apply dynamic theming to the main content section
  mainContent.style.setProperty('--color-cta', theme.primary);
  mainContent.style.setProperty('--category-theme-primary', theme.primary);
  mainContent.style.setProperty('--category-theme-secondary', theme.secondary);

  // Style breadcrumbs
  setBreadcrumbsStyle(theme);
  // Apply eFootball theming to article buttons  
  setArticleButtonStyle(theme);
  // Apply theming to hamburger button
  setHamburgerBtnStyle(theme);
  // Apply dynamic theming to sidebar buttons
  setArticleSidebarBtnStyle(theme);

  // Apply dynamic theming to article body links
  // const articleContainer = document.querySelector('.article');
  // if (articleContainer) {
  //   articleContainer.classList.add(`default-themed`);
  // }

  // Handle window resize for responsive banner images
  // window.addEventListener('resize', function () {
  //   if (categoryName && categoryThemes[categoryName]) {
  //     const theme = categoryThemes[categoryName];
  //     const heroSection = document.querySelector('[data-hero-section]');

  //     if (heroSection && theme.bannerImage) {
  //       const isMobile = window.innerWidth <= 768;
  //       let bannerImage;

  //       if (categoryName === 'eFootball™') {
  //         bannerImage = isMobile ? '{{settings.efootball_banner_mobile}}' : theme.bannerImage;
  //       } else if (categoryName === 'eBaseball™: MLB PRO SPIRIT') {
  //         bannerImage = isMobile ? '{{settings.blockman_banner_mobile}}' : theme.bannerImage;
  //       } else {
  //         bannerImage = theme.bannerImage;
  //       }

  //       if (bannerImage) {
  //         heroSection.style.backgroundImage = `url(${bannerImage})`;
  //       }
  //     }
  //   }
  // });
});