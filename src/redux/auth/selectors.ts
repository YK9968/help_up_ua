import { RootState } from "../../types/authTypes";

export const selectIsLoggedIn = (state: RootState) => state.auth.isLoggedIn;
export const selectUser = (state: RootState) => state.auth.user;
export const selectIsRefreshing = (state: RootState) => state.auth.isRefreshing;
export const selectIsLoading = (state: RootState) => state.auth.authLoading;
export const selectIsCompany = (state: RootState) => state.auth.user.isCompany;
