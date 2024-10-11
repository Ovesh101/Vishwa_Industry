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
    <section className="bg-midnight p-2  pt-5 text-white">
      {/* First Div */}
      <FadeInSection>
        <div className="h-auto md:h-[300px] rounded-[30px] md:rounded-[50px] bg-earthy p-4 pl-6 pb-20 md:px-10 md:py-10">
          <h1 className="text-[24px] md:text-[50px] h-auto md:h-[132px] leading-[32px] md:leading-[62px] font-[500]">
            Robotics Process Automation allows easy and centralised control over
            all automation
          </h1>
        </div>
      </FadeInSection>

      {/* Second Div overlapping */}
      <FadeInSection delay={150}>
        <div
          ref={sectionRef}
          className="w-full mt-[-70px] md:mt-[-120px] rounded-[20px] md:rounded-[40px] bg-charcoal p-2 md:p-8"
        >
          <TaskGrid isVisible={isVisible} />
        </div>
      </FadeInSection>
    </section>
  );
};

export default Section_1;
