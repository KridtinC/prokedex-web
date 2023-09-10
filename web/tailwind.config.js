/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        progress: {
          from: {
            width: 0
          }
        }
      },
      animation: {
        progress: 'progress 1000ms ease-in-out 1'
      }
    },
  },
  plugins: [],
}
