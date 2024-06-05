import React, { useRef } from "react";
import { IoChevronBackOutline, IoChevronForward } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import CategoryCard from "../Cards/CategoryCard";

const CategoryCarousel = () => {

    const prevRef = useRef(null);
    const nextRef = useRef(null);

    const categoryData = [
        [
            {
                // image: "public/assets/categorics/shop-1.png",
                image:"https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
                title: "Kide Fashion",
            },
            {
                image:"https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
                title: "Kide Fashion",
                // image: "public/assets/categorics/shop-2.png",
                // title: "Kide Fashion",
            },
            {
                image:"https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
                title: "Kide Fashion",
                // image: "public/assets/categorics/shop-3.png",
                // title: "Kide Fashion",
            },
            {
                image:"https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
                title: "Kide Fashion",
                // image: "public/assets/categorics/shop-4.png",
                // title: "Kide Fashion",
            },
        ],
        [
            {
                image:"https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
                title: "Kide Fashion",
                // image: "public/assets/categorics/shop-4.png",
                // title: "Kide Fashion",
            },
            {
                image:"https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
                title: "Kide Fashion",
                // image: "public/assets/categorics/shop-3.png",
                // title: "Kide Fashion",
            },
            {
                image:"https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
                title: "Kide Fashion",
                // image: "public/assets/categorics/shop-2.png",
                // title: "Kide Fashion",
            },
            {
                image:"https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
                title: "Kide Fashion",
                // image: "public/assets/categorics/shop-1.png",
                // title: "Kide Fashion",
            },
        ],
    ];

    console.log(categoryData[1]);

    return (
        <div className="flex">
            <div className="flex items-center justify-center">
                <button
                    ref={prevRef}
                    className="cursor-pointer text-2xl ml-3 bg-[rgba(0,0,0,0.49)] w-[37px] h-[51px] rounded-[5px] text-white flex items-center justify-center"
                >
                    <IoChevronBackOutline />
                </button>
            </div>
            <Swiper
                breakpoints={{
                    375: {
                        slidesPerView: 2,
                        // spaceBetween: 5,
                    },
                    414: {
                        slidesPerView: 2,
                        // spaceBetween: 5,
                    },
                    640: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 1,
                    },
                    1024: {
                        slidesPerView: 1,
                    },
                }}
                spaceBetween={30}
                navigation={true}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                onInit={(swiper) => {
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                    swiper.navigation.init();
                    swiper.navigation.update();
                }}
                modules={[Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <CategoryCard data={categoryData[0]} />
                </SwiperSlide>
                <SwiperSlide>
                    <CategoryCard data={categoryData[1]} />
                </SwiperSlide>
            </Swiper>
            <div className="flex items-center justify-center ">
                <div className="">
                    <button
                        ref={nextRef}
                        className="cursor-pointer  text-2xl mr-10 text-white  bg-[rgba(0,0,0,0.49)] w-[37px] h-[51px] rounded-[5px] flex items-center justify-center"
                    >
                        <IoChevronForward />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CategoryCarousel