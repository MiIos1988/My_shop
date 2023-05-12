import HeaderImageComponent from "../components/headerImageComponent/HeaderImageComponent"
import ProductListComponent from "../components/productListComponent.jsx/ProductListComponent"


const ShopPageComponent = () => {
  console.log("work num")
  return (
    <div>
      <HeaderImageComponent title={"Shop"} link={"shop"} />
      <ProductListComponent />
    </div>
  )
}

export default ShopPageComponent
