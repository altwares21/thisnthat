import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
    const { cartItems } = useContext(CartContext);

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
            {cartItems.length === 0 ? (
                <p className="text-gray-600">Your cart is empty.</p>
            ) : (
                <div className="space-y-4">
                    {cartItems.map((item, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-between border-b pb-4"
                        >
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-16 h-16 object-cover rounded"
                            />
                            <div className="flex-1 ml-4">
                                <h2 className="text-lg font-bold">{item.name}</h2>
                                {item.size && (
                                    <p className="text-gray-600">Size: {item.size}</p>
                                )}
                                <p className="text-gray-600">Quantity: {item.quantity}</p>
                                <p className="text-orange-500 font-bold">
                                    ${item.price.toFixed(2)}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Cart;