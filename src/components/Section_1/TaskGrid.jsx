import React from "react";
import { TaskItems } from "./task"; // Adjust the import according to your file structure
import { ArrowRight } from "lucide-react";

const TaskGrid = () => {
  return (
    <div className=" rounded-[50px] p-10  bg-charcoal grid grid-cols-3 gap-4">
      {/* First Column for Type 1 */}
      {TaskItems.map((item, index) => {
        if (item.type === 1) {
          const [firstSentence, ...rest] = item.description.split(". "); // Splits the description at the first full stop.
          return (
            <div
              key={index}
              className="flex  flex-col  bg-espresso rounded-[30px] shadow-lg"
            >
              <h1 className="text-[60px]">{item.type}.</h1>
              <h2 className="text-[20px] mt-3  font-bold">
                {item.title}
              </h2>

              {/* First paragraph of the description */}
              <p className="text-gray-300 mt-5 text-lg">{firstSentence}.</p>

              {/* Remaining part of the description in a new paragraph */}
              {rest.length > 0 && (
                <p className="text-gray-300 mt-5 text-lg">{rest.join(". ")}</p>
              )}

              <div className="flex justify-end mt-[400px] mr-5">
                <span className="flex items-center w-[15%] text-black justify-center p-2 border rounded-full bg-sunshine cursor-pointer">
                  <ArrowRight />
                </span>
              </div>
            </div>
          );
        }
        return null;
      })}

      {/* Second Column for Type 2 and Type 3 */}
      <div className="flex justify-between  flex-col">
        {TaskItems.map((item, index) => {
          if (item.type === 2) {
            return (
              <div
                key={index}
                className="flex flex-col bg-espresso h-1/2  p-4 text-white rounded-[30px] shadow-lg mb-2"
              >
                <h1>{item.type}.</h1>
                <h2 className="text-xl font-bold">{item.title}</h2>
                <p className="text-gray-700">{item.description}</p>
                <div className="flex justify-end ">
                  <span className="flex items-center w-[15%] text-black justify-center p-2 border rounded-full  bg-sunshine cursor-pointer">
                    <ArrowRight />
                  </span>
                </div>
              </div>
            );
          }
          return null; // Return null if the condition is not met
        })}
        {TaskItems.map((item, index) => {
          if (item.type === 3) {
            return (
              <div
                key={index}
                className="flex flex-col h-1/2 p-4 bg-sunshine text-white rounded-[30px] shadow-lg"
              >
                <h1>{item.type}.</h1>
                <h2 className="text-xl font-bold">{item.title}</h2>
                <p className="text-gray-700">{item.description}</p>
                <div className="flex justify-end  mr-5 ">
                  <span className="flex items-center w-[15%] text-sunshine justify-center p-2 border rounded-full  bg-midnight cursor-pointer">
                    <ArrowRight />
                  </span>
                </div>
              </div>
            );
          }
          return null; // Return null if the condition is not met
        })}
      </div>

      {/* Third Column for Type "" (Tasks) */}
      <div className="rounded-[30px] bg-transparent border-dotted border-[2px] border-sunshine p-4">
        <div className="flex flex-wrap gap-4">
          {TaskItems.map((item, index) => {
            if (item.type === "") {
              return item.tasks.map((task, taskIndex) => (
                <span
                  key={taskIndex}
                  className="bg-green-600 rounded-[30px] p-4 font-bold text-white"
                >
                  {task}
                </span>
              ));
            }
            return null;
          })}
        </div>
      </div>
    </div>
  );
};

export default TaskGrid;
