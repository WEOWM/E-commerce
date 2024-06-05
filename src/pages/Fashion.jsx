import React from 'react'

const Fashion = () => {
    const Fashion = [

        {
            img: "https://i.pinimg.com/736x/25/48/81/2548811510c27aa47cf2be3e4da06be5.jpg",
            title: 'Shiny Dress',
            brant: "Al Karam",
            customerrate: "(4.1k) Customer Reviews",
            price: "1200"
        },
        {
            img: "https://i.pinimg.com/736x/a0/b4/90/a0b490a70076c71870329e7a13214067.jpg",
            title: 'Shiny Dress',
            brant: "Al Karam",
            customerrate: "(4.1k) Customer Reviews",
            price: "1200"

        },
        {
            img: "https://i.pinimg.com/736x/ab/b2/ac/abb2acae8d91a8ae22a42c405359374c.jpg",
            title: 'Shiny Dress',
            brant: "Al Karam",
            customerrate: "(4.1k) Customer Reviews",
            price: "1200"
        },
        {
            img: "https://i.pinimg.com/564x/57/68/46/576846e9345b575ebb77168c61dee3cc.jpg",
            title: 'Shiny Dress',
            brant: "Al Karam",
            customerrate: "(4.1k) Customer Reviews",
            price: "1200"
        },
        {
            img: "https://i.pinimg.com/736x/a5/5e/78/a55e78119a6c9771d887be194ddb0659.jpg",
            title: 'Shiny Dress',
            brant: "Al Karam",
            customerrate: "(4.1k) Customer Reviews",
            price: "1200"

        },
        {
            img: "https://i.pinimg.com/474x/26/49/95/264995a742a977f50b4f79d17cd45e76.jpg",
            title: 'Shiny Dress',
            brant: "Al Karam",
            customerrate: "(4.1k) Customer Reviews",
            price: "1200"

        },
    ]
    return (
        <div className='p-8'>
            <span className='md:ps-5' style={{ fontSize: "26px" }}>Fashion</span>
            <div className='grid grid-cols-6 max-sm:grid-cols-2 gap-2 md:p-5'>
                {
                    Fashion.map((item) => {
                        return (
                            <div className='border border-gray-200 rounded-md'>
                                <div>
                                    <img className='' src={item.img} alt="" />
                                </div>
                                <div className='flex flex-col text-start '>
                                    <span>₹12,000</span>
                                    <span className='text-[#C1C1C1]'>T-shirts with multiple colors, for men</span>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Fashion