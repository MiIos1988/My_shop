import axios from "axios"
import jwt_decode from 'jwt-decode';
import { checkAdmin } from "./userService";

export const userData = (data) => axios.post("/auth/register", data);

export const loginData = (data) => axios.post("/auth/login", data);

export const userActive = (id) => axios.put("/auth/active", id);


export const setTokenInLocalStorage = (token) => localStorage.setItem("my_token", JSON.stringify(token));

export const removeLocalStorage = (name) => localStorage.removeItem(name);

export const isUserLogin = () => localStorage.getItem("my_token");

export const isAdmin =  async() =>{ 
    let admin = false;
    // await checkAdmin().then(el =>admin = el.data)
    //     .catch(err => admin = false )

  return  isUserLogin() && jwt_decode(localStorage.getItem("my_token"))?.isAdmin && admin
};
