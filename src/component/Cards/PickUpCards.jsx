import React from 'react'
import { RxDoubleArrowRight } from "react-icons/rx";

const PickUpCards = () => {

  const pickupcard = [
    {
      img: "https://cdn0.weddingwire.in/article/6117/original/1280/jpg/107116-wedding-dresses-for-girls-2.jpeg",
      title: "Razer Kraken Kitty V2 Pro Wired RGB Headset with...",
      Aed: "4,740"
    },
    {
      img: "https://m.media-amazon.com/images/I/81kAPwydf6L._AC_UY350_.jpg",
      title: "Razer Kraken Kitty V2 Pro Wired RGB Headset with...",
      Aed: "4,740"
    },
    {
      img: "https://assets.ajio.com/medias/sys_master/root/20230907/O2KA/64f91d0addf7791519c0b242/-473Wx593H-466542753-blue-MODEL5.jpg",
      title: "Razer Kraken Kitty V2 Pro Wired RGB Headset with...",
      Aed: "4,740"
    },
    {
      img: "https://assets.ajio.com/medias/sys_master/root/20230310/XUJO/640b0095aeb26924e3b5e3a5/-473Wx593H-465898642-green-MODEL4.jpg",
      title: "Razer Kraken Kitty V2 Pro Wired RGB Headset with...",
      Aed: "4,740"
    },
    {
      img: "https://www.jiomart.com/images/product/original/rvsaholqqg/fashion-dream-women-sky-printed-georgette-dress-dresses-women-dress-maxi-dresses-dress-for-women-maxi-dresses-for-women-women-casual-dress-tiered-dress-maxi-printed-dress-product-images-rvsaholqqg-4-202306090203.jpg?im=Resize=(500,630)",
      title: "Razer Kraken Kitty V2 Pro Wired RGB Headset with...",
      Aed: "4,740"
    },
    {
      img: "https://i.pinimg.com/736x/25/48/81/2548811510c27aa47cf2be3e4da06be5.jpg",
      title: "Razer Kraken Kitty V2 Pro Wired RGB Headset with...",
      Aed: "4,740"
    },
    {
      img: "https://i.pinimg.com/736x/a0/b4/90/a0b490a70076c71870329e7a13214067.jpg",
      title: "Razer Kraken Kitty V2 Pro Wired RGB Headset with...",
      Aed: "4,740"
    },
    {
      img: "https://i.pinimg.com/736x/ab/b2/ac/abb2acae8d91a8ae22a42c405359374c.jpg",
      title: "Razer Kraken Kitty V2 Pro Wired RGB Headset with...",
      Aed: "4,740"
    },
    {
      img: "https://i.pinimg.com/564x/57/68/46/576846e9345b575ebb77168c61dee3cc.jpg",
      title: "Razer Kraken Kitty V2 Pro Wired RGB Headset with...",
      Aed: "4,740"
    },
    {
      img: "https://i.pinimg.com/736x/a5/5e/78/a55e78119a6c9771d887be194ddb0659.jpg",
      title: "Razer Kraken Kitty V2 Pro Wired RGB Headset with...",
      Aed: "4,740"
    },
  ]

  return (
    <div className='w-full h-full p-6'>
      <div className='w-full h-full flex justify-between items-center'>
        <span className='max-sm:text-[10px]'>Pick For You</span>
        <span className='flex items-center justify-center gap-3 '> <span className='max-sm:text-[10px]'>view</span><span className='animate-pulse'><RxDoubleArrowRight /></span></span>
      </div>

      <div className='grid max-sm:grid-cols-2 md:grid-cols-5 gap-3 p-3'>
        {
          pickupcard.map((item, idx) => {
            return (
              <div className='shadow-2xl p-4 border-2 border-[#B7B7B7]  place-content-center'>
                <img className='w-full ' src={item.img} alt="" srcset="" />
                <div className='flex flex-col'>
                  <span className='max-sm:text-[9px] text-[16px]'>{item.title}</span>
                  <div className='flex justify-between items-center mt-5'>
                    <span className='max-sm:text-[9px]'>AED {item.Aed}</span>
                    <span className='px-y rounded-[3.99px] bg-[#FF8A00] max-sm:text-[9px]'>160 SOLD</span>
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

export default PickUpCards