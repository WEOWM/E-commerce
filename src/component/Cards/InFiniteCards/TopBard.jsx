import React from 'react'
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const TopBard = () => {
    const brands = [
        {
            name: "Apple",
            price: "4,740",
            images: "https://images.unsplash.com/photo-1621768216002-5ac171876625?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBwbGUlMjBsb2dvfGVufDB8fDB8fHww"
        },
        {
            name: "Adidas",
            price: "4,740",
            images: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIO9HvRepmQOPQJtDj-jBhpxzG3DGQDZuYWA&s"
        },
        {
            name: "NIKE",
            price: "4,740",
            images: "https://upload.wikimedia.org/wikipedia/commons/9/94/Old_Nike_logo.jpg"
        },
    ]
    return (
        <div className='w-full h-full bg-[#F0F0F0] p-3'>
            <div className='flex'>
                <div className='flex w-full gap-3' >
                    <span className=''>Top Brands </span>
                    <span className='px-2 bg-blue-600 rounded-lg max-sm:text-[10px]'>Get The early price</span>
                </div>
                <div className='flex justify-center items-center'>
                    <span>Views</span>
                    <span><MdKeyboardDoubleArrowRight /></span>
                </div>
            </div>

            <div className='grid w-full  grid-cols-3 p-3  gap-3'>

                {
                    brands.map((item) => {
                        return (
                            <div className=' '>
                                <img className='md:h-[250px]' src={item.images} alt="" srcset="" />
                                <span className='mt-4'>{item.name}</span>
                            </div>
                        )
                    })
                }


            </div>
        </div>
    )
}

export default TopBard