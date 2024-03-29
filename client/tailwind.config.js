module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'

  theme: {
    extend: {
      colors: {
        'theme-colors': {
          'dark-green': '#39603c',
          'light-green': '#89b187',

          'dark': '#114C1B',
          'light': '#1A8433',

          'd-gold': '#976A02',
          'l-gold': '#FDB615'
        }
      },
      zIndex: {
        '-10': '-10',
        '-20': '-20',
        '-30': '-30',
      },
      boxShadow: {
        top: '0 -3px 6px -1px rgba(0, 0, 0, 0.1), 0 -3px 6px -1px rgba(0, 0, 0, 0.06)',
      }
    },
  },

  variants: {
    extend: {},
  },
  plugins: [],
}