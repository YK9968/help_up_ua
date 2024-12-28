import { createSlice } from "@reduxjs/toolkit";
import { IOpportunitiseState } from "../../types/opportunitiesType";
import {
  addOpportunity,
  deleteOpportunity,
  fetchAllOpportunity,
  fetchAllUserOpportunity,
  updateOpportunity,
} from "./operations";

const initialState: IOpportunitiseState = {
  items: [],
  userItems: [],
  isOppLoading: false,
  isOppError: false,
};

export const opportunitiesSlice = createSlice({
  name: "opportunities",
  initialState,
  reducers: {},

  extraReducers: (builder) =>
    builder
      .addCase(fetchAllOpportunity.pending, (state) => {
        state.isOppLoading = true;
        state.isOppError = false;
      })
      .addCase(fetchAllOpportunity.fulfilled, (state, action) => {
        state.isOppLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchAllOpportunity.rejected, (state) => {
        state.isOppLoading = false;
        state.isOppError = true;
      })
      .addCase(fetchAllUserOpportunity.pending, (state) => {
        state.isOppLoading = true;
        state.isOppError = false;
      })
      .addCase(fetchAllUserOpportunity.fulfilled, (state, action) => {
        state.isOppLoading = false;
        state.userItems = action.payload;
      })
      .addCase(fetchAllUserOpportunity.rejected, (state) => {
        state.isOppLoading = false;
        state.isOppError = true;
      })
      .addCase(addOpportunity.pending, (state) => {
        state.isOppLoading = true;
        state.isOppError = false;
      })
      .addCase(addOpportunity.fulfilled, (state, action) => {
        state.isOppLoading = false;
        state.items.push(action.payload);
      })
      .addCase(addOpportunity.rejected, (state) => {
        state.isOppLoading = false;
        state.isOppError = true;
      })
      .addCase(updateOpportunity.pending, (state) => {
        state.isOppLoading = true;
        state.isOppError = false;
      })
      .addCase(updateOpportunity.fulfilled, (state, action) => {
        state.isOppLoading = false;
        state.items = state.items.map((opp) =>
          opp.id === action.payload.id ? action.payload : opp
        );
      })
      .addCase(updateOpportunity.rejected, (state) => {
        state.isOppLoading = false;
        state.isOppError = true;
      })
      .addCase(deleteOpportunity.pending, (state) => {
        state.isOppLoading = true;
        state.isOppError = false;
      })
      .addCase(deleteOpportunity.fulfilled, (state, action) => {
        state.isOppLoading = false;
        state.items = state.items.filter((opp) => opp.id !== action.payload.id);
      })
      .addCase(deleteOpportunity.rejected, (state) => {
        state.isOppLoading = false;
        state.isOppError = true;
      }),
});

export const opportunitiesReducer = opportunitiesSlice.reducer;
