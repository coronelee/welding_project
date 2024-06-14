/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        showMain: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        showNav: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        showBase: {
          '0%': { height: '0' },
          '100%': { height: '100%' },
        },
        showEnterCodeForm: {
          '0%': { height: '0' },
          '100%': { height: '85%' },
        },
      },
      fontFamily: {
        Manrope_Bold: ["Manrope_Bold", "sans-serif"],
        Manrope_Medium: ["Manrope_Medium", "sans-serif"],
        Manrope_ExtraBold: ["Manrope_Bold", "sans-serif"],
      },
    },
  },
  plugins: [],
}