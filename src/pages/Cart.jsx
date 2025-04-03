import React, { useState, useEffect } from 'react';
import { useCart } from 'react-use-cart';
import { Link } from 'react-router-dom';
import SectionLinks from '../components/SectionLinks'; // Import the reusable SectionLinks component

const Cart = () => {
    const {
        items,
        updateItemQuantity,
        removeItem,
        emptyCart,
        cartTotal,
    } = useCart();

    const [isLoading, setIsLoading] = useState(true); // Loading state

    useEffect(() => {
        // Simulate a loading delay
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 750); // Simulate 750ms of loading
        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        // Skeleton loader while loading
        return (
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-6 text-center">Shopping Cart</h1>
                <div className="space-y-6">
                    {Array.from({ length: 3 }).map((_, index) => (
                        <div
                            key={index}
                            className="flex items-center bg-gray-200 shadow-md rounded-lg p-4 animate-pulse"
                        >
                            {/* Skeleton for Product Image */}
                            <div className="w-32 h-32 bg-gray-300 rounded-lg mr-4"></div>

                            {/* Skeleton for Product Details */}
                            <div className="flex-1 space-y-4">
                                <div className="h-6 bg-gray-300 rounded w-3/4"></div>
                                <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                                <div className="h-4 bg-gray-300 rounded w-1/4"></div>
                                <div className="flex space-x-4 mt-4">
                                    <div className="h-8 w-8 bg-gray-300 rounded"></div>
                                    <div className="h-8 w-8 bg-gray-300 rounded"></div>
                                    <div className="h-8 w-8 bg-gray-300 rounded"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6 text-center">Shopping Cart</h1>
            {items.length === 0 ? (
                <>
                    <p className="text-gray-600 text-center mb-6">
                        Your cart is empty. Why don't you fill it up with something?
                    </p>
                    {/* Use the reusable SectionLinks component */}
                    <SectionLinks />
                </>
            ) : (
                <div className="space-y-6">
                    {items.map((item) => (
                        <div
                            key={`${item.id}-${item.size || 'default'}`} // Include size in the key
                            className="flex items-center bg-white shadow-md rounded-lg p-4"
                        >
                            {/* Product Image (Link to Product Info Page) */}
                            <Link to={`/product/${item.id}`} className="w-32 h-32 mr-4">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-full object-cover rounded-lg"
                                />
                            </Link>

                            {/* Product Details */}
                            <div className="flex-1 text-left">
                                {/* Product Title (Link to Product Info Page) */}
                                <Link to={`/product/${item.id}`}>
                                    <h2 className="text-lg font-bold text-black hover:underline">
                                        {item.name}
                                    </h2>
                                </Link>
                                {item.size && (
                                    <p className="text-sm text-gray-600">Size: {item.size}</p>
                                )}
                                <p className="text-sm text-gray-600">Price: ${item.price.toFixed(2)}</p>

                                {/* Quantity Controls */}
                                <div className="mt-4 flex items-center space-x-4">
                                    {/* Decrement Button */}
                                    <button
                                        onClick={() =>
                                            updateItemQuantity(item.id, Math.max(1, item.quantity - 1)) // Use item.id directly
                                        }
                                        className="bg-gray-300 text-gray-700 px-2 py-1 rounded-lg hover:bg-gray-400"
                                    >
                                        -
                                    </button>

                                    {/* Display Quantity */}
                                    <span className="text-lg font-bold">{item.quantity}</span>

                                    {/* Increment Button */}
                                    <button
                                        onClick={() =>
                                            updateItemQuantity(item.id, item.quantity + 1) // Use item.id directly
                                        }
                                        className="bg-gray-300 text-gray-700 px-2 py-1 rounded-lg hover:bg-gray-400"
                                    >
                                        +
                                    </button>
                                </div>

                                {/* Remove Button */}
                                <button
                                    onClick={() => removeItem(item.id)} // Use item.id directly
                                    className="mt-2 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))}

                    {/* Cart Total */}
                    <div className="flex justify-between items-center bg-white shadow-md rounded-lg p-4">
                        <h2 className="text-xl font-bold">Total:</h2>
                        <p className="text-xl font-bold text-orange-500">
                            ${cartTotal.toFixed(2)}
                        </p>
                    </div>

                    {/* Clear Cart Button */}
                    <div className="text-center">
                        <button
                            onClick={emptyCart}
                            className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600"
                        >
                            Clear Cart
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;