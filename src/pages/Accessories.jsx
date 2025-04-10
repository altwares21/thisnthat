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
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-700 dark:text-gray-200">
            {/* Necklaces Section */}
            <div className="w-full max-w-4xl px-4 mt-12">
                <ProductGrid products={necklacesProducts} isLoading={isLoading} title="Necklaces" />
            </div>

            {/* Keychains Section */}
            <div className="w-full max-w-4xl px-4 mt-12">
                <ProductGrid products={keychainsProducts} isLoading={isLoading} title="Keychains" />
            </div>

            {/* Mugs Section */}
            <div className="w-full max-w-4xl px-4 mt-12">
                <ProductGrid products={mugsProducts} isLoading={isLoading} title="Mugs" />
            </div>
        </div>
    );
};

export default Accessories;