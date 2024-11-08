/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "serif"]
      },
      colors: {
        gray: "#666565",
        orange: "#ED5221",
        'dark-blue': "#1C1E25"
      }
    },
  },
  plugins: [],
}