import { useState } from "react";
import FadeInSection from "../FadeInSection";
import { cardData } from "./CardData";

const Section_2 = () => {
  return (
    <div className="bg-midnight p-2 pt-5 text-white">
      <FadeInSection>
        <div className="h-[300px] rounded-[50px]  bg-earthy">
          <h1 className="text-[50px]  leading-[62px] font-[500] px-10 py-10 ">
           Product We Manufacture
          </h1>
        </div>
      </FadeInSection>
      <FadeInSection delay={150}>
        <div className="w-full mt-[-155px] p-4   rounded-[40px]    bg-charcoal">
          <div className="grid grid-cols-1 pt-12 place-items-center p-5 gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
