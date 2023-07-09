/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1d4ed8",
        secondary: "#4338ca",
        light: "#fafaf9",
        dark: "#1e293b",
      }
    },
  },
  plugins: [],
}

