import { Navigate } from "react-router-dom";

const PayGuardComponent = ({children}) => localStorage.getItem("my_user") ? children : <Navigate to={"/login"}/>


export default PayGuardComponent;