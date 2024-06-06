import React from 'react'
import { FaRegHeart } from "react-icons/fa";
import { RxDoubleArrowRight } from "react-icons/rx";

import '../Styles/UptoOffer.css'

const UptoOffer = () => {
    const uptoOffer = [
        {
            img: "https://i.pinimg.com/564x/ca/5a/20/ca5a204afd99a9857d42ecd3336e7b9a.jpg",
            title: "T-shirts with multiple colors, for men",
            price: "1200"
        },
        {
            img: "https://australianstyleinstitute.com.au/wp-content/uploads/2022/06/austin-butler-blog-683x1024.jpg",
            title: "T-shirts with multiple colors, for men",
            price: "1200"
        },
        {
            img: "https://i.pinimg.com/474x/3f/04/c8/3f04c8c3aafe6d109a7effe78c624129.jpg",
            title: "T-shirts with multiple colors, for men",
            price: "1200"
        },
        {
            img: "https://i.pinimg.com/1200x/33/99/a7/3399a76d75d605264983b5d6980960ba.jpg",
            title: "T-shirts with multiple colors, for men",
            price: "1200"
        },
        {
            img: "https://i.pinimg.com/564x/48/43/a3/4843a30d29733576da92c98556900b65.jpg",
            title: "T-shirts with multiple colors, for men",
            price: "1200"
        },
    ]

    return (

        <div className='bg-gradient-to-b from-[#68B8DA] to-[#E385FA] h- place-content-center place-items-center '>
            <div className='flex justify-between p-5'>
                <div>
                    <span>Up To </span> <span className='text-[#FF0000]'>60%</span><span>Off</span>
                </div>


                <div className='flex justify-center items-center gap-4'>
                    <span>views  </span>
                    <span className='animate-pulse'>
                        <RxDoubleArrowRight />
                    </span>
                </div>
            </div>
            <div className=' slider-track grid max-sm:grid-cols-2 md:grid-cols-5 gap-3 p-5'>
                {
                    uptoOffer.map((item, ind) => {
                        return (
                            <div className=''>
                                <div className='flex justify-end relative top-14 right-3 z-10  '>
                                    <span className='bg-white w-10 h-10 flex justify-center items-center rounded-full '><FaRegHeart className='hover:text-red-700' /></span>
                                </div>
                                <div className='relative'>
                                    <img className='slide md:h-[380px] md:w-[320px] rounded-tr-xl rounded-tl-xl' src={item.img} alt="" srcset="" />
                                </div>
                                <div className='md:p-2'>
                                    <div className='h-32 bottom-10  relative rounded-xl  text-white flex flex-col text-center  items-center bg-gradient-to-b from-[#36363693] to-[#181818] '>
                                        <span>₹ {item.price}</span>
                                        <span style={{ fontSize: "20px", fontFamily: "unset" }}>{item.title}</span>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default UptoOffer