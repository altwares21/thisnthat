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
        <div className="w-full max-w-4xl px-4 mt-12 mx-auto">
            {/* Tees Section */}
            <ProductGrid products={teesProducts} isLoading={isLoading} title="Tees" />

            {/* Dry Fit Section */}
            <ProductGrid products={dryFitProducts} isLoading={isLoading} title="Dry Fit" />
        </div>
    );
};

export default Apparel;