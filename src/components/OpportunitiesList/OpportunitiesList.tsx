import { FC } from "react";
import { IOpportunity } from "../../types/opportunitiesType";
import OpportunityCard from "../OpportunityCard/OpportunityCard";
import { MdDelete, MdEdit } from "react-icons/md";

interface IOpportunitiesListProps {
  opportunities: IOpportunity[];
  type: string;
}

const OpportunitiesList: FC<IOpportunitiesListProps> = ({
  opportunities,
  type,
}) => {
  if (opportunities.length === 0) {
    return <p>No opportunities available at the moment.</p>;
  }

  const sortedOpportunities = [...opportunities].sort((a, b) => {
    const dateA = a.createdAt ? new Date(a.createdAt).getTime() : 0;
    const dateB = b.createdAt ? new Date(b.createdAt).getTime() : 0;

    return dateB - dateA;
  });

  return type === "all-opp" ? (
    <ul className="flex flex-col gap-10 mb-24">
      {sortedOpportunities.map((opp: IOpportunity) => (
        <li
          key={opp.id}
          className="w-cardOpportunityWidth px-10 py-12 drop-shadow-lg bg-white rounded-3xl"
        >
          <OpportunityCard info={opp} />
        </li>
      ))}
    </ul>
  ) : (
    <ul>
      {sortedOpportunities.map((opp: IOpportunity) => (
        <li key={opp.id}>
          <button>
            <MdEdit />
          </button>
          <button>
            <MdDelete />
          </button>
          <OpportunityCard info={opp} />
        </li>
      ))}
    </ul>
  );
};

export default OpportunitiesList;
