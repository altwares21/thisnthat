import { createSlice } from "@reduxjs/toolkit";

const initialState = []; // Initial state for the cart (an empty array)

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const existingItem = state.find((item) => item.id === action.payload.id);
            if (existingItem) {
                // If the item already exists, update its quantity
                existingItem.quantity += action.payload.quantity;
            } else {
                // Otherwise, add the new item to the cart
                state.push(action.payload);
            }
        },
        removeFromCart: (state, action) => {
            // Remove an item from the cart by its ID
            return state.filter((item) => item.id !== action.payload.id);
        },
        updateQuantity: (state, action) => {
            const item = state.find((item) => item.id === action.payload.id);
            if (item) {
                item.quantity = action.payload.quantity; // Update the quantity
            }
        },
        clearCart: () => {
            return []; // Clear the cart
        },
    },
});

// Export actions
export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;

export default cartSlice.reducer;