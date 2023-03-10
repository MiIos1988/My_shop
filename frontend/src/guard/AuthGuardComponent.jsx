import { Navigate } from "react-router-dom";

const AuthGuardComponent = ({children}) => !localStorage.getItem("my_user") ? children : <Navigate to={"/"}/>


export default AuthGuardComponent;