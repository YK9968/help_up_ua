import { FC } from "react";
import { authState } from "../../store/authStore";

interface iLogoutForm {
  togleForm: () => void;
}

const LogoutForm: FC<iLogoutForm> = ({ togleForm }) => {
  const logOutUser = authState((state) => state.logOutUser);
  const confirmLogout = () => {
    logOutUser();
    togleForm();
  };

  return (
    <div>
      <h2 className="mb-5 font-medium text-4xl">Logout</h2>
      <p className="mb-10 text-base opacity-50">
        Do you really want to log out?
      </p>
      <div className="flex gap-2">
        <button
          className=" w-full py-3 px-10 bg-transparent border border-borderColor  text-black rounded-3xl hover:border-buttonHoverColor transition-all duration-150 ease-in-out"
          type="submit"
          onClick={confirmLogout}
        >
          Yes
        </button>
        <button
          className=" w-full py-3 px-10 bg-buttonColor text-white rounded-3xl hover:bg-buttonHoverColor transition-all duration-150 ease-in-out "
          type="submit"
          onClick={togleForm}
        >
          No
        </button>
      </div>
    </div>
  );
};

export default LogoutForm;
