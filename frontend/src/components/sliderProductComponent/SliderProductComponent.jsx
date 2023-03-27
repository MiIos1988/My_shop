import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Navigation } from "swiper";
import { getProductData } from "../../service/productService";
import { useEffect, useState } from "react";
import ProductComponent from "../productListComponent.jsx/component/ProductComponent";
import { toggleLoader } from "../../redux/loaderSlicer";
import { useDispatch } from "react-redux";

const SliderProductComponent = () => {
  const [product, setProduct] = useState([])
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(toggleLoader(true))
    getProductData({ start: 0, perPage: 16 }).then(res => {
      setProduct(res.data.data)
      dispatch(toggleLoader(false))
    })

      .catch(err => console.log(err))
  }, []
  )


  return (
    <div className="container mx-auto sliderProduct">
      <Swiper
        loop={true}
        slidesPerView={4}
        spaceBetween={30}
        freeMode={true}
        navigation={true}
        modules={[FreeMode, Navigation]}
        className="mySwiperProduct"
      >
        {/* {product[index]?.title} */}
        {/* {product[index + 7]?.title} */}
        {[1, 2, 3, 4, 5, 6, 7, 8].map((el, index) => {
          return <SwiperSlide key={index}>
            <div className="d-flex flex-column ">
              <div className="pr1 mt-5" >
                <ProductComponent imgUrl={product[index]?.imgUrl} title={product[index]?.title} price={product[index]?.price} id={product[index]?._id} />
              </div>
              <div className="pr2 ">
                <ProductComponent imgUrl={product[index + 8]?.imgUrl} title={product[index + 7]?.title} price={product[index + 8]?.price} id={product[index + 8]?._id} />
              </div>
              {/* </div> */}
            </div>
          </SwiperSlide>
        }
        )}


      </Swiper>
    </div >
  );

}

export default SliderProductComponent;