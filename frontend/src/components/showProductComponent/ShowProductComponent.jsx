import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { getOneProductData } from "../../service/productService";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import { SlBasket } from "react-icons/sl";
import { BsSuitHeartFill } from "react-icons/bs";
import { TbArrowsCross } from "react-icons/tb";

const ShowProductComponent = () => {
  const [queryParams] = useSearchParams();
  const [product, setProduct] = useState();
  const [quantity, setQuantity] = useState(1);
  const [moveX, setMoveX] = useState();
  const [moveY, setMoveY] = useState();
  const [zoomOut, setZoomOut] = useState(false);


  useEffect(() => {
    const id = queryParams.get("id");
    getOneProductData(id)
      .then((res) => {
        setProduct(res.data.data)
      })
      .catch((err) => console.log(err));
  }, []);

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
    console.log(quantity);
  };

  const reduceQuantity = () => {
    quantity > 1 ? setQuantity((prev) => prev - 1) : setQuantity(1);
  };

  const mouseMoveIn = (e) => {
    setZoomOut(true)
      setMoveX(e.clientX - e.target.offsetLeft);
      setMoveY(e.clientY - e.target.offsetTop);
  }

  const mouseMoveExit = () => {
    setZoomOut(false)
  }

  return (
    <div className="container d-flex my-5 row mx-auto showProduct">
      <div className="imageProduct border col-5" 
      onMouseMove={mouseMoveIn} onMouseLeave={mouseMoveExit}
      >
        <img src={product?.imgUrl} alt="" style={zoomOut ? { transformOrigin: `${moveX}px ${moveY}px`, transform: "scale(2)" } : { transformOrigin: "center", transform: "scale(1)" }} />
      </div>
      <div className="infoProduct col-5 offset-1 ">
        <h2>{product?.title}</h2>
        <p className="price">${product?.price}</p>
        <p className="description">{product?.description}</p>
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
        <div className="productAction d-flex fs-5 mb-3 pb-3">
          <div className="border p-2">
            <SlBasket /> Add to cart
          </div>
          <div className="border p-2 mx-2">
            <BsSuitHeartFill />
          </div>
          <div className="border p-2">
            <TbArrowsCross />
          </div>
        </div>
        <div className="socialNetwork d-flex">
          <Link
            to={"https://www.facebook.com/"}
            target="_blank"
            className="fb"
          ></Link>
          <Link
            to={"https://twitter.com/"}
            target="_blank"
            className="tw"
          ></Link>
          <Link
            to={"https://www.instagram.com/"}
            target="_blank"
            className="in"
          ></Link>
        </div>
      </div>
    </div>
  );
};

export default ShowProductComponent;
