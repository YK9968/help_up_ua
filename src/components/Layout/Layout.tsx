import { FC, ReactNode } from "react";
import Navigation from "../Navigation/Navigation";

interface ILayout {
  children: ReactNode;
}

const Layout: FC<ILayout> = ({ children }) => {
  return (
    <div className="px-20">
      <Navigation />
      {children}
    </div>
  );
};

export default Layout;
