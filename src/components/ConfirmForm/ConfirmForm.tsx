import { FC } from "react";
import { useAppDispatch } from "../../redux/store";
import { logOut } from "../../redux/auth/slice";
import {
  deleteOpportunity,
  fetchAllUserOpportunity,
} from "../../redux/opportunity/operations";
import { showToast } from "../../utils/showToast";
import { useNavigate } from "react-router-dom";

interface iConfirmForm {
  toggleForm: () => void;
  type: string;
  opportunityId?: string;
}

const ConfirmForm: FC<iConfirmForm> = ({ toggleForm, type, opportunityId }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const confirmForm = () => {
    if (type === "logoutUser") {
      dispatch(logOut());
      navigate("/");
    }
    if (type === "delete" && opportunityId) {
      dispatch(deleteOpportunity(opportunityId))
        .unwrap()
        .then(() => {
          dispatch(fetchAllUserOpportunity());
          showToast("success", "Successful delete opportunity");
        })
        .catch((error) => {
          showToast(
            "error",
            "Failed: " + error.message + ". Check your data and try again"
          );
        });
    }
    toggleForm();
  };

  return (
    <div>
      {type === "logoutUser" && (
        <>
          <h2 className="mb-5 font-medium text-4xl">Logout</h2>
          <p className="mb-10 text-base opacity-50">
            Do you really want to log out?
          </p>
        </>
      )}
      {type === "delete" && (
        <>
          <h2 className="mb-5 font-medium text-4xl">Delete Opportunity</h2>
          <p className="mb-10 text-base opacity-50">
            Do you really want to delete opportunity?
          </p>
        </>
      )}
      <div className="flex gap-2">
        <button
          className=" w-full py-3 px-10 bg-transparent border border-borderColor  text-black rounded-3xl hover:border-buttonHoverColor transition-all duration-150 ease-in-out"
          type="submit"
          onClick={confirmForm}
        >
          Yes
        </button>
        <button
          className=" w-full py-3 px-10 bg-buttonColor text-white rounded-3xl hover:bg-buttonHoverColor transition-all duration-150 ease-in-out "
          type="submit"
          onClick={toggleForm}
        >
          No
        </button>
      </div>
    </div>
  );
};

export default ConfirmForm;
