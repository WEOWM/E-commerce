import React from 'react'

const AddCarousel = () => {
    const AddCarousel = [
        {
            imge:"public/assets/Carousel/AddCarousel/Frame 530.jpg"
        }
    ]
  return (
    <div >
        {
            AddCarousel.map((items)=>{
                return (
                    <img className='w-full md:h-[295px]' src={items.imge} alt="" srcset="" />
                )
            })
        }
    </div>
  )
}

export default AddCarousel