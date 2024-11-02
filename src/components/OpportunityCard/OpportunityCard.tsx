import { FC } from "react";
import { IOpportunity } from "../../types/opportunitiesType";

interface IOpportunityProps {
  info: IOpportunity;
}

const OpportunityCard: FC<IOpportunityProps> = ({ info }) => {
  return (
    <div>
      <p>{info.title}</p>
      <img></img>
    </div>
  );
};

export default OpportunityCard;
