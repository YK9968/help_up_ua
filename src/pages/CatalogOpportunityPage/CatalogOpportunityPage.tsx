import { useEffect } from "react";
import Pagination from "../../components/Pagination/Pagination";
import Filter from "../../components/Filter/Filter";
import OpportunitiesList from "../../components/OpportunitiesList/OpportunitiesList";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { fetchAllOpportunity } from "../../redux/opportunity/operations";
import { selectOpportunities } from "../../redux/opportunity/selectors";

const CatalogOpportunityPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllOpportunity());
  }, [dispatch]);

  const opportunities = useAppSelector(selectOpportunities);

  return (
    <div className="pb-24">
      <p className="flex gap-2 items-center font-semibold text-2xl pb-12">
        <span className="text-blue-500 ">
          {opportunities.length === 0 ? "0" : opportunities.length}
        </span>
        opportunities
      </p>
      <div className="flex justify-between">
        {opportunities.length !== 0 ? (
          <OpportunitiesList opportunities={opportunities} type="all-opp" />
        ) : (
          <div></div>
        )}

        <Filter />
      </div>
      <Pagination />
    </div>
  );
};

export default CatalogOpportunityPage;
