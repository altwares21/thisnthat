import React from 'react';
import { Link } from 'react-router-dom';
import products from '../assets/products';

const Home = () => {
    // Get specific products by their IDs
    const apparelProductIds = [1, 2, 15]; // IDs of the products to display in the Apparel section
    const figureProductIds = [42, 43, 44]; // IDs of the products to display in the Figures section
    const accessoriesProductIds = [52, 64, 90]; // IDs of the products to display in the Accessories section

    const selectedApparelProducts = apparelProductIds.map(id => products.find(product => product.id === id));
    const selectedFigureProducts = figureProductIds.map(id => products.find(product => product.id === id));
    const selectedAccessoriesProducts = accessoriesProductIds.map(id => products.find(product => product.id === id));

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
          
            {/* Apparel Section */}
            <section className="mt-16 w-full px-4">
                <h2 className="text-2xl font-bold text-center text-orange-500">Featured Apparel</h2>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {selectedApparelProducts.map(product => (
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
                                <p className="text-gray-600">${product.price.toFixed(2)}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Figures Section */}
            <section className="mt-16 w-full px-4">
                <h2 className="text-2xl font-bold text-center text-blue-500">Featured Figures</h2>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {selectedFigureProducts.map(product => (
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
                                <p className="text-gray-600">${product.price.toFixed(2)}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Accessories Section */}
            <section className="mt-16 w-full px-4">
                <h2 className="text-2xl font-bold text-center text-green-500">Featured Accessories</h2>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {selectedAccessoriesProducts.map(product => (
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
                                <p className="text-gray-600">${product.price.toFixed(2)}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Home;