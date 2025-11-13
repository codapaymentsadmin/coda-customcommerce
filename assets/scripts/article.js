import categoryThemes from './variables.js';
import { setArticleButtonStyle } from "./modules/articleButton.js";
import { setHamburgerBtnStyle } from "./modules/hamburgerButton.js";
import { setArticleSidebarBtnStyle } from "./modules/articleSidebarBtn.js";

document.addEventListener('DOMContentLoaded', function () {
  // Extract category name from breadcrumbs
  const categoryTitle = document.getElementById('category-title')?.textContent?.trim();
  let gameName;
  let theme;
  const mainContent = document.querySelector('#main-content');

  switch(categoryTitle){
    case 'eFootball™':
      gameName = 'efootball';
      theme = categoryThemes['eFootball™'];
      break;
    case 'Blockman go':
      gameName = 'blockman';
      theme = categoryThemes['Blockman go'];
      break;
    case 'Moba 5v5':
      gameName = 'moba';
      theme = categoryThemes['Moba 5v5'];
      break;
    default:
      gameName = 'default';
      theme = categoryThemes['default'];
  }

  // Apply dynamic theming to the main content section
  mainContent.style.setProperty('--color-cta', theme.primary);
  mainContent.style.setProperty('--category-theme-primary', theme.primary);
  mainContent.style.setProperty('--category-theme-secondary', theme.secondary);
  
  // Apply eFootball theming to article buttons  
  setArticleButtonStyle(categoryTitle, 'primary');
  // Apply theming to hamburger button
  setHamburgerBtnStyle(theme);
  // Apply dynamic theming to sidebar buttons
  setArticleSidebarBtnStyle(theme);

  // Apply dynamic theming to article body links
  const articleContainer = document.querySelector('.article');
  if (articleContainer) {
    articleContainer.classList.add(`${gameName}-themed`);
  }

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