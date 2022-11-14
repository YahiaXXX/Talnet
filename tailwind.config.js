/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      backgroundImage: {
        'bgBlue': "url('../src/assets/bgBlue.svg')",
        'cadre':"url('../src/assets/cadre.svg')"
      },
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
    animation: {
      slideup: 'slideup 1s ease-in-out',
      slidedown: 'slidedown 1s ease-in-out',
      slideleft: 'slideleft 1s ease-in-out',
      slideright: 'slideright 1s ease-in-out',
      wave: 'wave 1.2s linear infinite',
      slowfade: 'slowfade 2.2s ease-in-out',
    },
    keyframes: {
      slowfade: {
        from: { opacity: 0 },
        to: { opacity: 1 },
      },
      slideup: {
        from: { opacity: 0, transform: 'translateY(25%)' },
        to: { opacity: 1, transform: 'none' },
      },
      slidedown: {
        from: { opacity: 0, transform: 'translateY(-25%)' },
        to: { opacity: 1, transform: 'none' },
      },
      slideleft: {
        from: { opacity: 0, transform: 'translateX(-20px)' },
        to: { opacity: 1, transform: 'translateX(0)' },
      },
      slideright: {
        from: { opacity: 0, transform: 'translateX(20px)' },
        to: { opacity: 1, transform: 'translateX(0)' },
      },
      wave: {
        '0%': { transform: 'scale(0)' },
        '50%': { transform: 'scale(1)' },
        '100%': { transform: 'scale(0)' },
      },
    },
  },
  plugins: [],
};
