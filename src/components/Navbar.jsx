import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-orange-500 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-lg font-bold">
                    thisNThatMixUpShop
                </div>
                <div className="space-x-4">
                    <Link to="/" className="text-white hover:text-orange-200">Home</Link>
                    <Link to="/apparel" className="text-white hover:text-orange-200">Apparel</Link>
                    <Link to="/accessories" className="text-white hover:text-orange-200">Accessories</Link>
                    <Link to="/figures" className="text-white hover:text-orange-200">Figures</Link>
                    <Link to="/collections" className="text-white hover:text-orange-200">Collections</Link>
                    <Link to="/about-us" className="text-white hover:text-orange-200">About Us</Link>
                    <Link to="/cart" className="text-white hover:text-orange-200">Cart</Link>
                    <Link to="/checkout" className="text-white hover:text-orange-200">Checkout</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;