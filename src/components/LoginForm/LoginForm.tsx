import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import { FC, useState } from "react";
import { FaEyeSlash } from "react-icons/fa";
import { loginValidation } from "../../validation/validationLoginUser";
import { useAppDispatch } from "../../redux/store";
import { loginUser } from "../../redux/auth/operations";
import { ILoginUser } from "../../types/authTypes";

interface iLoginForm {
  togleForm: () => void;
}

const LoginForm: FC<iLoginForm> = ({ togleForm }) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  const handleLoginUser = async (
    value: ILoginUser,
    actions: FormikHelpers<ILoginUser>
  ): Promise<void> => {
    try {
      togleForm();
      dispatch(loginUser(value));
      actions.resetForm();
    } catch (error) {
      console.log(error);
    }
  };

  const initialValues: ILoginUser = { email: "", password: "" };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleLoginUser}
      validationSchema={loginValidation}
    >
      <Form>
        <h2 className="mb-5 font-medium text-4xl">LogIn</h2>
        <p className="mb-10 text-base opacity-50">
          Welcome back! Please enter your credentials to access your account and
          continue your search for a psychologist.
        </p>
        <div className="relative">
          <Field
            className="bg-borderColor border py-4 pl-4 w-registerFormInputWidth mb-4 rounded-2xl"
            type="text"
            name="email"
            placeholder="Email"
          />
          <ErrorMessage
            name="email"
            component="div"
            className="text-red-500 text-base opacity-70 absolute right-12 top-5"
          />
        </div>
        <div className="relative mb-3">
          <Field
            className="bg-borderColor mb-10 border py-4 pl-4 w-registerFormInputWidth rounded-2xl"
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
          />
          <button
            type="button"
            onClick={() => {
              setShowPassword(!showPassword);
            }}
            className={`absolute right-5 top-5  ${
              showPassword === true
                ? " text-buttonColor"
                : "text-borderColor  hover:text-buttonHoverColor transition-all duration-150 ease-in-out"
            } `}
          >
            <FaEyeSlash className="w-5 h-5" />
          </button>
          <ErrorMessage
            name="password"
            component="div"
            className="text-red-500 text-base opacity-70 absolute right-12 top-5"
          />
        </div>
        <button
          className=" w-full py-3 px-10 bg-buttonColor text-white rounded-3xl hover:bg-buttonHoverColor transition-all duration-150 ease-in-out "
          type="submit"
        >
          Log in
        </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
