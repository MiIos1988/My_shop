import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Navigation } from "swiper";

const SliderProductComponent = () =>  {
    return (
        <>
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            freeMode={true}
            navigation={{
              clickable: true,
            }}
            modules={[FreeMode, Navigation]}
            className="mySwiperProduct"
          >
            <SwiperSlide>
                <div className="d-flex flex-column ">
                    <div className="
                     border">Pr1</div>
                    <div className="pr2 border">Pr2</div>
                </div>
            </SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
            <SwiperSlide>Slide 9</SwiperSlide>
          </Swiper>
        </>
      );

}

export default SliderProductComponent;