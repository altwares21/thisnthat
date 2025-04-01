import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'; // Import useSelector to access the cart state
import logo from '../assets/images/logo.png'; // Import the logo
import { FaShoppingCart, FaSearch } from 'react-icons/fa'; // Import cart and search icons

const HeaderNavbar = () => {
    const [menuOpen, setMenuOpen] = useState(false); // State to toggle the hamburger menu
    const cartItems = useSelector((state) => state.cart); // Access the cart state from Redux
    const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0); // Calculate total quantity

    return (
        <header className="bg-orange-500 text-white sticky top-0 z-50">
            <div className="container mx-auto flex items-center justify-between py-2 px-6">
                {/* Hamburger Menu Button (Visible on small screens) */}
                <button
                    className="sm:hidden text-white text-2xl focus:outline-none"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    ☰
                </button>

                {/* Logo */}
                <Link to="/" className="flex items-center mx-auto sm:mx-0">
                    <img src={logo} alt="This N That Mix Up Shop Logo" className="h-12" />
                </Link>

                {/* Search Bar (Visible on small screens) */}
                <div className="sm:hidden flex items-center">
                    <button className="text-white">
                        <FaSearch />
                    </button>
                </div>

                {/* Navigation Links and Search Bar (Visible on large screens) */}
                <div className="hidden sm:flex items-center justify-between flex-grow">
                    {/* Navigation Links */}
                    <nav className="flex items-center justify-center space-x-6 flex-grow">
                        <Link to="/" className="hover:underline">
                            Home
                        </Link>
                        <Link to="/apparel" className="hover:underline">
                            Apparel
                        </Link>
                        <Link to="/accessories" className="hover:underline">
                            Accessories
                        </Link>
                        <Link to="/figures" className="hover:underline">
                            Figures
                        </Link>
                        <Link to="/about-us" className="hover:underline">
                            About Us
                        </Link>
                        <Link to="/cart" className="relative flex items-center hover:underline">
                            <FaShoppingCart className="text-xl" /> {/* Cart Icon */}
                            {cartCount > 0 && (
                                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                                    {cartCount}
                                </span>
                            )}
                        </Link>
                    </nav>

                    {/* Search Bar */}
                    <div className="flex items-center w-50 ml-6">
                        <input
                            type="text"
                            placeholder="Looking for something?"
                            className="w-full px-4 py-2 rounded-full text-black focus:outline-none"
                        />
                        <button className="ml-2 text-white">
                            <FaSearch />
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu (Visible when menuOpen is true) */}
            {menuOpen && (
                <div className="sm:hidden bg-orange-500 text-white">
                    <nav className="flex flex-col items-center space-y-4 py-4">
                        <Link to="/" className="hover:underline" onClick={() => setMenuOpen(false)}>
                            Home
                        </Link>
                        <Link to="/apparel" className="hover:underline" onClick={() => setMenuOpen(false)}>
                            Apparel
                        </Link>
                        <Link to="/accessories" className="hover:underline" onClick={() => setMenuOpen(false)}>
                            Accessories
                        </Link>
                        <Link to="/figures" className="hover:underline" onClick={() => setMenuOpen(false)}>
                            Figures
                        </Link>
                        <Link to="/about-us" className="hover:underline" onClick={() => setMenuOpen(false)}>
                            About Us
                        </Link>
                        <Link to="/cart" className="relative flex items-center hover:underline">
                            <FaShoppingCart className="text-xl" /> {/* Cart Icon */}
                            {cartCount > 0 && (
                                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                                    {cartCount}
                                </span>
                            )}
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default HeaderNavbar;