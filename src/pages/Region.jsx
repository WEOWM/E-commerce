import React from 'react'

const Region = () => {
    const region = [
        {
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_United_Arab_Emirates.svg/1280px-Flag_of_the_United_Arab_Emirates.svg.png",
            title: "Arabic Emirates",
            sub: "shopname.ae"
        },
        {
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Flag_of_Australia.svg/280px-Flag_of_Australia.svg.png",
            title: "Australia",
            sub: "shopname.ae"
        },
        {
            img: "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg",
            title: "United States",
            sub: "shopname.ae"
        },
        {
            img: "https://upload.wikimedia.org/wikipedia/en/f/f3/Flag_of_Russia.svg",
            title: "Russia",
            sub: "shopname.ae"
        },
        {
            img: "https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Flag_of_Italy.svg/1200px-Flag_of_Italy.svg.png",
            title: "Italy",
            sub: "shopname.ae"
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBeaSZSwax2XvXTLQ5hlnz3oF6SMpRiTb_hu_WAaa6oCXnEHWihMmU3ww1DDwt&s=10",
            title: "Denmark",
            sub: "shopname.ae"
        },
        {
            img: "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg",
            title: "France",
            sub: "shopname.ae"
        },
        {
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_United_Arab_Emirates.svg/1280px-Flag_of_the_United_Arab_Emirates.svg.png",
            title: "Arabic Emirates",
            sub: "shopname.ae"
        },
        {
            img: "https://vignette.wikia.nocookie.net/cyberpunk/images/3/3e/255px-Flag_of_the_People%27s_Republic_of_China.svg.png/revision/latest?cb=20180830132455",
            title: "China",
            sub: "shopname.ae"
        },
        {
            img: "https://t3.ftcdn.net/jpg/00/62/19/82/360_F_62198244_HcI4q6pS86tREeUYuseBfTzPP7nLaSPi.jpg",
            title: "Great Britain",
            sub: "shopname.ae"
        },
    ]
    return (
        <div>
            <div className='md:p-8'>
                <span className=' ps-10 text-[20px] font-bold'>Suppliers by region</span>
            </div>

            <div className='grid grid-cols-5 gap-3 max-sm:grid-cols-2 p-2'>
                {
                    region.map((item) => {
                        return (
                            <div  className='flex ps-10'>
                                <div className='flex justify-start items-center gap-3'>
                                    <div className='flex justify-center items-center ' >
                                        <img className='w-10 h-10 rounded-full' src={item.img} alt="" srcset="" />
                                    </div>

                                    <div className='flex flex-col justify-center '>
                                        <span className='text-[12px] font-bold' >{item.title}</span>
                                        <span className='text-[10px]'>{item.sub}</span>
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

export default Region