/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js, jsx, ts, tsx}"],
  theme: {
    fontFamily: {
      Finlandica: ["Finlandica", "sans-serif"],
      Poppins: ["Poppins", "sans-serif"],
      "Roboto Condensed": ["Roboto Condensed", "sans-serif"],
    },
    extend: {
      boxShadow: {
        "3xl": "3px 9px 22px 0px rgba(0,0,0,0.44)",
        "5xl": "1px 8px 16px 4px rgba(0,0,0,0.5)",
      },
    },
  },
  plugins: [],
};
