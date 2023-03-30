import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";


const QuantityProductComponent = (props) => {
 const { quantity, setQuantity} = props

 const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
    console.log(quantity);
  };

  const reduceQuantity = () => {
    quantity > 1 ? setQuantity((prev) => prev - 1) : setQuantity(1);
  };

    return (
        <div className="quantity d-flex mb-4">
          <p className="m-0 lh-lg">Quantity </p>
          <div className="counter d-flex ps-4">
            <div className="border p-2 reduce" onClick={reduceQuantity}>
              <MdKeyboardArrowDown />
            </div>
            <div className="border py-2 px-4 ">{quantity}</div>
            <div className="border p-2 increase" onClick={increaseQuantity}>
              <MdKeyboardArrowUp />
            </div>
          </div>
        </div>
    )
}

export default QuantityProductComponent;