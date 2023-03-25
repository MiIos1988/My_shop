import axios from "axios"

export const userData = () => axios.get("/user/get-all-users");

export const isActive= (body) => axios.put("/user/is-active", body);