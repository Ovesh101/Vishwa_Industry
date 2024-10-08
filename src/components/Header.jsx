import { LucideSearch } from "lucide-react"; // Assuming you're using Lucide icons
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Navigate to product listing page with the search query
      navigate(`/product_listing?query=${encodeURIComponent(searchQuery)}`);
      setSearchQuery("")
      
    }
  };

  return (
    <header className="bg-midnight text-gray-300 px-3">
      {/* Set up the grid layout */}
      <div className="grid grid-cols-[1.5fr_2fr] items-center gap-4">
        {/* Logo and Search Bar in the first column */}
        <div className="flex items-center space-x-4">
          {/* Logo */}
          <div className="border w-[130px] h-[60px] border-[#A5A3A2] py-4 px-6 border-dashed rounded-xl flex-shrink-0">
            <h1 className="text-[16px] text-[#F8F4F1] text-center font-[500]">Logo</h1>
          </div>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="mb-3 w-full h-[60px] pt-2">
            <div className="relative">
              <span className="absolute font-[500] left-4 top-1/2 transform -translate-y-1/2">
                <LucideSearch className="h-[16px] w-[16px]" />
              </span>
              <input
                type="text"
                placeholder="SEARCH..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)} // Update searchQuery on input change
                className="w-full py-4 text-[16px] font-[500] placeholder-[#454545] px-10 bg-transparent border border-gray-500 border-dashed rounded-xl text-[#F8F4F1] focus:outline-none"
              />
            </div>
          </form>
        </div>

        {/* Navigation Links */}
        <Navigation />
      </div>
    </header>
  );
};

// Navigation Component
const Navigation = () => (
  <nav className="font-[500] border-dashed text-[#F8F4F1] border-[#A5A3A2] justify-around border h-[60px] py-4 px-10 rounded-xl flex space-x-6">
    <Link to="/" className="hover:text-[#A5A3A2]">Home</Link>
    <Link to="/about" className="hover:text-[#A5A3A2]">About</Link>
    <Link to="/product_listing" className="hover:text-[#A5A3A2]">Products</Link>
    <Link to="/contact" className="hover:text-[#A5A3A2]">Contact</Link>
  </nav>
);

export default Header;
