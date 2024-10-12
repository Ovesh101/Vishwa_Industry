import React, { useState } from "react";
import { Link } from "react-router-dom"; // Replace this if you're using something other than React Router
import { SideBarLinks } from "../utils/constant";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sm:hidden  ">
      <button
        onClick={toggleSidebar}
        className="border sticky top-2  z-50 w-[70px] h-[60px] border-[#A5A3A2]   border-dashed rounded-[15px] "
      >
        <div className="text-[16px] text-[#F8F4F1] text-center  font-[500]">
          {isOpen ? <h1>Close</h1> : <h1>Menu</h1>}
        </div>
      </button>
      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-60 bg-charcoal text-white transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } z-40`}
      >
        <div className="p-4">
          {/* Logo */}
          <Link to="/" className="flex items-center mb-8">
            <img src="/icons/logo.svg" alt="Logo" className="w-8 h-8 mr-2" />
            <span className="text-2xl font-bold">Yoom</span>
          </Link>

          {/* Sidebar Links */}
          <nav className="flex flex-col space-y-4">
            {SideBarLinks.map((link) => (
              <Link
                key={link.route}
                to={link.route}
                className="flex items-center gap-4 p-2 hover:bg-gray-700 rounded-lg"
              >
                <img src={link.imgUrl} alt={link.label} className="w-5 h-5" />
                <span>{link.label}</span>
              </Link>
            ))}
          </nav>
        </div>
      </div>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30"
          onClick={toggleSidebar}
        />
      )}
    </div>
  );
};

export default MobileNav;
