import { FC, ReactNode } from "react";
import Navigation from "../Navigation/Navigation";

import Loader from "../Loader/Loader";
import { useAppSelector } from "../../redux/store";
import { selectIsLoading } from "../../redux/auth/selectors";
import { selectIsLoadingOpportunities } from "../../redux/opportunity/selectors";
import { Toaster } from "react-hot-toast";

interface ILayout {
  children: ReactNode;
}

const Layout: FC<ILayout> = ({ children }) => {
  const authLoading = useAppSelector(selectIsLoading);
  const opportunityLoading = useAppSelector(selectIsLoadingOpportunities);

  return (
    <div className="relative">
      {(authLoading || opportunityLoading) && <Loader />}

      <Navigation />
      <div className="px-20">
        {children}
        <Toaster position="bottom-left" reverseOrder={false} />
      </div>
    </div>
  );
};

export default Layout;
