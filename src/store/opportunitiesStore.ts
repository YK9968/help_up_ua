import axios from "axios";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import {
  ICreateOpportunity,
  IOpportunity,
  IUpdateOpportunity,
} from "../types/opportunitiesType";

interface IOpportunityState {
  items: IOpportunity[];
  opportunity: IOpportunity | null;
  loading: boolean;
  error: boolean;
  fetchAllOpportunity: () => void;
  fetchOpportunityById: (id: string) => void;
  addOpportunity: (payload: ICreateOpportunity) => void;
  updateOpportunity: (payload: IUpdateOpportunity, id: string) => void;
  deleteOpportunity: (id: string) => void;
}

const BASE_URL = "https://help-up-ua-server.onrender.com/api/opportunities/";

export const opportunityState = create<IOpportunityState>()(
  devtools(
    immer((set) => ({
      items: [],
      opportunity: null,
      loading: false,
      error: false,
      fetchAllOpportunity: async () => {
        try {
          set({ loading: true, error: false });
          const response = await axios.get(`${BASE_URL}`);
          set({ items: response.data.data });
          set({ loading: false });
        } catch (error) {
          set({ error: true });
        } finally {
          set({ loading: false });
        }
      },

      fetchOpportunityById: async (id: string) => {
        try {
          set({ loading: true, error: false });
          const response = await axios.get(`${BASE_URL}` + id);
          set((state) => {
            state.opportunity = response.data.data;
          });
          set({ loading: false });
        } catch (error) {
          set({ error: true });
        } finally {
          set({ loading: false });
        }
      },
      addOpportunity: async (payload: ICreateOpportunity) => {
        try {
          set({ loading: true, error: false });
          const formData = new FormData();
          formData.append("title", payload.title);
          formData.append("organizationName", payload.organizationName);
          formData.append("email", payload.email);
          formData.append("description", payload.description);
          formData.append("website", payload.website);
          formData.append("location", payload.location);
          formData.append("date", payload.date);
          formData.append("typeWork", payload.typeWork);
          if (payload.image) {
            formData.append("image", payload.image);
          }
          const response = await axios.post(
            `${BASE_URL}my-opportunities`,
            formData,
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
          );
          set((state) => {
            state.items = [response.data.data, ...state.items];
          });
          set({ loading: false });
        } catch (error) {
          console.log(error);
          set({ error: true });
        } finally {
          set({ loading: false });
        }
      },
      updateOpportunity: async (payload: IUpdateOpportunity, id: string) => {
        try {
          set({ loading: true, error: false });
          const response = await axios.post(`${BASE_URL}${id}`, payload);
          set((state) =>
            state.items.map((opp: IOpportunity) =>
              opp.id === id ? response.data : opp
            )
          );
          set({ loading: false });
        } catch (error) {
          set({ error: true });
        } finally {
          set({ loading: false });
        }
      },
      deleteOpportunity: async (id: string) => {
        try {
          set({ loading: true, error: false });
          await axios.delete(`${BASE_URL}my-opportunities/${id}`);
          set((state) => {
            state.items = state.items.filter(
              (opp: IOpportunity) => opp.id !== id
            );
          });
          set({ loading: false });
        } catch (error) {
          set({ error: true });
        } finally {
          set({ loading: false });
        }
      },
    })),
    { name: "opportunity" }
  )
);
