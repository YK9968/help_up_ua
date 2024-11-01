import { useEffect } from "react";
import { opportunityState } from "../../store/opportunitiesStore";

const WelcomePage = () => {
  const fetchAllOpportunity = opportunityState(
    (state) => state.fetchAllOpportunity
  );
  const opportunity = opportunityState((state) => state.items);

  useEffect(() => {
    fetchAllOpportunity();
  }, []);

  return (
    <div className="bg-lime-400 p-7 border-2 border-cyan-700 w-64">
      <ul>
        {opportunity.map((opp) => (
          <li key={opp.id}>
            <p>{opp.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WelcomePage;
