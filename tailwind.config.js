/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: { 
    extend: {
      colors: {
        textGreen: "#1A411D",
        textDarkGreen: "#112413",
        textBlack: "#000000",
        screenBackGround: "#FDF9EC",
        backGroundGrey: "#FBFBFB",
        lightgreen: "#D5FFD7",
        darkGreen: "#2BAE3A",
        buttonGreen: "#7BE586",
        buttonRed: "#E57B7B",
        borderGreen: "#4DC45A",
        borderRed: "#C44D4D"
      }
  
    } 
  },
  plugins: [],
};