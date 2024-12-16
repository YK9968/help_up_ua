import { FC } from "react";
import { authState } from "../../store/authStore";
import { Navigate } from "react-router-dom";

interface IPrivateRouteProps {
  component: React.ReactNode;
  redirectTo: string;
}

const PrivateRoute: FC<IPrivateRouteProps> = ({ component, redirectTo }) => {
  const isCompany = authState((state) => state.user?.data.isCompany);

  return isCompany ? component : <Navigate to={redirectTo} />;
};

export default PrivateRoute;
