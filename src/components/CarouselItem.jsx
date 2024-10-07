import React from "react";
import Marquee from "react-fast-marquee";

const CarouselItemContainer = ({ items }) => {
  return (
   
    <div className="flex max-w-[800px]  h-[220px]   items-center justify-center ">
    
    <Marquee   gradient={false} speed={100}>
        <span className=" flex gap-5 justify-between  items-center" >
          {items.map((item) => (
             
            <div
              key={item.id}
              className="flex bg-gray-500 justify-center items-center  p-2" // Added mx-2 for horizontal spacing
            >
              <h2 className=" text-[70px] font-bold text-white">
                {item.title}
              </h2>
              
            </div>
           
            
          ))}
        </span>
        </Marquee>
   
    </div>
 
  );
};

export default CarouselItemContainer;
