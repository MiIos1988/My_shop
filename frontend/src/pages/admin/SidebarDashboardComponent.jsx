import { Link } from "react-router-dom";

const SidebarDashboardComponent = () => {

    return (
        <div>
            <Link className="btn btn-primary " to={"/dashboard/create-product"}>Create Product </Link>
            <Link className="btn btn-primary " to={"/dashboard/show-product"}>Show all product </Link>
        </div>
    )
}

export default SidebarDashboardComponent;