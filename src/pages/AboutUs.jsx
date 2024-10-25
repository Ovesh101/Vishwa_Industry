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
          <p className="pt-24 text-[22px] font-extralight leading-8">
            At <span className="text-[40px] font-bold text-[#0074E8]">Vishwa Industries</span> we are ommitted to delivering high-quality, reliable gear products through cutting-edge technology and skilled craftsmanship, ensuring customer satisfaction and supporting the growth of industrial sectors with sustainable and efficient solutions.
          </p>
          <p className="pt-24 text-[22px] font-extralight leading-8">
            Our <span className="text-[#0074E8]">vision</span> is to be a global leader in precision gear manufacturing, driving innovation and excellence in engineering solutions that power industries worldwide.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
