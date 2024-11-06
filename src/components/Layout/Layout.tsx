import { FC, ReactNode } from "react";
import Navigation from "../Navigation/Navigation";
import { authState } from "../../store/authStore";
import Loader from "../Loader/Loader";

interface ILayout {
  children: ReactNode;
}

const Layout: FC<ILayout> = ({ children }) => {
  const loading = authState((state) => state.loading);
  const token = authState((state) => state.token);

  console.log(token);

  return (
    <div>
      {loading && <Loader />}
      <Navigation />
      <div className="px-20">{children}</div>
    </div>
  );
};

export default Layout;
