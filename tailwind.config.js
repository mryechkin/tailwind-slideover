module.exports = {
  purge: ['./src/**/*.js', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {},
  variants: {},
  plugins: [require('@tailwindcss/forms')],
};
