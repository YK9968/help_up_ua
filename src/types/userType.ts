export interface IRegisterUser {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone: string;
  age: number;
  isCompany: boolean;
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
