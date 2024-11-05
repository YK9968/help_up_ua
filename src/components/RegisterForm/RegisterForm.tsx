import { FC } from "react";

interface iRegisterForm {
  togleForm: () => void;
}

const RegisterForm: FC<iRegisterForm> = ({ togleForm }) => {
  console.log(togleForm);
  return <div>RegisterForm</div>;
};

export default RegisterForm;
