import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import CatalogOpportunityPage from "./pages/CatalogOpportunityPage/CatalogOpportunityPage";
import DetailsOpportunityPage from "./pages/DetailsOpportunityPage/DetailsOpportunityPage";
import MyOpportunitiesPage from "./pages/MyOpportunitiesPage/MyOpportunitiesPage";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import { selectIsRefreshing } from "./redux/auth/selectors";
import { useAppDispatch, useAppSelector } from "./redux/store";
import { useEffect } from "react";
import { refreshUser } from "./redux/auth/operations";
import Loader from "./components/Loader/Loader";

function App() {
  const dispatch = useAppDispatch();
  const isRefresh = useAppSelector(selectIsRefreshing);
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Layout>
      {isRefresh ? (
        <Loader />
      ) : (
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/opportunities" element={<CatalogOpportunityPage />} />
          <Route
            path="/opportunities/:id"
            element={<DetailsOpportunityPage />}
          />
          <Route
            path="/my-opportunities"
            element={
              <PrivateRoute
                component={<MyOpportunitiesPage />}
                redirectTo={"/"}
              />
            }
          />
        </Routes>
      )}
    </Layout>
  );
}

export default App;
