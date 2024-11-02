import { useEffect } from "react";
import OpportunityCard from "../../components/OpportunityCard/OpportunityCard";
import { opportunityState } from "../../store/opportunitiesStore";
import { IOpportunity } from "../../types/opportunitiesType";

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
    <>
      <p className="flex gap-2 items-center font-semibold text-2xl pb-12">
        <span className="text-blue-500 ">{opportunities.length}</span>
        opportunities
      </p>
      <ul className="flex-row  ">
        {opportunities.map((opp: IOpportunity) => (
          <li
            className="border border-borderColor border-opacity-10v"
            key={opp.id}
          >
            <OpportunityCard info={opp} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default CatalogOpportunityPage;
