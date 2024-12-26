import { FC } from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../redux/store";
import { selectIsCompany } from "../../redux/auth/selectors";

interface IPrivateRouteProps {
  component: React.ReactNode;
  redirectTo: string;
}

const PrivateRoute: FC<IPrivateRouteProps> = ({ component, redirectTo }) => {
  const isCompany = useAppSelector(selectIsCompany);

  return isCompany ? component : <Navigate to={redirectTo} />;
};

export default PrivateRoute;
