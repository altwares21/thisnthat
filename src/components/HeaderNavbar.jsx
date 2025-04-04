import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import { FaSearch } from 'react-icons/fa';
import SearchBar from './SearchBar';
import CartIcon from './CartIcon'; // Import the new CartIcon component
import sprites from '../assets/images/sprites.png'; // Import the sprites image

const HeaderNavbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [showSearchBar, setShowSearchBar] = useState(false);
    const menuRef = useRef(null);
    const searchBarRef = useRef(null);

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
        setShowSearchBar(false);
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
                            <Link to="/cart" className="hover:underline">
                                <CartIcon /> {/* Use the new CartIcon component */}
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
                    ref={searchBarRef}
                    className="sm:hidden bg-orange-500 py-2 px-4"
                >
                    <SearchBar onSearch={handleSearchSubmit} />
                </div>
            )}

            {/* Darkened Background */}
            {menuOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40"
                    onClick={() => setMenuOpen(false)}
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
                    onClick={() => setMenuOpen(false)}
                >
                    ✖
                </button>

                {/* Navigation Links */}
                <nav className="flex flex-col items-center space-y-4 py-4 mt-16">
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
                    <Link to="/cart" className="hover:underline" onClick={() => setMenuOpen(false)}>
                        <CartIcon /> {/* Use the new CartIcon component */}
                    </Link>
                    <img src={sprites} alt="ThatNThat Sprites" className="h-24 mt-4 " />
                </nav>
            </div>
        </>
    );
};

export default HeaderNavbar;