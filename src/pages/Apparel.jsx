import React, { useState, useEffect } from 'react';
import products from '../assets/products';
import ProductGrid from '../components/ProductGrid';

const Apparel = () => {
    // State to simulate loading
    const [isLoading, setIsLoading] = useState(true);

    // Simulate a loading delay
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 750); // Simulate 750ms of loading
        return () => clearTimeout(timer);
    }, []);

    // Filter products for "Apparel" and "Dry Fit" categories
    const teesProducts = products.filter((product) => product.category === 'Apparel');
    const dryFitProducts = products.filter((product) => product.category === 'Dry Fit');

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-700 dark:text-gray-200">
            {/* Tees Section */}
            <div className="w-full max-w-4xl px-4 mt-12">
                <ProductGrid products={teesProducts} isLoading={isLoading} title="Tees" />
            </div>

            {/* Dry Fit Section */}
            <div className="w-full max-w-4xl px-4 mt-12">
                <ProductGrid products={dryFitProducts} isLoading={isLoading} title="Dry Fit" />
            </div>
        </div>
    );
};

export default Apparel;