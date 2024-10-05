import { useEffect, useRef, useState } from "react";
import FadeInSection from "../FadeInSection";
import TaskGrid from "./TaskGrid";

const Section_1 = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);


  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing after visibility is true
        }
      });
    });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <section className="bg-midnight p-2 w-[100vw] text-white">
      <FadeInSection>
        <div className="relative">
          {/* First Div */}
          <div className="h-[300px] rounded-[50px]  bg-earthy">
            
              <h1 className="text-5xl px-10 py-10 ">
                Robotics Process Automation allows easy and centralised control over all automation
              </h1>
            
          </div>

          {/* Second Div overlapping */}
          <div ref={sectionRef} className="w-full mt-[-120px] h-[800px]  rounded-[50px]    bg-charcoal">
            <TaskGrid isVisible={isVisible} />
          </div>
        </div>
      </FadeInSection>
    </section>
  );
};
export default Section_1;
