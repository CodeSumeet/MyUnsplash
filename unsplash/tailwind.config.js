/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        green: "#3DB46D",
        red: "#EB5757",
        redAlpha: "rgb(191, 58, 62, 0.7)",
        gray: "#BDBDBD",
      },
    },
  },
  plugins: [],
};
