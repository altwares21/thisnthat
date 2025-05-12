import React, { useState, useEffect } from 'react';
import products from '../assets/products';
import ProductGrid from '../components/ProductGrid';

const Accessories = () => {
    // State to simulate loading
    const [isLoading, setIsLoading] = useState(true);

    // Simulate a loading delay
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 750); // Simulate 750ms of loading
        return () => clearTimeout(timer);
    }, []);

    // Filter products for "Necklaces," "Keychains," and "Mugs" categories
    const necklacesProducts = products.filter((product) => product.category === 'Necklaces');
    const keychainsProducts = products.filter((product) => product.category === 'Keychains');
    const mugsProducts = products.filter((product) => product.category === 'Mugs');

    return (
        <div className="w-full max-w-4xl px-4 mt-12 mx-auto">
            {/* Necklaces Section */}
            <ProductGrid products={necklacesProducts} isLoading={isLoading} title="Necklaces" />

            {/* Keychains Section */}
            <ProductGrid products={keychainsProducts} isLoading={isLoading} title="Keychains" />

            {/* Mugs Section */}
            <ProductGrid products={mugsProducts} isLoading={isLoading} title="Mugs" />
        </div>
    );
};

export default Accessories;