import React, { useState, useEffect } from 'react';

const Footer = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;

            // Show the footer only when the user has scrolled to the bottom
            setIsVisible(scrollPosition >= documentHeight - 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <footer
            className={`bg-gray-900 text-orange-300 py-4 fixed bottom-0 w-full transition-opacity duration-300 ${
                isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
        >
            <div className="container mx-auto text-center">
                <p>&copy; {new Date().getFullYear()} LAFA Digital Studio. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;