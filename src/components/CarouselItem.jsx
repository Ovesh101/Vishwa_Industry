import React from 'react';


const CarouselItem = ({ item }) => {
  return (
    <div className=" mt-10 bg-transparent text-white w-full h-1/2 flex justify-center items-center  rounded-lg ">
      <h2 className="text-xl font-bold">{item.title}</h2>
    </div>
  );
};

export default CarouselItem;
