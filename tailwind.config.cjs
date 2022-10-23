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
        main: '#ee4d2d',
        'header-top': '#cd1818', // transparent: 'transparent',
        'red-custom' : '#cd1817',
        'price-main': '#cb1c22',
        'price-mark': '#ef8573',
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
