import categoryThemes from './variables.js';
import { setArticleButtonStyle } from "./modules/articleButton.js";
import { getGameFromBreadcrumbIndex, setBreadcrumbsStyle } from "./modules/breadcrumbs.js";
import { setGameLogo } from "./modules/gameLogo.js";
import { setHeroSection } from "./modules/heroSection.js";
import { setHamburgerBtnStyle } from "./modules/hamburgerButton.js";
import { setSubsectionBtnStyle } from "./modules/subsectionBtn.js";
import { setSearchBtnStyle } from "./modules/searchButton.js";
import { setSupportIconStyle } from "./modules/supportIcon.js";

document.addEventListener('DOMContentLoaded', function () {
  // Only run on section pages (check URL path)
  if (!window.location.pathname.includes('/sections/')) {
    return;
  }

  // Get game name from breadcrumbs to apply proper theming
  const currentGameSection = getGameFromBreadcrumbIndex();
  let theme = categoryThemes['default'];
  const mainContent = document.querySelector('#main-content');

  // Apply navbar/footer branding for Yalla Live (applies to all section pages)
  if (currentGameSection === "Yalla Live") {
    const contactSupportSection = document.getElementById('contact-support-section');
    if (contactSupportSection) {
      contactSupportSection.classList.remove('hidden');
    }
  }

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
  
  setSearchBtnStyle(theme, false);
  // Style the breadcrumbs
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
  // Apply theming to support icon background
  setSupportIconStyle(theme);
});