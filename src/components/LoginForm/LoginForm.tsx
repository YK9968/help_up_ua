import { Field, Form, Formik, FormikHelpers } from "formik";
import { FC, useState } from "react";
import { FaEyeSlash } from "react-icons/fa";
import { authState } from "../../store/authStore";
import { ILoginUser } from "../../types/userType";

interface iLoginForm {
  togleForm: () => void;
}

const LoginForm: FC<iLoginForm> = ({ togleForm }) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const loginUser = authState((state) => state.loginUser);

  const handleLoginUser = (
    value: ILoginUser,
    actions: FormikHelpers<ILoginUser>
  ) => {
    try {
      loginUser(value);
      actions.resetForm();
      togleForm();
    } catch (error) {
      console.log(error);
    }
  };

  const initialValues = { email: "", password: "" };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleLoginUser}
      handleLoginUser
    >
      <Form>
        <h2 className="mb-5 font-medium text-4xl">LogIn</h2>
        <p className="mb-10 text-base opacity-50">
          Welcome back! Please enter your credentials to access your account and
          continue your search for a psychologist.
        </p>
        <Field
          className="bg-borderColor border py-4 pl-4 w-full mb-4 rounded-2xl"
          type="text"
          name="email"
          placeholder="Email"
        />
        <div className="relative">
          <Field
            className="bg-borderColor border py-4 pl-4 w-full mb-10 rounded-2xl"
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
          />
          <button
            type="button"
            onClick={() => {
              setShowPassword(!showPassword);
            }}
            className={`absolute right-8 top-5  ${
              showPassword === true
                ? " text-buttonColor"
                : "text-borderColor  hover:text-buttonHoverColor transition-all duration-150 ease-in-out"
            } `}
          >
            <FaEyeSlash className="w-5 h-5" />
          </button>
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
