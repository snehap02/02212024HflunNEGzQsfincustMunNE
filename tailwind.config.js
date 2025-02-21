/** @type {import('tailwindcss').Config} **/
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        webBg: "#011E17",
        navText: "#CDFFF3",
        buttonHover: "#DAFF99",
        buySellBorder: "#6B8F71",
        forestGreen: "#003E1F",
        limeGreen: "#DAFF99",
        blueGreen: "#B2E2D6",
        darkGreen: "#002915",
        lightChartreuse: "#F1FFD9",
        sageGreen: "#6B8F71",
        pineGreen: "#012119",
        deepGreen: "#006D37",
        mayGreen: "#359846",
        darkJade: "#00371B",
        button: "#054D0F",
      },
      screens: {
        450: "450px",
        1424: "1424px",
      },
    },
  },
  plugins: [],
};
