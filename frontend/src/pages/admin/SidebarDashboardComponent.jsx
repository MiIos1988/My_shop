import { Link } from "react-router-dom";

const SidebarDashboardComponent = () => {

    return (
        <div>
            <Link className="btn btn-primary " to={"/dashboard/create-edit-product"}>Create Product </Link>
            <Link className="btn btn-primary " to={"/dashboard/show-product"}>Show all product </Link>
            <Link className="btn btn-primary " to={"/dashboard/all-users"}>All users</Link>
        </div>
    )
}

export default SidebarDashboardComponent;