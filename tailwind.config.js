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
      width: {
        mainTextWidth: "595px",
      },
      fontSize: {
        mainTextSize: "80px",
      },
      lineHeight: {
        mainTextLineHeight: "82px",
      },
      margin: {
        textContainerMarginTop: "104px",
      },
      borderRadius: {
        mainBorderImg: "50px",
      },
    },
  },
  plugins: [],
};
