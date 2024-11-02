import { NavLink } from "react-router-dom";

const Logo = () => {
  return (
    <NavLink className="font-bold text-xl" to="/">
      HelpUp<span className="text-blue-500">U</span>
      <span className="text-yellow-400">A</span>
    </NavLink>
  );
};

export default Logo;
