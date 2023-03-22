import axios from "axios";

export const getProductData = (data) => axios.post("/product/get-product", data);

export const getImageUrl = (data) => axios.post("https://api.cloudinary.com/v1_1/drsg0huwp/image/upload", data);
