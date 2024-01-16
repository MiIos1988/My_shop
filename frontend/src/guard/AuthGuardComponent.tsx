import React, { ReactNode } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const AuthGuardComponent = ({ children }: {children: ReactNode}) => {
    const userStore = useSelector((store: any) => store.userSlicer.user);
    return !userStore ? <>{children}</> : <Navigate to={"/"} />
}

export default AuthGuardComponent;