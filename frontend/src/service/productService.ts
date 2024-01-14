import axios from "axios";

type GetProductData = {
  start: number;
  perPage: number;
  allPag?: number;
};

type SearchProductData = {
  search: string | null;
};

type Pagination = {
  start: number;
  perPage: number;
  allPag: number;
};

type CategoryProductData = {
  categoryId: string | null;
  pagination: Pagination;
};

type ProductData = {
  title: string;
  description: string;
  price: string;
  category: string;
  imgUrl: string;
};

export const getProductData = (data: GetProductData) =>
  axios.post("/product/get-product", data);

export const searchProductData = (data: SearchProductData) =>
  axios.post("/product/search-product", data);

export const categoryProductData = (data: CategoryProductData) =>
  axios.post("/product/category-product", data);

export const getOneProductData = (id: string | null) =>
  axios.get("/product/get-one-product/" + id);

export const editProductData = (data: ProductData) =>
  axios.put("/product/edit-product", data);

// export const getImageUrl = (data) => axios.post("https://api.cloudinary.com/v1_1/drsg0huwp/image/upload", data);

export const addProductData = (data: ProductData) =>
  axios.post("/product/add-product", data);

export const deleteProductData = (id: number) =>
  axios.delete("/product/product?_id=" + id);

// export const setProductInLocalStorage = (data) => localStorage.setItem("cartProduct", JSON.stringify(data));

export const getProductInLocalStorage = () => {
  const cartProduct = localStorage.getItem("cartProduct");
  if (cartProduct) {
    return JSON.parse(cartProduct);
  }
};
