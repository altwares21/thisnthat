import React from 'react'; // Required for JSX syntax
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // For routing
import HeaderNavbar from './components/HeaderNavbar'; // Header component
import Footer from './components/Footer'; // Footer component
import Home from './pages/Home'; // Home page
import Apparel from './pages/Apparel'; // Apparel page
import Accessories from './pages/Accessories'; // Accessories page
import Figures from './pages/Figures'; // Figures page
import AboutUs from './pages/AboutUs'; // About Us page
import Cart from './pages/Cart'; // Cart page
import Checkout from './pages/Checkout'; // Checkout page
import Collections from './pages/Collections'; // Collections page
import Product from './pages/Product'; // Import the Product page

const App = () => {
  return (
    <Router basename="/thisnthat">
      <div className="flex flex-col min-h-screen">
        {/* Header */}
        <HeaderNavbar />

        {/* Main Content */}
        <main className="flex-grow">
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
            <Route path="/product/:id" element={<Product />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;