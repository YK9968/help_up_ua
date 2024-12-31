import { RootState } from "../../types/authTypes";

export const selectOpportunities = (state: RootState) =>
  state.opportunities.items;
export const selectUserOpportunities = (state: RootState) =>
  state.opportunities.userItems;
export const selectIsLoadingOpportunities = (state: RootState) =>
  state.opportunities.isOppLoading;
export const selectTotalgOpportunities = (state: RootState) =>
  state.opportunities.total;
