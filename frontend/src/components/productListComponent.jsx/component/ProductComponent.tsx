// import ModalWarningComponent from "../../../pages/admin/ModalWarningComponent";
import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addToCart } from "../../../redux/cartSlicer";
import { deleteProductData } from "../../../service/productService";
import { toggleLoader } from "../../../redux/loaderSlicer";

type ProductComponentProps = {
  imgUrl: string;
  title: string;
  price: number;
  id: number;
  dashboard?: boolean;
};

function ProductComponent(props: ProductComponentProps) {
  const { imgUrl, title, price, id, dashboard } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const deleteProduct = async () => {
    try {
      await deleteProductData(id);
      navigate("/dashboard");
    } catch (error) {
      console.log("error", error);
    }
  };

  const editProduct = () => {
    navigate(`/dashboard/create-edit-product/${id}`);
  };

  const addProductInCart = () => {
    dispatch(addToCart({ id, imgUrl, title, price, quantity: 1 }));
  };

  return (
    <div className=" d-flex flex-column product mt-4">
      <div className="border border-secondary imgSection">
        <Link
          to={`/show-product?id=${id}`}
          onClick={() => dispatch(toggleLoader(true))}
        >
          <img src={imgUrl} alt="product" />
        </Link>
      </div>
      <div className="priceSection">
        <p className="title">{title}</p>
        {/* <p>{description}</p> */}
        <p className="price">${price}</p>
        {dashboard ? (
          <div className="d-flex justify-content-center">
            <button className="btn btn-danger me-2" onClick={deleteProduct}>
              Delate
            </button>
            <button className="btn btn-warning" onClick={editProduct}>
              Edit
            </button>
          </div>
        ) : (
          <button
            className="btn btn-secondary addBtn"
            onClick={addProductInCart}
          >
            Add To Cart
          </button>
        )}
      </div>
    </div>
  );
}

export default ProductComponent;
