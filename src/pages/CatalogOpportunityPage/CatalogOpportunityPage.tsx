import { useEffect, useState } from "react";
import Pagination from "../../components/Pagination/Pagination";
import Filter from "../../components/Filter/Filter";
import OpportunitiesList from "../../components/OpportunitiesList/OpportunitiesList";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { fetchAllOpportunity } from "../../redux/opportunity/operations";
import {
  selectOpportunities,
  selectTotalgOpportunities,
} from "../../redux/opportunity/selectors";

const CatalogOpportunityPage = () => {
  const dispatch = useAppDispatch();
  const [page, setPage] = useState<number>(1);

  const nextPage = () => {
    setPage(page + 1);
  };
  const prevPage = () => {
    if (page === 1) return;
    setPage(page - 1);
  };

  useEffect(() => {
    dispatch(fetchAllOpportunity(page));
  }, [dispatch, page]);

  const opportunities = useAppSelector(selectOpportunities);
  const total = useAppSelector(selectTotalgOpportunities);

  return (
    <div className="pb-24">
      <p className="flex gap-2 items-center font-semibold text-2xl pb-12">
        <span className="text-blue-500 ">{total === 0 ? "0" : total}</span>
        opportunities
      </p>
      <div className="flex justify-between">
        {opportunities.length !== 0 ? (
          <OpportunitiesList opportunities={opportunities} type="all-opp" />
        ) : (
          <div></div>
        )}
        <Filter />
      </div>
      <Pagination
        page={page}
        nextPage={nextPage}
        prevPage={prevPage}
        total={total}
      />
    </div>
  );
};

export default CatalogOpportunityPage;
