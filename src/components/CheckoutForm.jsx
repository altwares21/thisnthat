import React, { useState } from "react";
import { useSelector } from "react-redux";
import { FaTruck, FaStore, FaPlane, FaEnvelope } from "react-icons/fa"; // Import icons
import emailjs from "@emailjs/browser"; // Import EmailJS
import { toast, ToastContainer } from "react-toastify"; // Import Toastify
import "react-toastify/dist/ReactToastify.css"; // Import Toastify CSS

const CheckoutForm = () => {
    const cart = useSelector((state) => state.cart); // Access the cart state from Redux
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
    const [showCartSummary, setShowCartSummary] = useState(false); // State for dropdown toggle

    // Map delivery and payment method values to display names
    const deliveryMethodDisplayNames = {
        "pickup": "Pick Up",
        "bpms": "BPMS",
        "tropic-air": "Tropic Air",
        "post-office": "Post Office",
    };

    const paymentMethodDisplayNames = {
        "cash-on-delivery": "Cash on Delivery",
        "online-transfer": "Online Transfer",
    };

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
            // Generate cart items HTML
            const cartItemsHtml = cart
                .map((item) => {
                    const size = item.size ? `Size: ${item.size}` : "";
                    return `
                        <tr>
                            <td style="padding: 8px 4px; display: flex; align-items: center;">
                                <img src="${item.image}" alt="${item.name}" style="width: 70px; height: 70px; object-fit: cover; border-radius: 4px; margin-right: 8px;" />
                                <span>${item.name}</span>
                            </td>
                            <td style="padding: 8px 4px;">
                                Quantity: ${item.quantity}<br />
                                ${size}
                            </td>
                            <td style="padding: 8px 4px; text-align: right;">
                                $${(item.price * item.quantity).toFixed(2)}
                            </td>
                        </tr>
                    `;
                })
                .join("");

            // Construct the email data
            const templateParams = {
                name: `${formData.firstName} ${formData.lastName}`,
                email: formData.email,
                instagram: formData.instagram || "N/A",
                messenger: formData.messenger || "N/A",
                phone: formData.phone,
                district: formData.district,
                townVillage: formData.townVillage,
                shippingMethod: deliveryMethodDisplayNames[formData.shippingMethod],
                paymentMethod: paymentMethodDisplayNames[formData.paymentMethod],
                cartItems: cartItemsHtml,
                total: cart
                    .reduce((total, item) => total + item.quantity * item.price, 0)
                    .toFixed(2),
                orderId: `${Date.now()}`,
                logoUrl: "https://i.imgur.com/simFw2W.png",
            };

            // Send the email using EmailJS
            await emailjs.send(
                "service_togvunx", // Your EmailJS Service ID
                "template_c5hauyh", // Your EmailJS Template ID
                templateParams,
                "MHp5LP3l7tD1ykq4S" // Your EmailJS Public Key
            );

            // Show success notification
            toast.success("Order confirmed and email sent successfully!");
        } catch (error) {
            console.error("EmailJS Error:", error);
            // Show error notification
            toast.error("Failed to confirm order. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const cartTotal = cart.reduce((total, item) => total + item.quantity * item.price, 0).toFixed(2);

    return (
        <div className="container mx-auto px-4 py-8">
            <ToastContainer /> {/* Toastify container for notifications */}
            <h1 className="text-3xl font-bold mb-6 text-center">Checkout</h1>

            {/* Two-Column Layout for Large Screens */}
            <div className="lg:flex lg:space-x-6">
                {/* Left Section: Form */}
                <div className="lg:w-2/3">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Contact Section */}
                        <div className="bg-white shadow-md rounded-lg p-4">
                            <h2 className="text-xl font-bold mb-4">Contact</h2>
                            <div className="space-y-4">
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Email"
                                    required
                                    className="w-full bg-gray-100 border-gray-300 rounded-md shadow-sm p-2"
                                />
                                <input
                                    type="text"
                                    name="instagram"
                                    value={formData.instagram}
                                    onChange={handleChange}
                                    placeholder="Instagram (optional)"
                                    className="w-full bg-gray-100 border-gray-300 rounded-md shadow-sm p-2"
                                />
                                <input
                                    type="text"
                                    name="messenger"
                                    value={formData.messenger}
                                    onChange={handleChange}
                                    placeholder="Messenger (optional)"
                                    className="w-full bg-gray-100 border-gray-300 rounded-md shadow-sm p-2"
                                />
                            </div>
                        </div>

                        {/* Delivery Method Section */}
                        <div className="bg-white shadow-md rounded-lg p-4">
                            <h2 className="text-xl font-bold mb-4">Delivery Method</h2>
                            <div className="flex flex-col space-y-4 mb-4">
                                <label className="flex items-center justify-between bg-gray-100 p-2 rounded-md">
                                    <div className="flex items-center space-x-2">
                                        <input
                                            type="radio"
                                            name="shippingMethod"
                                            value="pickup"
                                            checked={formData.shippingMethod === "pickup"}
                                            onChange={handleChange}
                                            className="rounded-full border-gray-300 text-orange-500 focus:ring-orange-500"
                                        />
                                        <span className="text-gray-700 font-medium">Pick Up</span>
                                    </div>
                                    <FaStore className="text-orange-500 w-6 h-6" />
                                </label>
                                <label className="flex items-center justify-between bg-gray-100 p-2 rounded-md">
                                    <div className="flex items-center space-x-2">
                                        <input
                                            type="radio"
                                            name="shippingMethod"
                                            value="bpms"
                                            checked={formData.shippingMethod === "bpms"}
                                            onChange={handleChange}
                                            className="rounded-full border-gray-300 text-orange-500 focus:ring-orange-500"
                                        />
                                        <span className="text-gray-700 font-medium">BPMS</span>
                                    </div>
                                    <FaTruck className="text-orange-500 w-6 h-6" />
                                </label>
                                <label className="flex items-center justify-between bg-gray-100 p-2 rounded-md">
                                    <div className="flex items-center space-x-2">
                                        <input
                                            type="radio"
                                            name="shippingMethod"
                                            value="tropic-air"
                                            checked={formData.shippingMethod === "tropic-air"}
                                            onChange={handleChange}
                                            className="rounded-full border-gray-300 text-orange-500 focus:ring-orange-500"
                                        />
                                        <span className="text-gray-700 font-medium">Tropic Air</span>
                                    </div>
                                    <FaPlane className="text-orange-500 w-6 h-6" />
                                </label>
                                <label className="flex items-center justify-between bg-gray-100 p-2 rounded-md">
                                    <div className="flex items-center space-x-2">
                                        <input
                                            type="radio"
                                            name="shippingMethod"
                                            value="post-office"
                                            checked={formData.shippingMethod === "post-office"}
                                            onChange={handleChange}
                                            className="rounded-full border-gray-300 text-orange-500 focus:ring-orange-500"
                                        />
                                        <span className="text-gray-700 font-medium">Post Office</span>
                                    </div>
                                    <FaEnvelope className="text-orange-500 w-6 h-6" />
                                </label>
                            </div>

                            {/* Delivery Form */}
                            <div className="space-y-4">
                                <div className="lg:flex lg:space-x-4">
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        placeholder="First Name"
                                        required
                                        className="w-full bg-gray-100 border-gray-300 rounded-md shadow-sm p-2"
                                    />
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        placeholder="Last Name"
                                        required
                                        className="w-full bg-gray-100 border-gray-300 rounded-md shadow-sm p-2"
                                    />
                                </div>
                                <input
                                    type="text"
                                    name="district"
                                    value={formData.district}
                                    onChange={handleChange}
                                    placeholder="District"
                                    required
                                    className="w-full bg-gray-100 border-gray-300 rounded-md shadow-sm p-2"
                                />
                                <input
                                    type="text"
                                    name="townVillage"
                                    value={formData.townVillage}
                                    onChange={handleChange}
                                    placeholder="Town/Village"
                                    required
                                    className="w-full bg-gray-100 border-gray-300 rounded-md shadow-sm p-2"
                                />
                                <input
                                    type="text"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Phone Number"
                                    required
                                    className="w-full bg-gray-100 border-gray-300 rounded-md shadow-sm p-2"
                                />
                            </div>
                        </div>

                        {/* Payment Type Section */}
                        <div className="bg-white shadow-md rounded-lg p-4">
                            <h2 className="text-xl font-bold mb-4">Payment Type</h2>
                            <div className="space-y-4">
                                <label className="flex flex-col bg-gray-100 p-2 rounded-md">
                                    <div className="flex items-center space-x-2">
                                        <input
                                            type="radio"
                                            name="paymentMethod"
                                            value="cash-on-delivery"
                                            checked={formData.paymentMethod === "cash-on-delivery"}
                                            onChange={handleChange}
                                            disabled={formData.shippingMethod !== "pickup"} // Hide for non-pickup
                                            className="rounded-full border-gray-300 text-orange-500 focus:ring-orange-500"
                                        />
                                        <span>Cash on Delivery</span>
                                    </div>
                                </label>
                                <label className="flex flex-col bg-gray-100 p-2 rounded-md">
                                    <div className="flex items-center space-x-2">
                                        <input
                                            type="radio"
                                            name="paymentMethod"
                                            value="online-transfer"
                                            checked={formData.paymentMethod === "online-transfer"}
                                            onChange={handleChange}
                                            className="rounded-full border-gray-300 text-orange-500 focus:ring-orange-500"
                                        />
                                        <span>Online Transfer</span>
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
                                {isSubmitting ? "Submitting..." : "Complete order"}
                            </button>
                        </div>
                    </form>
                </div>

                {/* Right Section: Cart Summary */}
                <div className="lg:w-1/3 bg-white shadow-md rounded-lg p-4 md:sticky lg:sticky lg:top-8">
                    <h2 className="text-xl font-bold mb-4">Cart Summary</h2>
                    <ul className="space-y-4">
                        {cart.map((item) => (
                            <li key={item.id} className="flex items-start space-x-4">
                                {/* Product Image with Quantity Badge */}
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
                                {/* Product Details */}
                                <div>
                                    <h3 className="text-sm font-bold">{item.name}</h3>
                                    {item.size && <p className="text-xs text-gray-600">Size: {item.size}</p>}
                                    <p className="text-xs text-gray-600">Price: ${item.price.toFixed(2)}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className="border-t border-gray-300 mt-4 pt-4">
                        <h3 className="text-lg font-bold">Total: ${cartTotal}</h3>
                    </div>
                </div>
            </div>

            {/* Cart Summary Dropdown for Small Screens */}
            <div className="lg:hidden mt-6">
                <button
                    onClick={() => setShowCartSummary(!showCartSummary)}
                    className="w-full bg-orange-500 text-white px-4 py-2 rounded-lg"
                >
                    {showCartSummary ? "Hide Cart Summary" : "Show Cart Summary"}
                </button>
                {showCartSummary && (
                    <div className="bg-white shadow-md rounded-lg p-4 mt-4">
                        <h2 className="text-xl font-bold mb-4">Cart Summary</h2>
                        <ul className="space-y-4">
                            {cart.map((item) => (
                                <li key={item.id} className="flex items-start space-x-4">
                                    {/* Product Image with Quantity Badge */}
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
                                    {/* Product Details */}
                                    <div>
                                        <h3 className="text-sm font-bold">{item.name}</h3>
                                        {item.size && <p className="text-xs text-gray-600">Size: {item.size}</p>}
                                        <p className="text-xs text-gray-600">Price: ${item.price.toFixed(2)}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div className="border-t border-gray-300 mt-4 pt-4">
                            <h3 className="text-lg font-bold">Total: ${cartTotal}</h3>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CheckoutForm;