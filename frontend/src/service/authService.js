import axios from "axios"
import jwt_decode from 'jwt-decode';
// import { checkAdmin } from "./userService";
import { useSelector } from "react-redux";

export const userData = (data) => axios.post("/auth/register", data);

export const loginData = (data) => axios.post("/auth/login", data);

export const userActive = (id) => axios.put("/auth/active", id);


export const setTokenInLocalStorage = (token) => localStorage.setItem("my_token", JSON.stringify(token));

export const removeLocalStorage = (name) => localStorage.removeItem(name);

export const IsUserLogin = () => {
  const userStore = useSelector((store) => store.userSlicer.user);
  return userStore;
};
export const IsAdminTrue = () => {
  const adminStore = useSelector((store) => store.userSlicer.active);
  return adminStore;
};

export const IsAdmin = () => {
  console.log(IsUserLogin())
  console.log(IsAdminTrue())

  // return IsUserLogin() && IsAdminTrue()
};
