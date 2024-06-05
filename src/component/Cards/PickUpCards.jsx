import React from 'react'
import { RxDoubleArrowRight } from "react-icons/rx";

const PickUpCards = () => {

  const pickupcard = [
    {
      img: "public/assets/cards/625149-Product-0-I-638127634998693959 1.jpg",
      title: "Razer Kraken Kitty V2 Pro Wired RGB Headset with...",
      Aed: "4,740"
    },
    {
      img: "public/assets/cards/w.png",
      title: "Razer Kraken Kitty V2 Pro Wired RGB Headset with...",
      Aed: "4,740"
    },
    {
      img: "public/assets/cards/Frame 528 (2).png",
      title: "Razer Kraken Kitty V2 Pro Wired RGB Headset with...",
      Aed: "4,740"
    },
    {
      img: "public/assets/cards/Frame 529.png",
      title: "Razer Kraken Kitty V2 Pro Wired RGB Headset with...",
      Aed: "4,740"
    },
    {
      img: "public/assets/cards/tr62823-Figure-I.-iphone12-pro-colors 1.png",
      title: "Razer Kraken Kitty V2 Pro Wired RGB Headset with...",
      Aed: "4,740"
    },
    {
      img: "public/assets/cards/Frame 529.png",
      title: "Razer Kraken Kitty V2 Pro Wired RGB Headset with...",
      Aed: "4,740"
    },
    {
      img: "public/assets/cards/Frame 528 (10).png",
      title: "Razer Kraken Kitty V2 Pro Wired RGB Headset with...",
      Aed: "4,740"
    },
    {
      img: "public/assets/cards/Frame 528 (8).png",
      title: "Razer Kraken Kitty V2 Pro Wired RGB Headset with...",
      Aed: "4,740"
    },
    {
      img: "public/assets/cards/Frame 528 (7).png",
      title: "Razer Kraken Kitty V2 Pro Wired RGB Headset with...",
      Aed: "4,740"
    },
    {
      img: "public/assets/cards/Frame 528 (5).png",
      title: "Razer Kraken Kitty V2 Pro Wired RGB Headset with...",
      Aed: "4,740"
    },
  ]

  return (
    <div className='w-full h-full p-6'>
      <div className='w-full h-full flex justify-between items-center'>
        <span>Pick For You</span>
        <span className='flex items-center justify-center gap-3 '> <span>view</span><span className='animate-pulse'><RxDoubleArrowRight /></span></span>
      </div>

      <div className='grid max-sm:grid-cols-2 md:grid-cols-5 gap-3 p-3'>
        {
          pickupcard.map((item, idx) => {
            return (
              <div className='shadow-2xl p-4 border-2 border-[#B7B7B7]  place-content-center'>
                <img className='w-full ' src={item.img} alt="" srcset="" />
                <div className='flex flex-col'>
                  <span style={{ fontSize: "16px" }}>{item.title}</span>
                  <div className='flex justify-between items-center mt-5'>
                    <span className=''>AED {item.Aed}</span>
                    <span className='px-y rounded-[3.99px] bg-[#FF8A00]'>160 SOLD</span>
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