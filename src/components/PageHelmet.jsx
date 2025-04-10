import React from "react";
import { Helmet } from "react-helmet";
import { useLocation, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const PageHelmet = () => {
    const location = useLocation();
    const { id: paramId } = useParams(); // Get the product ID from the URL params
    const products = useSelector((state) => state.products); // Access the products state

    // Fallback: Extract ID from the pathname if useParams() fails
    const id = paramId || location.pathname.split("/product/")[1];

    // Extract search query from the URL
    const searchParams = new URLSearchParams(location.search);
    const searchQuery = searchParams.get("search");

    console.log("Product ID in PageHelmet:", id); // Debugging
    console.log("Current pathname in PageHelmet:", location.pathname); // Debugging
    console.log("Products state in PageHelmet:", products); // Debugging
    console.log("Search query in PageHelmet:", searchQuery); // Debugging

    // Define titles for static routes
    const titles = {
        "/": "This N That Mix Up Shop", // Home page
        "/about-us": "About Us",
        "/cart": "Cart",
        "/checkout": "Checkout",
        "/apparel": "Apparel",
        "/accessories": "Accessories",
        "/figures": "Figures",
        "/collections": searchQuery ? `Search Results for "${searchQuery}"` : "Collections",
    };

    // Check if the current route is a product page
    const isProductPage = location.pathname.startsWith("/product/");
    let title;

    if (isProductPage) {
        if (!id || isNaN(parseInt(id, 10))) {
            console.error("Product ID is invalid or undefined. Check the route definition and URL.");
            title = "Invalid Product ID";
        } else if (!products || products.length === 0) {
            title = "Loading...";
        } else {
            const product = products.find((product) => product.id === parseInt(id, 10));
            title = product ? product.name : "Product Not Found";
        }
    } else {
        // Use the predefined title for static routes
        title = titles[location.pathname] || "This N That Mix Up Shop";
    }

    return (
        <Helmet>
            <title>{title}</title>
        </Helmet>
    );
};

export default PageHelmet;