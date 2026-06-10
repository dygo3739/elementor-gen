// BizInZip Brand Configuration
const BRAND = {
  colors: {
    primary:     '#1CB7FF',
    primaryHover:'#00D5FF',
    primaryLight:'#F1FAFF',
    primaryDark: '#0099cc',
    green:       '#13CE66',
    greenHover:  '#0fb356',
    navy:        '#29335C',
    textDark:    '#0D0E12',
    textMid:     '#54494B',
    textMuted:   '#98AFB6',
    ghostBg:     '#F3F6FB',
    border:      'rgba(0,0,0,0.08)',
    white:       '#FFFFFF',
  },
  typography: {
    family: 'DM Sans',
    weights: { regular: '400', medium: '500', semibold: '600', bold: '700' },
    sizes: {
      h1:    { desktop: 56, tablet: 42, mobile: 32 },
      h2:    { desktop: 42, tablet: 36, mobile: 28 },
      h3:    { desktop: 28, tablet: 24, mobile: 22 },
      h4:    { desktop: 22, tablet: 20, mobile: 18 },
      lead:  { desktop: 20, tablet: 18, mobile: 17 },
      body:  { desktop: 16, tablet: 16, mobile: 15 },
      small: { desktop: 14, tablet: 14, mobile: 13 },
    },
  },
  spacing: {
    sectionPaddingTop:    80,
    sectionPaddingBottom: 80,
    containerWidth:       1200,
    columnGap:            30,
  },
  design: {
    borderRadius:  8,
    boxShadow:     'none',
    buttonPadding: '14px 32px',
  },
  buttons: {
    primary: {
      background: '#1CB7FF',
      backgroundHover: '#00D5FF',
      color: '#FFFFFF',
      borderRadius: 8,
      paddingTop: 14,
      paddingBottom: 14,
      paddingLeft: 32,
      paddingRight: 32,
      fontSize: 16,
      fontWeight: '600',
      border: 'none',
    },
    secondary: {
      background: 'transparent',
      backgroundHover: '#F1FAFF',
      color: '#1CB7FF',
      borderColor: '#1CB7FF',
      borderWidth: 2,
      borderRadius: 8,
      paddingTop: 12,
      paddingBottom: 12,
      paddingLeft: 30,
      paddingRight: 30,
      fontSize: 16,
      fontWeight: '600',
    },
    ghost: {
      background: '#F3F6FB',
      color: '#0D0E12',
      borderRadius: 8,
    },
  },
  // Elementor global color IDs (reference names only — JSON uses hex directly)
  elementorGlobals: {
    primaryColor:  'primary',
    secondaryColor:'navy',
    textColor:     'textDark',
    accentColor:   'green',
  },
};

// Export for use in other scripts
if (typeof module !== 'undefined') module.exports = BRAND;
