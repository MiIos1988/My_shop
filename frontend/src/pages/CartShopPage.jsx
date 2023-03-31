import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import QuantityProductComponent from "../components/showProductComponent/component/QuantityProductComponent"
import { removeProduct } from "../redux/cartSlicer";

const CartShopPage = () => {

    const cartSlicer = useSelector((store) => store.cartSlicer.cart);
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();

    return (
        <div className="container mt-5 cartShop">
            <table className="table table-striped ">
                <thead>
                    <tr>
                        <th className="col-5" scope="col">Product</th>
                        <th scope="col">Price</th>
                        <th scope="col" >Quantity</th>
                        <th scope="col">Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cartSlicer.map((el, index) => {
                            return (
                                <tr key={index}>
                                    <td >
                                        <div className="d-flex align-middle">
                                            <img src={el.imgUrl} alt="" />
                                            <p className="m-0 px-4 align-middle">{el.title}</p>
                                        </div>
                                    </td>
                                    <td>${el.price}</td>
                                    <td  ><QuantityProductComponent cartShop={true} quantity={el.quantity} price={el.price} id={el.id} /> </td>
                                    <td>
                                        <div className="d-flex justify-content-between">
                                            {el.price * el.quantity}
                                            <button onClick={() => {
                                                console.log(el.id)
                                                dispatch(removeProduct(el.id ))
                                            }}>X</button>
                                        </div>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="3" className="text-end pe-5"><b>Total for pay:</b></td>
                        <td ><b>{
                            cartSlicer.map(el => el.price * el.quantity).reduce((acc, curr) => acc + curr, 0)

                        }</b></td>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}

export default CartShopPage