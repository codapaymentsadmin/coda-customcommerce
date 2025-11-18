import categoryThemes from './variables.js';
import { setArticleButtonStyle } from "./modules/articleButton.js";
import { setContactBtnStyle } from "./modules/contactBtn.js";
import { setGameLogo } from "./modules/gameLogo.js";
import { setHeroSection } from "./modules/heroSection.js";
import { setSearchBtnStyle } from "./modules/searchButton.js";
import { setSubsectionBtnStyle } from "./modules/subsectionBtn.js";
import { setSupportIconStyle } from "./modules/supportIcon.js";
import { setViewMoreBtnStyle } from "./modules/viewMoreBtn.js";

document.addEventListener('DOMContentLoaded', function () {
		// Get category name from the page title or breadcrumbs
		let theme = categoryThemes['default'];
		
		// Set banner image with responsive handling
		setHeroSection(theme);
    // Style search button
    setSearchBtnStyle(theme);
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

		// Handle window resize for responsive banner images
		// window.addEventListener('resize', function () {
		// 	const heroSection = document.querySelector('[data-hero-section]');
		// 	if (!heroSection) return;

		// 	const isMobile = window.innerWidth <= 768;

		// 	if (categoryTitle?.includes('eFootball™') || pagePath.includes('efootball')) {
		// 		const theme = categoryThemes['eFootball™'];
		// 		const bannerImage = isMobile ? '{{settings.efootball_banner_mobile}}' : theme.bannerImage;
		// 		if (bannerImage) {
		// 			heroSection.style.backgroundImage = `url(${bannerImage})`;
		// 		}
		// 	}

		// 	if (categoryTitle?.includes('eBaseball™: MLB PRO SPIRIT') || pagePath.includes('ebaseball')) {
		// 		const theme = categoryThemes['eBaseball™: MLB PRO SPIRIT'];
		// 		const bannerImage = isMobile ? '{{settings.blockman_banner_mobile}}' : theme.bannerImage;
		// 		if (bannerImage) {
		// 			heroSection.style.backgroundImage = `url(${bannerImage})`;
		// 		}
		// 	}
		// });
	});