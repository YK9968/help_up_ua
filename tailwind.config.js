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
        cardOpportunityWidth: "853px",
        imgOpportunityWidth: "249px",
        titleOpportunityWidth: "493px",
        filterOpportunityWidth: "400px",
      },
      height: {
        cardOpportunityHeight: "343px",
        imgOpportunityHeight: "249px",
        titleOpportunityHeight: "78px",
        filterOpportunityHeight: "620px",
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
      padding: {
        buttomFilterPadding: "14px 100px",
      },
      borderRadius: {
        mainBorderImg: "50px",
      },
    },
  },
  plugins: [],
  filterOpportunityWidth: "",
};
