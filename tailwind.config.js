/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#6D28D9",
          dark: "#00004d",
        },
      },
    },
  },
  plugins: [],
};
