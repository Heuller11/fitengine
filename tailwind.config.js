/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-heavy': '#292D32',
        'dark-medium': '#313C48',
        'dark-light': '#4E5257',
        'primary-heavy': '#084B9E',
        'primary-light': '#4793F1'
      },
      borderRadius: {
        'large': '16px',
        'regular': '10px',
        'default': '6px'
      }
    },
  },
  plugins: [

  ],
}
