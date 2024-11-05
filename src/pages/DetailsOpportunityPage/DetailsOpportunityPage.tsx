import { useParams } from "react-router-dom";

const DetailsOpportunityPage = () => {
  const { id } = useParams();

  console.log(id);

  return <div>DetailsOpportunityPage</div>;
};

export default DetailsOpportunityPage;
