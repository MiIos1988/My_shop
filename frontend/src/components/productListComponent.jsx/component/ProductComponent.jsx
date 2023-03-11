
function ProductComponent(props) {
const {imgUrl, title, price} = props;
  return (
    <div className=" d-flex flex-column product">
        <div className="border border-secondary imgSection">
            <img src="https://img.gigatron.rs/img/products/large/image62a1c9c93df50.png" alt="product" />
        </div>
        <div className="priceSection">
        <p>LOGITECH Bežična tastatura MX Mechanical Graphite US</p>
        <p>200</p>
        <button>Add To Cart</button>
        </div>
    </div>
  )
}

export default ProductComponent
