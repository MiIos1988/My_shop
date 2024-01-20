import axios from "axios"

type IsActive = {
    checked: boolean,
     id: number
}

type PaymentProduct = {
    amount: number,
    currency: string
}

export const userData = () => axios.get("/user/get-all-users");

export const isActive= (body: IsActive) => axios.put("/user/is-active", body);

export const paymentProduct= (body: PaymentProduct) => axios.post("/user/init-payment", body);


