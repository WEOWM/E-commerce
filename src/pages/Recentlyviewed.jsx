import React from 'react'
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";

const Recentlyviewed = () => {
    const Recently = [

        {
            img: "https://cdn0.weddingwire.in/article/6117/original/1280/jpg/107116-wedding-dresses-for-girls-2.jpeg",
            title: 'Shiny Dress',
            brant:"Al Karam",
            customerrate:"(4.1k) Customer Reviews",
            price:"1200"
        },
        {
            img: "https://m.media-amazon.com/images/I/81kAPwydf6L._AC_UY350_.jpg",
            title: 'Shiny Dress',
            brant:"Al Karam",
            customerrate:"(4.1k) Customer Reviews",
            price:"1200"

        },
        {
            img: "https://assets.ajio.com/medias/sys_master/root/20230907/O2KA/64f91d0addf7791519c0b242/-473Wx593H-466542753-blue-MODEL5.jpg",
            title: 'Shiny Dress',
            brant:"Al Karam",
            customerrate:"(4.1k) Customer Reviews",
            price:"1200"
        },
        {
            img: "https://assets.ajio.com/medias/sys_master/root/20230310/XUJO/640b0095aeb26924e3b5e3a5/-473Wx593H-465898642-green-MODEL4.jpg",
            title: 'Shiny Dress',
            brant:"Al Karam",
            customerrate:"(4.1k) Customer Reviews",
            price:"1200"
        },
        {
            img: "https://www.jiomart.com/images/product/original/rvsaholqqg/fashion-dream-women-sky-printed-georgette-dress-dresses-women-dress-maxi-dresses-dress-for-women-maxi-dresses-for-women-women-casual-dress-tiered-dress-maxi-printed-dress-product-images-rvsaholqqg-4-202306090203.jpg?im=Resize=(500,630)",
            title: 'Shiny Dress',
            brant:"Al Karam",
            customerrate:"(4.1k) Customer Reviews",
            price:"1200"

        },
    ]
    return (
        <div className='p-5'>
            <span style={{ fontSize: "27px" }}>Recently Viewed</span>
            <div className='grid max-sm:grid-cols-2 grid-cols-5 gap-1'>
                {
                    Recently.map((item) => {
                        return (
                            <div className=' rounded-lg '>
                                <div className='flex justify-end relative top-14 right-3 z-10  '>
                                    <span className='bg-white w-10 h-10 flex justify-center items-center rounded-full '><FaRegHeart className='hover:text-red-700' /></span>
                                </div>
                                <div className='border border-gray-400 rounded-md'>
                                    <div className='p-0 m-0'>
                                        <img className=' p-2 m-0 ' src={item.img} alt="" />
                                    </div>
                                    <div className='flex justify-end relative bottom-14 right-3 z-10  '>
                                        <span className='bg-white w-10 h-10 flex justify-center items-center rounded-full '><MdOutlineShoppingCart className='hover:text-yellow-400' /></span>
                                    </div>
                                    <div className='p-1 '>
                                        <div className='flex flex-col relative bottom-5'>
                                            <span>{item.title}</span>
                                            <span className='text-[#8A8A8A]'>{item.brant}</span>
                                            <span>{item.customerrate}</span>
                                            <div className='flex justify-between p-2'>
                                                <span>₹ {item.price}</span>
                                                <button className='px-2 bg-[#ff46464b] text-[#FF4646] rounded-md '> Buy Now</button>
                                            </div>

                                        </div>
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

export default Recentlyviewed