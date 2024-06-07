/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    
  ],
  safelist: [
    /^bg-/,
],
  theme: {
    extend: {},
  },
  plugins: [],
}

