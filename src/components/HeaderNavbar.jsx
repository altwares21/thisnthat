import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import logo from '../assets/images/logo.png';
import { FaShoppingCart, FaSearch } from 'react-icons/fa';
import SearchBar from './SearchBar';

const HeaderNavbar = () => {
    const [menuOpen, setMenuOpen] = useState(false); // State to toggle the hamburger menu
    const [showSearchBar, setShowSearchBar] = useState(false); // State to toggle the search bar visibility
    const cartItems = useSelector((state) => state.cart);
    const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
    const menuRef = useRef(null);
    const searchBarRef = useRef(null); // Ref for the search bar

    // Close the hamburger menu when clicking outside of it
    useEffect(() => {
        const handleClickOutsideMenu = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutsideMenu);
        return () => {
            document.removeEventListener('mousedown', handleClickOutsideMenu);
        };
    }, []);

    // Close the search bar when clicking outside of it
    useEffect(() => {
        const handleClickOutsideSearchBar = (event) => {
            if (searchBarRef.current && !searchBarRef.current.contains(event.target)) {
                setShowSearchBar(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutsideSearchBar);
        return () => {
            document.removeEventListener('mousedown', handleClickOutsideSearchBar);
        };
    }, []);

    // Handle search submission
    const handleSearchSubmit = () => {
        setShowSearchBar(false); // Close the search bar after submitting
    };

    return (
        <>
            <header className="bg-orange-500 text-white sticky top-0 z-50">
                <div className="container mx-auto flex items-center justify-between py-2 px-6 sm:justify-between">
                    {/* Hamburger Menu Button (Small Screens) */}
                    <button
                        className="sm:hidden text-white text-2xl focus:outline-none"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        ☰
                    </button>

                    {/* Logo (Centered on Small Screens) */}
                    <Link to="/" className="flex items-center mx-auto sm:mx-0">
                        <img src={logo} alt="This N That Mix Up Shop Logo" className="h-12" />
                    </Link>

                    {/* Search Icon (Small Screens) */}
                    <div className="sm:hidden flex items-center">
                        {!showSearchBar && (
                            <button
                                className="text-white text-xl focus:outline-none"
                                onClick={() => setShowSearchBar(true)}
                            >
                                <FaSearch />
                            </button>
                        )}
                    </div>

                    {/* Navbar for Larger Screens */}
                    <div className="hidden sm:flex items-center justify-between flex-grow">
                        {/* Centered Links */}
                        <nav className="flex items-center justify-center space-x-6 flex-grow">
                            <Link to="/" className="hover:underline">Home</Link>
                            <Link to="/apparel" className="hover:underline">Apparel</Link>
                            <Link to="/accessories" className="hover:underline">Accessories</Link>
                            <Link to="/figures" className="hover:underline">Figures</Link>
                            <Link to="/about-us" className="hover:underline">About Us</Link>
                            <Link to="/cart" className="relative flex items-center hover:underline">
                                <FaShoppingCart className="text-xl" />
                                {cartCount > 0 && (
                                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                                        {cartCount}
                                    </span>
                                )}
                            </Link>
                        </nav>

                        {/* Search Bar on the Right (Large Screens) */}
                        <div className="flex items-center">
                            <SearchBar />
                        </div>
                    </div>
                </div>
            </header>

            {/* Search Bar for Small Screens */}
            {showSearchBar && (
                <div
                    ref={searchBarRef} // Attach the ref to detect clicks outside
                    className="sm:hidden bg-orange-500 py-2 px-4"
                >
                    <SearchBar onSearch={handleSearchSubmit} /> {/* Pass the onSearch handler */}
                </div>
            )}

            {/* Darkened Background */}
            {menuOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40"
                    onClick={() => setMenuOpen(false)} // Close menu when clicking on the background
                ></div>
            )}

            {/* Side Hamburger Menu (Small Screens) */}
            <div
                ref={menuRef}
                className={`fixed top-0 left-0 h-full w-64 bg-orange-500 text-white z-50 transform ${
                    menuOpen ? 'translate-x-0' : '-translate-x-full'
                } transition-transform duration-300`}
            >
                {/* Close Icon */}
                <button
                    className="text-white text-2xl absolute top-4 left-4 focus:outline-none"
                    onClick={() => setMenuOpen(false)} // Close the menu
                >
                    ✖
                </button>

                <nav className="flex flex-col items-center space-y-4 py-4 mt-8">
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
                    <Link to="/cart" className="relative flex items-center hover:underline" onClick={() => setMenuOpen(false)}>
                        <FaShoppingCart className="text-xl" />
                        {cartCount > 0 && (
                            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                                {cartCount}
                            </span>
                        )}
                    </Link>
                </nav>
            </div>
        </>
    );
};

export default HeaderNavbar;