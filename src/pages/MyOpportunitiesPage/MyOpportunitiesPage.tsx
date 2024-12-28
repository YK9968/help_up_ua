import { FaPlus } from "react-icons/fa6";
import { useEffect, useState } from "react";
import OpportunityForm from "../../components/OpportunityForm/OpportunityForm";
import OpportunitiesList from "../../components/OpportunitiesList/OpportunitiesList";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { fetchAllUserOpportunity } from "../../redux/opportunity/operations";
import Modals from "../../components/Modals/Modal";
import { selectUserOpportunities } from "../../redux/opportunity/selectors";

const MyOpportunitiesPage = () => {
  const dispatch = useAppDispatch();
  const opportunities = useAppSelector(selectUserOpportunities);

  useEffect(() => {
    dispatch(fetchAllUserOpportunity());
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

      <Modals
        type="addOpportunity"
        width="1036px"
        height="639px"
        isOpen={isOpenOpportunityForm}
        onClose={toggleOpportunityForm}
        confirm={false}
        component={
          <OpportunityForm toggleForm={toggleOpportunityForm} type="add" />
        }
      />

      <OpportunitiesList opportunities={opportunities} type="my-opp" />
    </div>
  );
};

export default MyOpportunitiesPage;
