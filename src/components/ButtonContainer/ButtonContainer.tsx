import { useState } from "react";
import LoginForm from "../LoginForm/LoginForm";
import RegisterForm from "../RegisterForm/RegisterForm";
import Modal from "react-modal";
import { useAppSelector } from "../../redux/store";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import Modals from "../Modals/Modal";

Modal.setAppElement("#root");

const ButtonContainer = () => {
  const [isOpenLoginForm, setIsOpenLoginForm] = useState<boolean>(false);
  const [isOpenRegisterForm, setIsOpenRegisterForm] = useState<boolean>(false);
  const [isOpenLogoutForm, setIsOpenLogoutForm] = useState<boolean>(false);
  const isLogin = useAppSelector(selectIsLoggedIn);

  const toggleLoginForm = () => {
    setIsOpenLoginForm(!isOpenLoginForm);
  };
  const toggleRegisterForm = () => {
    setIsOpenRegisterForm(!isOpenRegisterForm);
  };
  const toggleLogoutForm = () => {
    setIsOpenLogoutForm(!isOpenLogoutForm);
  };

  return (
    <div>
      {!isLogin ? (
        <div className="flex gap-2 items-center">
          <button
            onClick={toggleLoginForm}
            className="py-3 px-10 bg-transparent border border-borderColor  text-black rounded-3xl hover:border-buttonHoverColor transition-all duration-150 ease-in-out"
          >
            Login
          </button>
          <button
            onClick={toggleRegisterForm}
            className="py-3 px-10 bg-buttonColor text-white rounded-3xl hover:bg-buttonHoverColor transition-all duration-150 ease-in-out "
          >
            Registration
          </button>
        </div>
      ) : (
        <button
          className="py-3 px-10 bg-transparent border border-borderColor  text-black rounded-3xl hover:border-buttonHoverColor transition-all duration-150 ease-in-out"
          onClick={toggleLogoutForm}
        >
          Logout
        </button>
      )}

      <Modals
        type="login"
        width="566px"
        height="510px"
        isOpen={isOpenLoginForm}
        onClose={toggleLoginForm}
        confirm={false}
        component={<LoginForm togleForm={toggleLoginForm} />}
      />

      <Modals
        type="register"
        width="1036px"
        height="639px"
        isOpen={isOpenRegisterForm}
        onClose={toggleRegisterForm}
        confirm={false}
        component={<RegisterForm togleForm={toggleRegisterForm} />}
      />
      <Modals
        type="logoutUser"
        width="566px"
        isOpen={isOpenLogoutForm}
        onClose={toggleLogoutForm}
        confirm={true}
      />
    </div>
  );
};

export default ButtonContainer;
