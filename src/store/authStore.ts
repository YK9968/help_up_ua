import axios from "axios";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { ILoginUser, IRegisterUser } from "../types/userType";

interface IUser {
  id: string;
  firstName: string;
  email: string;
  refreshToken: string;
  accessToken: string;
}

interface IAuthState {
  user: IUser | null;
  isLogin: boolean;
  token: string | null;
  error: boolean;
  loading: boolean;
  registerUser: (payload: IRegisterUser) => void;
  loginUser: (payload: ILoginUser) => void;
  logOutUser: (id: string) => void;
  refreshUser: (token: string) => void;
}

const BASE_URL = "http://localhost:3000/api/auth/";

export const authState = create<IAuthState>()(
  devtools(
    persist(
      immer((set) => ({
        user: null,
        isLogin: false,
        token: null,
        loading: false,
        error: false,
        registerUser: async (payload: IRegisterUser) => {
          try {
            set({ loading: true, error: false });
            const response = await axios.post(`${BASE_URL}register`, payload);
            set({ user: response.data, token: response.data.accessToken });
          } catch (error) {
            set({ loading: false, error: true });
          }
        },
        loginUser: async (payload: ILoginUser) => {
          try {
            set({ loading: true, error: false });
            const response = await axios.post(`${BASE_URL}login`, payload);
            set({ user: response.data, token: response.data.accessToken });
          } catch (error) {
            set({ loading: false, error: true });
          }
        },
        logOutUser: async (id: string) => {
          try {
            set({ loading: true, error: false });
            await axios.post(`${BASE_URL}logout/${id}`);
            set({ user: null, isLogin: false, token: null });
          } catch (error) {
            set({ loading: false, error: true });
          }
        },
        refreshUser: async (token: string) => {
          try {
            const response = await axios.post(`${BASE_URL}acces-token`, token);
            set({ token: response.data.accessToken });
          } catch (error) {}
        },
      })),
      { name: "token" }
    )
  )
);
