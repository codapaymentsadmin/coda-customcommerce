import categoryThemes from './variables.js';
import { setArticleButtonStyle } from "./modules/articleButton.js";
import { setBreadcrumbsStyle } from "./modules/breadcrumbs.js";
import { setContactBtnStyle } from "./modules/contactBtn.js";
import { setGameLogo } from "./modules/gameLogo.js";
import { setHeroSection } from "./modules/heroSection.js";
import { setSearchBtnStyle } from "./modules/searchButton.js";
import { setSubsectionBtnStyle } from "./modules/subsectionBtn.js";
import { setSupportIconStyle } from "./modules/supportIcon.js";
import { setViewMoreBtnStyle } from "./modules/viewMoreBtn.js";

document.addEventListener('DOMContentLoaded', function () {
		// Only run on category pages (check URL path)
		if (!window.location.pathname.includes('/categories/')) {
			return;
		}

		// Get category name from the page title
		const categoryTitle = document.getElementById('category-title')?.textContent.trim();
		let theme = categoryThemes['default'];

		// Apply game-specific theming based on category name
		if (categoryTitle === 'Yalla Live') {
			theme = categoryThemes['Yalla Live'];
		} else if (categoryTitle === 'Yalla Ludo') {
			theme = categoryThemes['Yalla Ludo'];
		}

		// Set game logo
		setGameLogo(theme)
		// Set banner image with responsive handling
		setHeroSection(theme);
    // Style breadcrumbs
    setBreadcrumbsStyle(theme);
    // Style search button
    setSearchBtnStyle(theme, false);
    // Apply eFootball theming to subsection buttons
    setSubsectionBtnStyle(theme);
    // Apply game-specific theming to article buttons
    setArticleButtonStyle(theme);
    // Apply game-specific theming to view more buttons
    setViewMoreBtnStyle(theme);
    // Apply game-specific theming to contact support button
    setContactBtnStyle(theme);
    // Apply game-specific theming to support icon background
    setSupportIconStyle(theme);
	});