import React from 'react';
import Star from '../component/Star';
import { RiMessage3Line } from "react-icons/ri";
import { FaArrowRight } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";

const ProductDetail = () => {
    const size = [
        { size: "XS" },
        { size: "S" },
        { size: "M" },
        { size: "L" },
        { size: "XL" },
    ];

    const colors = [
        { colour: 'red-800' },
        { colour: 'blue-600' },
        { colour: 'black' },
        { colour: 'gray-700' }
    ];

    return (
        <div className='grid grid-cols-2 max-sm:grid-cols-1'>
            <div className='flex'>
                <div className='w-[222px] bg-[#F0F0F0] h-[785px] hidden md:flex'></div>
                <div>
                    <img 
                        loading='lazy' 
                        className='h-[785px]' 
                        src="https://sslimages.shoppersstop.com/sys-master/images/hcb/h7b/29726079746078/S23CNFSHSKYST_BLUE.jpg_230Wx334H" 
                        alt="Product" 
                    />
                </div>
            </div>

            <div className='place-content-center ps-4 '>
                <div className='flex items-center w-[322px] text-[27px] font-bold'>
                    <span>Raven Shirt With White colored Design</span>
                </div>

                <div className='mt-3 flex gap-3 items-center'>
                    <span><Star /></span>
                    <span>3.5</span>
                    <div className='flex items-center gap-3'>
                        <span><RiMessage3Line /></span>
                        <span>120 comments</span>
                    </div>
                </div>

                <div>
                    <div className='flex items-center gap-3 mt-2'>
                        <span>Select Size</span>
                        <span className='text-[#807D7E]'>Size Guide</span>
                        <span className='text-[#807D7E]'><FaArrowRight /></span>
                    </div>
                    <div className='mt-3 flex gap-3'>
                        {size.map((item, index) => (
                            <div 
                                key={index} 
                                className='w-[42px] h-[42px] border border-[#BEBCBD] flex justify-center items-center hover:bg-[#3C4242] hover:text-white rounded-xl'
                            >
                                <span className='text-[10px]'>{item.size}</span>
                            </div>
                        ))}
                    </div>

                    <div className='mt-4'>
                        <span>Colours Available</span>
                        <div className='flex gap-2 mt-2'>
                            {colors.map((item, index) => (
                                <div
                                    key={index}
                                    className={`w-[30px] h-[30px]  rounded-full bg-${item.colour} cursor-pointer`}
                                />
                            ))}
                        </div>
                    </div>
                    <div className='mt-4 flex  gap-3'>
                        <div className='w-[213px] h-[51px] bg-[#272343] rounded-md flex justify-center items-center gap-3 text-white'>
                            <span className=''><FaShoppingCart /></span>
                            <button className=''>Add to cart</button>
                        </div>
                        <div className='w-[213px] h-[51px] bg-white border border-gray-800 hover:bg-[#272343] rounded-md flex justify-center items-center gap-3 text-white '>
                            <button className='text-black  hover:text-white w-[213px] h-[51px] '>Rs.2000</button>
                        </div>
                    </div>
                    <div className='mt-3 h-[1px] bg-black'/>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
