import { createSlice } from "@reduxjs/toolkit";

// Load cart from localStorage
const loadCartFromLocalStorage = () => {
    try {
        const serializedCart = localStorage.getItem("cart");
        return serializedCart ? JSON.parse(serializedCart) : [];
    } catch (error) {
        console.error("Error loading cart from localStorage:", error);
        return [];
    }
};

const initialState = loadCartFromLocalStorage(); // Initialize state from localStorage

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const existingItem = state.find((item) => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += action.payload.quantity;
            } else {
                state.push(action.payload);
            }
            localStorage.setItem("cart", JSON.stringify(state)); // Save to localStorage
        },
        removeFromCart: (state, action) => {
            const updatedCart = state.filter((item) => item.id !== action.payload.id);
            localStorage.setItem("cart", JSON.stringify(updatedCart)); // Save to localStorage
            return updatedCart;
        },
        updateQuantity: (state, action) => {
            const item = state.find((item) => item.id === action.payload.id);
            if (item) {
                item.quantity = action.payload.quantity;
            }
            localStorage.setItem("cart", JSON.stringify(state)); // Save to localStorage
        },
        clearCart: () => {
            localStorage.removeItem("cart"); // Clear cart from localStorage
            return [];
        },
    },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;

export default cartSlice.reducer;