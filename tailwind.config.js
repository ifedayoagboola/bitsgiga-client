/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primarygray: "#f8f8f8",
        qblack: "#222222",
        qyellow: "#FFBB38",
        qred: "#EF262C",
        qgray: "#797979",
        qblacktext: "#1D1D1D",
        qgraytwo: "#8E8E8E",
        "qgray-border": "#EFEFEF",
        "qblue-white": "#CBECFF",
      },
    },
  },
  variants: {
    extend: {
      textColor: ["focus-within"],
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
