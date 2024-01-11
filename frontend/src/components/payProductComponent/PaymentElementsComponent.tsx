import React from "react";
import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
//@ts-ignore
import { toggleLoader } from "../../redux/loaderSlicer";


const PaymentElementsComponent = ({ ck }: { ck: string }) => {
  const stripe = useStripe();
  const elements = useElements()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(toggleLoader(false))
  }, []
  )

  const onPay = () => {
    if (!stripe || !elements || !ck) {
      return
    }
    stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: 'http://localhost:3000'
      }
    })
  }

  return (
    <>
      {stripe && (
        <div className="container mt-5">
          <div className="row justify-content-center">
            <div className=" col-md-6 ">
              <PaymentElement /><br />
              <button onClick={onPay} className="btn btn-primary form-control">Pay </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PaymentElementsComponent;
