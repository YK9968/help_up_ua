import { FC, useState } from "react";
import { IOpportunity } from "../../types/opportunitiesType";
import OpportunityCard from "../OpportunityCard/OpportunityCard";
import { MdDelete, MdEdit } from "react-icons/md";
import Modals from "../Modals/Modal";
import OpportunityForm from "../OpportunityForm/OpportunityForm";
import { sortedOpportunities } from "../../utils/sortedOpportunities";

interface IOpportunitiesListProps {
  opportunities: IOpportunity[];
  type: string;
}

const OpportunitiesList: FC<IOpportunitiesListProps> = ({
  opportunities,
  type,
}) => {
  const [openDeleteFormId, setOpenDeleteFormId] = useState<string | null>(null);
  const [openUpdateFormId, setOpenUpdateFormId] = useState<string | null>(null);

  const toggleDeleteForm = (id: string) => {
    setOpenDeleteFormId(id === openDeleteFormId ? null : id);
  };
  const toggleUpdateForm = (id: string) => {
    setOpenUpdateFormId(id === openUpdateFormId ? null : id);
  };

  if (opportunities.length === 0) {
    return <p className="mt-2">No opportunities available at the moment.</p>;
  }

  return type === "all-opp" ? (
    <ul className="flex flex-col gap-10 mb-24">
      {sortedOpportunities(opportunities).map((opp: IOpportunity) => (
        <li
          key={opp.id}
          className="w-cardOpportunityWidth px-10 py-12 drop-shadow-lg bg-white rounded-3xl"
        >
          <OpportunityCard info={opp} />
        </li>
      ))}
    </ul>
  ) : (
    <ul className="flex flex-col gap-10 mb-24">
      {sortedOpportunities(opportunities).map((opp: IOpportunity) => (
        <li
          className="w-cardOpportunityWidth px-10 py-12 drop-shadow-lg bg-white rounded-3xl"
          key={opp.id}
        >
          <div className="flex">
            <Modals
              type="delete"
              id={opp.id}
              width="566px"
              isOpen={openDeleteFormId === opp.id}
              onClose={() => setOpenDeleteFormId(null)}
              confirm={true}
            />
            <Modals
              type="updateOpportunity"
              id={opp.id}
              width="1036px"
              height="639px"
              isOpen={openUpdateFormId === opp.id}
              onClose={() => setOpenUpdateFormId(null)}
              confirm={false}
              component={
                <OpportunityForm
                  toggleForm={() =>
                    setOpenUpdateFormId(
                      opp.id === openUpdateFormId ? null : opp.id
                    )
                  }
                  type="update"
                  id={opp.id}
                />
              }
            />

            <OpportunityCard info={opp} />
            <div>
              <button onClick={() => toggleUpdateForm(opp.id)}>
                <MdEdit className="w-6 h-6 text-borderColor opacity-80 hover:text-buttonHoverColor transition-all duration-150 ease-in-out " />
              </button>
              <button onClick={() => toggleDeleteForm(opp.id)}>
                <MdDelete className="w-6 h-6  text-borderColor opacity-80 hover:text-buttonHoverColor transition-all duration-150 ease-in-out " />
              </button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default OpportunitiesList;
