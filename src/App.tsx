import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import CatalogOpportunityPage from "./pages/CatalogOpportunityPage/CatalogOpportunityPage";
import DetailsOpportunityPage from "./pages/DetailsOpportunityPage/DetailsOpportunityPage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/opportunities" element={<CatalogOpportunityPage />} />
        <Route path="/opportunities/:id" element={<DetailsOpportunityPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
