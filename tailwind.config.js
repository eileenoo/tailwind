/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors(theme) {
        return {
          "primary-headline": "#29293a",
          "primary-body": "#000",
          "primary-bg": theme.colors.gray[100],
          "primary-dark-headline": "#E1E1E6",
          "primary-dark-body": "#fff",
          "primary-dark-bg": theme.colors.slate[600],
        };
      },
      fontFamily: {
        sans: [
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
        serif: [
          "ui-serif",
          "Georgia",
          "Cambria",
          "Times New Roman",
          "Times",
          "serif",
        ],
      },
    },
  },
  plugins: [require("tailwindcss-debug-screens")],
};
