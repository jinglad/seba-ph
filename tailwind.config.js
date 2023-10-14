/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3DA7AB",
        "light-primary": "rgba(34, 171, 176, 0.13)",
        secondary: "#26798C",
      },
    },
  },
  plugins: [],
};
