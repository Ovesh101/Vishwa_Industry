import { aboutUsContent } from "../utils/constant";

const AboutUs = () => {
  return (
    <div className="bg-midnight">
      <div className="relative text-white flex p-10 min-h-screen pl-40">
        <div className="absolute top-0 left-40 h-full w-1/12 border-l fancy-dash-line vertical"></div>
        <div className="absolute top-0 left-[23rem] h-[300px] w-1/12 border-l fancy-dash-line vertical"></div>
        <div className="absolute top-24 left-[-2px] w-[calc(100%+4px)] py-5 border fancy-dash-line horizontal">
          <h1 className="text-4xl font-semibold ml-40 pl-4 text-[#D3D3D3]">
            ABOUT US
          </h1>
        </div>

        {/* content */}
        <div className="pt-32 pl-4 pr-24 z-[1]">
          {aboutUsContent.map((para, paraIndex) => {
            if (para.type === "para") {
              return (
                <p
                  key={paraIndex}
                  className="pt-24 text-[22px] font-extralight leading-8"
                >
                  {para.content.map((piece, pieceIndex) => {
                    const { text, highlight, increaseText, bold } = piece;

                    const classNames = [
                      highlight && "text-[#0074E8]",
                      increaseText && "text-[40px]",
                      bold && "font-bold",
                    ]
                      .filter(Boolean)
                      .join(" ");

                    return typeof piece === "string" ? (
                      piece
                    ) : (
                      <span key={pieceIndex} className={classNames}>
                        {text}
                      </span>
                    );
                  })}
                </p>
              );
            } else if (para.type === "image") {
              return (
                <p
                  key={paraIndex}
                  className="pt-24 text-[22px] font-extralight leading-8"
                >
                  <img src={para.url} alt={para.title} className="rounded-[30px]" />
                  {para.title}
                </p>
              )
            }
            return null;
          })}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
