import { ArrowRight } from "lucide-react";
import React from "react";
import Marquee from "react-fast-marquee";

const CarouselItemContainer = ({ items }) => {
  return (
    <div className="flex w-[630px] h-[220px] items-center justify-center">
      <Marquee gradient={false} speed={100}>
        <div className="flex  items-center">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex flex-shrink-0 justify-center items-center p-2"
            >
              <h2 className="text-[50px] font-[500]  text-[#585450] whitespace-nowrap">
                {item.title}
              </h2>
              <div className="border-dashed w-[77px] h-[37px]  border border-[#585450]  flex items-center justify-center rounded-[30px]">
                <ArrowRight className="text-[#585450]" />{" "}
                {/* Right arrow icon */}
              </div>
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default CarouselItemContainer;
