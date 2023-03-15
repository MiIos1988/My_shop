import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Navigation } from "swiper";
import img1 from "../../assets/image/slider_img_1.jpg";
import img2 from "../../assets/image/slider_img_2.jpg";

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
          <Link to={"/shop"}>
            <img src={img1} alt="img" />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to={"/shop"}>
            <img src={img2} alt="img" />
          </Link>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default HomeSliderComponent;
