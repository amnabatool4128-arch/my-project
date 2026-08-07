/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        accent: "var(--color-accent)",
        "accent-light": "var(--color-accent-light)",
        "accent-hover": "var(--color-accent-hover)",
        dark: "var(--color-dark)",
        grayCustom: "var(--color-gray)",
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
        heading: ["Cormorant Garamond", "serif"],
      },
    },
  },
  plugins: [],
};
