module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'mobile': '375px',
      'tablet': '744px',
      'desktop': '1440px'
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '10px',
        'mobile': '10px',
        'tablet': '40px',
        'desktop': '80px'
      },
      maxWidth: {
        'mobile': '375px',
        'tablet': '744px',
        'desktop': '1440px'
      }
    },
    extend: {
      fontFamily: {
        sans:['"Roboto"']
      }
    },
  },
  plugins: [],
}
