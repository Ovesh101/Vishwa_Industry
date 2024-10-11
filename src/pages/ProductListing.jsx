import { useSearchParams } from "react-router-dom"; // Import useSearchParams for accessing URL parameters
import FadeInSection from "../components/FadeInSection";
import { useEffect, useState } from "react";
import { ProductCard } from "./ProductCard.js"; // Assuming this is an array of product data

const ProductListing = () => {
  const [searchParams] = useSearchParams(); // Use the hook to get search parameters
  const [filteredProducts, setFilteredProducts] = useState(ProductCard); // Assuming ProductCard is the product list

  // Function to filter products based on the search query
  const filterProducts = (query) => {
    if (!query) {
      setFilteredProducts(ProductCard); // If no query, return all products
      return;
    }
    const regex = new RegExp(query, "i"); // Case-insensitive regex
    const filtered = ProductCard.filter((product) => regex.test(product.title));
    setFilteredProducts(filtered);
  };

  useEffect(() => {
    const query = searchParams.get("query") || ""; // Get the search query from URL parameters
    console.log("Search Query:", query); // Log the search query
    filterProducts(query); // Filter products based on the query
  }, [searchParams]); // Re-run the effect whenever the search parameters change

  return (
    <div className="bg-midnight p-2 text-white">
    {/* Check if filteredProducts is empty */}
    {filteredProducts.length === 0 ? (
      <div className="text-center h-screen bg-midnight p-5">
        <h2 className="text-[24px] font-[500]">No products available</h2>
      </div>
    ) : (
      <div className="grid grid-cols-1 place-items-center  md:p-5 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {filteredProducts.map((card, index) => (
          <FadeInSection key={card.id} delay={150 + index * 80}>
            <div className="relative w-full h-full rounded-[30px] overflow-hidden">
              {/* Image */}
              <div className="w-full bg-espresso rounded-[30px] px-2 pt-2 pb-6">
                <img
                  src={card.image}
                  alt={card.title}
                  className="object-contain rounded-[25px] w-full" // Ensure the image fits within the container
                />
                <div className="flex gap-3 justify-start items-end ml-2 mt-4">
                  <h1 className="text-[18px] font-[500]">{card.id}.</h1>
                  <h2 className="text-[18px] font-[500]">{card.title}</h2>
                </div>
              </div>
            </div>
          </FadeInSection>
        ))}
      </div>
    )}
  </div>
  
  );
};

export default ProductListing;
