import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; // Import icons for arrows
import emailjs from "@emailjs/browser"; // Import EmailJS
import { clearCart } from "../slices/cartSlice"; // Import clearCart action
import { useNavigate } from "react-router-dom"; // Import useNavigate

const CheckoutForm = () => {
    const cart = useSelector((state) => state.cart); // Access the cart state from Redux
    const dispatch = useDispatch(); // Initialize dispatch
    const navigate = useNavigate(); // Initialize navigate
    const [formData, setFormData] = useState({
        email: "",
        instagram: "",
        messenger: "",
        firstName: "",
        lastName: "",
        district: "",
        townVillage: "",
        phone: "",
        shippingMethod: "pickup",
        paymentMethod: "cash-on-delivery",
    });

    const [isSubmitting, setIsSubmitting] = useState(false); // State for button loading
    const [isLoading, setIsLoading] = useState(true); // State for skeleton loader
    const [isCartVisible, setIsCartVisible] = useState(false); // State for cart summary visibility on small screens

    // Simulate a loading delay
    React.useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 750); // Simulate 750ms of loading
        return () => clearTimeout(timer);
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;

        // Update form data
        setFormData({
            ...formData,
            [name]: value,
        });

        // Restrict payment method based on delivery type
        if (name === "shippingMethod") {
            if (value === "pickup") {
                setFormData((prev) => ({
                    ...prev,
                    paymentMethod: "cash-on-delivery", // Default to Cash on Delivery for Pick Up
                }));
            } else {
                setFormData((prev) => ({
                    ...prev,
                    paymentMethod: "online-transfer", // Default to Online Transfer for other delivery types
                }));
            }
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // Prepare cart items as HTML rows for the email template
            const cartItemsHtml = cart
                .map(
                    (item) => `
                <tr>
                    <td style="padding: 8px 4px; text-align: left;">
                        <img src="${item.image}" alt="${item.name}" style="width: 50px; height: 50px; object-fit: cover; border-radius: 4px; margin-right: 8px; vertical-align: middle;" />
                        <span>${item.name}</span>
                    </td>
                    <td style="padding: 8px 4px; text-align: left;">
                        ${item.size ? `Size: ${item.size}<br>` : ""}
                        QTY: ${item.quantity}
                    </td>
                    <td style="padding: 8px 4px; text-align: right;">$${(item.price * item.quantity).toFixed(2)}</td>
                </tr>
            `
                )
                .join("");

            // Prepare order data for EmailJS
            const orderData = {
                logoUrl: "https://i.imgur.com/simFw2W.png", // Use the provided logo URL
                orderId: `${Date.now()}`, // Generate a unique order ID
                cartItems: cartItemsHtml, // Inject cart items as HTML
                total: cartTotal,
                name: `${formData.firstName} ${formData.lastName}`,
                phone: formData.phone,
                district: formData.district,
                townVillage: formData.townVillage,
                shippingMethod: formData.shippingMethod,
                paymentMethod: formData.paymentMethod,
                email: formData.email,
                instagram: formData.instagram || "N/A",
                messenger: formData.messenger || "N/A",
            };

            // Send email using EmailJS
            const response = await emailjs.send(
                "service_togvunx", // Replace with your EmailJS service ID
                "template_c5hauyh", // Replace with your EmailJS template ID
                orderData,
                "MHp5LP3l7tD1ykq4S" // Replace with your EmailJS public key
            );

            console.log("EmailJS response:", response); // Debugging

            if (response.status === 200) {
                toast.success("Order confirmed! A confirmation email has been sent.");

                // Clear the cart and form after successful submission
                dispatch(clearCart());
                setFormData({
                    email: "",
                    instagram: "",
                    messenger: "",
                    firstName: "",
                    lastName: "",
                    district: "",
                    townVillage: "",
                    phone: "",
                    shippingMethod: "pickup",
                    paymentMethod: "cash-on-delivery",
                });
            } else {
                throw new Error(`EmailJS failed with status: ${response.status}`);
            }

            setIsSubmitting(false);
        } catch (error) {
            console.error("Error submitting order:", error);
            toast.error("Failed to confirm order. Please try again.");
            setIsSubmitting(false);
        }
    };

    const cartTotal = cart.reduce((total, item) => total + item.quantity * item.price, 0).toFixed(2);

    return (
        <div className="container mx-auto px-4 py-8 min-h-screen bg-gray-100 dark:bg-gray-700 dark:text-gray-200">
            <ToastContainer /> {/* Toastify container for notifications */}
            {isLoading ? (
                <div className="animate-pulse">
                    {/* Skeleton for Checkout Title */}
                    <div className="w-48 h-8 bg-gray-300 dark:bg-gray-600 mx-auto rounded mb-6"></div>

                    {/* Skeleton for Form */}
                    <div className="space-y-6">
                        <div className="bg-gray-300 dark:bg-gray-600 h-40 rounded-lg"></div>
                        <div className="bg-gray-300 dark:bg-gray-600 h-40 rounded-lg"></div>
                        <div className="bg-gray-300 dark:bg-gray-600 h-40 rounded-lg"></div>
                    </div>
                </div>
            ) : (
                <>
                    <h1 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-gray-200">
                        Checkout
                    </h1>

                    {/* Cart Summary for Small Screens */}
                    <div className="lg:hidden bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 mb-6">
                        <div
                            className="flex justify-between items-center cursor-pointer"
                            onClick={() => setIsCartVisible(!isCartVisible)}
                        >
                            <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                                Cart Summary
                            </h2>
                            <button className="text-gray-600 dark:text-gray-400">
                                {isCartVisible ? <FaChevronUp /> : <FaChevronDown />}
                            </button>
                        </div>
                        <div
                            className={`mt-4 overflow-hidden transition-all duration-300 ${
                                isCartVisible ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
                            }`}
                        >
                            <ul className="space-y-4 pt-2"> {/* Added `pt-2` for padding at the top */}
                                {cart.map((item) => (
                                    <li key={item.id} className="flex items-start space-x-4">
                                        <div className="relative">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="w-20 h-20 object-cover rounded-lg"
                                            />
                                            <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                                                {item.quantity}
                                            </span>
                                        </div>
                                        <div>
                                            <h3 className="text-sm font-bold text-gray-800 dark:text-gray-200">
                                                {item.name}
                                            </h3>
                                            {item.size && (
                                                <p className="text-xs text-gray-600 dark:text-gray-400">
                                                    Size: {item.size}
                                                </p>
                                            )}
                                            <p className="text-xs text-gray-600 dark:text-gray-400">
                                                Price: ${item.price.toFixed(2)}
                                            </p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                            <div className="border-t border-gray-300 mt-4 pt-4">
                                <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200">
                                    Total: ${cartTotal}
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div className="lg:flex lg:space-x-6">
                        {/* Form */}
                        <div className="lg:w-2/3">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Contact Section */}
                                <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4">
                                    <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200">Contact</h2>
                                    <div className="space-y-4">
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="Email"
                                            required
                                            className="w-full bg-gray-100 dark:bg-gray-900 border-gray-300 rounded-md shadow-sm p-2 text-gray-700 dark:text-gray-200"
                                        />
                                        <input
                                            type="text"
                                            name="instagram"
                                            value={formData.instagram}
                                            onChange={handleChange}
                                            placeholder="Instagram (optional)"
                                            className="w-full bg-gray-100 dark:bg-gray-900 border-gray-300 rounded-md shadow-sm p-2 text-gray-700 dark:text-gray-200"
                                        />
                                        <input
                                            type="text"
                                            name="messenger"
                                            value={formData.messenger}
                                            onChange={handleChange}
                                            placeholder="Messenger (optional)"
                                            className="w-full bg-gray-100 dark:bg-gray-900 border-gray-300 rounded-md shadow-sm p-2 text-gray-700 dark:text-gray-200"
                                        />
                                    </div>
                                </div>

                                {/* Delivery Method Section */}
                                <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4">
                                    <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200">Delivery Method</h2>
                                    <div className="flex flex-col space-y-4 mb-4">
                                        <label className="flex items-center justify-between bg-gray-100 dark:bg-gray-900 p-2 rounded-md">
                                            <div className="flex items-center space-x-2">
                                                <input
                                                    type="radio"
                                                    name="shippingMethod"
                                                    value="pickup"
                                                    checked={formData.shippingMethod === "pickup"}
                                                    onChange={handleChange}
                                                    className="rounded-full border-gray-300 text-orange-500 focus:ring-orange-500"
                                                />
                                                <span className="text-gray-700 dark:text-gray-300 font-medium">Pick Up</span>
                                            </div>
                                        </label>
                                        <label className="flex items-center justify-between bg-gray-100 dark:bg-gray-900 p-2 rounded-md">
                                            <div className="flex items-center space-x-2">
                                                <input
                                                    type="radio"
                                                    name="shippingMethod"
                                                    value="bpms"
                                                    checked={formData.shippingMethod === "bpms"}
                                                    onChange={handleChange}
                                                    className="rounded-full border-gray-300 text-orange-500 focus:ring-orange-500"
                                                />
                                                <span className="text-gray-700 dark:text-gray-300 font-medium">BPMS</span>
                                            </div>
                                        </label>
                                        <label className="flex items-center justify-between bg-gray-100 dark:bg-gray-900 p-2 rounded-md">
                                            <div className="flex items-center space-x-2">
                                                <input
                                                    type="radio"
                                                    name="shippingMethod"
                                                    value="tropic-air"
                                                    checked={formData.shippingMethod === "tropic-air"}
                                                    onChange={handleChange}
                                                    className="rounded-full border-gray-300 text-orange-500 focus:ring-orange-500"
                                                />
                                                <span className="text-gray-700 dark:text-gray-300 font-medium">Tropic Air</span>
                                            </div>
                                        </label>
                                        <label className="flex items-center justify-between bg-gray-100 dark:bg-gray-900 p-2 rounded-md">
                                            <div className="flex items-center space-x-2">
                                                <input
                                                    type="radio"
                                                    name="shippingMethod"
                                                    value="post-office"
                                                    checked={formData.shippingMethod === "post-office"}
                                                    onChange={handleChange}
                                                    className="rounded-full border-gray-300 text-orange-500 focus:ring-orange-500"
                                                />
                                                <span className="text-gray-700 dark:text-gray-300 font-medium">Post Office</span>
                                            </div>
                                        </label>
                                    </div>

                                    {/* Delivery Form */}
                                    <div className="space-y-4">
                                        <div className="flex flex-col sm:flex-row sm:space-x-4">
                                            <input
                                                type="text"
                                                name="firstName"
                                                value={formData.firstName}
                                                onChange={handleChange}
                                                placeholder="First Name"
                                                required
                                                className="flex-1 bg-gray-100 dark:bg-gray-900 border-gray-300 rounded-md shadow-sm p-2 text-gray-700 dark:text-gray-200 mb-4 sm:mb-0"
                                            />
                                            <input
                                                type="text"
                                                name="lastName"
                                                value={formData.lastName}
                                                onChange={handleChange}
                                                placeholder="Last Name"
                                                required
                                                className="flex-1 bg-gray-100 dark:bg-gray-900 border-gray-300 rounded-md shadow-sm p-2 text-gray-700 dark:text-gray-200"
                                            />
                                        </div>
                                        <input
                                            type="text"
                                            name="district"
                                            value={formData.district}
                                            onChange={handleChange}
                                            placeholder="District"
                                            required
                                            className="w-full bg-gray-100 dark:bg-gray-900 border-gray-300 rounded-md shadow-sm p-2 text-gray-700 dark:text-gray-200"
                                        />
                                        <input
                                            type="text"
                                            name="townVillage"
                                            value={formData.townVillage}
                                            onChange={handleChange}
                                            placeholder="Town/Village"
                                            required
                                            className="w-full bg-gray-100 dark:bg-gray-900 border-gray-300 rounded-md shadow-sm p-2 text-gray-700 dark:text-gray-200"
                                        />
                                        <input
                                            type="text"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="Phone Number"
                                            required
                                            className="w-full bg-gray-100 dark:bg-gray-900 border-gray-300 rounded-md shadow-sm p-2 text-gray-700 dark:text-gray-200"
                                        />
                                    </div>
                                </div>

                                {/* Payment Type Section */}
                                <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4">
                                    <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200">Payment Type</h2>
                                    <div className="space-y-4">
                                        <label className="flex flex-col bg-gray-100 dark:bg-gray-900 p-2 rounded-md">
                                            <div className="flex items-center space-x-2">
                                                <input
                                                    type="radio"
                                                    name="paymentMethod"
                                                    value="cash-on-delivery"
                                                    checked={formData.paymentMethod === "cash-on-delivery"}
                                                    onChange={handleChange}
                                                    disabled={formData.shippingMethod !== "pickup"}
                                                    className="rounded-full border-gray-300 text-orange-500 focus:ring-orange-500"
                                                />
                                                <span className="text-gray-700 dark:text-gray-300">Cash on Delivery</span>
                                            </div>
                                        </label>
                                        <label className="flex flex-col bg-gray-100 dark:bg-gray-900 p-2 rounded-md">
                                            <div className="flex items-center space-x-2">
                                                <input
                                                    type="radio"
                                                    name="paymentMethod"
                                                    value="online-transfer"
                                                    checked={formData.paymentMethod === "online-transfer"}
                                                    onChange={handleChange}
                                                    className="rounded-full border-gray-300 text-orange-500 focus:ring-orange-500"
                                                />
                                                <span className="text-gray-700 dark:text-gray-300">Online Transfer</span>
                                            </div>
                                        </label>
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <div className="text-center">
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className={`px-6 py-3 rounded-lg ${
                                            isSubmitting
                                                ? "bg-gray-400 text-white cursor-not-allowed"
                                                : "bg-orange-500 text-white hover:bg-orange-600"
                                        }`}
                                    >
                                        {isSubmitting ? "Submitting..." : "Complete Order"}
                                    </button>
                                </div>
                            </form>
                        </div>

                        {/* Cart Summary for Large Screens */}
                        <div className="hidden lg:block lg:w-1/3 bg-white dark:bg-gray-800 shadow-md rounded-lg p-4">
                            <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">Cart Summary</h2>
                            <ul className="space-y-4">
                                {cart.map((item) => (
                                    <li key={item.id} className="flex items-start space-x-4">
                                        <div className="relative">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="w-20 h-20 object-cover rounded-lg"
                                            />
                                            <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                                                {item.quantity}
                                            </span>
                                        </div>
                                        <div>
                                            <h3 className="text-sm font-bold text-gray-800 dark:text-gray-200">
                                                {item.name}
                                            </h3>
                                            {item.size && (
                                                <p className="text-xs text-gray-600 dark:text-gray-400">
                                                    Size: {item.size}
                                                </p>
                                            )}
                                            <p className="text-xs text-gray-600 dark:text-gray-400">
                                                Price: ${item.price.toFixed(2)}
                                            </p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                            <div className="border-t border-gray-300 mt-4 pt-4">
                                <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200">
                                    Total: ${cartTotal}
                                </h3>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default CheckoutForm;