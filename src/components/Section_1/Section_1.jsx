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
    <section className="bg-midnight p-2  text-white">
      <div className="relative">
        {/* First Div */}
        <FadeInSection>
          <div className="h-[300px] rounded-[50px]  bg-earthy">
            <h1 className="text-[50px]  leading-[62px] font-[500px] px-10 py-10 ">
              Robotics Process Automation allows easy and centralised control
              over all automation
            </h1>
          </div>
        </FadeInSection>

        {/* Second Div overlapping */}
        <FadeInSection delay={150}>
          <div
            ref={sectionRef}
            className="w-full mt-[-120px]   rounded-[50px]    bg-charcoal"
          >
            <TaskGrid isVisible={isVisible} />
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};
export default Section_1;
