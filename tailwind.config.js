/* eslint-disable global-require */
module.exports = {
  purge: [
    './src/**/*.tsx',
    './src/**/*.ts',
  ],
  darkMode: false,
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
