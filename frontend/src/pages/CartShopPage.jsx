import QuantityProductComponent from "../components/showProductComponent/component/QuantityProductComponent"

const CartShopPage = () => {

    return (
        <div className="container mt-5 cartShop">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Product</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td scope="row">
                            <div className="d-flex">
                                <img src="https://img.gigatron.rs/img/products/large/45cbe9f9259d774b35ad767eed8ec815.png" alt="" />
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                        </td>
                        <td>$120</td>
                        <td><QuantityProductComponent /> </td>
                        <td>@mdo</td>
                    </tr>

                </tbody>
            </table>
        </div>
    )
}

export default CartShopPage