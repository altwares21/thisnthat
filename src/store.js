import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import productsReducer from "./slices/productsSlice"; // Import the productsSlice reducer

const store = configureStore({
    reducer: {
        cart: cartReducer,
        products: productsReducer, // Add the products reducer
    },
});

export default store;