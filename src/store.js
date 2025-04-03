import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice"; // Import your cart slice

const store = configureStore({
    reducer: {
        cart: cartReducer, // Add your cart slice here
    },
});

export default store;