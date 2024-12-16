import { FC, useState } from "react";
import { IOpportunity } from "../../types/opportunitiesType";
import OpportunityCard from "../OpportunityCard/OpportunityCard";
import { MdDelete, MdEdit } from "react-icons/md";
import ConfirmForm from "../ConfirmForm/ConfirmForm";
import Modal from "react-modal";
import { styles, overlay } from "../../modalStyles/modalStyles";
import { IoCloseOutline } from "react-icons/io5";

interface IOpportunitiesListProps {
  opportunities: IOpportunity[];
  type: string;
}

const OpportunitiesList: FC<IOpportunitiesListProps> = ({
  opportunities,
  type,
}) => {
  const [openDeleteFormId, setOpenDeleteFormId] = useState<string | null>(null);

  const togleDeleteForm = (id: string) => {
    setOpenDeleteFormId(id === openDeleteFormId ? null : id);
  };

  if (opportunities.length === 0) {
    return <p className="mt-2">No opportunities available at the moment.</p>;
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
    <ul className="flex flex-col gap-10 mb-24">
      {sortedOpportunities.map((opp: IOpportunity) => (
        <li
          className="w-cardOpportunityWidth px-10 py-12 drop-shadow-lg bg-white rounded-3xl"
          key={opp.id}
        >
          <div className="flex">
            <Modal
              style={{
                content: {
                  width: "566px",
                  position: "relative",
                  ...styles,
                },
                overlay,
              }}
              isOpen={openDeleteFormId === opp.id} //
              onRequestClose={() => setOpenDeleteFormId(null)}
            >
              <button
                onClick={() => setOpenDeleteFormId(null)}
                className="absolute right-7 top-7 "
              >
                <IoCloseOutline className="w-8 h-8" />
              </button>
              <ConfirmForm
                togleForm={() => setOpenDeleteFormId(null)}
                type="deleteOpportunity"
                opportunityId={opp.id}
              />
            </Modal>
            <OpportunityCard info={opp} />
            <div>
              <button>
                <MdEdit className="w-6 h-6 text-borderColor opacity-80 hover:text-buttonHoverColor transition-all duration-150 ease-in-out " />
              </button>
              <button onClick={() => togleDeleteForm(opp.id)}>
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
