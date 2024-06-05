import React from 'react'
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const TopElectronicsBrands = () => {
    const card = [
        {
            img: "public/assets/Top Electronics Brands/Group 50.png",
        },
        {
            img: "public/assets/Top Electronics Brands/Group 51.png",
        },
        {
            img: "public/assets/Top Electronics Brands/Group 52.png",
        },
    ]
    return (
        <div className='p-10'>
            <div className='flex justify-between'>
                <span>Top <span className='text-red-700' style={{ fontSize: "23px" }}>Electronics Brands</span></span>
                <span className='flex justify-center items-center gap-1'>views <span className='animate-pulse'><MdKeyboardDoubleArrowRight /> </span></span>

            </div>

            <div className='grid grid-cols-3  mt-4 gap-2  '>
                {
                    card.map((item) => {
                        return (
                            <div >
                                <img className=' md:h-[420px]' src={item.img} alt="" />
                            </div>
                        )
                    })
                }
            </div>

           
        </div>
    )
}

export default TopElectronicsBrands