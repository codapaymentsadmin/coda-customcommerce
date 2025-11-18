import categoryThemes from './variables.js';
import { setArticleButtonStyle } from "./modules/articleButton.js";
import { getGameFromBreadcrumbIndex, setBreadcrumbsStyle } from "./modules/breadcrumbs.js";
import { setGameLogo } from "./modules/gameLogo.js";
import { setHeroSection } from "./modules/heroSection.js";
import { setHamburgerBtnStyle } from "./modules/hamburgerButton.js";
import { setSubsectionBtnStyle } from "./modules/subsectionBtn.js";
import { setSearchBtnStyle } from "./modules/searchButton.js";

document.addEventListener('DOMContentLoaded', function () {
  // Get category name from the page title or breadcrumbs
  const navbarBrandName = document.getElementById('brand-name');
  const footerBrandName = document.getElementById('footer-brand-name');
  const sectionTitle = document.getElementById('section-title')?.textContent?.trim();
  const currentGameSection = getGameFromBreadcrumbIndex();
  let theme = categoryThemes['default'];
  const mainContent = document.querySelector('#main-content');

  if (currentGameSection === "eFootball™") {
    navbarBrandName.textContent = 'Web Store Help Center';
    footerBrandName.textContent = 'Web Store Help Center';
  }

  switch(sectionTitle){
    case 'eFootball™':
      theme = categoryThemes['eFootball™'];
      break;
    case 'Blockman Go':
      theme = categoryThemes['Blockman Go'];
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
  
  setSearchBtnStyle(theme);
  // Style the category link in breadcrumbs
  setBreadcrumbsStyle(theme);
  // Set banner image with responsive handling
  setHeroSection(theme);
  // Set logo
  setGameLogo(theme);
  // Apply eFootball theming to subsection buttons
  setSubsectionBtnStyle(theme);
  // Apply eFootball theming to article buttons  
  setArticleButtonStyle(theme);
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