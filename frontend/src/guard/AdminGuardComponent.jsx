import { Navigate } from "react-router-dom";
import { IsAdmin } from "../service/authService";



export const AdminGuardComponent = ({ children }) => {
    console.log(IsAdmin())

    return IsAdmin() ? children : <Navigate to={"/"} />
}



