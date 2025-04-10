import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-orange-300 py-4 w-full mt-0">
            <div className="container mx-auto text-center">
                <p>&copy; {new Date().getFullYear()} LAFA Digital Studio. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;