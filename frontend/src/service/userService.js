import axios from "axios"

export const userData = () => axios.get("/user/get-all-users");

export const isActive= () => axios.get("/user/get-all-users");