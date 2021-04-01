module.exports = {
  purge: [],
  darkMode: 'media',
  theme: {
    fontFamily: {
      'sans': ['poppins'],
      'mono': ['nova mono']
    },
    extend: {
      gridTemplateColumns: {
        'dashboard': '300px 1fr'
      },
      width: {
        'dashboard-navbar': '300px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
