import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
    const [searchInput, setSearchInput] = useState(""); // State for search input
    const navigate = useNavigate(); // Hook to navigate to other pages

    // Handle search input change
    const handleSearchChange = (e) => {
        setSearchInput(e.target.value);
    };

    // Handle form submission
    const handleSearchSubmit = (e) => {
        e.preventDefault(); // Prevent page reload
        if (searchInput.trim() !== "") {
            navigate(`/collections?search=${encodeURIComponent(searchInput)}`); // Redirect to Collections with query
            setSearchInput(""); // Clear the search bar
        }
    };

    return (
        <form onSubmit={handleSearchSubmit} className="flex items-center w-50 ml-6 relative" id="search-bar">
            <input
                type="text"
                placeholder="Looking for something?"
                value={searchInput}
                onChange={handleSearchChange}
                className="w-full px-4 py-2 rounded-full text-black focus:outline-none"
                id="search-input"
            />
            <button type="submit" className="ml-2 text-white">
                <FaSearch />
            </button>
        </form>
    );
};

export default SearchBar;