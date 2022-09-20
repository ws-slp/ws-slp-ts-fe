/* eslint-disable node/no-unpublished-require */
const {fontFamily} = require('tailwindcss/defaultTheme');
module.exports = {
  mode: 'jit',
  content: [
    './src/lib/**/*.{jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['Work Sans', ...fontFamily.sans],
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('daisyui'),
  ],
};
