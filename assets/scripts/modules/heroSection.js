/**
 * 
 * @param {*} theme 
 * Get from categoryThemes in variables.js
 */
export function setHeroSection(theme) {
  const heroSection = document.querySelector('[data-hero-section]')

  if (heroSection && (theme.bannerImage && theme.bannerMobile)) {
    const isMobile = window.innerWidth <= 475;
    const bannerImage = isMobile ? theme.bannerMobile : theme.bannerImage;

    if (bannerImage) {
      heroSection.style.backgroundImage = `url(${bannerImage})`;
      heroSection.style.backgroundSize = 'cover';
      heroSection.style.backgroundPosition = 'center center';
      heroSection.style.backgroundRepeat = 'no-repeat';
      heroSection.style.backgroundColor = '#00009d';
    }
  }
}

// Legacy
// const heroSection = document.querySelector('[data-hero-section]');
// if (heroSection && theme.bannerImage) {
//   const isMobile = window.innerWidth <= 475;
//   const bannerImage = isMobile ? '{{settings.efootball_banner_mobile}}' : theme.bannerImage;

//   if (bannerImage) {
//     heroSection.style.backgroundImage = `url(${bannerImage})`;
//     heroSection.style.backgroundSize = 'cover';
//     heroSection.style.backgroundPosition = 'center center';
//     heroSection.style.backgroundRepeat = 'no-repeat';
//     heroSection.style.backgroundColor = '#00009d';
//   }
// }