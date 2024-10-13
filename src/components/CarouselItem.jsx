import { ArrowRight } from "lucide-react";
import React from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const CarouselItemContainer = ({ items }) => {
  return (
    <div className="flex w-[634px] h-[90px] md:h-[220px] items-center justify-center">
      <Marquee  pauseOnHover gradient={false} speed={100}>
        <div className="flex  justify-end ">
          {items.map((item) => (
            <Link
            to="/contact"
              key={item.id}
              className="flex gap-5 pr-12   flex-shrink-0 justify-between items-center p-2"
            >
              <h2 className="text-[50px] font-[500]  text-[#585450] ">
                {item.title}
              </h2>
              <div className="border-dashed w-[77px] h-[37px]  border border-[#585450]  flex items-center justify-center rounded-[30px]">
                <ArrowRight className="text-[#585450]" />{" "}
                {/* Right arrow icon */}
              </div>
            </Link>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default CarouselItemContainer;
