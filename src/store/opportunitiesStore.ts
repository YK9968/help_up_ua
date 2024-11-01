import axios from "axios";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { IOpportunity, IUpdateOpportunity } from "../types/opportunitiesType";

interface IOpportunityState {
  items: IOpportunity[];
  loading: boolean;
  error: boolean;
  fetchAllOpportunity: () => void;
  addOpportunity: (payload: IOpportunity) => void;
  updateOpportunity: (payload: IUpdateOpportunity, id: string) => void;
  deleteOpportunity: (id: string) => void;
}

const BASE_URL = "http://localhost:3000/api/opportunities/";

export const opportunityState = create<IOpportunityState>()(
  devtools(
    immer((set) => ({
      items: [],
      loading: false,
      error: false,
      fetchAllOpportunity: async () => {
        try {
          set({ loading: true, error: false });
          const response = await axios.get(`${BASE_URL}`);
          set({ items: response.data });
          set({ loading: false });
        } catch (error) {
          set({ error: true });
        } finally {
          set({ loading: false });
        }
      },
      addOpportunity: async (payload: IOpportunity) => {
        try {
          set({ loading: true, error: false });
          const response = await axios.post(`${BASE_URL}`, payload);
          set((state) => {
            state.items.push(response.data);
          });
          set({ loading: false });
        } catch (error) {
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
          await axios.delete(`${BASE_URL}${id}`);
          set((state) =>
            state.items.filter((opp: IOpportunity) => opp.id !== id)
          );
          set({ loading: false });
        } catch (error) {
          set({ error: true });
        } finally {
          set({ loading: false });
        }
      },
    }))
  )
);
