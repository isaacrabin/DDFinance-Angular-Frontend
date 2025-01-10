/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    colors:{
      white:'#ffffff',
      primaryBlue: {
        50: '#8A9ECC',    // Lightest shade
        100: '#5E8BBF',
        200: '#3A6FB4',    // Slightly darker shade
        300: '#1E3D80',    // Base color
        400: '#1B3565',
        500: '#15284C',
        600: '#10204C',    // Darkest shade
      },

    },
    extend: {},
  },
  plugins: [],
}
