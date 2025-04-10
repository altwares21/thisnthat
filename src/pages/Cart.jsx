import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../slices/cartSlice";
import SectionLinks from "../components/SectionLinks"; // Import the reusable SectionLinks component
import { Link, useNavigate } from "react-router-dom"; // Import Link and useNavigate from react-router-dom

const Cart = () => {
    const cart = useSelector((state) => state.cart); // Access the cart state
    const dispatch = useDispatch();
    const navigate = useNavigate(); // Initialize navigate

    const handleRemove = (id) => {
        dispatch(removeFromCart({ id })); // Dispatch the removeFromCart action
    };

    const handleQuantityChange = (id, quantity) => {
        if (quantity > 0) {
            dispatch(updateQuantity({ id, quantity })); // Dispatch the updateQuantity action
        }
    };

    // Calculate the total price of all items in the cart
    const cartTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    if (cart.length === 0) {
        return (
            <div className="text-center mt-12">
                <h1 className="text-3xl font-bold mb-4">Your cart is empty</h1>
                <p className="text-gray-600 mb-6">
                    Why not explore our collections and add something to your cart?
                </p>
                <div className="flex justify-center space-x-4">
                    <SectionLinks />
                </div>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8">
            {/* Cart Total for Small Screens */}
            <div className="block lg:hidden text-center mb-6">
                <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200">Cart Total: ${cartTotal.toFixed(2)}</h2>
            </div>

            <h1 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-gray-200">Shopping Cart</h1>

            <div className="flex flex-col lg:flex-row lg:space-x-8">
                {/* Cart Items */}
                <div className="flex-1 space-y-6">
                    {cart.map((item) => (
                        <div
                            key={item.id}
                            className="flex items-center bg-white dark:bg-gray-800 shadow-md rounded-lg p-4"
                        >
                            {/* Product Image as a Link */}
                            <Link to={`/product/${item.id}`} className="mr-4">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-32 h-32 object-cover rounded-lg"
                                />
                            </Link>

                            <div className="flex-1">
                                {/* Product Name as a Link */}
                                <Link to={`/product/${item.id}`}>
                                    <h2 className="text-lg font-bold text-gray-800 dark:text-gray-200 hover:underline">
                                        {item.name}
                                    </h2>
                                </Link>
                                {item.size && (
                                    <p className="text-sm text-gray-600 dark:text-gray-400">Size: {item.size}</p>
                                )}
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Price: ${item.price.toFixed(2)}
                                </p>

                                {/* Quantity and Remove Button Section */}
                                <div className="mt-4 flex flex-col items-start space-y-2 sm:space-y-0 sm:flex-row sm:items-center sm:space-x-4">
                                    {/* Quantity Controls */}
                                    <div className="flex items-center space-x-4">
                                        {/* Decrease Quantity or Remove Button */}
                                        {item.quantity > 1 ? (
                                            <button
                                                onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                                                className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-lg hover:bg-gray-400 dark:hover:bg-gray-600"
                                            >
                                                -
                                            </button>
                                        ) : (
                                            <button
                                                onClick={() => handleRemove(item.id)}
                                                className="bg-gray-300 dark:bg-gray-700 text-white px-2 py-1 rounded-lg hover:bg-red-600"
                                            >
                                                🗑️
                                            </button>
                                        )}

                                        {/* Display Quantity */}
                                        <span className="text-lg font-bold text-gray-800 dark:text-gray-200">
                                            {item.quantity}
                                        </span>

                                        {/* Increase Quantity Button */}
                                        <button
                                            onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                                            className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-lg hover:bg-gray-400 dark:hover:bg-gray-600"
                                        >
                                            +
                                        </button>
                                    </div>

                                    {/* Remove Button */}
                                    <button
                                        onClick={() => handleRemove(item.id)}
                                        className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 text-base"
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Cart Total for Large Screens */}
                <div className="hidden lg:block bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 w-64">
                    <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200">Cart Total</h2>
                    <p className="text-lg font-bold text-gray-800 dark:text-gray-200">${cartTotal.toFixed(2)}</p>
                </div>
            </div>

            {/* Checkout Button */}
            <div className="text-center mt-8">
                <button
                    onClick={() => navigate("/checkout")} // Navigate to the checkout page
                    className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600"
                >
                    Proceed to Checkout
                </button>
            </div>
        </div>
    );
};

export default Cart;