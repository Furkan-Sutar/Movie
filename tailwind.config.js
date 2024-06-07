/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.no-scrollbar-x': {
          'overflow-x': 'hidden',
        },
      });
    },
    require('tailwind-scrollbar-hide'),
  ],
}
