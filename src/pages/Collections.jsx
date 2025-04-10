import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import products from "../assets/products"; // Import the products array
import ProductGrid from "../components/ProductGrid"; // Import the reusable ProductGrid component
import SectionLinks from "../components/SectionLinks"; // Import the reusable SectionLinks component

const Collections = () => {
    const location = useLocation(); // Hook to access the current location
    const queryParams = new URLSearchParams(location.search); // Parse query parameters
    const searchQuery = queryParams.get("search") || ""; // Get the 'search' query parameter

    const [isLoading, setIsLoading] = useState(true); // State to simulate loading

    // Simulate a loading delay
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 750); // Simulate 750ms of loading
        return () => clearTimeout(timer);
    }, []);

    // Filter products based on the search query and keywords
    const filteredProducts = products.filter((product) =>
        product.keywords.some((keyword) =>
            keyword.toLowerCase().includes(searchQuery.toLowerCase())
        )
    );

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-700 dark:text-gray-200">
            <h1 className="text-3xl font-bold mb-6 text-center">
                Search Results for "{searchQuery}"
            </h1>

            {filteredProducts.length === 0 && !isLoading ? (
                <div className="text-center">
                    <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
                        No results found for "{searchQuery}". Please try a different search term or explore our sections below:
                    </p>
                    <SectionLinks /> {/* Use the reusable SectionLinks component */}
                </div>
            ) : (
                <ProductGrid
                    products={filteredProducts}
                    isLoading={isLoading}
                    title={`Results (${filteredProducts.length})`} // Add count to the title
                />
            )}
        </div>
    );
};

export default Collections;