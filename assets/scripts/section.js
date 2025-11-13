import categoryThemes from './variables.js';
import { setArticleButtonStyle } from "./modules/articleButton.js";
import { setBreadcrumbsStyle } from "./modules/breadcrumbs.js";
import { setGameLogo } from "./modules/gameLogo.js";
import { setHeroSection } from "./modules/heroSection.js";
import { setHamburgerBtnStyle } from "./modules/hamburgerButton.js";
import { setSubsectionBtnStyle } from "./modules/subsectionBtn.js";

document.addEventListener('DOMContentLoaded', function () {
  // Get category name from the page title or breadcrumbs
  // const categoryTitle = document.getElementById('section-title')?.textContent?.trim();
  const sectionTitle = document.getElementById('section-title')?.textContent?.trim();
  const gameTitle = sessionStorage.getItem('currentGameTitle') || document.querySelectorAll('ol.breadcrumbs > li')[0]?.textContent?.trim();
  let theme;
  const mainContent = document.querySelector('#main-content');

  switch(gameTitle){
    case 'eFootball™':
      theme = categoryThemes['eFootball™'];
      break;
    case 'Blockman go':
      theme = categoryThemes['Blockman go'];
      break;
    case 'Moba 5v5':
      theme = categoryThemes['Moba 5v5'];
      break;
    default:
      theme = categoryThemes['default'];
  }

  // Apply dynamic theming to the main content section
  mainContent.style.setProperty('--color-cta', theme.primary);
  mainContent.style.setProperty('--category-theme-primary', theme.primary);
  mainContent.style.setProperty('--category-theme-secondary', theme.secondary);
  
  // Style the category link in breadcrumbs
  setBreadcrumbsStyle(theme);
  // Set banner image with responsive handling
  setHeroSection(theme);
  // Set logo
  if (sectionTitle === gameTitle) {
    setGameLogo(theme);
  }
  // Apply eFootball theming to subsection buttons
  setSubsectionBtnStyle(gameTitle, 'primary');
  // Apply eFootball theming to article buttons  
  setArticleButtonStyle(gameTitle, 'primary');
  // Apply theming to hamburger button
  setHamburgerBtnStyle(theme);

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