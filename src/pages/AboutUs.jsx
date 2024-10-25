const AboutUs = () => {
  return (
    <div className="bg-midnight" >

   
    <div className="relative text-white  flex p-10">
      {/* Dashed Border Lines */}
      <div className="flex absolute  top-5 left-0 right-0  justify-center">
        <hr className="w-[90%] border-dashed border-white mb-5" />
      </div>
      <div className="flex absolute bottom-5 pt-4  left-0 right-0  justify-center">
        <hr className="w-[90%] border-dashed border-white mb-5" />
      </div>
      <div className="absolute top-0 bottom-0 left-[150px]  border-l border-dashed border-gray-500"></div>
      <div className="absolute top-0 bottom-0 left-[320px] border-l border-dashed border-gray-500"></div>
      
      {/* Content */}
      <div className="pl-[120px]">
        <h1 className="text-4xl font-semibold">About Us</h1>

      </div>
    </div>
    </div>
  );
};

export default AboutUs;
