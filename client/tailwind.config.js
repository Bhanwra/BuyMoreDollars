module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'

  theme: {
    extend: {
      colors: {
        'theme-colors': {
          'dark-green': '#39603c',
          'light-green': '#89b187'
        }
      },
      zIndex: {
        '-10': '-10',
        '-20': '-20',
        '-30': '-30',
      }
    },
  },

  variants: {
    extend: {},
  },
  plugins: [],
}