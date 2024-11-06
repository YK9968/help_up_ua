import { useState } from "react";
import LoginForm from "../LoginForm/LoginForm";
import RegisterForm from "../RegisterForm/RegisterForm";
import Modal from "react-modal";
import { IoCloseOutline } from "react-icons/io5";

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
            margin: "auto",
            borderRadius: "20px",
            padding: "64px",
            backgroundColor: "#fff",
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
            position: "relative",
          },
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            zIndex: 1000,
          },
        }}
        isOpen={isOpenLoginForm}
        onRequestClose={togleLoginForm}
      >
        <button onClick={togleLoginForm} className="absolute right-7 top-7 ">
          <IoCloseOutline className="w-8 h-8" />
        </button>
        <LoginForm togleForm={togleLoginForm} />
      </Modal>
      <Modal isOpen={isOpenRegisterForm} onRequestClose={togleRegisterForm}>
        <RegisterForm togleForm={togleRegisterForm} />
      </Modal>
    </div>
  );
};

export default ButtonContainer;
