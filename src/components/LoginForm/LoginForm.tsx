import { FC } from "react";

interface iLoginForm {
  togleForm: () => void;
}

const LoginForm: FC<iLoginForm> = ({ togleForm }) => {
  console.log(togleForm);
  return <div>LoginForm</div>;
};

export default LoginForm;
