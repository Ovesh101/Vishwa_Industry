import Section_1 from "../components/Section_1/Section_1";
import CarouselItemContainer from "../components/CarouselItem";

import { CarouselItem } from "../utils/constant";
import { useEffect, useState } from "react";
import Section_2 from "../components/Section_2/Section_2";
const HomePage = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Trigger the animation after the component mounts
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 0); // No delay; can adjust for timing if needed

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);
  const data = [
    {
      percentage: "75%",
      text: "Achieved business",
    },
    {
      percentage: "50%",
      text: "Improved internal",
    },
  ];
  return (
    <>
      <div className=" grid grid-cols-[1.5fr_1fr_1fr] bg-midnight">
        {/* Left side with two stacked boxes */}
        <div className="col-span-1 bg-transparent z-10 flex flex-col space-y-2 p-2">
          {/* Box 1 */}
          <div className="bg-earthy transition-all duration-300 ease-in-out hover:bg-sunshine z-10 rounded-[30px]">
            <CarouselItemContainer items={CarouselItem} />
          </div>

          {/* Box 2 */}
          <div className="z-10 border justify-between  border-dashed border-[#A5A3A2]  rounded-[30px] p-10 flex flex-col">
            {/* Title with each word on a new line */}
            <div className="flex flex-col justify-start">
              <div className="text-[70px] w-[433px] h-[231px] text-[#F8F4F1] leading-[72px] font-[500] ">
                Transforming Business Operations
              </div>
            
              {/* Some additional text */}
              <p className="text-[16px]  font-[500] mt-5 text-[#A5A3A2] w-[399px] h-[63px] ">
              Vishwa Industries is an enterprise that enables the
                <span className={`metaball ${loaded ? 'loaded' : ''}`}>
                automation of business resources using the tools
                </span>{" "}
                and systems that your company already has
              </p>
            </div>

            {/* Bottom section with two divs for percentage and text */}
          
            <div className="flex    justify-start space-x-2 pt-[150px] ">
              {data.map((item, index) => (
                <div
                  key={index}
                  className="flex rounded-[20px] w-[195px] h-[140px]  pt-8 pb-4 px-3 bg-cream flex-col justify-between"
                >
                  {/* Percentage */}
                  <div className="text-sunshine font-[500] text-[38px] leading-[22px] ">
                    <h3 className="">{item.percentage}</h3>
                  </div>

                  {/* Text */}
                  <div className="text-[#A5A3A2] font-[500] text-end ml-10">
                    <p className="text-[16px]">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right side with full-screen video */}
        <div className="relative col-span-2">
          <video
            className="h-full w-full object-cover"
            src="/Video/engine.mp4" // Replace with your video source
            autoPlay
            muted
            loop
          />
          <div className="absolute  inset-0 bg-gradient-to-t from-midnight via-transparent to-midnight bg-opacity-70 " />
        </div>
      </div>

      <Section_1 />
      <Section_2 />
    </>
  );
};

export default HomePage;
