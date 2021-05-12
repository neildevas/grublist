module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        '2/7': '28.5714286%'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
