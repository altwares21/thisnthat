import React, { useState, useEffect } from 'react';
import products from '../assets/products';
import ProductGrid from '../components/ProductGrid';

const Figures = () => {
    // State to simulate loading
    const [isLoading, setIsLoading] = useState(true);

    // Simulate a loading delay
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 750); // Simulate 750ms of loading
        return () => clearTimeout(timer);
    }, []);

    // Filter products for "Figures" category
    const figureProducts = products.filter((product) => product.category === 'Figures');

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-700 dark:text-gray-200">
            <ProductGrid products={figureProducts} isLoading={isLoading} title="Figures" />
        </div>
    );
};

export default Figures;