import { useState } from "react";
import LoginForm from "../LoginForm/LoginForm";
import RegisterForm from "../RegisterForm/RegisterForm";
import Modal from "react-modal";
import { IoCloseOutline } from "react-icons/io5";
import { styles, overlay } from "../../modalStyles/modalStyles";
import ConfirmForm from "../ConfirmForm/ConfirmForm";
import { useAppSelector } from "../../redux/store";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

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

      <Modal
        style={{
          content: {
            width: "566px",
            height: "510px",
            position: "relative",
            ...styles,
          },
          overlay,
        }}
        isOpen={isOpenLoginForm}
        onRequestClose={toggleLoginForm}
      >
        <button onClick={toggleLoginForm} className="absolute right-7 top-7 ">
          <IoCloseOutline className="w-8 h-8" />
        </button>
        <LoginForm togleForm={toggleLoginForm} />
      </Modal>
      <Modal
        style={{
          content: {
            width: "1036px",
            height: "639px",
            position: "relative",
            ...styles,
          },
          overlay,
        }}
        isOpen={isOpenRegisterForm}
        onRequestClose={toggleRegisterForm}
      >
        <button
          onClick={toggleRegisterForm}
          className="absolute right-7 top-7 "
        >
          <IoCloseOutline className="w-8 h-8" />
        </button>
        <RegisterForm togleForm={toggleRegisterForm} />
      </Modal>

      <Modal
        style={{
          content: {
            width: "566px",
            position: "relative",
            ...styles,
          },
          overlay,
        }}
        isOpen={isOpenLogoutForm}
        onRequestClose={toggleLogoutForm}
      >
        <button onClick={toggleLogoutForm} className="absolute right-7 top-7 ">
          <IoCloseOutline className="w-8 h-8" />
        </button>
        <ConfirmForm togleForm={toggleLogoutForm} type="logoutUser" />
      </Modal>
    </div>
  );
};

export default ButtonContainer;
