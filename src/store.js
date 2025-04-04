import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice"; // Import the cartSlice reducer

// Create the Redux store
const store = configureStore({
    reducer: {
        cart: cartReducer, // Add the cart reducer
    },
});

export default store;