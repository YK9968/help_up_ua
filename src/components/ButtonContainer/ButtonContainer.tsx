import { useState } from "react";
import LoginForm from "../LoginForm/LoginForm";
import RegisterForm from "../RegisterForm/RegisterForm";
import Modal from "react-modal";
import { IoCloseOutline } from "react-icons/io5";
import { styles, overlay } from "../../modalStyles/modalStyles";

Modal.setAppElement("#root");

const ButtonContainer = () => {
  const [isOpenLoginForm, setIsOpenLoginForm] = useState<boolean>(false);
  const [isOpenRegisterForm, setIsOpenRegisterForm] = useState<boolean>(false);

  const togleLoginForm = () => {
    setIsOpenLoginForm(!isOpenLoginForm);
  };
  const togleRegisterForm = () => {
    setIsOpenRegisterForm(!isOpenRegisterForm);
  };

  return (
    <div className="flex gap-2">
      <button
        onClick={togleLoginForm}
        className="py-3 px-10 bg-transparent border border-borderColor  text-black rounded-3xl hover:border-buttonHoverColor transition-all duration-150 ease-in-out"
      >
        Login
      </button>
      <button
        onClick={togleRegisterForm}
        className="py-3 px-10 bg-buttonColor text-white rounded-3xl hover:bg-buttonHoverColor transition-all duration-150 ease-in-out "
      >
        Registration
      </button>

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
        onRequestClose={togleLoginForm}
      >
        <button onClick={togleLoginForm} className="absolute right-7 top-7 ">
          <IoCloseOutline className="w-8 h-8" />
        </button>
        <LoginForm togleForm={togleLoginForm} />
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
        onRequestClose={togleRegisterForm}
      >
        <button onClick={togleRegisterForm} className="absolute right-7 top-7 ">
          <IoCloseOutline className="w-8 h-8" />
        </button>
        <RegisterForm togleForm={togleRegisterForm} />
      </Modal>
    </div>
  );
};

export default ButtonContainer;
