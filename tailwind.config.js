/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        colorBody: "#EAEAEA",
        colorContainer: "#F7F7F5",
        cardBlack: "#0F1412",
        colorButton: "#CDFB47",
      },
    },
  },
  plugins: [],
};
