// import ModalWarningComponent from "../../../pages/admin/ModalWarningComponent";

import { Link, useNavigate } from "react-router-dom";
import { deleteProductData, getProductInLocalStorage, setProductInLocalStorage } from "../../../service/productService";

function ProductComponent(props) {
  const { imgUrl, title, price, id, dashboard } = props;
  const cartProduct = {
    cart: [],
    totalCount: 0,
    totalPrice: 0,
  };

  const navigate = useNavigate()

  const deleteProduct = () => {

    deleteProductData(id).then(data => navigate("/dashboard"))
      .catch(err => console.log("error", err))
  }

  const editProduct = () => {
    navigate(`/dashboard/create-edit-product/${id}`)
  }
  const fillObject = () => {
    cartProduct.cart.push({ imgUrl, title, price, id });
    cartProduct.totalCount = 1;
    cartProduct.totalPrice = price;
  }

  const addInObject = () => {
    console.log("fill")
  }

  const addToCart = () => {
    const arrayInLocalStorage = getProductInLocalStorage();
    console.log(arrayInLocalStorage)
    !arrayInLocalStorage ? fillObject() : addInObject()
    setProductInLocalStorage(cartProduct)
  }

  return (

    <div className=" d-flex flex-column product mt-4">

      <div className="border border-secondary imgSection">
        <Link to={`/show-product?id=${id}`}>
          <img
            src={imgUrl}
            alt="product"
          />
        </Link>

      </div>
      <div className="priceSection">
        <p className="title">
          {title}
        </p>
        {/* <p>{description}</p> */}
        <p className="price">${price}</p>
        {
          dashboard ? (
            <div className="d-flex justify-content-center">
              <button className="btn btn-danger me-2" onClick={deleteProduct}>Delate</button>
              <button className="btn btn-warning" onClick={editProduct}>Edit</button>
            </div>
          ) :
            <button className="btn btn-secondary addBtn" onClick={addToCart}>Add To Cart</button>
        }
      </div>
    </div>

  );
}

export default ProductComponent;
