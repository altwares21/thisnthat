import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SectionLinks from "../components/SectionLinks"; // Import the reusable SectionLinks component
import products from "../assets/products"; // Import the products array

const Home = () => {
    const [isLoading, setIsLoading] = useState(true);

    // IDs of the products to display in each section
    const apparelProductIds = [1, 2, 15]; // IDs for Apparel section
    const figureProductIds = [42, 43, 44]; // IDs for Figures section
    const accessoriesProductIds = [52, 64, 90]; // IDs for Accessories section

    // Fetch the selected products based on IDs
    const selectedApparelProducts = apparelProductIds.map((id) =>
        products.find((product) => product.id === id)
    );
    const selectedFigureProducts = figureProductIds.map((id) =>
        products.find((product) => product.id === id)
    );
    const selectedAccessoriesProducts = accessoriesProductIds.map((id) =>
        products.find((product) => product.id === id)
    );

    // Simulate a loading delay
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 750); // Simulate 750ms of loading
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            {/* Section Links */}
            {isLoading ? (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-4xl px-4 mt-8">
                    {Array(3)
                        .fill(0)
                        .map((_, index) => (
                            <div
                                key={index}
                                className="w-40 h-40 bg-gray-300 animate-pulse rounded-lg mx-auto"
                            ></div>
                        ))}
                </div>
            ) : (
                <SectionLinks />
            )}

            {/* Apparel Product Links */}
            <div className="w-full max-w-4xl px-4 mt-12">
                <h2 className="text-2xl font-bold mb-4 text-center text-black-600">
                    {isLoading ? (
                        <div className="w-40 h-8 bg-gray-300 animate-pulse mx-auto rounded"></div>
                    ) : (
                        "Apparel"
                    )}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {isLoading
                        ? Array(3)
                              .fill(0)
                              .map((_, index) => (
                                  <div key={index} className="relative group">
                                      <div className="w-64 h-64 bg-gray-300 animate-pulse rounded-lg mx-auto"></div>
                                      <div className="text-center mt-2">
                                          <div className="w-32 h-4 bg-gray-300 animate-pulse mx-auto rounded"></div>
                                          <div className="w-20 h-4 bg-gray-300 animate-pulse mx-auto rounded mt-2"></div>
                                      </div>
                                  </div>
                              ))
                        : selectedApparelProducts.map((product) => (
                              <div key={product.id} className="relative group">
                                  <Link to={`/product/${product.id}`}>
                                      <div className="relative w-64 h-64 mx-auto">
                                          <img
                                              src={product.images[0]}
                                              alt={product.name}
                                              className="w-full h-full object-cover rounded-lg shadow-lg"
                                          />
                                      </div>
                                  </Link>
                                  <div className="text-center mt-2">
                                      <span className="text-lg font-bold">{product.name}</span>
                                      <p className="text-gray-600">
                                          ${product.price.toFixed(2)}
                                      </p>
                                  </div>
                              </div>
                          ))}
                </div>
            </div>

            {/* Accessories Product Links */}
            <div className="w-full max-w-4xl px-4 mt-12">
                <h2 className="text-2xl font-bold mb-4 text-center text-black-600">
                    {isLoading ? (
                        <div className="w-40 h-8 bg-gray-300 animate-pulse mx-auto rounded"></div>
                    ) : (
                        "Accessories"
                    )}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {isLoading
                        ? Array(3)
                              .fill(0)
                              .map((_, index) => (
                                  <div key={index} className="relative group">
                                      <div className="w-64 h-64 bg-gray-300 animate-pulse rounded-lg mx-auto"></div>
                                      <div className="text-center mt-2">
                                          <div className="w-32 h-4 bg-gray-300 animate-pulse mx-auto rounded"></div>
                                          <div className="w-20 h-4 bg-gray-300 animate-pulse mx-auto rounded mt-2"></div>
                                      </div>
                                  </div>
                              ))
                        : selectedAccessoriesProducts.map((product) => (
                              <div key={product.id} className="relative group">
                                  <Link to={`/product/${product.id}`}>
                                      <div className="relative w-64 h-64 mx-auto">
                                          <img
                                              src={product.images[0]}
                                              alt={product.name}
                                              className="w-full h-full object-cover rounded-lg shadow-lg"
                                          />
                                      </div>
                                  </Link>
                                  <div className="text-center mt-2">
                                      <span className="text-lg font-bold">{product.name}</span>
                                      <p className="text-gray-600">
                                          ${product.price.toFixed(2)}
                                      </p>
                                  </div>
                              </div>
                          ))}
                </div>
            </div>

            {/* Figures Product Links */}
            <div className="w-full max-w-4xl px-4 mt-12">
                <h2 className="text-2xl font-bold mb-4 text-center text-black-600">
                    {isLoading ? (
                        <div className="w-40 h-8 bg-gray-300 animate-pulse mx-auto rounded"></div>
                    ) : (
                        "Figures"
                    )}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {isLoading
                        ? Array(3)
                              .fill(0)
                              .map((_, index) => (
                                  <div key={index} className="relative group">
                                      <div className="w-64 h-64 bg-gray-300 animate-pulse rounded-lg mx-auto"></div>
                                      <div className="text-center mt-2">
                                          <div className="w-32 h-4 bg-gray-300 animate-pulse mx-auto rounded"></div>
                                          <div className="w-20 h-4 bg-gray-300 animate-pulse mx-auto rounded mt-2"></div>
                                      </div>
                                  </div>
                              ))
                        : selectedFigureProducts.map((product) => (
                              <div key={product.id} className="relative group">
                                  <Link to={`/product/${product.id}`}>
                                      <div className="relative w-64 h-64 mx-auto">
                                          <img
                                              src={product.images[0]}
                                              alt={product.name}
                                              className="w-full h-full object-cover rounded-lg shadow-lg"
                                          />
                                      </div>
                                  </Link>
                                  <div className="text-center mt-2">
                                      <span className="text-lg font-bold">{product.name}</span>
                                      <p className="text-gray-600">
                                          ${product.price.toFixed(2)}
                                      </p>
                                  </div>
                              </div>
                          ))}
                </div>
            </div>
        </div>
    );
};

export default Home;