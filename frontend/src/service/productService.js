import axios from "axios";

export const getProductData = (data) => axios.post("/product/get-product", data);
