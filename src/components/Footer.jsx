import { ArrowRight, Facebook, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-midnight text-white py-10">
      {/* First Row */}
      <div className="flex justify-center">
        <hr className="w-[90%] border-dashed border-white mb-5" />
      </div>

      <div className="px-4 md:px-[150px] pt-10">
        <div className="flex flex-col md:py-10 md:flex-row justify-between mb-5 space-y-8 md:space-y-0">
          {/* Products Section */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-[500] leading-[28px] mb-2">Products</h3>
            <ul className="font-[400]">
              {["Product 1", "Product 2", "Product 3", "Product 4", "Product 5"].map((product, index) => (
                <li key={index} className="text-white text-[16px] mb-1">{product}</li>
              ))}
            </ul>
          </div>

          {/* Company Section */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-semibold leading-[28px] mb-2">Company</h3>
            <ul>
              {["About Us", "Contact Us", "Careers", "Privacy Policy"].map((item, index) => (
                <li key={index} className="text-white text-[16px] mb-1">{item}</li>
              ))}
            </ul>
          </div>

          {/* Message Input Section */}
          <div className="bg-espresso py-[20px] md:py-[32px] rounded-[30px] w-full md:w-[616px] h-auto px-4 md:px-[50px]">
            <div className="flex flex-col space-y-3 md:space-y-5 w-full md:w-[462px] justify-center mb-2">
              <div className="text-[16px]">Write to us</div>
              <div className="w-full flex">
                <input
                  type="text"
                  placeholder="Your message..."
                  className="p-2 rounded-l placeholder-espresso bg-white w-full text-midnight outline-none"
                />
                <button className="bg-blue-500 font-medium text-white px-4 md:px-6 py-2 rounded-r flex items-center">
                  <ArrowRight className="w-5 h-5 md:w-8 md:h-8" />
                </button>
              </div>
              <p className="text-white font-[400] text-[12px]">
                Contact us for any further details. We will love to answer your questions.
              </p>
            </div>
          </div>
        </div>

        {/* Second Row */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-white pt-5 space-y-4 md:space-y-0">
          {/* Logo */}
          <div className="mb-4 md:mb-0">
            <img src="/Images/Logo.svg" alt="Logo" className="w-16 h-16 md:w-20 md:h-20" />
          </div>

          {/* Terms and Conditions */}
          <div className="flex space-x-4 md:space-x-6 mb-4 md:mb-0">
            {["Terms", "Privacy", "Cookies"].map((item, index) => (
              <p key={index} className="text-white font-[400] text-[14px] cursor-pointer">
                {item}
              </p>
            ))}
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <span className="text-gray-400 cursor-pointer">
              <Facebook className="w-5 h-5 md:w-6 md:h-6" />
            </span>
            <span className="text-gray-400 cursor-pointer">
              <Twitter className="w-5 h-5 md:w-6 md:h-6" />
            </span>
            <span className="text-gray-400 cursor-pointer">
              <Linkedin className="w-5 h-5 md:w-6 md:h-6" />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
