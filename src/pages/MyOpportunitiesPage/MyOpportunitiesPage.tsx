import { FaPlus } from "react-icons/fa6";
import Modal from "react-modal";
import { opportunityState } from "../../store/opportunitiesStore";
import { authState } from "../../store/authStore";
import { overlay, styles } from "../../modalStyles/modalStyles";
import { useEffect, useState } from "react";
import AddOpportunityForm from "../../components/AddOpportunityForm/AddOpportunityForm";
import { IoCloseOutline } from "react-icons/io5";
import OpportunitiesList from "../../components/OpportunitiesList/OpportunitiesList";

const MyOpportunitiesPage = () => {
  const opportunities = opportunityState((state) => state.items);
  const userId = authState((state) => state.user?.data.id);
  const userOpportunities = opportunities.filter(
    (opp) => opp.userId === userId
  );
  const fetchAllOpportunity = opportunityState(
    (state) => state.fetchAllOpportunity
  );

  useEffect(() => {
    fetchAllOpportunity();
  }, [fetchAllOpportunity]);

  const [isOpenOpportunityForm, setIsOpenOpportunityForm] =
    useState<boolean>(false);

  const togleOpportunityForm = () => {
    setIsOpenOpportunityForm(!isOpenOpportunityForm);
  };

  return (
    <div>
      <p className="flex items-center font-semibold text-2xl pb-12">
        <span className="text-blue-500 ">My-</span>opportunities
      </p>
      <button
        onClick={togleOpportunityForm}
        className="flex gap-2 items-center justify-center py-3 px-10 bg-buttonColor text-white rounded-3xl hover:bg-buttonHoverColor transition-all duration-150 ease-in-out mb-5 "
      >
        <FaPlus />
        Add opportunities
      </button>
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
        isOpen={isOpenOpportunityForm}
        onRequestClose={togleOpportunityForm}
      >
        <button
          onClick={togleOpportunityForm}
          className="absolute right-7 top-7 "
        >
          <IoCloseOutline className="w-8 h-8" />
        </button>
        <AddOpportunityForm togleForm={togleOpportunityForm} />
      </Modal>
      <OpportunitiesList opportunities={userOpportunities} type="my-opp" />
    </div>
  );
};

export default MyOpportunitiesPage;
