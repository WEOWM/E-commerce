import React from 'react'
import { IoSearch } from "react-icons/io5";

const SearchBar = () => {
    return (
        <div className=' pl-5 flex '>
            <input className='py-1 rounded-tl-[8px] rounded-bl-[8px] pl-1 border border-zinc-400  outline-none' type="text" size={30} />
            <div className='w-[60px] h-[40px] bg-[#5E54D8] rounded-tr-[8px] rounded-br-[8px] flex justify-center items-center '>
                <IoSearch className='' />
            </div>
        </div>
    )
}

export default SearchBar