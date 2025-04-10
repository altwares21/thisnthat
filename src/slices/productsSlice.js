import { createSlice } from "@reduxjs/toolkit";
import products from "../assets/products"; // Import the products data

const productsSlice = createSlice({
    name: "products",
    initialState: products, // Use the imported products as the initial state
    reducers: {},
});

export default productsSlice.reducer;