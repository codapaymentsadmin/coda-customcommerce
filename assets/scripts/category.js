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
		const categoryTitle = document.getElementById('category-title')?.textContent?.trim();
		const gameTitle = sessionStorage.getItem('currentGameTitle') || document.querySelectorAll('ol.breadcrumbs > li')[0]?.textContent?.trim();
		const pagePath = window.location.pathname.toLowerCase();
		let theme;

		console.log("categoryTitle:", categoryTitle);

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
		
		// Set banner image with responsive handling
		setHeroSection(theme);
		// Set game logo
		if (categoryTitle === gameTitle) {
			setGameLogo(theme);
		}
    // Apply eFootball theming to subsection buttons
    setSubsectionBtnStyle(categoryTitle, 'primary');
    // Apply game-specific theming to article buttons
    setArticleButtonStyle(categoryTitle, 'primary');
    // Apply game-specific theming to view more buttons
    setViewMoreBtnStyle(categoryTitle, 'primary');
    // Apply game-specific theming to contact support button
    setContactBtnStyle(categoryTitle, 'primary');
    // Apply game-specific theming to support icon background
    setSupportIconStyle(categoryTitle, 'primary');
    // Style search button
    setSearchBtnStyle(theme);

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