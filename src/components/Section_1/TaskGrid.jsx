import React from "react";
import { TaskItems } from "./task"; // Adjust the import according to your file structure
import { ArrowRight } from "lucide-react";
import FadeInSection from "../FadeInSection";
import FallingObject from "../FallingObject";

const TaskGrid = () => {
  return (
    <div className="p-2 md:p-4 bg-charcoal grid grid-cols-1 lg:grid-cols-3 gap-6 rounded-[30px] lg:rounded-[50px]">
      {/* First Column for Type 1 */}
      <FadeInSection delay={150}>
        {TaskItems.filter(item => item.type === 1).map((item, index) => {
          const [firstSentence, ...rest] = item.description.split(". ");
          return (
            <div
              key={index}
              className="flex flex-col group hover:text-midnight hover:bg-sunshine transition-all duration-500 ease-in-out relative h-[570px] pb-10 p-6 bg-espresso rounded-[20px] md:rounded-[30px]"
            >
              <h1 className="text-[20px] md:text-[24px] group-hover:text-midnight font-[500]">{item.type}.</h1>
              <h2 className="text-[24px] md:text-[32px] group-hover:text-midnight mt-3 leading-[30px] md:leading-[38px] font-[500]">
                {item.title}
              </h2>
              <p className="text-[#A5A3A2] mt-5 font-[500] text-[14px] md:text-[16px] leading-[20px]">
                {firstSentence}.
              </p>
              {rest.length > 0 && (
                <p className="text-[#A5A3A2] text-[14px] md:text-[16px] leading-[20px] mt-3">
                  {rest.join(". ")}
                </p>
              )}
              <div className="flex justify-end mr-5">
                <span className="flex items-center justify-center h-[40px] md:h-[50px] w-[70px] md:w-[80px] absolute bottom-5 bg-sunshine text-midnight group-hover:bg-midnight group-hover:text-sunshine rounded-[20px] md:rounded-[30px] cursor-pointer">
                  <ArrowRight />
                </span>
              </div>
            </div>
          );
        })}
      </FadeInSection>

      {/* Second Column for Type 2 and Type 3 (stacked) */}
      <div className="flex flex-col space-y-2">
        {/* Type 2 */}
        <FadeInSection delay={300}>
          {TaskItems.filter(item => item.type === 2).map((item, index) => (
            <div
              key={index}
              className="flex flex-col group hover:text-midnight hover:bg-sunshine transition-all duration-500 ease-in-out relative h-[257px] p-6 bg-espresso rounded-[20px] md:rounded-[30px]"
            >
              <h1 className="text-[20px] md:text-[24px] group-hover:text-midnight font-[500]">{item.type}.</h1>
              <h2 className="text-[24px] md:text-[32px] group-hover:text-midnight mt-3 leading-[30px] md:leading-[38px] font-[500]">
                {item.title}
              </h2>
              <p className="text-[#A5A3A2] text-[14px] md:text-[16px] mt-3 font-[500]">
                {item.description}
              </p>
              <div className="flex justify-end mr-5">
                <span className="flex items-center justify-center h-[40px] md:h-[50px] w-[70px] md:w-[80px] absolute bottom-5 bg-sunshine text-midnight group-hover:bg-midnight group-hover:text-sunshine rounded-[20px] md:rounded-[30px] cursor-pointer">
                  <ArrowRight />
                </span>
              </div>
            </div>
          ))}
        </FadeInSection>

        {/* Type 3 */}
        <FadeInSection delay={450}>
          {TaskItems.filter(item => item.type === 3).map((item, index) => (
            <div
              key={index}
              className="flex flex-col group hover:text-midnight hover:bg-sunshine transition-all duration-500 ease-in-out relative h-[307px] p-6 bg-espresso rounded-[20px] md:rounded-[30px]"
            >
              <h1 className="text-[20px] md:text-[24px] group-hover:text-midnight font-[500]">{item.type}.</h1>
              <h2 className="text-[24px] md:text-[32px] group-hover:text-midnight mt-3 leading-[30px] md:leading-[38px] font-[500]">
                {item.title}
              </h2>
              <p className="text-[#A5A3A2] text-[14px] md:text-[16px] mt-3 font-[500]">
                {item.description}
              </p>
              <div className="flex justify-end mr-5">
                <span className="flex items-center justify-center h-[40px] md:h-[50px] w-[70px] md:w-[80px] absolute bottom-5 bg-sunshine text-midnight group-hover:bg-midnight group-hover:text-sunshine rounded-[20px] md:rounded-[30px] cursor-pointer">
                  <ArrowRight />
                </span>
              </div>
            </div>
          ))}
        </FadeInSection>
      </div>

      {/* Third Column for Empty Type "" */}
      <FadeInSection delay={600}>
        <div className="flex flex-col h-[570px] p-6 bg-transparent border-[1px] border-dashed border-[#A5A3A2] rounded-[20px] md:rounded-[30px]">
          <div className="bg-sunshine w-16 h-16 rounded-full mb-4"></div>
          <div className="bg-sunshine w-32 h-32 rounded-full relative mb-4"></div>
          <FallingObject items={TaskItems} />
        </div>
      </FadeInSection>
    </div>
  );
};

export default TaskGrid;
