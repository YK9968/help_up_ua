import { NavLink } from "react-router-dom";
import ButtonContainer from "../ButtonContainer/ButtonContainer";
import Logo from "../Logo/Logo";

function Navigation() {
  const activePage = ({ isActive }: { isActive: boolean }) =>
    isActive ? "text-blue-500" : "text-black";

  return (
    <div className="flex justify-between items-center  py-6 mb-12 border-b border-borderColor border-opacity-10">
      <Logo />
      <div className="flex gap-10">
        <NavLink to="/" className={activePage}>
          Home
        </NavLink>
        <NavLink to="/opportunities" className={activePage}>
          Opportunity
        </NavLink>
      </div>
      <ButtonContainer />
    </div>
  );
}

export default Navigation;
