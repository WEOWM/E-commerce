import React, { useEffect, useState } from 'react'
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
// import '../../../Styles/DisCoverCard.css'

const DisCoverCard = () => {
    const [currentIdx, setCurrentIdx] = useState(0);
    const infinitecard = [
        {
            name: '',
            price: '4,740',
            images:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXuCxc7bT_907QxqrniqWpBh8Q6MbQCGLBQw&s',
        },
        {
            name: '',
            price: '4,740',
            images:
                'https://images.samsung.com/is/image/samsung/p6pim/in/2401/gallery/in-galaxy-s24-s928-sm-s928bztqins-thumb-539573348?$GNB_CARD_FULL_M_PNG_PNG$',
        },
        {
            name: '',
            price: '4,740',
            images:
                'https://images.kabum.com.br/produtos/fotos/sync_mirakl/564344/Smartphone-Nothing-Phone-2-6-7-12gb-512gb-Dual-Sim-Black_1713489072_g.jpg',
        },
        // Add more items as needed
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIdx((prevIdx) =>
                prevIdx === infinitecard.length - 1 ? 0 : prevIdx + 1
            );
        }, 3000); // Interval in milliseconds (3 seconds in this example)

        return () => clearInterval(interval);
    }, [infinitecard.length]);

    return (
        <div className="w-full h-full bg-[#F0F0F0] p-3">
            <div className="flex justify-between items-center">
                <div className="flex gap-3">
                    <span>Discover New</span>
                    <span className="px-2 bg-blue-600 rounded-lg">Get The Early Price</span>
                </div>
                <div className="flex items-center">
                    <span>Views</span>
                    <span>
                        <MdKeyboardDoubleArrowRight />
                    </span>
                </div>
            </div>

            <div className=" grid w-full grid-cols-3 p-3">
                {infinitecard.map((item, index) => (
                    <div
                        key={index}
                        className={` slider slider-track ${
                            index === currentIdx ? 'active-slide' : ''
                        }`}
                    >
                        <img className="slide md:h-[250px]" src={item.images} alt="" />
                        <span>{item.price}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DisCoverCard