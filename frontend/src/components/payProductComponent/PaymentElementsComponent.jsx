import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";

const PaymentElementsComponent = ({ ck }) => {
  const stripe = useStripe();
  const elements = useElements()

  const onPay = () => {
    if (!stripe || !elements || !ck) {
       console.log("Error while paying.")
       return
    }
    stripe.confirmPayment({elements,
        confirmParams: {
            return_url: 'http://localhost:3000'
        }})
  }

  return (
    <>
      {stripe && (
        <div className="row container mt-5">
        <div className=" col-6 offset-3">
          <PaymentElement /><br />
          <button onClick={onPay} className="btn btn-primary form-control">Pay </button>
        </div>
        </div>
      )}
    </>
  );
};

export default PaymentElementsComponent;
