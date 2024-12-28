import { FaPlus } from "react-icons/fa6";
import Modal from "react-modal";
import { overlay, styles } from "../../modalStyles/modalStyles";
import { useEffect, useState } from "react";
import OpportunityForm from "../../components/OpportunityForm/OpportunityForm";
import { IoCloseOutline } from "react-icons/io5";
import OpportunitiesList from "../../components/OpportunitiesList/OpportunitiesList";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { selectUser } from "../../redux/auth/selectors";
import { selectOpportunities } from "../../redux/opportunity/selectors";
import { fetchAllOpportunity } from "../../redux/opportunity/operations";

const MyOpportunitiesPage = () => {
  const opportunities = useAppSelector(selectOpportunities);
  const user = useAppSelector(selectUser);
  const userOpportunities = opportunities.filter(
    (opp) => opp.userId === user.id
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllOpportunity);
  }, [dispatch]);

  const [isOpenOpportunityForm, setIsOpenOpportunityForm] =
    useState<boolean>(false);

  const toggleOpportunityForm = () => {
    setIsOpenOpportunityForm(!isOpenOpportunityForm);
  };

  return (
    <div>
      <p className="flex items-center font-semibold text-2xl pb-12">
        <span className="text-blue-500 ">My-</span>opportunities
      </p>
      <button
        onClick={toggleOpportunityForm}
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
        onRequestClose={toggleOpportunityForm}
      >
        <button
          onClick={toggleOpportunityForm}
          className="absolute right-7 top-7 "
        >
          <IoCloseOutline className="w-8 h-8" />
        </button>
        <OpportunityForm toggleForm={toggleOpportunityForm} type="add" />
      </Modal>
      <OpportunitiesList opportunities={userOpportunities} type="my-opp" />
    </div>
  );
};

export default MyOpportunitiesPage;
