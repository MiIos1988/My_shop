import { useParams } from "react-router-dom"
import ProductListComponent from "../components/productListComponent.jsx/ProductListComponent"

const SearchPageComponent = () => {
    const params = useParams()

    return (
        <ProductListComponent/>
    )

}

export default SearchPageComponent
