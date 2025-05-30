/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Ensure paths match your project structure
  theme: {
    extend: {
      colors: {
        "primary": "#2B892E", // Ensure this matches your intended color
      },
      screens: {
        sm: '360px',
      }
    },
  },
  plugins: [],
};