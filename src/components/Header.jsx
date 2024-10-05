import { LucideSearch } from "lucide-react"; // Assuming you're using Lucide icons

const Header = () => {
  return (
    <header className="bg-midnight  text-gray-300 fixed top-0 left-0 w-full h-14 flex items-center justify-between px-3 z-50">
      {/* Logo */}
      <div className="border border-gray-500 py-2 px-10 drop-shadow-xl border-dotted rounded-xl  flex-shrink-0">
        <h1 className="text-xl text-gray-300 font-bold">Logo</h1>
      </div>

      {/* Search Bar */}
      <div className="w-3/4  px-10 ">
        <div className="relative">
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
            <LucideSearch />
          </span>
          <input
            type="text"
            placeholder="Search"
            className="w-full py-2 px-10 bg-transparent border border-gray-500 border-dotted rounded-xl text-gray-300 focus:outline-none"
          />
        </div>
      </div>

      {/* Navigation Links */}
      <nav className=" w-full border-dotted border-gray-500 justify-around border py-2 px-10 rounded-xl flex space-x-6">
        <a href="#about" className="hover:text-gray-300">About</a>
        <a href="#services" className="hover:text-gray-300">Services</a>
        <a href="#contact" className="hover:text-gray-300">Contact</a>
        <a href="#blog" className="hover:text-gray-300">Blog</a>
      </nav>
    </header>
  );
}

export default Header;
