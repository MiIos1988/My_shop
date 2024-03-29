import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
//@ts-ignore
import { paymentProduct } from "../service/userService";
import { Elements } from "@stripe/react-stripe-js";
import PaymentElementsComponent from "../components/payProductComponent/PaymentElementsComponent";
import { useDispatch } from "react-redux";

const pk =
  "pk_test_51MgyLeAoAwiaPpyxD5djKRFqbe0ycmT4ivIpXcuHAgrVoXzwWg0xXjeczsbRAb6cFW2VJy8gRGbvv5JxBt7Ujxoa0058YwhCt3";
const stripeObj = loadStripe(pk);

const PayPageComponent = () => {
  const [ck, setCk] = useState("");
  const dispatch = useDispatch();

  const totalPrice = useSelector((stor: any) => stor.cartSlicer.totalPrice);

  useEffect(() => {
    // dispatch(toggleLoader(false));
    totalPrice &&
      paymentProduct({ amount: totalPrice, currency: "USD" })
        .then((res: any) => {
          setCk(res.data.client_secret);
        })
        .catch((err: any) => console.log(err));
  }, [totalPrice]);

  return (
    <>
      {ck && (
        <Elements stripe={stripeObj} options={{ clientSecret: ck }}>
          <PaymentElementsComponent ck={ck} />
        </Elements>
      )}
    </>
  );
};

export default PayPageComponent;
