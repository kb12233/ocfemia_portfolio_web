/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        "sm": "480px",
      },
      colors: {
        "custom_gray": "#353535",
        "custom_gray2": "#555555"
      }
    },
    fontFamily: {
      nunito: ["Nunito", "sans-serif"],
      jbmono: ["JetBrains Mono", "monospace"],
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ["light"],
  }
}

