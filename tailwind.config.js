module.exports = {
  content: ["./index.html", "./src/**/*.jsx"],
  darkMode: "media", // 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: {
          200: "#DCDDDE",
          300: "#B9BBBE",
          400: "#A3A6AA",
          500: "#96989D",
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
