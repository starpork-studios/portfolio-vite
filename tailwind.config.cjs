/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      body: ["Helvetica Neue"],
      heading: ["Helvetica Neue"],
      hatton: ["Hatton-Medium"],
    },
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      gridTemplateColumns: {
        "fit-7": "repeat(7, fit-content(100%))",
      },
    },
  },
  plugins: [],
};
