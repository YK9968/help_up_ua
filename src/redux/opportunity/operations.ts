import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  ICreateOpportunity,
  IUpdateOpportunity,
} from "../../types/opportunitiesType";

export const fetchAllOpportunity = createAsyncThunk(
  "get/opportunities",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/opportunities");
      return response.data.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Failed to get opp"
      );
    }
  }
);

export const addOpportunity = createAsyncThunk(
  "create/opportunity",
  async (opp: ICreateOpportunity, thunkAPI) => {
    try {
      const response = await axios.post("/opportunities/my-opportunities", opp);
      return response.data.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Failed to create opp"
      );
    }
  }
);

export const updateOpportunity = createAsyncThunk(
  "update/opportunity",
  async (opp: { opportunity: IUpdateOpportunity; id: string }, thunkAPI) => {
    try {
      const response = await axios.patch(
        `/opportunities/my-opportunities/${opp.id}`,
        opp.opportunity
      );
      return response.data.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Failed to update opp"
      );
    }
  }
);

export const deleteOpportunity = createAsyncThunk(
  "delete/opportunity",
  async (id: string, thunkAPI) => {
    try {
      const response = await axios.delete(
        `/opportunities/my-opportunities/${id}`
      );
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Failed to delete opp"
      );
    }
  }
);
