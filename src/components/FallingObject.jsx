import React, { useEffect } from "react";

const FallingObject = ({ items }) => {


  return (
    <div className="flex flex-wrap gap-4">

      {items.map((item, index) => {
        if (item.type === "") {
          return item.tasks.map((task, taskIndex) => (
            <span
              key={taskIndex}
              className="bg-transparent border border-[#89857F] rounded-[30px] p-4 font-bold text-white"
            >
              {task}
            </span>
          ));
        }
        return null;
      })}
       

    </div>
  );
};

export default FallingObject;
