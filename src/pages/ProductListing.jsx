import { useSearchParams } from "react-router-dom"; // Import useSearchParams for accessing URL parameters
import FadeInSection from "../components/FadeInSection";
import { ProductCard } from "./ProductCard";
import { useEffect, useState } from "react";

const ProductListing = () => {
  const [searchParams] = useSearchParams(); // Use the hook to get search parameters
  const [filteredProducts, setFilteredProducts] = useState(ProductCard);

  // Function to filter products based on the search query
  const filterProducts = (query) => {
    if (!query) {
      setFilteredProducts(ProductCard); // If no query, return all products
      return;
    }
    const regex = new RegExp(query, "i"); // Case-insensitive regex
    const filtered = ProductCard.filter((card) => regex.test(card.title));
    setFilteredProducts(filtered);
  };

  useEffect(() => {
    const query = searchParams.get("query") || ""; // Get the search query from URL parameters
    console.log("Search Query:", query); // Log the search query
    filterProducts(query); // Filter products based on the query
  }, [searchParams]); // Re-run the effect whenever the search parameters change

  return (
    <div className="bg-midnight p-2 text-white">
      <div className="grid grid-cols-1 place-items-center p-10 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProducts.map((card , index) => (
          <FadeInSection delay={150 + (index * 80)} key={card.id}>
            <div className="relative w-full h-full rounded-[30px] overflow-hidden">
              <img
                src={card.image}
                alt={card.title}
                className="object-contain" // Ensure the image is properly sized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-30" />
              <div className="absolute bottom-5 left-[40px] flex items-center justify-center z-10">
                <h2 className="text-[24px] font-[500]">{card.title}</h2>
              </div>
            </div>
          </FadeInSection>
        ))}
      </div>
    </div>
  );
};

export default ProductListing;
