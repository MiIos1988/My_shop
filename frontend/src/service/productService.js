import axios from "axios";

export const getProductData = (data) => axios.post("/product/get-product", data);

export const getOneProductData = (id) => axios.get("/product/get-one-product/" + id);

export const editProductData = (data) => axios.put("/product/edit-product", data);

// export const getImageUrl = (data) => axios.post("https://api.cloudinary.com/v1_1/drsg0huwp/image/upload", data);

export const addProductData = (data) => axios.post("/product/add-product", data);

export const deleteProductData = (id) => axios.delete("/product/product?_id=" + id);
