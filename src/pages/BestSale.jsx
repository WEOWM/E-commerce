import React from 'react'
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const BestSale = () => {
    return (
        <div>
            <div className='flex justify-between p-10'>
                <span>Best Sale</span>
                <div className='flex items-center gap-3'>
                    <span>views</span>
                    <span><MdKeyboardDoubleArrowRight /></span>
                </div>

            </div>
            <div className='w-full md:h-[182px]'>

            </div>
        </div>
    )
}

export default BestSale