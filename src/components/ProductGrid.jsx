import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ProductGrid = ({ products, isLoading, title }) => {
    // State to manage the number of products displayed
    const [visibleCount, setVisibleCount] = useState(6);

    // Function to load more products
    const handleLoadMore = () => {
        setVisibleCount((prevCount) => prevCount + 6);
    };

    return (
        <div className="w-full max-w-4xl px-4 mt-12 mx-auto">
            {/* Section Title */}
            <h2 className="text-2xl font-bold mb-4 text-center text-black-600">
                {isLoading ? (
                    <div className="w-40 h-8 bg-gray-300 animate-pulse mx-auto rounded"></div>
                ) : (
                    title
                )}
            </h2>

            {/* Product Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {isLoading
                    ? Array(6) // Show 6 skeleton loaders during loading
                          .fill(0)
                          .map((_, index) => (
                              <div key={index} className="relative group">
                                  {/* Skeleton for image */}
                                  <div className="w-full h-48 sm:h-48 md:h-64 bg-gray-300 animate-pulse rounded-lg"></div>
                                  <div className="text-center mt-2">
                                      {/* Skeleton for product name */}
                                      <div className="w-32 h-4 bg-gray-300 animate-pulse mx-auto rounded"></div>
                                      {/* Skeleton for product price */}
                                      <div className="w-20 h-4 bg-gray-300 animate-pulse mx-auto rounded mt-2"></div>
                                  </div>
                              </div>
                          ))
                    : products.slice(0, visibleCount).map((product) => (
                          <div key={product.id} className="relative group">
                              <Link to={`/product/${product.id}`}>
                                  <div className="relative w-full h-48 sm:h-48 md:h-64">
                                      <img
                                          src={product.images[0]}
                                          alt={product.name}
                                          className="w-full h-full object-cover rounded-lg shadow-lg"
                                      />
                                  </div>
                              </Link>
                              <div className="text-center mt-2">
                                  <span className="text-lg font-bold">{product.name}</span>
                                  <p className="text-gray-600">${product.price.toFixed(2)}</p>
                              </div>
                          </div>
                      ))}
            </div>

            {/* View More Button */}
            {!isLoading && visibleCount < products.length && (
                <div className="text-center mt-6">
                    <button
                        onClick={handleLoadMore}
                        className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600"
                    >
                        View More
                    </button>
                </div>
            )}
        </div>
    );
};

export default ProductGrid;