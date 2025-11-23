// Category-specific theme colors and assets (map category names to manifest settings)
const categoryThemes = {
  'eFootball™': {
    primary: window.zendeskThemeSettings?.efootball?.primary || '#1E40AF',
    secondary: window.zendeskThemeSettings?.efootball?.secondary || '#3B82F6',
    bannerImage: window.zendeskThemeSettings?.efootball?.bannerImage || '',
    bannerMobile: window.zendeskThemeSettings?.efootball?.bannerMobile || '',
    logo: window.zendeskThemeSettings?.efootball?.logo || ''
  },
  'Blockman go': {
    primary: window.zendeskThemeSettings?.blockman?.primary || '#1E40AF',
    secondary: window.zendeskThemeSettings?.blockman?.secondary || '#3B82F6',
    bannerImage: window.zendeskThemeSettings?.blockman?.bannerImage || '',
    bannerMobile: window.zendeskThemeSettings?.blockman?.bannerMobile || '',
    logo: window.zendeskThemeSettings?.blockman?.logo || ''
  },
  'Moba 5v5': {
    primary: window.zendeskThemeSettings?.moba?.primary || '#1E40AF',
    secondary: window.zendeskThemeSettings?.moba?.secondary || '#3B82F6',
    bannerImage: window.zendeskThemeSettings?.moba?.bannerImage || '',
    bannerMobile: window.zendeskThemeSettings?.moba?.bannerMobile || '',
    logo: window.zendeskThemeSettings?.moba?.logo || ''
  },
  'Obey Me!': {
    primary: window.zendeskThemeSettings?.obeyme?.primary || '#000',
    secondary: window.zendeskThemeSettings?.obeyme?.secondary || '#fff',
    bannerImage: window.zendeskThemeSettings?.obeyme?.bannerImage || '',
    bannerMobile: window.zendeskThemeSettings?.obeyme?.bannerMobile || '',
    logo: window.zendeskThemeSettings?.obeyme?.logo || ''
  },
  'default': {
    primary: window.zendeskThemeSettings?.default?.primary || '#000',
    secondary: window.zendeskThemeSettings?.default?.secondary || '#fff',
    bannerImage: '',
    bannerMobile: '',
    logo: ''
  }
};

export default categoryThemes