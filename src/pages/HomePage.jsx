import CarouselItemContainer from "../components/CarouselItem";
import Section_1 from "../components/Section_1/Section_1";
import Section_2 from "../components/Section_2/Section_2";
import { CarouselItem } from "../utils/constant";
import { useEffect, useState } from "react";

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
      <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr_1fr] bg-midnight">
        {/* Video section for mobile first */}
        <div className="relative col-span-1 lg:col-span-2 order-1 lg:order-2">
          <video
            className="h-full w-full object-cover"
            src="/Video/engine.mp4" // Replace with your video source
            autoPlay
            muted
            loop
          />
          <div className="absolute inset-0 bg-gradient-to-t from-midnight via-transparent to-midnight bg-opacity-70" />
        </div>

        {/* Left side with two stacked boxes for large screens, placed below video for mobile */}
        <div className="col-span-1 bg-transparent z-10 flex flex-col space-y-4 p-2 order-2 lg:order-1">
          {/* Infinite loop section (Carousel) */}
          <div className="bg-earthy transition-all overflow-hidden duration-300 ease-in-out hover:bg-sunshine z-10 rounded-[20px] lg:rounded-[30px]">
            <CarouselItemContainer items={CarouselItem} />
          </div>

          {/* Transformation section */}
          <div className="z-10 border justify-between border-dashed border-[#A5A3A2] rounded-[20px] lg:rounded-[30px] p-6 lg:p-10 flex flex-col">
            {/* Title with each word on a new line */}
            <div className="flex flex-col justify-start">
              <div className="text-[40px] lg:text-[70px]  lg:w-[433px] h-auto lg:h-[231px] text-[#F8F4F1] leading-[42px] lg:leading-[72px] font-[500]">
                Transforming Business Operations
              </div>

              {/* Additional text */}
              <p className="text-[16px] font-[500] mt-3 sm:mt-4 lg:mt-5 text-[#A5A3A2] w-full   md:max-w-[399px] h-auto lg:h-auto">
                Vishwa Industries is an enterprise that enables the{" "}
                <span className={`metaball ${loaded ? "loaded" : ""}`}>
                  automation of business resources using the tools
                </span>{" "}
                and systems that your company already has
              </p>
            </div>

            {/* Bottom section with two divs for percentage and text */}
            <div className="flex items-center gap-5 lg:flex-row justify-start  lg:space-y-0 lg:space-x-2 pt-16 lg:pt-[150px]">
              {data.map((item, index) => (
                <div
                  key={index}
                  className="flex rounded-[20px] w-[220px] h-[140px]  lg:w-[195px]  lg:h-[140px] p-6 px-3 lg:pt-8 pb-4 lg:px-3 bg-cream flex-col justify-between"
                >
                  {/* Percentage */}
                  <div className="text-sunshine font-[500] text-[24px] md:text-[38px] leading-[22px]">
                    <h3>{item.percentage}</h3>
                  </div>

                  {/* Text */}
                  <div className="text-[#A5A3A2] font-[500] text-end ml-4">
                    <p className="text-[16px] lg:text-[16px]">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Section_1 />
      <Section_2 />
    </>
  );
};

export default HomePage;
