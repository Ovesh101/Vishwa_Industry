import React from "react";
import { TaskItems } from "./task"; // Adjust the import according to your file structure
import { ArrowRight } from "lucide-react";
import FadeInSection from "../FadeInSection";
import FallingObject from "../FallingObject";

const TaskGrid = () => {
  return (
    <div className="rounded-[50px] p-10  bg-charcoal grid grid-cols-3 gap-4">
      {/* First Column for Type 1 */}

      <FadeInSection delay={150}>
        {TaskItems.map((item, index) => {
          if (item.type === 1) {
            const [firstSentence, ...rest] = item.description.split(". "); // Splits the description at the first full stop.
            return (
              <div
                key={index}
                className="flex pt-5 group hover:text-midnight  hover:bg-sunshine transition-all duration-500 ease-in-out  relative h-[570px] pb-20 p-4  flex-col  bg-espresso rounded-[30px] shadow-lg"
              >
                <h1 className="text-[24px] group-hover:text-midnight font-[500] ">{item.type}.</h1>
                <h2 className="text-[32px] group-hover:text-midnight mt-3 w-[260px] h-[81px] leading-[38px]   font-[500]">
                  {item.title}
                </h2>

                {/* First paragraph of the description */}
                <p className="text-[#A5A3A2] mt-5 font-[500] text-[16px] leading-[21px] ">
                  {firstSentence}.
                </p>

                {/* Remaining part of the description in a new paragraph */}
                {rest.length > 0 && (
                  <p className="text-[#A5A3A2] text-[16px] leading-[21px] mt-5 ">
                    {rest.join(". ")}
                  </p>
                )}

                <div className="flex justify-end  mr-5">
                  <span className="flex group-hover:bg-midnight group-hover:text-sunshine items-center bottom-5   h-[50px] absolute  text-midnight justify-center  border w-[80px] rounded-[30px] bg-sunshine cursor-pointer">
                    <ArrowRight />
                  </span>
                </div>
              </div>
            );
          }
          return null;
        })}
      </FadeInSection>

      {/* Second Column for Type 2 and Type 3 */}

      <div className="flex justify-between  flex-col">
        <FadeInSection delay={300}>
          {TaskItems.map((item, index) => {
            if (item.type === 2) {
              return (
                <div
                  key={index}
                  className="flex hover:text-midnight flex-col hover:bg-sunshine transition-all duration-500 ease-in-out  relative bg-espresso h-[257px] group  p-4 text-white rounded-[30px] shadow-lg mb-2"
                >
                  <h1 className="text-[24px] group-hover:text-midnight  font-[500] ">{item.type}.</h1>
                  <h2 className="text-[32px] group-hover:text-midnight mt-3 font-[500] w-[260px] h-[81px] leading-[38px]  ">
                    {item.title}
                  </h2>
                  <p className="text-[#A5A3A2] font-[500] text-[16px] ">
                    {item.description}
                  </p>
                  <div className="flex justify-end mr-5 ">
                    <span className="flex group-hover:bg-midnight group-hover:text-sunshine absolute text-midnight rounded-[30px] bottom-5 w-[80px] h-[50px] items-center justify-center  border   bg-sunshine cursor-pointer">
                      <ArrowRight />
                    </span>
                  </div>
                </div>
              );
            }
            return null; // Return null if the condition is not met
          })}
        </FadeInSection>
        <FadeInSection delay={450}>
          {TaskItems.map((item, index) => {
            if (item.type === 3) {
              return (
                <div
                  key={index}
                  className="flex relative group card_3 hover:bg-sunshine transition-all duration-500 ease-in-out flex-col h-[307px] bg-espresso p-4 text-white rounded-[30px] shadow-lg"
                >
                  <h1 className="text-[24px] group-hover:text-midnight font-[500]">{item.type}.</h1>
                  <h2 className="text-[32px] group-hover:text-midnight mt-3 font-[500] w-[260px] h-[81px] leading-[38px]">
                    {item.title}
                  </h2>
                  <p className="text-[#A5A3A2] font-[500] text-[16px]">
                    {item.description}
                  </p>
                  <div className="flex justify-end mr-5">
                    <span className="flex items-center absolute bottom-5 h-[50px] rounded-[30px] justify-center p-2 border w-[80px] bg-sunshine cursor-pointer text-midnight group-hover:bg-midnight group-hover:text-sunshine transition-colors duration-300 ease-in-out">
                      <ArrowRight />
                    </span>
                  </div>
                </div>
              );
            }
            return null; // Return null if the condition is not met
          })}
        </FadeInSection>
      </div>

      {/* Third Column for Type "" (Tasks) */}
      <FadeInSection delay={600}>
        <div className="rounded-[30px]  card_4 h-[570px] bg-transparent border-dashed border border-[#A5A3A2] p-4">
          <div class="bg-sunshine w-16 h-16 rounded-full"></div>

          <div class="bg-sunshine relative w-32 h-32 rounded-full"></div>
          <FallingObject items={TaskItems} />
        </div>
      </FadeInSection>
    </div>
  );
};

export default TaskGrid;
