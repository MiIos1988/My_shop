import { useState } from "react"
import { Outlet } from "react-router-dom";
import LoaderComponent from "../../components/loaderComponent/LoaderComponent";
import SidebarDashboardComponent from "./SidebarDashboardComponent";

const AdminPageComponent = () => {

    return (
        <div className="container-fluid " >
            <div className="row dashboard">
                <div className="sidebar col-2 border">
                    <SidebarDashboardComponent />
                    <LoaderComponent />
                </div>

                <div className="col-10">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default AdminPageComponent;
