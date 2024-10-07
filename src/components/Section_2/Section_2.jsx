import FadeInSection from "../FadeInSection";
import { cardData } from "./CardData";

const Section_2 = () => {
  return (
    <div className="bg-midnight p-2 text-white">
      <div className="grid grid-cols-1 p-10 gap-4 sm:grid-cols-2 lg:grid-cols-3 ">
      

      
        {cardData.map((card) => (
            <FadeInSection delay={150}>
          <div key={card.id} className="relative  w-full h-full  rounded-[30px] overflow-hidden">
            <img
              src={card.image}
              alt={card.title}
              className="object-contain " // Ensure the image is properly sized
            />
            {/* Adjusted gradient for a more subtle effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-30" />
            <div className="absolute bottom-5 left-[40px] flex items-center justify-center z-10">
              <h2 className="text-[24px] font-[500]">{card.title}</h2>
            </div>
          </div>
          </FadeInSection>
        ))}
       
      </div>
    </div>
  );
};

export default Section_2;
