import { FC } from "react";
import { authState } from "../../store/authStore";
import { opportunityState } from "../../store/opportunitiesStore";

interface iConfirmForm {
  togleForm: () => void;
  type: string;
  opportunityId?: string;
}

const ConfirmForm: FC<iConfirmForm> = ({ togleForm, type, opportunityId }) => {
  console.log(opportunityId);
  const logOutUser = authState((state) => state.logOutUser);
  const deleteOpportunity = opportunityState(
    (state) => state.deleteOpportunity
  );
  const confirmForm = () => {
    if (type === "logoutUser") {
      logOutUser();
    }
    if (type === "deleteOpportunity" && opportunityId) {
      deleteOpportunity(opportunityId);
    }
    togleForm();
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
      {type === "deleteOpportunity" && (
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
          onClick={togleForm}
        >
          No
        </button>
      </div>
    </div>
  );
};

export default ConfirmForm;
