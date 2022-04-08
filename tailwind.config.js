const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.jsx"],
  darkMode: "media", // 'media' or 'class'
  theme: {
    boxShadow: {
      sm: "0 1px 0 rgba(4,4,5,0.2),0 1.5px 0 rgba(6,6,7,0.05),0 2px 0 rgba(4,4,5,0.05)",
      md: "0 4px 4px rgba(0,0,0,0.16)",
      lg: "0 8px 16px rgba(0,0,0,0.24)",
    },
    extend: {
      fontFamily: {
        sans: ["Whitney", "Open Sans", ...defaultTheme.fontFamily.sans],
        title: ["Ginto", "Open Sans", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        brand: "#5865F2",
        gray: {
          200: "#DCDDDE",
          300: "#B9BBBE",
          400: "#A3A6AA",
          500: "#96989D",
          550: "#4f545c",
          600: "#40444B",
          700: "#36393F",
          800: "#2F3136",
          900: "#202225",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
