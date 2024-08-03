/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        mainColor: '#1ABC9C',
        secColor: '#2C3E50',
      },
    },
  },
  plugins: [],
}