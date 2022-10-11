// /** @type {import("tailwindcss").Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
    },
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      // '2xl': '1400px',
    },
    extend: {
      colors: {
        main: '#f6891f',
        'header-top': '#cd1818', // transparent: 'transparent',
        // current: 'currentColor',
        // 'white': '#ffffff',
        // 'purple': '#3f3cbb',
        // 'midnight': '#121063',
        // 'metal': '#565584',
        // 'tahiti': '#3ab7bf',
        // 'silver': '#ecebff',
        // 'bubble-gum': '#ff77e9',
        // 'bermuda': '#78dcca',
        // 'black' : '#000000',
      },

      backgroundImage: {
        'main-logo':
          "url('https://fptshop.com.vn/Content/v4/images/iconhd.png?v=3')",
      },
    },
  },
  plugins: [],
}
