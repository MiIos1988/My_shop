import axios from "axios";
import jwt_decode from "jwt-decode";

type UserData = {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
  firstName: string;
  lastName: string;
  phone: string;
  city: string;
};

type LoginData = {
  email: string;
  password: string;
};

type DecodedToken = {
  isAdmin: boolean;
};

type UserActive = {
  _id: number
}

export const userData = (data: UserData) => axios.post("/auth/register", data);

export const loginData = (data: LoginData) => axios.post("/auth/login", data);

export const userActive = (id: UserActive) => axios.put("/auth/active", id);

export const setTokenInLocalStorage = (token: string) =>
  localStorage.setItem("my_token", JSON.stringify(token));

export const removeLocalStorage = (name: string) =>
  localStorage.removeItem(name);

const token = localStorage.getItem("my_token");

export const isUserLogin = () => token;

export const isAdmin = () => {
  if (token) {
    return jwt_decode<DecodedToken>(token)?.isAdmin || false;
  }
  return false;
};
