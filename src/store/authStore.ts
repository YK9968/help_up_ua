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
  registerUser: (payload: IRegisterUser) => Promise<void>;
  loginUser: (payload: ILoginUser) => Promise<void>;
  logOutUser: () => void;
  refreshUser: (token: string) => Promise<void>;
}

const setAuthHeader = (token: string) => {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common["Authorization"] = "";
};

const BASE_URL = "https://help-up-ua-server.onrender.com/api/auth/";

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
            setAuthHeader(response.data.accessToken);
            set({
              user: response.data as IUser,
              token: response.data.accessToken,
              isLogin: true,
              loading: false,
              error: false,
            });
          } catch (error) {
            set({ loading: false, error: true });
          }
        },
        loginUser: async (payload: ILoginUser) => {
          try {
            set({ loading: true, error: false });
            const response = await axios.post(`${BASE_URL}login`, payload);
            setAuthHeader(response.data.accessToken);
            set({
              user: response.data as IUser,
              token: response.data.accessToken,
              isLogin: true,
              loading: false,
              error: false,
            });
          } catch (error) {
            set({ loading: false, error: true });
          }
        },
        logOutUser: () => {
          set({ user: null, isLogin: false, token: null });
          clearAuthHeader();
        },
        refreshUser: async (token: string) => {
          try {
            const response = await axios.post(`${BASE_URL}acces-token`, {
              token,
            });
            set({ token: response.data.accessToken });
          } catch (error) {
            set({ loading: false, error: true });
          }
        },
      })),
      { name: "auth" }
    )
  )
);
