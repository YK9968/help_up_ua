import { useEffect } from "react";
import { opportunityState } from "../../store/opportunitiesStore";
import Pagination from "../../components/Pagination/Pagination";
import Filter from "../../components/Filter/Filter";
import OpportunitiesList from "../../components/OpportunitiesList/OpportunitiesList";

const CatalogOpportunityPage = () => {
  const opportunities = opportunityState((state) => state.items);
  const fetchAllOpportunity = opportunityState(
    (state) => state.fetchAllOpportunity
  );

  useEffect(() => {
    fetchAllOpportunity();
  }, [fetchAllOpportunity]);

  return (
    <div className="pb-24">
      <p className="flex gap-2 items-center font-semibold text-2xl pb-12">
        <span className="text-blue-500 ">
          {opportunities.length === 0 ? "0" : opportunities.length}
        </span>
        opportunities
      </p>
      <div className="flex justify-between">
        <OpportunitiesList opportunities={opportunities} type="all-opp" />
        <Filter />
      </div>
      <Pagination />
    </div>
  );
};

export default CatalogOpportunityPage;
