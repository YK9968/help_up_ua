import { FC } from "react";
import { IOpportunity } from "../../types/opportunitiesType";
import { NavLink } from "react-router-dom";
import { CiCalendarDate } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { CiGrid42 } from "react-icons/ci";
import { CiGlobe } from "react-icons/ci";
import { setTypeWork } from "../../utils/setTypeWork";

interface IOpportunityProps {
  info: IOpportunity;
}

const OpportunityCard: FC<IOpportunityProps> = ({ info }) => {
  const { title, location, imageUrl, typeWork, date, website, id } = info;
  const opportunityDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  if (!location) {
    return;
  }

  return (
    <div className="flex gap-3">
      <div
        className="w-imgOpportunityWidth h-imgOpportunityHeight bg-cover bg-center bg-no-repeat rounded-3xl"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="mt-4">
        <div className="flex gap-4 mb-4">
          <div className="flex items-center justify-center gap-2 ">
            <CiCalendarDate className="w-7 h-7 text-buttonColor " />
            <p>{opportunityDate}</p>
          </div>
          <div className="flex items-center justify-center gap-2  ">
            <IoLocationOutline className="w-7 h-7 text-buttonColor " />
            <p>{location[0].toUpperCase() + location.slice(1)}</p>
          </div>
        </div>
        <div className="flex items-center  gap-2 mb-5  ">
          <CiGrid42 className="w-7 h-7 text-buttonColor " />
          <p>{setTypeWork(typeWork)}</p>
        </div>
        <NavLink
          className="w-titleOpportunityWidth h-titleOpportunityHeight break-words  mb-5 block font-semibold text-3xl"
          to={`/opportunities/${id}`}
        >
          {title}
        </NavLink>

        <a
          className="flex items-center  gap-2 "
          href={website}
          target="_blank"
          rel="noopener noreferrer"
        >
          <CiGlobe className="w-7 h-7 text-buttonColor" />
          {website}
        </a>
      </div>
    </div>
  );
};

export default OpportunityCard;
