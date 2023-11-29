/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mont: ["var(--font-mont)", ...fontFamily.sans],
      },
      colors: {
        dark: "#1b1b1b",
        light: "#f5f5f5",
        primary: "#BD1E51", // 189, 30, 81
        primaryDark: "#490B3D", // 73, 11, 61
        primaryAccent: "#F1B814", // 241, 184, 20
      },
      borderColor: {
        dark: "#1b1b1b",
      },
      animation: {
        'spin-slow' : 'spin 8s linear infinite'
      },
      backgroundImage:{
        circularLight: 'repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px, #f5f5f5 100px);'
      },
    },
  },
  plugins: [],
};
