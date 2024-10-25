import { ArrowRight } from "lucide-react";
import { Facebook, Twitter, Linkedin } from "lucide-react";
const Footer = () => {
  return (
    <footer className="bg-midnight  text-white py-10">
      {/* First Row */}
      <div className="flex justify-center">
        <hr className=" w-[90%] border-dashed border-white mb-5" />
      </div>
      <div className="px-[150px] pt-10  ">
        <div className="flex flex-col py-12 md:flex-row justify-between mb-5">
          {/* Products Section */}
          <div className="mb-6  md:mb-0">
            <h3 className="text-lg font-[500] leading-[28px] mb-2">Products</h3>
            <ul className="font-[400]">
              <li className="text-white  text-[16px] mb-1">Product 1</li>
              <li className="text-white  text-[16px] mb-1">Product 2</li>
              <li className="text-white   text-[16px] mb-1">Product 3</li>
              <li className="text-white  text-[16px] ">Product 4</li>
              <li className="text-white  text-[16px] ">Product 4</li>
              <li className="text-white  text-[16px] ">Product 4</li>
            </ul>
          </div>

          {/* Company Section */}
          <div className="mb-6  md:mb-0">
            <h3 className="text-lg font-semibold leading-[28px] mb-2">
              Company
            </h3>
            <ul>
              <li className="text-white text-[16px] mb-1">About Us</li>
              <li className="text-white  text-[16px] mb-1">Contact Us</li>
              <li className="text-white  text-[16px] mb-1">Careers</li>
              <li className="text-white   text-[16px] ">Privacy Policy</li>
            </ul>
          </div>

          {/* Message Input Section */}
          <div className="  bg-espresso  py-[32px]  rounded-[30px] w-[616px] h-[227px] px-[50px]">
            <div className="flex flex-col space-y-5 w-[462px] h-[132px] justify-center mb-2">
              <div className="text-[16px]">Write to us</div>
              <div className="w-full flex">
                <input
                  type="text"
                  placeholder="Your message..."
                  className="p-2 rounded-l placeholder-espresso bg-white w-full text-midnight outline-none"
                />
                <button className="bg-blue-500 font-medium text-white px-6 py-2 rounded-r flex items-center">
                  <ArrowRight className="w-8 h-8" />
                </button>
              </div>
              <p className="text-white font-[400] text-[12px] ">
                Contact us for any further details. We will love to answer your
                questions.
              </p>
            </div>
          </div>
        </div>

        {/* Second Row */}
        <div className="flex flex-col md:flex-row justify-between items-center  border-t border-white pt-5">
          {/* Logo */}
          <div className="mb-4 md:mb-0">
            <img src="/Images/Logo.svg" alt="" className="w-20 h-20" />
          </div>

          {/* Terms and Conditions */}
          <div className="flex space-x-6 mb-4 md:mb-0">
            <p className="text-white font-[400] text-[14px] cursor-pointer">Terms</p>
            <p className="text-white font-[400] text-[14px]  cursor-pointer">Privacy</p>
            <p className="text-white font-[400] text-[14px]  cursor-pointer">Cookies</p>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <span className="text-gray-400 cursor-pointer">
              <Facebook className="w-6 h-6" />
            </span>
            <span className="text-gray-400 cursor-pointer">
              <Twitter className="w-6 h-6" />
            </span>
            <span className="text-gray-400 cursor-pointer">
              <Linkedin className="w-6 h-6" />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
