import { createSlice } from "@reduxjs/toolkit";
import { loginUser, refreshUser, registerUser } from "./operations";
import { AuthState } from "../../types/authTypes";

const initialState: AuthState = {
  user: {
    id: null,
    firstName: null,
    email: null,
    isCompany: false,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  authLoading: false,
  authError: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOut(state) {
      state.isLoggedIn = false;
      state.token = null;
      state.user = { id: null, firstName: null, email: null, isCompany: false };
    },
  },

  extraReducers: (builder) =>
    builder
      .addCase(registerUser.pending, (state) => {
        state.authLoading = true;
        state.authError = false;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.authLoading = false;
        state.isLoggedIn = true;
        state.user.email = action.payload.email;
        state.user.id = action.payload.id;
        state.user.isCompany = action.payload.isCompany;
        state.user.firstName = action.payload.firstName;
        state.token = action.payload.accessToken;
      })
      .addCase(registerUser.rejected, (state) => {
        state.authLoading = false;
        state.authError = true;
      })
      .addCase(loginUser.pending, (state) => {
        state.authLoading = true;
        state.authError = false;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.user.email = action.payload.email;
        state.user.id = action.payload.id;
        state.user.isCompany = action.payload.isCompany;
        state.user.firstName = action.payload.firstName;
        state.token = action.payload.accessToken;
        state.authLoading = false;
      })
      .addCase(loginUser.rejected, (state) => {
        state.authLoading = false;
        state.authError = true;
      })
      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user.firstName = action.payload.name;
        state.user.id = action.payload.id;
        state.user.email = action.payload.email;
        state.user.isCompany = action.payload.isCompany;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      }),
});

export const authReducer = authSlice.reducer;
export const { logOut } = authSlice.actions;
