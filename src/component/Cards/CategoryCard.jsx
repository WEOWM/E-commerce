    import React from 'react'
    
    const CategoryCard = (props) => {
      return  (
        <div className="card grid grid-cols-6 gap-2 p-3 w-full  mt-7 ">
          {props?.data.map((item, idx) => {
            return (
              <div className="card-1 col-span-3 ">
                <div className="text-overlay  w-full h-full absolute flex flex-col items-center">
                  <div className="flex w-full p-7 justify-start text-white">
                    {item?.title}
                  </div>
    
                  <div className="w-full h-full flex items-end justify-start">
                    <div className="w-[98%] h-[23%] md:h-[48%]  text-white">
                      {/* <button className="text-black  bg-slate-300 w-[40%] h-[1.8rem] rounded-[4px] text-sm">
                        Shop Now
                      </button> */}
                    </div>
                  </div>
                </div>
                <img
                  className="rounded-lg w-[100%] h-auto "
                  src={item?.image}
                  alt={item?.title}
                />
              </div>
            );
          })}
        </div>
      );
    }
    
    export default CategoryCard