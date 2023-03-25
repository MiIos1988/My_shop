import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getOneProductData } from "../../service/productService";
import { MdKeyboardArrowDown } from 'react-icons/md';

const ShowProductComponent = () => {
    const [queryParams] = useSearchParams();
    const [product, setProduct]= useState()

useEffect(() => {
  const id = queryParams.get("id");
  getOneProductData(id).then( res => setProduct(res.data.data))
  .catch(err => console.log(err))
},[]
)

    return (
        <div className="container d-flex my-5 row mx-auto showProduct">
            <div className="imageProduct border col-5">
                <img src={product?.imgUrl} alt="" />
            </div>
            <div className="infoProduct col-5 offset-1 ">
                <h2>{product?.title}</h2>
                <p className="price">${product?.price}</p>
                <p className="description">{product?.description}</p>
                <div className="quantity">
                    <p>Quantity </p>
                    <div><MdKeyboardArrowDown/></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default ShowProductComponent;