import { FC, ReactNode } from "react";
import Navigation from "../Navigation/Navigation";
import { authState } from "../../store/authStore";
import Loader from "../Loader/Loader";
import { opportunityState } from "../../store/opportunitiesStore";

interface ILayout {
  children: ReactNode;
}

const Layout: FC<ILayout> = ({ children }) => {
  const authLoading = authState((state) => state.loading);
  const opportunityLoading = opportunityState((state) => state.loading);

  return (
    <div className="relative">
      {(authLoading || opportunityLoading) && <Loader />}

      <Navigation />
      <div className="px-20">{children}</div>
    </div>
  );
};

export default Layout;
