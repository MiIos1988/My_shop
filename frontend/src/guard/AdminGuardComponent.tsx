import React, { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { isAdmin } from "../service/authService";



export const AdminGuardComponent = ({ children }: { children: ReactNode }) => isAdmin() ? <>{children}</> : <Navigate to={"/"} />




