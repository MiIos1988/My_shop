import React from "react";
import { useEffect, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import { useDispatch } from "react-redux";
//@ts-ignore
import { changeQuantity } from "../../../redux/cartSlicer";

type QuantityProductComponentProps = {
  cartShop?: boolean;
  quantity: number;
  setQuantity?: React.Dispatch<React.SetStateAction<number>>;
  id?: number;
  price?: number;
};

const QuantityProductComponent = (props: QuantityProductComponentProps) => {
  const { cartShop, quantity, setQuantity, id } = props;
  const [quantityCart, setQuantityCart] = useState(quantity);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeQuantity({ id, quantityCart }));
  }, [quantityCart]);
  const increaseQuantity = () => {
    if (setQuantity) {
      !cartShop
        ? setQuantity((prev) => prev + 1)
        : setQuantityCart((prev) => prev + 1);
    }
  };

  const reduceQuantity = () => {
    if (setQuantity) {
      (!cartShop ? quantity : quantityCart) > 1
        ? !cartShop
          ? setQuantity((prev) => prev - 1)
          : setQuantityCart((prev) => prev - 1)
        : !cartShop
        ? setQuantity(1)
        : setQuantityCart(1);
    }
  };

  return (
    <div className={`quantity d-flex mb-${!cartShop ? 4 : 0}`}>
      {!cartShop && <p className="m-0 lh-lg">Quantity </p>}

      <div className={`counter d-flex quantArr ps-${!cartShop ? 4 : 0}`}>
        <div className="border p-2 reduce" onClick={reduceQuantity}>
          <MdKeyboardArrowDown />
        </div>
        <div className="border py-2 px-4 ">
          {!cartShop ? quantity : quantityCart}
        </div>
        <div className="border p-2 increase" onClick={increaseQuantity}>
          <MdKeyboardArrowUp />
        </div>
      </div>
    </div>
  );
};

export default QuantityProductComponent;
