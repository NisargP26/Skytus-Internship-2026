/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        brand: '#0f766e',
        ink: '#1f2937',
      },
    },
  },
  plugins: [],
};
