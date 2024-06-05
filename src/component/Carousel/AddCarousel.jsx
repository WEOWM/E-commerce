import React from 'react'

const AddCarousel = () => {
    const AddCarousel = [
        {
            imge:"https://d3jmn01ri1fzgl.cloudfront.net/photoadking/webp_thumbnail/shark-new-collection-sale-clothing-banner-template-p3ztild89dffd0.webp"
        }
    ]
  return (
    <div >
        {
            AddCarousel.map((items)=>{
                return (
                    <img className='w-full md:h-[395px]' src={items.imge} alt="" srcset="" />
                )
            })
        }
    </div>
  )
}

export default AddCarousel