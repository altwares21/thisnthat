import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";

const CartIcon = () => {
    const cart = useSelector((state) => state.cart); // Access the cart state
    const cartCount = cart.reduce((total, item) => total + item.quantity, 0); // Calculate total items

    return (
        <div className="relative flex items-center">
            <FaShoppingCart className="text-xl" />
            {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {cartCount}
                </span>
            )}
        </div>
    );
};

export default CartIcon;