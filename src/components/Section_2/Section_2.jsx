import { useState } from "react";
import FadeInSection from "../FadeInSection";
import { cardData } from "./CardData";

const Section_2 = () => {
  return (
    <div className="bg-midnight p-2 pt-5 text-white">
      <FadeInSection >
      <div className=" h-auto md:h-[300px] pt-5 rounded-[30px] md:rounded-[50px] bg-earthy p-2 pl-6 pb-20 md:px-10 md:py-10">
      <h1 className="text-[24px] md:text-[50px]  md:h-[132px] leading-[32px] md:leading-[62px] font-[500]">
           Product We Manufacture
          </h1>
        </div>
      </FadeInSection>
      <FadeInSection delay={150}>
        <div className="w-full mt-[-60px] md:mt-[-155px] p-2   rounded-[20px]    bg-charcoal">
          <div className="grid grid-cols-1 pt-2 md:pt-12 place-items-center p-2 md:p-6 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {cardData.map((card, index) => (
              <FadeInSection key={card.id} delay={150 + index * 80}>
                <div className="relative w-full h-full rounded-[30px] overflow-hidden">
                  {/* Image */}
                  <div className="w-full bg-espresso rounded-[30px]  px-2 pt-2 pb-6 ">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="object-contain rounded-[25px] w-full" // Ensure the image fits within the container
                    />
                    <div className=" flex gap-3 justify-start items-end ml-2 mt-4">
                      <h1 className="text-[18px] font-[500] " >{card.id}.</h1>
                      <h2 className="text-[18px] font-[500]">{card.title}</h2>
                    </div>
                  </div>

                  {/* Title below the image */}
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </FadeInSection>
    </div>
  );
};

export default Section_2;
