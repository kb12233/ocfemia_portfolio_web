/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        "sm": "480px",
      }
    },
    fontFamily: {
      nunito: ["Nunito", "sans-serif"],
      jbmono: ["JetBrains Mono", "monospace"],
    },
  },
  plugins: [],
}

