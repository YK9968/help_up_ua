import { useEffect } from "react";
import OpportunityCard from "../../components/OpportunityCard/OpportunityCard";
import { opportunityState } from "../../store/opportunitiesStore";
import { IOpportunity } from "../../types/opportunitiesType";
import Pagination from "../../components/Pagination/Pagination";
import Filter from "../../components/Filter/Filter";

const CatalogOpportunityPage = () => {
  const opportunities = opportunityState((state) => state.items);
  const fetchAllOpportunity = opportunityState(
    (state) => state.fetchAllOpportunity
  );

  useEffect(() => {
    fetchAllOpportunity();
  }, [fetchAllOpportunity]);

  if (opportunities.length === 0) {
    return;
  }
  return (
    <div className="pb-24">
      <p className="flex gap-2 items-center font-semibold text-2xl pb-12">
        <span className="text-blue-500 ">{opportunities.length}</span>
        opportunities
      </p>
      <div className="flex justify-between">
        <ul className="flex flex-col gap-10 mb-24">
          {opportunities.map((opp: IOpportunity) => (
            <li
              className=" w-cardOpportunityWidth px-10 py-12 drop-shadow-lg  bg-white  rounded-3xl"
              key={opp.id}
            >
              <OpportunityCard info={opp} />
            </li>
          ))}
        </ul>
        <Filter />
      </div>
      <Pagination />
    </div>
  );
};

export default CatalogOpportunityPage;
