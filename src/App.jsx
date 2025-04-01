import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeaderNavbar from './components/HeaderNavbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Apparel from './pages/Apparel';
import Accessories from './pages/Accessories';
import Figures from './pages/Figures';
import AboutUs from './pages/AboutUs';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Collections from './pages/Collections';

const App = () => {
  return (
    <Router basename="/thisnthat">
      <HeaderNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/apparel" element={<Apparel />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/figures" element={<Figures />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/collections" element={<Collections />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;