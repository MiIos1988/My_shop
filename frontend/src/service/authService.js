import axios from "axios"

export const userData = (data) => axios.post("/auth/register", data);

export const loginData = (data) => axios.post("/auth/login", data);

export const userActive = (id) => axios.put("/auth/active", id);