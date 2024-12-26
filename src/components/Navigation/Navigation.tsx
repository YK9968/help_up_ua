import { NavLink } from "react-router-dom";
import ButtonContainer from "../ButtonContainer/ButtonContainer";
import Logo from "../Logo/Logo";
import { useAppSelector } from "../../redux/store";
import { selectIsCompany } from "../../redux/auth/selectors";

function Navigation() {
  const activePage = ({ isActive }: { isActive: boolean }) => {
    return isActive ? "text-blue-500" : "text-black";
  };
  const isCompany = useAppSelector(selectIsCompany);

  return (
    <header className=" py-6 px-20  border-b border-borderColor  mb-12 ">
      <div className="flex justify-between items-center   ">
        <Logo />
        <div className="flex gap-10">
          <NavLink to="/" className={activePage}>
            Home
          </NavLink>
          <NavLink to="/opportunities" className={activePage}>
            Opportunity
          </NavLink>
          {isCompany && (
            <NavLink to="/my-opportunities" className={activePage}>
              My-Opportunities
            </NavLink>
          )}
        </div>
        <ButtonContainer />
      </div>
    </header>
  );
}

export default Navigation;
