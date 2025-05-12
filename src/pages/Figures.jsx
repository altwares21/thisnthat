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

    return <ProductGrid products={figureProducts} isLoading={isLoading} title="Figures" />;
};

export default Figures;