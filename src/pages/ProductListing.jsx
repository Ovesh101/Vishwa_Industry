import { LucideSearch } from "lucide-react"; // Assuming you're using Lucide icons
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useState } from "react";

import MobileNav from "../components/MobileNav";

// Custom debounce function
const debounce = (func, delay) => {
  let timeout;
  return (...args) => {
    if (timeout) clearTimeout(timeout); // Clear any existing timeout
    timeout = setTimeout(() => {
      func(...args); // Call the function after the delay
    }, delay);
  };
};

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  // Debounced function to update the search query in URL params
  const debouncedUpdateQuery = debounce((query) => {
    setSearchParams({ query }); // Set the query parameter in the URL
  }, 300); // Debounce delay of 300ms

  const handleInputChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    // Update the search query in URL if on the product_listing page
    if (window.location.pathname === "/product_listing") {
      debouncedUpdateQuery(query);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      if (window.location.pathname !== "/product_listing") {
        // Navigate to the product listing page with the search query
        navigate(`/product_listing?query=${encodeURIComponent(searchQuery)}`);
      }
    }
  };

  return (
    <header className="bg-midnight text-gray-300 px-3 py-2 md:py-4">
      <div className="flex justify-between items-center gap-4 flex-wrap">
        {/* Logo */}
        <Link
          to="/"
          className="w-[161px] h-[60px] flex-shrink-0"
        >
          <img
            src="/Images/Logo.svg"
            alt="Logo"
            className="w-full h-full object-contain"
          />
        </Link>

        {/* Search Form */}
        <form onSubmit={handleSearch}>
          <div className="relative">
            <span className="absolute font-[500] left-4 top-1/2 transform -translate-y-1/2">
              <LucideSearch className="h-[16px] w-[16px]" />
            </span>
            <input
              type="text"
              placeholder="SEARCH..."
              value={searchQuery}
              onChange={handleInputChange} // Update the query
              className="w-full py-2 text-[14px] md:text-[16px] font-[500] placeholder-[#454545] px-10 bg-transparent border border-gray-500 border-dashed rounded-xl text-[#F8F4F1] focus:outline-none"
            />
          </div>
        </form>

        {/* Navigation Links */}
        <MobileNav />
        <Navigation />
      </div>
    </header>
  );
};

// Navigation Component
const Navigation = () => (
  <nav className="hidden sm:flex font-[500] border-dashed text-[#F8F4F1] border-[#A5A3A2] justify-around border h-[50px] md:h-[60px] py-2 px-4 md:py-4 md:px-10 rounded-xl space-x-6">
    <Link to="/" className="hover:text-[#A5A3A2]">Home</Link>
    <Link to="/about" className="hover:text-[#A5A3A2]">About</Link>
    <Link to="/product_listing" className="hover:text-[#A5A3A2]">Products</Link>
    <Link to="/contact" className="hover:text-[#A5A3A2]">Contact</Link>
  </nav>
);

export default Header;
