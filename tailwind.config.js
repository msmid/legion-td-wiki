const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        'text-primary': colors.gray['400'],
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        winter: {
          ...require('daisyui/src/theming/themes')['winter'],
          primary: colors.sky[500],
        },
      },
    ],
  },
};
