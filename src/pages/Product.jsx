import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
import { useSelector, useDispatch } from 'react-redux'; // Import useSelector and useDispatch from react-redux
import { addToCart } from '../slices/cartSlice'; // Import the addToCart action
import { ToastContainer, toast } from 'react-toastify'; // Import ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Import toast styles

const Product = () => {
    const { id } = useParams(); // Get the product ID from the URL
    console.log("Product ID from URL:", id); // Debugging

    const dispatch = useDispatch(); // Initialize the Redux dispatch function
    const products = useSelector((state) => state.products); // Access products from Redux
    console.log("Products state:", products); // Debugging

    const [isLoading, setIsLoading] = useState(true); // Loading state
    const [quantity, setQuantity] = useState(1); // State for quantity
    const [selectedSize, setSelectedSize] = useState(''); // State for selected size
    const [shakeSize, setShakeSize] = useState(false); // State for shake animation
    const sizeDropdownRef = React.useRef(null); // Ref for size dropdown

    const product = products.find((product) => product.id === parseInt(id, 10)); // Find the product by ID
    console.log("Product found:", product); // Debugging

    useEffect(() => {
        // Random loading messages
        const loadingMessages = [
            'Gathering product information...',
            'Fetching details for this amazing product...',
            'Hang tight! Loading product data...',
        ];
        const randomMessage = loadingMessages[Math.floor(Math.random() * loadingMessages.length)];
        toast.info(randomMessage); // Show a random toast message

        // Simulate a loading delay
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 750); // Simulate 750ms of loading
        return () => clearTimeout(timer);
    }, []);

    if (!product && !isLoading) {
        return <div className="text-center mt-12">Product not found</div>;
    }

    // Determine available sizes based on category
    let availableSizes = [];
    if (product?.category === 'Apparel') {
        availableSizes = ['Small', 'Medium', 'Large', 'XL', '2XL', '3XL'];
    } else if (product?.category === 'Dry Fit') {
        availableSizes = ['XS', 'Small', 'Medium', 'Large', 'XL', '2XL', '3XL', '4XL', '5XL'];
    }

    const handleAddToCart = () => {
        if (availableSizes.length > 0 && !selectedSize) {
            toast.error('Select a size before adding to cart'); // Show error toast if size is not selected
            setShakeSize(true); // Trigger shake animation
            setTimeout(() => setShakeSize(false), 500); // Remove shake animation after 500ms

            // Temporarily highlight the dropdown
            if (sizeDropdownRef.current) {
                sizeDropdownRef.current.classList.add('highlight');
                setTimeout(() => sizeDropdownRef.current.classList.remove('highlight'), 500); // Remove highlight after 500ms
            }

            return;
        }

        // Dispatch the addToCart action to update the Redux store
        dispatch(
            addToCart({
                id: `${product.id}-${selectedSize || 'default'}`, // Unique ID based on product ID and size
                name: product.name,
                price: product.price,
                image: product.images[0], // Use the first image
                size: availableSizes.length > 0 ? selectedSize : null, // Include size if applicable
                quantity, // Pass the selected quantity
            })
        );

        toast.success('Item added to cart!'); // Show success toast
    };

    return (
        <div className="w-full max-w-4xl px-4 mt-12 mx-auto">
            {/* Toast Container */}
            <ToastContainer
                position="top-right" // Change position to top-center for better visibility
                autoClose={2000} // Auto close after 3 seconds
                hideProgressBar={false} // Show progress bar
                newestOnTop={true} // Show newest notifications on top
                closeOnClick // Close on click
                rtl={false} // Left-to-right layout
                pauseOnFocusLoss // Pause when the window loses focus
                draggable // Allow dragging the notification
                className="mt-16" // Add margin to prevent overlap with the header
                pauseOnHover={false} // Disable pause on hover
            />

            {/* Product Name */}
            <h1 className="text-3xl font-bold mb-4 text-center text-gray-800 dark:text-gray-200">
                {isLoading ? (
                    <div className="w-48 h-8 bg-gray-300 animate-pulse mx-auto rounded dark:bg-gray-600"></div>
                ) : (
                    product.name
                )}
            </h1>

            <div className="flex flex-col md:flex-row items-center md:items-start">
                {/* Image Carousel */}
                <div className="w-full md:w-1/2">
                    {isLoading ? (
                        <div className="w-full h-[400px] bg-gray-300 animate-pulse rounded-lg"></div>
                    ) : (
                        <Carousel
                            showThumbs={product.images.length > 1}
                            infiniteLoop={true}
                            showStatus={false}
                            dynamicHeight={false}
                            thumbWidth={80}
                            renderThumbs={() =>
                                product.images.length > 1 &&
                                product.images.map((image, index) => (
                                    <img
                                        key={index}
                                        src={image}
                                        alt={`Thumbnail ${index + 1}`}
                                        className="h-[100px] object-cover rounded-lg"
                                    />
                                ))
                            }
                        >
                            {product.images.map((image, index) => (
                                <div key={index}>
                                    <img
                                        src={image}
                                        alt={`${product.name} - ${index + 1}`}
                                        className="w-full h-[400px] object-contain rounded-lg"
                                    />
                                </div>
                            ))}
                        </Carousel>
                    )}
                </div>

                <div className="md:ml-8 mt-4 md:mt-0">
                    {/* Product Description */}
                    <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                        {isLoading ? (
                            <div className="w-full h-6 bg-gray-300 animate-pulse rounded dark:bg-gray-600"></div>
                        ) : (
                            product.description
                        )}
                    </p>

                    {/* Product Price */}
                    <p className="text-xl font-bold text-orange-500 dark:text-orange-400 mb-4">
                        {isLoading ? (
                            <div className="w-24 h-6 bg-gray-300 animate-pulse rounded dark:bg-gray-600"></div>
                        ) : (
                            `$${product.price.toFixed(2)}`
                        )}
                    </p>

                    {/* Sizes Dropdown */}
                    {availableSizes.length > 0 && (
                        <div className="mb-4">
                            <label htmlFor="size" className="block text-gray-700 dark:text-gray-300 font-bold mb-2">
                                {isLoading ? (
                                    <div className="w-32 h-4 bg-gray-300 animate-pulse rounded dark:bg-gray-600"></div>
                                ) : (
                                    'Select Size:'
                                )}
                            </label>
                            {isLoading ? (
                                <div className="w-full h-10 bg-gray-300 animate-pulse rounded dark:bg-gray-600"></div>
                            ) : (
                                <select
                                    id="size"
                                    value={selectedSize}
                                    onChange={(e) => setSelectedSize(e.target.value)}
                                    ref={sizeDropdownRef}
                                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 ${
                                        shakeSize ? 'animate-shake' : ''
                                    }`}
                                >
                                    <option value="" className="dark:bg-gray-800 dark:text-gray-300">Select a size</option>
                                    {availableSizes.map((size) => (
                                        <option key={size} value={size} className="dark:bg-gray-800 dark:text-gray-300">
                                            {size}
                                        </option>
                                    ))}
                                </select>
                            )}
                        </div>
                    )}

                    {/* Quantity Dropdown */}
                    <div className="flex items-center mb-4">
                        {isLoading ? (
                            <div className="w-full h-10 bg-gray-300 animate-pulse rounded dark:bg-gray-600"></div>
                        ) : (
                            <div className="w-full">
                                <label htmlFor="quantity" className="block text-gray-700 dark:text-gray-300 font-bold mb-2">
                                    Quantity:
                                </label>
                                <select
                                    id="quantity"
                                    value={quantity}
                                    onChange={(e) => setQuantity(parseInt(e.target.value))}
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600"
                                >
                                    {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
                                        <option key={num} value={num} className="dark:bg-gray-800 dark:text-gray-300">
                                            {num}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        )}
                    </div>

                    {/* Add to Cart Button */}
                    {isLoading ? (
                        <div className="w-full h-10 bg-gray-300 animate-pulse rounded"></div>
                    ) : (
                        <button
                            onClick={handleAddToCart}
                            className="w-full bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600"
                        >
                            Add to Cart
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Product;