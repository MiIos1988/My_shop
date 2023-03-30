import { useState } from "react";
import { useSelector } from "react-redux";
import QuantityProductComponent from "../components/showProductComponent/component/QuantityProductComponent"

const CartShopPage = () => {

    const cartSlicer = useSelector((store) => store.cartSlicer.cart);
    const [quantity, setQuantity] = useState(1);
    return (
        <div className="container mt-5 cartShop">
            <table className="table align-middle table-striped">
                <thead>
                    <tr>
                        <th className="col-5" scope="col">Product</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    {
                      cartSlicer.map((el, index) => {
                        return(
                            <tr key={index}>
                        <td >
                            <div className="d-flex align-middle">
                                <img src={el.imgUrl} alt="" />
                                <p className="m-0 px-4 align-middle">{el.title}</p>
                            </div>
                        </td>
                        <td>${el.price}</td>
                        <td ><QuantityProductComponent cartShop={true} quantity={el.quantity} /> </td>
                        <td>{el.price * el.quantity}</td>
                    </tr>
                        )
                      })  
                    }
                    

                </tbody>
            </table>
        </div>
    )
}

export default CartShopPage