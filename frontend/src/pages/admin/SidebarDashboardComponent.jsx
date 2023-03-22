import { Link } from "react-router-dom";

const SidebarDashboardComponent = () => {

    return (
        <div>
            <Link className="btn btn-primary " to={"/dashboard/create-product"}>Create Product </Link>
        </div>
    )
}

export default SidebarDashboardComponent;