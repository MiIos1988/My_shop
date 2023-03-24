// import ModalWarningComponent from "../../../pages/admin/ModalWarningComponent";

import { useNavigate } from "react-router-dom";
import { deleteProductData } from "../../../service/productService";

function ProductComponent(props) {
  const { imgUrl, title, price, id, description, dashboard } = props;

  const navigate = useNavigate()

  const deleteProduct = () => {

    deleteProductData(id).then(data => navigate("/dashboard"))
      .catch(err => console.log("error", err))
  }

  const editProduct = () => {
    navigate(`/dashboard/create-edit-product/${id}`)
  }

  return (

    <div className=" d-flex flex-column product mt-4">

      <div className="border border-secondary imgSection">
        <img
          src={imgUrl}
          alt="product"
        />
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
            <button className="btn btn-secondary addBtn">Add To Cart</button>
        }
      </div>
    </div>

  );
}

export default ProductComponent;
