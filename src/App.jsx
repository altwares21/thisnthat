import React from 'react'; // Required for JSX syntax
import { Provider } from 'react-redux'; // Redux Provider
import store from './store'; // Redux store
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // For routing
import { ToastContainer } from 'react-toastify'; // Toast notifications
import 'react-toastify/dist/ReactToastify.css'; // Toastify styles
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
import { CartProvider } from './context/CartContext'; // Import CartProvider
import ScrollToTop from './components/ScrollToTop'; // Import the ScrollToTop component
import ScrollToTopButton from './components/ScrollToTopButton'; // Import the ScrollToTopButton component

const App = () => {
  return (
    <Provider store={store}>
      <CartProvider>
        <Router basename="/thisnthat">
          <ScrollToTop /> {/* Add ScrollToTop here */}
          <div className="flex flex-col min-h-screen">
            {/* Header */}
            <HeaderNavbar />

            {/* Main Content */}
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/collections" element={<Collections />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/apparel" element={<Apparel />} />
                <Route path="/accessories" element={<Accessories />} />
                <Route path="/figures" element={<Figures />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/product/:id" element={<Product />} />
              </Routes>
            </main>

            {/* Footer */}
            <Footer />
          </div>
          <ScrollToTopButton /> {/* Add the Scroll to Top button */}
          <ToastContainer position="top-right" autoClose={2000} />
        </Router>
      </CartProvider>
    </Provider>
  );
};

export default App;