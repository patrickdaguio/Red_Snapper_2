/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{vue,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#25303B",
        secondary: "#148FCF",
        tertiary: "#63C1FF",
      },
      fontFamily: {
        sans: ["Lato", ...defaultTheme.fontFamily.sans],
      },
      spacing: {
        11.5: "46px",
        15: "60px",
        30: "120px",
        70: "280px",
      },
      fontSize: {
        26: ["26px", "32px"],
      },
      lineHeight: {
        13: "52px",
      },
    },
  },
  plugins: [],
};
