import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import products from '../assets/products';
import apparelImage from '../assets/products/Apparel/hxh-tee.jpg';
import accessoriesImage from '../assets/products/Keychains/goku-keychain.jpg';
import figuresImage from '../assets/products/Figures/luffy-funko.jpg';

const Home = () => {
    // State to simulate loading
    const [isLoading, setIsLoading] = useState(true);

    // Simulate a loading delay
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 750); // Simulate 1 second of loading
        return () => clearTimeout(timer);
    }, []);

    // Get specific products by their IDs
    const apparelProductIds = [1, 2, 15]; // IDs of the products to display in the Apparel section
    const figureProductIds = [42, 43, 44]; // IDs of the products to display in the Figures section
    const accessoriesProductIds = [52, 64, 90]; // IDs of the products to display in the Accessories section

    const selectedApparelProducts = apparelProductIds.map(id => products.find(product => product.id === id));
    const selectedFigureProducts = figureProductIds.map(id => products.find(product => product.id === id));
    const selectedAccessoriesProducts = accessoriesProductIds.map(id => products.find(product => product.id === id));

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">

            {/* Section Links */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-4xl px-4 mt-8">
                {isLoading ? (
                    // Skeleton loaders for section links
                    Array(3)
                        .fill(0)
                        .map((_, index) => (
                            <div
                                key={index}
                                className="w-40 h-40 bg-gray-300 animate-pulse rounded-lg mx-auto"
                            ></div>
                        ))
                ) : (
                    <>
                        {/* Apparel Section */}
                        <Link to="/apparel" className="relative group">
                            <div className="relative w-40 h-40 mx-auto">
                                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
                                    <span className="text-white text-lg font-bold">Apparel</span>
                                </div>
                                <img
                                    src={apparelImage}
                                    alt="Apparel"
                                    className="w-full h-full object-cover rounded-lg shadow-lg"
                                />
                            </div>
                        </Link>

                        {/* Accessories Section */}
                        <Link to="/accessories" className="relative group">
                            <div className="relative w-40 h-40 mx-auto">
                                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
                                    <span className="text-white text-lg font-bold">Accessories</span>
                                </div>
                                <img
                                    src={accessoriesImage}
                                    alt="Accessories"
                                    className="w-full h-full object-cover rounded-lg shadow-lg"
                                />
                            </div>
                        </Link>

                        {/* Figures Section */}
                        <Link to="/figures" className="relative group">
                            <div className="relative w-40 h-40 mx-auto">
                                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
                                    <span className="text-white text-lg font-bold">Figures</span>
                                </div>
                                <img
                                    src={figuresImage}
                                    alt="Figures"
                                    className="w-full h-full object-cover rounded-lg shadow-lg"
                                />
                            </div>
                        </Link>
                    </>
                )}
            </div>
            
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