// Category-specific theme colors and assets (map category names to manifest settings)
const categoryThemes = {
  'Yalla Live': {
    primary: window.zendeskThemeSettings?.yalla_live.primary || '#00d8c9',
    secondary: window.zendeskThemeSettings?.yalla_live.secondary || '#e5fe8f',
    bannerImage: '',
    bannerMobile: '',
    logo: window.zendeskThemeSettings?.yalla_live.logo || ''
  },
  'Yalla Ludo': {
    primary: window.zendeskThemeSettings?.yalla_ludo.primary || '#00eac4',
    secondary: window.zendeskThemeSettings?.yalla_ludo.secondary || '#e5fe8f',
    bannerImage: '',
    bannerMobile: '',
    logo: window.zendeskThemeSettings?.yalla_ludo.logo || ''
  },
  'default': {
    primary: window.zendeskThemeSettings?.default.primary || '#00eac4',
    secondary: window.zendeskThemeSettings?.default.secondary || '#e5fe8f',
    bannerImage: '',
    bannerMobile: '',
    logo: ''
  }
};

export default categoryThemes;