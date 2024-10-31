import axios from "axios";
import { useEffect } from "react";

const WelcomePage = () => {
  useEffect(() => {
    const testApi = async () => {
      const opportunity = await axios.get(
        "https://help-up-ua-server.onrender.com/api/opportunities/"
      );

      return opportunity.data.data;
    };

    testApi();
  }, []);

  return (
    <div className="bg-lime-400 p-7 border-2 border-cyan-700 w-64">
      <ul>{}</ul>
    </div>
  );
};

export default WelcomePage;
