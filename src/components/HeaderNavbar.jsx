import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa'; // Import a search icon from react-icons
import logo from '../assets/images/logo.png'; // Import the logo image

const HeaderNavbar = () => {
    return (
        <header className="bg-orange-500">
            {/* Navbar Section */}
            <nav className="p-4">
                <div className="container mx-auto flex justify-between items-center">
                    {/* Logo on the left */}
                    <div className="flex items-center space-x-2">
                        <img src={logo} alt="Logo" className="h-10" />
                        <span className="text-white text-lg font-bold">thisNThatMixUpShop</span>
                    </div>

                    {/* Hyperlinks in the center */}
                    <div className="flex-1 flex justify-center space-x-4">
                        <Link to="/" className="text-white hover:text-orange-200">Home</Link>
                        <Link to="/apparel" className="text-white hover:text-orange-200">Apparel</Link>
                        <Link to="/accessories" className="text-white hover:text-orange-200">Accessories</Link>
                        <Link to="/figures" className="text-white hover:text-orange-200">Figures</Link>
                        <Link to="/collections" className="text-white hover:text-orange-200">Collections</Link>
                        <Link to="/about-us" className="text-white hover:text-orange-200">About Us</Link>
                        <Link to="/cart" className="text-white hover:text-orange-200">Cart</Link>
                        <Link to="/checkout" className="text-white hover:text-orange-200">Checkout</Link>
                    </div>

                    {/* Search bar with icon on the right */}
                    <div className="flex items-center space-x-2">
                        <input
                            type="text"
                            placeholder="Looking for something?"
                            className="px-4 py-2 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-300"
                        />
                        <FaSearch className="text-white h-5 w-5 cursor-pointer" />
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default HeaderNavbar;