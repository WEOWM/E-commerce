import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination,Autoplay } from "swiper/modules";
const MainCarousel = (props) => {
    return (
        <div >
          <Swiper
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              
              delay: 2000,
              disableOnInteraction: false,
            }}
            
            modules={[Pagination,Autoplay]}
            className="mySwiper .."
          >
            {props?.data.map((image, index) => {
              return (
                <SwiperSlide>
                  <img className="banner w-full" src={image} alt="" />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      );
    };

export default MainCarousel