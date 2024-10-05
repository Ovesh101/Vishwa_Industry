import CarouselContainer from "../components/CarouselContainer";

import Section_1 from "../components/Section_1/Section_1";
import { CarouselItem } from "../utils/constant";
const HomePage = () => {
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
   <div className="relative grid grid-cols-[1.5fr_1fr_1fr] bg-midnight">
        {/* Left side with two stacked boxes */}
        <div className="col-span-1 z-10 flex flex-col space-y-4 p-2">
          {/* Box 1 */}
          <div className="bg-earthy z-10  rounded-3xl min-h-[200px] p-4">
            <CarouselContainer items={CarouselItem} />
          </div>

          {/* Box 2 */}
          <div className="bg-charcoal  z-10 border-[2px] justify-between  text-white border-dotted border-sunshine h-[700px] rounded-3xl p-8 flex flex-col">
            {/* Title with each word on a new line */}
            <div className="flex flex-col justify-start">

      
            <div className="text-[40px] font-bold ">
              <h1>Transforming</h1>
              <h1>Business</h1>
              <h1>Operations</h1>
            </div>

            {/* Some additional text */}
            <p className="text-base mt-5 text-gray-300 w-[400px]">
              Autoflow is a Product that enables a <span className="bg-sunshine">automation business process
              using the tools and systems</span> that your company already has
            </p>
            </div>

            {/* Bottom section with two divs for percentage and text */}
            <div className="flex  justify-start space-x-2 mt-10">
              {data.map((item, index) => (
                <div
                  key={index}
                  className="flex rounded-xl py-6 px-4 bg-cream flex-col justify-between"
                >
                  {/* Percentage */}
                  <div className="text-sunshine text-[30px]">
                    <h3 className="">{item.percentage}</h3>
                  </div>

                  {/* Text */}
                  <div className="text-gray-300 text-end ml-10">
                    <p className="text-base">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right side with full-screen video */}
        <div className=" relative col-span-2">
          <video
            className="w-full h-full object-cover"
            src="/Video/engine.mp4" // Replace with your video source
            autoPlay
            muted
            loop
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-midnight via-transparent to-midnight bg-opacity-70 " />
      </div>
     
        <Section_1 />
     
    </>
  );
};

export default HomePage;
