import { PersistPartial } from "redux-persist/es/persistReducer";
import { IOpportunitiseState, IOpportunity } from "./opportunitiesType";

export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone: string;
  age: number;
  isCompany: boolean;
  opportunities: IOpportunity[];
}

export interface IUserState {
  id: string | null;
  firstName: string | null;
  email: string | null;
  isCompany: boolean;
}

export interface AuthState {
  user: IUserState;
  token: string | null;
  isLoggedIn: boolean;
  isRefreshing: boolean;
  authLoading: boolean;
  authError: boolean;
}

export interface RootState {
  auth: AuthState & PersistPartial;
  opportunities: IOpportunitiseState;
}

export interface IRegisterUser {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone: string;
  age: number | string;
  isCompany?: boolean;
}

export interface ILoginUser {
  email: string;
  password: string;
}

export interface UpdateUser {
  firstName?: string;
  lastName?: string;
  phone?: string;
  age?: number;
  isCompany?: boolean;
}
