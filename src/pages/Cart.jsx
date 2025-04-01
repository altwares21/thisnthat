import React from 'react';

const Cart = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
            <p className="mb-4">Here you can review the items you have added to your cart.</p>
            {/* Cart items will be displayed here */}
            <div className="border-t mt-4 pt-4">
                <h2 className="text-xl font-semibold">Items in your cart:</h2>
                {/* Example item */}
                <div className="flex justify-between items-center border-b py-2">
                </div>
                {/* More items can be added here */}
            </div>
            <div className="mt-4">
                <button className="bg-blue-500 text-white px-4 py-2 rounded">Proceed to Checkout</button>
            </div>
        </div>
    );
};

export default Cart;