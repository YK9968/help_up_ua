import { RootState } from "../../types/authTypes";

export const selectOpportunities = (state: RootState) =>
  state.opportunities.items;
export const selectIsLoadingOpportunities = (state: RootState) =>
  state.opportunities.isOppLoading;
