import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../slices/cartSlice";
import SectionLinks from "../components/SectionLinks"; // Import the reusable SectionLinks component


const Cart = () => {
    const cart = useSelector((state) => state.cart); // Access the cart state
    const dispatch = useDispatch();

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
                <h2 className="text-xl font-bold">Cart Total: ${cartTotal.toFixed(2)}</h2>
            </div>

            <h1 className="text-3xl font-bold mb-6 text-center">Shopping Cart</h1>

            <div className="flex flex-col lg:flex-row lg:space-x-8">
                {/* Cart Items */}
                <div className="flex-1 space-y-6">
                    {cart.map((item) => (
                        <div key={item.id} className="flex items-center bg-white shadow-md rounded-lg p-4">
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-32 h-32 object-cover rounded-lg mr-4"
                            />
                            <div className="flex-1">
                                <h2 className="text-lg font-bold">{item.name}</h2>
                                {item.size && <p className="text-sm text-gray-600">Size: {item.size}</p>}
                                <p className="text-sm text-gray-600">Price: ${item.price.toFixed(2)}</p>
                                <div className="mt-4 flex items-center space-x-4">
                                    {/* Decrease Quantity Button */}
                                    <button
                                        onClick={() =>
                                            handleQuantityChange(item.id, item.quantity - 1)
                                        }
                                        className="bg-gray-300 text-gray-700 px-2 py-1 rounded-lg hover:bg-gray-400"
                                        disabled={item.quantity <= 1} // Disable if quantity is 1
                                    >
                                        -
                                    </button>

                                    {/* Display Quantity */}
                                    <span className="text-lg font-bold">{item.quantity}</span>

                                    {/* Increase Quantity Button */}
                                    <button
                                        onClick={() =>
                                            handleQuantityChange(item.id, item.quantity + 1)
                                        }
                                        className="bg-gray-300 text-gray-700 px-2 py-1 rounded-lg hover:bg-gray-400"
                                    >
                                        +
                                    </button>

                                    {/* Remove Button */}
                                    <button
                                        onClick={() => handleRemove(item.id)}
                                        className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Cart Total for Large Screens */}
                <div className="hidden lg:block bg-white shadow-md rounded-lg p-6 w-64">
                    <h2 className="text-xl font-bold mb-4">Cart Total</h2>
                    <p className="text-lg font-bold">${cartTotal.toFixed(2)}</p>
                </div>
            </div>
        </div>
    );
};

export default Cart;