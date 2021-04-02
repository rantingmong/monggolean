module.exports = {
  purge: [
    '@components/**/*.tsx',
    'pages/**/*.tsx'
  ],
  darkMode: 'media',
  theme: {
    fontFamily: {
      'sans': ['poppins'],
      'serif': ['arvo'],
      'mono': ['jetbrains mono']
    },
    extend: {
      gridTemplateColumns: {
        'dashboard': '300px 1fr',
        'dashboard-sm': '60px 1fr'
      },
      width: {
        'dashboard-navbar': '300px',
        'dashboard-navbar-sm': '60px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
