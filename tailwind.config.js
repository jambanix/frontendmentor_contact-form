/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "grey-900": "#2a4144",
        "grey-500": "#86a2a5",
        "white": "#ffffff",
        "green-600": "#0c7d69",
        "green-200": "#e0f1e8",
        "red": "d73c3c"
      }
    },
  },
  plugins: [],
}