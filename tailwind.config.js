/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#27214D",
        100: "#5D577E"},
        secondary: {
          DEFAULT: "#FFA451",
          100: "#FFF2E7",
          200: "#F08626"
        },
        black: {
          DEFAULT: "#000",
          100: "#1E1E2D",
          200: "#232533",
        },
        gray: {
          100: "#F7F5F5",
          200: "#F3F4F9"
        },
      },
      fontFamily: {
        bregular: ['BadScript-Regular', "sansserif"],
        tthin: ["TT-Norms-Pro-Thin", "sans-serif"],
        textralight: ["TT-Norms-Pro-ExtraLight", "sans-serif"],
        tlight: ["TT-Norms-Pro-Light", "sans-serif"],
        tregular: ["TT-Norms-Pro-Regular", "sans-serif"],
        tmedium: ["TT-Norms-Pro-Medium", "sans-serif"],
        tbold: ["TT-Norms-Pro-Bold", "sans-serif"],
        textrabold: ["TT-Norms-Pro-ExtraBold", "sans-serif"],
        tblack: ["TT-Norms-Pro-Black", "sans-serif"],
        bgthin: ["Brandon_Grotesque_thin", "sans-serif"],
        bglight: ["Brandon_Grotesque_light", "sans-serif"],
        bgregular: ["Brandon_Grotesque_regular", "sans-serif"],
        bgmedium: ["Brandon_Grotesque_medium", "sans-serif"],
        bgbold: ["Brandon_Grotesque_bold", "sans-serif"],
        bgblack: ["Brandon_Grotesque_black", "sans-serif"],

      },
    },
  },
  plugins: [],
};