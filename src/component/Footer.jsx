import React from 'react'
import { RiFacebookFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa6";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { IoLogoAppleAppstore } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";

const Footer = () => {
    const data1 = [
        {
            title: "Contact Us",
        },
        {
            title: "Track Order",
        },
        {
            title: "Returns & Refunds",
        },
        {
            title: "FAQ's",
        },
        {
            title: "Career",
        },
    ]
    const data2 = [
        {
            title: "About Us",
        },
        {
            title: "euphoria Blog",
        },
        {
            title: "euphoriastan",
        },
        {
            title: "Collaboration",
        },
        {
            title: "Media",
        },
    ]
    const data3 = [
        {
            title: "Term and Conditions",
        },
        {
            title: "Privacy Policy",
        },
        {
            title: "Shipping Policy",
        },
        {
            title: "Sitemap",
        },

    ]
    const data4 = [
        {
            title: "support@euphoria.in",
        },
        {
            title: "Eklingpura Chouraha, Ahmedabad Main Road",
        },
        {
            title: "(NH 8- Near Mahadev Hotel) Udaipur, India- 313002",
        },

    ]


    return (
        <div className='bg-[#F0F0F0] h-[90vh]'>
            <div className='grid grid-cols-4 max-sm:grid-cols-2 gap-4 p-20'>
                <div className='gap-3'>
                    <h2 className='mb-3 text-[20px] font-bold'>Need Help</h2>
                    {
                        data1.map((item) => {
                            return (
                                <div className='gap-6'>
                                    <li className='mb-4 list-none'>{item.title}</li>
                                </div>
                            )
                        })
                    }
                </div>
                <div>
                    <div className='gap-3'>
                        <h2 className='mb-3 text-[20px] font-bold'>Company</h2>
                        {
                            data2.map((item) => {
                                return (
                                    <div className='gap-6'>
                                        <li className='mb-4 list-none'>{item.title}</li>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div>
                    <div className='gap-3'>
                        <h2 className='mb-3 text-[20px] font-bold'>More Info</h2>
                        {
                            data3.map((item) => {
                                return (
                                    <div className='gap-6'>
                                        <li className='mb-4 list-none'>{item.title}</li>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div>
                    <div className='gap-3'>
                        <h2 className='mb-3 text-[20px] font-bold'>Location</h2>
                        {
                            data4.map((item) => {
                                return (
                                    <div className='gap-6'>
                                        <li className='mb-4 list-none'>{item.title}</li>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-2 max-sm:grid-cols-1  p-10 '>
                <div className='flex md:gap-3 '>
                    <div className='w-[37px] h-[37px] rounded-[10px] bg-[#090808ad] flex justify-center items-center'>
                        <RiFacebookFill size={22} color='white' />
                    </div>
                    <div className='w-[37px] h-[37px] rounded-[10px] bg-[#090808ad] flex justify-center items-center'>
                        <FaInstagram size={20} color='white' />
                    </div>
                    <div className='w-[37px] h-[37px] rounded-[10px] bg-[#090808ad] flex justify-center items-center'>
                        <BsTwitterX size={20} color='white' />
                    </div>
                    <div className='w-[37px] h-[37px] rounded-[10px] bg-[#090808ad] flex justify-center items-center'>
                        <FaLinkedin size={22} color='white' />
                    </div>
                </div>

                <div className='relative right-5'>
                    <div className='relative bottom-20'>
                        <span className='text-[20px] mb-10 font-bold'>Download The App </span>
                    </div>

                    <div className='flex gap-2  relative bottom-10'>
                        <div className=' h-[40px]  bg-[#090808ad] rounded-xl flex justify-start items-center p-3 gap-1'>
                            <span><IoLogoGooglePlaystore size={30} color='white' /></span>
                            <div className=' px-8 h-10 flex flex-col'>
                                <span className='md:text-[10px] max-sm:text-[10px]'>android app on</span>
                                <span>Google Play</span>
                            </div>
                        </div>
                        <div className=' h-[40px]  bg-[#090808ad] rounded-xl flex justify-start items-center p-3 gap-3'>
                            <span><IoLogoAppleAppstore size={30} color='white' /></span>
                            <div className=' px-8 h-10 flex flex-col'>
                                <span className='md:text-[10px] max-sm:text-[10px]'>android app on</span>
                                <span>Google Play</span>
                            </div>
                        </div>
                    </div>


                </div>

            </div>


            <div className=' h-[1px] bg-[#6D6D6D]'></div>
            <div className='flex justify-between items-center h-20 md:p-7  max-sm:p-4'>
                <span className='md:text-[22px]'>Popular Categories</span>
                <span className='animate-pulse'><IoIosArrowDown size={20}/></span>
            </div>
            <div className=' h-[1px] bg-[#6D6D6D]'></div>
            

            <div className=' flex justify-center items-center relative top-3'>
                <span className='max-sm:text-[12px]'>Copyright © 2023 Euphoria Folks Pvt Ltd. All rights reserved.</span>
            </div>

        </div>
    )
}

export default Footer