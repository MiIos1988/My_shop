import React, { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PayGuardComponent = ({ children }: {children: ReactNode}) => {
    const userStore = useSelector((store: any) => store.userSlicer.user);
    return userStore ? children : <Navigate to={"/login?id=1"} />
}

export default PayGuardComponent;