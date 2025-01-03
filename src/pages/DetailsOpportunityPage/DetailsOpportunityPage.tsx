import { useParams } from "react-router-dom";
import { setTypeWork } from "../../utils/setTypeWork";
import { CiCalendarDate, CiGlobe, CiGrid42 } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { useAppSelector } from "../../redux/store";
import { selectOpportunities } from "../../redux/opportunity/selectors";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { showToast } from "../../utils/showToast";

const DetailsOpportunityPage = () => {
  const { id } = useParams();
  const opportunities = useAppSelector(selectOpportunities);
  const isLogin = useAppSelector(selectIsLoggedIn);

  const handlerSendAplication = () => {
    if (isLogin) {
      showToast(
        "success",
        "Thank you for your interest in our opportunity, expect a letter from the company to the email address with further instructions"
      );
      return;
    }
    showToast(
      "error",
      "To apply for this opportunity, please log in to your account or register."
    );
  };

  const opportunity = opportunities.find((opp) => opp.id === id);

  if (!opportunity) {
    return;
  }

  const opportunityDate = new Date(opportunity.date).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );
  const opportunityLocation =
    opportunity.location[0].toUpperCase() + opportunity.location.slice(1);

  return (
    <div className="flex justify-between p-16 bg-white rounded-3xl mb-12 drop-shadow-2xl">
      <div className="flex flex-col gap-3">
        <div
          className="w-imgOpportunityDetailWidth h-imgOpportunityDetailHeight bg-cover bg-center bg-no-repeat rounded-3xl drop-shadow-lg"
          style={{ backgroundImage: `url(${opportunity.imageUrl})` }}
        ></div>
        <div className="flex items-center gap-2 ">
          <CiCalendarDate className="w-7 h-7 text-buttonColor " />
          <p>{opportunityDate}</p>
        </div>
        <div className="flex  items-center gap-2  ">
          <IoLocationOutline className="w-7 h-7 text-buttonColor " />
          <p>{opportunityLocation}</p>
        </div>
        <div className="flex items-center gap-2  ">
          <CiGrid42 className="w-7 h-7 text-buttonColor " />
          <p>{setTypeWork(opportunity.typeWork)}</p>
        </div>
        <a
          className="flex items-center  gap-2 "
          href={opportunity.website}
          target="_blank"
          rel="noopener noreferrer"
        >
          <CiGlobe className="w-7 h-7 text-buttonColor" />
          {opportunity.website}
        </a>

        <a
          href={`mailto:${opportunity.email}`}
          className=" flex items-center  gap-2"
        >
          <MdOutlineEmail className="w-7 h-7 text-buttonColor" />
          {opportunity.email}
        </a>

        <button
          onClick={handlerSendAplication}
          className=" w-full py-3 px-10 bg-buttonColor text-white rounded-3xl hover:bg-buttonHoverColor transition-all duration-150 ease-in-out "
          type="submit"
        >
          Submit an application
        </button>
      </div>
      <div className="w-opportunityTextContainerWidth">
        <h2 className="font-semibold text-3xl mb-6">{opportunity.title}</h2>
        <p className="text-xl">{opportunity.description}</p>
      </div>
    </div>
  );
};

export default DetailsOpportunityPage;
