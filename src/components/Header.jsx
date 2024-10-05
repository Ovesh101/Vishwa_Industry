import { LucideSearch } from "lucide-react"; // Assuming you're using Lucide icons

const Header = () => {
  return (
    <header className="bg-midnight  text-gray-300    top-0 left-0 w-full  flex items-center justify-between px-3">
      {/* Logo */}
      <div className="border border-gray-500 py-4  px-6  drop-shadow-xl border-dotted rounded-xl  flex-shrink-0">
        <h1 className="text-xl text-gray-300 text-center font-bold">Logo</h1>
      </div>

      {/* Search Bar */}
      <div className="pl-4 py-2 pr-4 w-[68%] ">
        <div className="relative">
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
            <LucideSearch />
          </span>
          <input
            type="text"
            placeholder="Search"
            className="w-full py-4 px-10 bg-transparent border border-gray-500 border-dotted rounded-xl text-gray-300 focus:outline-none"
          />
        </div>
      </div>

      {/* Navigation Links */}
      <nav className=" w-full border-dotted border-gray-500 justify-around border py-4 px-10 rounded-xl flex space-x-6">
        <a href="#about" className="hover:text-gray-300">About</a>
        <a href="#services" className="hover:text-gray-300">Services</a>
        <a href="#contact" className="hover:text-gray-300">Contact</a>
        <a href="#blog" className="hover:text-gray-300">Blog</a>
      </nav>
    </header>
  );
}

export default Header;
