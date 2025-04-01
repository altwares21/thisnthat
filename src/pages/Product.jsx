import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
import products from '../assets/products'; // Import the products data

const Product = () => {
    const { id } = useParams(); // Get the product ID from the URL
    const [isLoading, setIsLoading] = useState(true); // Loading state
    const [quantity, setQuantity] = useState(1); // State for quantity
    const [selectedSize, setSelectedSize] = useState(''); // State for selected size

    const product = products.find((product) => product.id === parseInt(id)); // Find the product by ID

    useEffect(() => {
        // Simulate a loading delay
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 750); // Simulate 750ms of loading
        return () => clearTimeout(timer);
    }, []);

    if (!product && !isLoading) {
        return <div className="text-center mt-12">Product not found</div>;
    }

    // Determine available sizes based on category
    let availableSizes = [];
    if (product?.category === 'Apparel') {
        availableSizes = ['Small', 'Medium', 'Large', 'XL', '2XL', '3XL'];
    } else if (product?.category === 'Dry Fit') {
        availableSizes = ['XS', 'Small', 'Medium', 'Large', 'XL', '2XL', '3XL', '4XL', '5XL'];
    }

    // Handle quantity adjustment
    const handleQuantityChange = (type) => {
        setQuantity((prevQuantity) =>
            type === 'increment' ? prevQuantity + 1 : Math.max(1, prevQuantity - 1)
        );
    };

    return (
        <div className="w-full max-w-4xl px-4 mt-12 mx-auto">
            {/* Product Name */}
            <h1 className="text-3xl font-bold mb-4 text-center">
                {isLoading ? (
                    <div className="w-48 h-8 bg-gray-300 animate-pulse mx-auto rounded"></div>
                ) : (
                    product.name
                )}
            </h1>

            <div className="flex flex-col md:flex-row items-center md:items-start">
                {/* Image Carousel */}
                <div className="w-full md:w-1/2">
                    {isLoading ? (
                        <div className="w-full h-[400px] bg-gray-300 animate-pulse rounded-lg"></div>
                    ) : (
                        <Carousel
                            showThumbs={product.images.length > 1} // Only show thumbnails if there are multiple images
                            infiniteLoop={true}
                            showStatus={false}
                            dynamicHeight={false}
                            thumbWidth={80} // Set thumbnail width
                            renderThumbs={() =>
                                product.images.length > 1 &&
                                product.images.map((image, index) => (
                                    <img
                                        key={index}
                                        src={image}
                                        alt={`Thumbnail ${index + 1}`}
                                        className="h-[100px] object-cover rounded-lg" // Thumbnail height
                                    />
                                ))
                            }
                        >
                            {product.images.map((image, index) => (
                                <div key={index}>
                                    <img
                                        src={image}
                                        alt={`${product.name} - ${index + 1}`}
                                        className="w-full h-[400px] object-contain rounded-lg" // Main image height
                                    />
                                </div>
                            ))}
                        </Carousel>
                    )}
                </div>

                <div className="md:ml-8 mt-4 md:mt-0">
                    {/* Product Description */}
                    <p className="text-lg text-gray-700 mb-4">
                        {isLoading ? (
                            <div className="w-full h-6 bg-gray-300 animate-pulse rounded"></div>
                        ) : (
                            product.description
                        )}
                    </p>

                    {/* Product Price */}
                    <p className="text-xl font-bold text-orange-500 mb-4">
                        {isLoading ? (
                            <div className="w-24 h-6 bg-gray-300 animate-pulse rounded"></div>
                        ) : (
                            `$${product.price.toFixed(2)}`
                        )}
                    </p>

                    {/* Sizes Dropdown */}
                    {availableSizes.length > 0 && (
                        <div className="mb-4">
                            <label htmlFor="size" className="block text-gray-700 font-bold mb-2">
                                {isLoading ? (
                                    <div className="w-32 h-4 bg-gray-300 animate-pulse rounded"></div>
                                ) : (
                                    'Select Size:'
                                )}
                            </label>
                            {isLoading ? (
                                <div className="w-full h-10 bg-gray-300 animate-pulse rounded"></div>
                            ) : (
                                <select
                                    id="size"
                                    value={selectedSize}
                                    onChange={(e) => setSelectedSize(e.target.value)}
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300"
                                >
                                    <option value="">Select a size</option>
                                    {availableSizes.map((size) => (
                                        <option key={size} value={size}>
                                            {size}
                                        </option>
                                    ))}
                                </select>
                            )}
                        </div>
                    )}

                    {/* Quantity Input */}
                    <div className="flex items-center mb-4">
                        {isLoading ? (
                            <div className="w-full h-10 bg-gray-300 animate-pulse rounded"></div>
                        ) : (
                            <>
                                <button
                                    onClick={() => handleQuantityChange('decrement')}
                                    className="px-4 py-2 bg-gray-300 text-gray-700 rounded-l-lg focus:outline-none"
                                >
                                    -
                                </button>
                                <input
                                    type="text"
                                    value={quantity}
                                    readOnly
                                    className="w-12 text-center border-t border-b border-gray-300 focus:outline-none"
                                />
                                <button
                                    onClick={() => handleQuantityChange('increment')}
                                    className="px-4 py-2 bg-gray-300 text-gray-700 rounded-r-lg focus:outline-none"
                                >
                                    +
                                </button>
                            </>
                        )}
                    </div>

                    {/* Add to Cart Button */}
                    {isLoading ? (
                        <div className="w-full h-10 bg-gray-300 animate-pulse rounded"></div>
                    ) : (
                        <button className="w-full bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600">
                            Add to Cart
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Product;