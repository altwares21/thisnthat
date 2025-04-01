import React from 'react';
import Navbar from './Navbar';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white fixed top-0 w-full z-50">
      <Navbar />
    </header>
  );
};

export default Header;