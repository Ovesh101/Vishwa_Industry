import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import CarouselItem from './CarouselItem';

const CarouselContainer = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Automatically move to the next slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Adjust the interval time as needed

    return () => clearInterval(interval); // Clean up on component unmount
  }, [currentIndex]);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === items.length - 1 ? 0 : prevIndex + 1
      );
      setIsAnimating(false);
    }, 500); // Transition duration
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? items.length - 1 : prevIndex - 1
      );
      setIsAnimating(false);
    }, 500); // Transition duration
  };

  return (
    <div className="relative h-full  w-full overflow-hidden">
      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 text-white rounded-full z-10"
      >
        <ChevronLeft size={24} />
      </button>

      {/* Carousel Wrapper */}
      <div
        className="w-full h-full flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`, // Move the container based on the current index
        }}
      >
        {/* Carousel Items */}
        {items.map((item, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0" // Ensure each item takes full width
          >
            <CarouselItem item={item} />
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 text-white  rounded-full z-10"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

export default CarouselContainer;
