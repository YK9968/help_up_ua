export const getClassNameForBtn = (props: string): string => {
  switch (props) {
    case "Registration":
      return "py-3 px-10 bg-buttonColor text-white rounded-3xl hover:bg-buttonHoverColor transition-all duration-150 ease-in-out ";
    case "Login":
      return "py-3 px-10 bg-transparent border border-borderColor  text-black rounded-3xl hover:border-buttonHoverColor transition-all duration-150 ease-in-out";
    case "Search":
      return "p-buttomFilterPadding bg-buttonColor text-white rounded-3xl hover:bg-buttonHoverColor transition-all duration-150 ease-in-out ";
    default:
      return "";
  }
};
