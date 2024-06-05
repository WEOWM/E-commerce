import React from 'react'

const HotsaleCard = () => {

    const accessories = [
        {
            img: "https://www.livemint.com/lm-img/img/2024/04/24/1600x900/earphones_1713962168798_1713962169037.jpg",
        },
        {
            img: "https://www.mivi.in/cdn/shop/files/Earbuds_-_Desktop.png?v=1709210322&width=1500",
        },
        {
            img: "https://inkmonk-s3.mobimedia.ai/site/20220417_184505191336_a77162_Rounded_Corner.jpg?quality=70&format=webp&w=412",
        },
    ]

    const watch = [
        {
            img: "https://fashionrazor.com/cdn/shop/products/0_Men-Quartz-Full-Steel-Watches-Luxury-Casual-Reloj-Business-Wristwatch-Stainless-Steel-Watch-Men-relogio-masculino.jpg?v=1598086129",
        },
        {
            img: "https://images.meesho.com/images/products/145770717/birxm_512.webp",
        },
        {
            img: "https://m.media-amazon.com/images/I/71CXO5AegEL._AC_UY1000_.jpg",
        },
    ]
    const computer$office = [
        {
            img: 'https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/1.1-Benefits-for-business-manage-more-616x498?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=1000&hei=808&qlt=100&fmt=png-alpha&fit=constrain',
            title: "Apple iPhone 14 Pro Max 256GB Deep Purple 5G With",
            AED: "4,740"
        },
        {
            img: 'https://c8.alamy.com/comp/H9JE22/empty-office-with-desks-and-computers-H9JE22.jpg',
            title: "Apple iPhone 14 Pro Max 256GB Deep Purple 5G With",
            AED: "4,740"
        }
    ]
    return (
        <div className='p-8'>
            <div className='flex justify-between'>
                <div className='flex gap-10  items-center'>
                    <div>
                        <span className='text-red-800  '>Hot</span> <span>Sale</span>
                    </div>
                    <div className='py-1 px-1 bg-[#008B1EE8] rounded-[5px] flex justify-center items-center'>
                        <span>Buy with Low cost</span>
                    </div>
                </div>


            </div>

            <div className='grid grid-cols-3 max-sm:grid-cols-1   mt-5  gap-2'>

                <div className='bg-[#75A1FF] p-2 rounded-md'>
                    <div className='flex justify-between'>
                        <span>Electronics</span>
                        <button className=' py-1 px-1 rounded-md bg-[#FFFF]'>Shop Now </button>
                    </div>

                    <div className='flex gap-3 mt-5'>
                        <div>
                            <img  loading='lazy' className='  h-[240px] rounded-md' src="https://as1.ftcdn.net/v2/jpg/05/66/48/76/1000_F_566487699_CDEZVGW2pLxkLVdxe7HtJxq569rIxMzz.jpg" alt="" srcset="" />
                        </div>

                        <div className='max-sm:w-full'>
                            <img loading='lazy' className='w-[255px] h-[121.28px] rounded-lg' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx1uw1orC2eImf2d8GJijynh1LOEH5BV_Tkw&s" alt="" srcset="" />
                            <img loading='lazy' className='w-[255px] h-[121.28px] pt-1 rounded-lg' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2ZVn4kf4Dr3B_E4W_UZF1EXmUTbg1BBKtBg&s" alt="" srcset="" />

                        </div>
                    </div>
                </div>

                <div className='p-2 bg-[#F8F8F9] border rounded-md' >
                    <div className=' border-gray-700'>
                        <div>
                            <span>Computer & accessories</span>

                            </div>
                        <div className='grid grid-cols-3 gap-1 p-2 '>
                            {
                                accessories.map((item) => {
                                    return (
                                        <div>
                                            <img loading='lazy' className='h-[120px] rounded-sm' src={item.img} alt="" />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>

                    <div className='border-gray-700'>
                        <div className='bg-[#F8F8F9]  mt-2'>
                            <span>Digital Watch</span>

                        </div>
                        <div className='grid grid-cols-3 gap-1 p-2 '>
                            {
                                watch.map((item) => {
                                    return (
                                        <div>
                                            <img loading='lazy' className='h-[120px] rounded-sm' src={item.img} alt="" />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>

                <div>
                    <div className='bg-[#FFF] rounded-md'>
                        <div className='flex justify-between gap-3'>
                            {
                                computer$office.map((item) => {
                                    return (
                                        <div className="" >
                                            <div className='flex'>
                                                <img loading='lazy' className='h-[220px] rounded-sm' src={item.img} alt="" />

                                            </div>
                                            <div className=''>
                                                <div>
                                                    <span>www</span>

                                                </div>
                                                <div>
                                                    <p style={{ fontSize: "12px" }}>{item.title}</p>
                                                </div>
                                                <div>
                                                    <span>AED {item.AED}</span>
                                                </div>
                                                <div className='flex  justify-between items-center'>
                                                    <span className='bg-[#FF0000] p-1 rounded-tl-xl rounded-bl-xl rounded-br-xl  md:text-[14px] text-[11px]'>Best Deal</span>
                                                    <span className='text-[#E4730A] md:text-[16px] text-[14px]'>Only 3 left in stock</span>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HotsaleCard