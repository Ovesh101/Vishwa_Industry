import { LucideSearch } from "lucide-react"; // Assuming you're using Lucide icons

const Header = () => {
  return (
    <header className="bg-midnight text-gray-300 px-3">
      {/* Set up the grid layout */}
      <div className="grid grid-cols-[1.5fr_2fr] items-center gap-4">
        {/* Logo and Search Bar in the first column */}
        <div className="flex items-center space-x-4">
          {/* Logo */}
          <div className="border my-2 w-[130px] h-[60px] border-gray-500 py-4 px-6 drop-shadow-xl border-dotted rounded-xl flex-shrink-0">
            <h1 className="text-xl text-[#F8F4F1] text-center font-bold">Logo</h1>
          </div>

          {/* Search Bar */}
          <div className=" mb-3 w-full h-[60px] pt-2 ">
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
                <LucideSearch />
              </span>
              <input
                type="text"
                placeholder="Search"
                className="w-full py-4 px-10 bg-transparent border border-gray-500 border-dotted rounded-xl text-[#F8F4F1] focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Second column: Empty or whatever else you want here */}
   

        {/* Navigation Links */}
        <nav className=" border-dotted text-[#F8F4F1] border-gray-500 justify-around border h-[60px] py-4 px-10 rounded-xl flex space-x-6">
          <a href="#about" className="hover:text-gray-300">About</a>
          <a href="#services" className="hover:text-gray-300">Services</a>
          <a href="#contact" className="hover:text-gray-300">Contact</a>
          <a href="#blog" className="hover:text-gray-300">Blog</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
