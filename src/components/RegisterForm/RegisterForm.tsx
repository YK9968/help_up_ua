import { Field, Form, Formik, FormikHelpers, ErrorMessage } from "formik";
import { FC, useState } from "react";

import { FaEyeSlash } from "react-icons/fa";
import { registerValidation } from "../../validation/validationRegisterUser";
import { IRegisterUser } from "../../types/authTypes";
import { useAppDispatch } from "../../redux/store";
import { registerUser } from "../../redux/auth/operations";
import toast from "react-hot-toast";

interface iRegisterForm {
  togleForm: () => void;
}

const RegisterForm: FC<iRegisterForm> = ({ togleForm }) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  const initialValues: IRegisterUser = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
    age: "",
    isCompany: false,
  };

  const handleRegisterUser = async (
    value: IRegisterUser,
    actions: FormikHelpers<IRegisterUser>
  ): Promise<void> => {
    togleForm();
    dispatch(registerUser(value))
      .unwrap()
      .then(() => {
        toast.success("Successful registration");
        actions.resetForm();
      })
      .catch((error) => {
        toast.error(
          "Failed: " + error.message + ". Check your data and try again"
        );
      });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleRegisterUser}
      validationSchema={registerValidation}
    >
      <Form>
        <h2 className="mb-5 font-medium text-4xl">Registration</h2>
        <p className="mb-10 text-base opacity-50">
          Thank you for your interest in our platform! In order to register, we
          need some information. Please provide us with the following
          information.
        </p>
        <div className="flex justify-between mb-3">
          <div>
            <div className="relative">
              <Field
                className="bg-borderColor border py-4 pl-4 w-registerFormInputWidth mb-4 rounded-2xl "
                type="text"
                name="firstName"
                placeholder="First Name"
              />
              <ErrorMessage
                name="firstName"
                component="div"
                className="text-red-500 text-base opacity-70  absolute right-12 top-5"
              />
            </div>

            <div className="relative">
              <Field
                className="bg-borderColor border py-4 pl-4 w-registerFormInputWidth mb-4 rounded-2xl"
                type="number"
                name="age"
                placeholder="Age"
              />
              <ErrorMessage
                name="age"
                component="div"
                className="text-red-500 text-base opacity-70 absolute right-12 top-5"
              />
            </div>

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
          </div>

          <div>
            <div className="relative">
              <Field
                className="bg-borderColor border py-4 pl-4 w-registerFormInputWidth mb-4 rounded-2xl"
                type="text"
                name="lastName"
                placeholder="Last Name"
              />
              <ErrorMessage
                name="lastName"
                component="div"
                className="text-red-500 text-base opacity-70 absolute right-12 top-5"
              />
            </div>

            <div className="relative">
              <Field
                className="bg-borderColor border py-4 pl-4 w-registerFormInputWidth mb-4 rounded-2xl"
                type="text"
                name="phone"
                placeholder="Phone number"
              />
              <ErrorMessage
                name="phone"
                component="div"
                className="text-red-500 text-base opacity-70 absolute right-12 top-5"
              />
            </div>

            <div className="relative">
              <Field
                className="bg-borderColor border py-4 pl-4 w-registerFormInputWidth rounded-2xl"
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
          </div>
        </div>

        <div className="flex justify-center items-center ">
          <Field
            type="checkbox"
            name="isCompany"
            id="isCompany"
            className="w-5 h-5 "
          />
          <label htmlFor="isCompany" className="text-base opacity-50 ml-2">
            I represent a company and want to post volunteer work opportunities.
          </label>
        </div>

        <div className="flex items-center justify-center mt-14 ">
          <button
            className="py-3 px-36 bg-buttonColor text-white rounded-3xl hover:bg-buttonHoverColor transition-all duration-150 ease-in-out"
            type="submit"
          >
            Sign Up
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default RegisterForm;
