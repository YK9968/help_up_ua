/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        borderColor: "#191A15, opasity-10",
        buttonColor: "#3470FF",
        buttonHoverColor: "#255EE8",
      },
    },
  },
  plugins: [],
};
