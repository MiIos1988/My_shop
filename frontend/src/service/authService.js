import axios from "axios"

export const userData = (data) => axios.post("/auth/register", data);

export const loginData = (data) => axios.post("/auth/login", data);

export const userActive = (id) => axios.put("/auth/active", id);

export const setUserInLocalStorage = (user) => localStorage.setItem("my_user", JSON.stringify(user));

export const setTokenInLocalStorage = (token) => localStorage.setItem("my_token", JSON.stringify(token));
