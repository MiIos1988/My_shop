import { Navigate } from "react-router-dom";
import { isAdmin, isUserLogin } from "../service/authService";



export const AdminGuardComponent = ({ children }) => isAdmin() ? children : <Navigate to={"/"} />



