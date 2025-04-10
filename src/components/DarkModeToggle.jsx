import React, { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext";

const DarkModeToggle = () => {
    const { isDarkMode, setIsDarkMode } = useContext(DarkModeContext);

    return (
        <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-2 bg-gray-200 dark:bg-gray-800 text-black dark:text-white rounded-lg"
        >
            {isDarkMode ? "☀️" : "🌙"}
        </button>
    );
};

export default DarkModeToggle;