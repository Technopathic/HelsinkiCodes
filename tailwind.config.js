module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './data/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
      'grayBrand': '#EEEEEE',
      'darkGrayBrand': '#222222',
      'whiteBrand': '#FFFFFF',
      'blackBrand': '#000000',
      'divider': 'rgba(209, 213, 219, 1)',
      'twitter': '#1da1f2',
      'google': '#ea4335',
      'github': '#333333',
      'discord': '#7289da',
      'twitch': '#9146ff',
      'spotify': '#1db954',
      'instagram': '#e1306c',
      'facebook': '#1877f2',
      'linkedin': '#0077b5',
      'youtube': '#ff0000',
      'flipboard': '#e12828',
      'lightBrandOne': '#f3f7fc',
      'hcRedBrand': '#FF6665',
      'hcBlueBrand': '#31475e',
      'hcGrayBrand': '#333333',
      'hcDarkGrayBrand': '#282e38',
    }),
    boxShadow: theme => ({
      'md': '0px 0px 8px 0px rgba(0, 0, 0, 0.05)',
      'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      'olg': '0 10px 15px -3px rgba(0, 0, 0, 0.03), 0 4px 6px -2px rgba(0, 0, 0, 0.03)',
      'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      'hcRedBrand': '-8px 8px 0px 0px #FF6665',
      'hcGrayBrand': '-8px 8px 0px 0px #333333',
      'hcBlueBrand': '-8px 8px 0px 0px #31475e'
    }),
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
