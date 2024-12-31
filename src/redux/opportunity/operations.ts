import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

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
export const fetchAllUserOpportunity = createAsyncThunk(
  "get/my-opportunities",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/opportunities/my-opportunities");
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
  async (opp: FormData, thunkAPI) => {
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
  async (opp: { opportunity: FormData; id: string | undefined }, thunkAPI) => {
    if (!opp.id) return;

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
