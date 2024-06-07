import React from 'react'
import Logo from '../../public/assets/header-icon/logo 12.svg'
import { AiOutlineCheck } from "react-icons/ai";
import { PiWarningCircleFill } from "react-icons/pi";
import { MdShoppingCart } from "react-icons/md";
import { BsBellFill } from "react-icons/bs";
import { FcLike } from "react-icons/fc";
import { FiUser } from "react-icons/fi";
import { RxDragHandleHorizontal } from "react-icons/rx";
import { FaRegHeart } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import SearchBar from './SearchBar';
import '../Styles/Header.css'
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate()

  return (
    <>
      <div className='w-full h-[45px] bg-[#292929]  text-white hidden lg:flex'>
        <div className='w-[50%] h-[45px] pl-[50px]  flex  items-center gap-3'>
          <AiOutlineCheck className='' />
          <span>Free shipping on all orders over $50</span>
        </div>

        <div className='w-[50%] h-[45px] flex items-center  justify-end pr-[113px]'>
          <div className='flex gap-23 '>
            <span>Eng</span>
            <span>Faqs</span>
            <div className='flex  gap-3 justify-end items-center'>
              <PiWarningCircleFill />
              <span>Need Help</span>
            </div>
          </div>
        </div>

      </div>

      <div className='w-full h-[105px] hidden lg:flex'>
        <div className='w-[50%] h-[105px] pl-[50px] flex items-center  '>
          <div className='animate-bounce'>
            <img className='' onClick={()=>navigate("/")} src={Logo} alt="" />
          </div>
          <SearchBar />
        </div>

        <div className=' w-[50%] h-[105px] pr-[113px] flex gap-4 justify-end items-center'>
          <div className='w-[40px] h-[40px] rounded-[8px] border border-zinc-400 flex justify-center items-center hover:border-gradient-to-r from-[#4D5EF6] to-[#F64D4D]'>
            <FaRegHeart  size={18} color='black' />
          </div>
          <div className='w-[40px] h-[40px] rounded-[8px] border border-zinc-400 flex justify-center items-center hover:boder border-gradient-to-r from-[#4D5EF6] to-[#F64D4D]'>
            
            <MdShoppingCart size={18} />
          </div>
          <div className='w-[40px] h-[40px] rounded-[8px] border border-zinc-400 flex justify-center items-center hover:boder border-gradient-to-r from-[#4D5EF6] to-[#F64D4D]'>
            <BsBellFill size={18} />
          </div>
          <div className='w-[130px] h-[45px] rounded-[8px] text-white gap-1  flex justify-center items-center  bg-gradient-to-r from-[#4D5EF6] to-[#F64D4D]'>
            <FiUser />
            <span>Account</span>

          </div>
        </div>

      </div>

      <div className='w-full h-[50px] pl-[50px] items-center hidden lg:flex'>
        <div className='w-[197px] h-[36px] bg-[#272343] text-white rounded-tr-[5px] rounded-tl-[5px] mt-3 flex items-center justify-center gap-3'>
          <RxDragHandleHorizontal size={25} />
          <span>CATEGORIES</span>
          <IoIosArrowForward size={20} />
        </div>

        <div className='Hover_underline w-full flex list-none gap-9 items-center mt-3 ml-5'>
          <li>Flash deals</li>
          <li>discover New</li>
          <li>My orders</li>
          <li>discover New</li>
          <li>discover New</li>
          <li>My orders</li>
          <IoIosArrowForward size={20} />
        </div>

        <div className='  w-[129px] h-[35px] rounded-[5px] flex justify-center items-center border border-zinc-400 mt-3  mr-[113px] hover:bg-[#272343] hover:text-white'>
          <button>My orders</button>
        </div>
      </div>

    </>
  )
}

export default Header