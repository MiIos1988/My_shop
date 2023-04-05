import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Navigation } from "swiper";
import img1 from "../../assets/image/slider-img1.jpg";
import img2 from "../../assets/image/slider-img2.jpg";

const HomeSliderComponent = () => {
  return (
    <>
      <Swiper
        loop={true}
        slidesPerView={1}
        spaceBetween={30}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper m-5 "
      >
        <SwiperSlide>
          <div className="d-flex sliderDiv">
            <div className="imgDiv">
              <img src={img1} alt="img" />
            </div>
            <div className="titleDiv d-flex  align-items-center ps-5">
              <div>
                <h1>GO TO DO CONTACT</h1><br />
                <Link to={"/shop"} className="btn btn-dark" >SHOP NOW</Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="d-flex sliderDiv">
            <div className="imgDiv">
              <img src={img2} alt="img" />
            </div>
            <div className="titleDiv d-flex  align-items-center ps-5">
              <div>
                <h1>GO TO DO SHOP</h1><br />
                <Link to={"/shop"} className="btn btn-dark" >SHOP NOW</Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default HomeSliderComponent;
