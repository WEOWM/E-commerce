import React from 'react'
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";


const LatesDressCollections = () => {
    const Recently = [

        {
            img: "https://d1fufvy4xao6k9.cloudfront.net/images/blog/posts/2023/07/hockerty_james_bond_outfit_c8f11f81_c4e9_4f5b_a186_58c7141b5fbe.jpg",
            title: 'Shiny Dress',
            brant:"Al Karam",
            customerrate:"(4.1k) Customer Reviews",
            price:"1200"
        },
        {
            img: "https://d1fufvy4xao6k9.cloudfront.net/images/blog/posts/2023/07/hockerty_daniel_craig_james_bond_wearing_a_tuxedo_ff45a31e_7c25_41cc_999a_d3344aeaee88.jpg",
            title: 'Shiny Dress',
            brant:"Al Karam",
            customerrate:"(4.1k) Customer Reviews",
            price:"1200"

        },
        {
            img: "https://outletcity.freetls.fastly.net/medias/sys_master/images/images/hda/h57/10006608904222/herren-shop-the-look-uebersichtsseite-440x423px-02.jpg",
            title: 'Shiny Dress',
            brant:"Al Karam",
            customerrate:"(4.1k) Customer Reviews",
            price:"1200"
        },
        {
            img: "https://www.manyavar.com/on/demandware.static/-/Library-Sites-ManyavarSharedLibrary/default/dwd62f235d/images/feeds/UC108635.jpg",
            title: 'Shiny Dress',
            brant:"Al Karam",
            customerrate:"(4.1k) Customer Reviews",
            price:"1200"
        },
        {
            img: "https://d1fufvy4xao6k9.cloudfront.net/images/blog/posts/2023/06/hockerty_mads_mikkelsen_as_hannibal_lecter_wearing_a_suit_elega_69478a5c_8240_44e1_8db2_e0218350e898.jpg",
            title: 'Shiny Dress',
            brant:"Al Karam",
            customerrate:"(4.1k) Customer Reviews",
            price:"1200"

        },
    ]
    return (
        <div className='p-10'>
            <div className='flex justify-between '>
                <span className='max-sm:text-[20px] font-bold'>Latest <span className='text-red-700 max-sm:text-[23px]' >Dress Collections</span></span>
                <div className='flex '>
                    <span className='flex justify-center items-center gap-1 max-sm:text-[9px]'>views <span className='animate-pulse'><MdKeyboardDoubleArrowRight /> </span></span>
                </div>
            </div>

            <div className='grid max-sm:grid-cols-2 grid-cols-5 gap-1'>
                {
                    Recently.map((item) => {
                        return (
                            <div className=' rounded-lg '>
                                <div className='flex justify-end relative top-14 right-3   '>
                                    <span className='bg-white w-10 h-10 flex justify-center items-center rounded-full '><FaRegHeart className='hover:text-red-700' /></span>
                                </div>
                                <div className='border border-gray-400 rounded-md'>
                                    <div className='p-0 m-0'>
                                        <img className=' p-2 m-0 ' src={item.img} alt="" />
                                    </div>
                                    <div className='flex left-3  relative bottom-14  z-10  '>
                                        <span className=' w-10 h-10 flex justify-center items-center  px-10 rounded-lg bg-[#fdba12e2] cursor-pointer'>Best</span>
                                    </div>
                                    <div className='p-1 '>
                                        <div className='flex flex-col relative bottom-5'>
                                            <span className='max-sm:text-[14px] font-bold'>{item.title}</span>
                                            <span className='text-[#8A8A8A] max-sm:text-[14px]'>{item.brant}</span>
                                            <span className='max-sm:text-[14px]'>{item.customerrate}</span>
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

export default LatesDressCollections