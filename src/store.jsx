import { configureStore, createSlice } from '@reduxjs/toolkit';

// Cart slice
const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
            const existingItem = state.find((item) => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += action.payload.quantity;
            } else {
                state.push({ ...action.payload, quantity: action.payload.quantity });
            }
        },
        removeFromCart: (state, action) => {
            return state.filter((item) => item.id !== action.payload.id);
        },
    },
});

// Export actions
export const { addToCart, removeFromCart } = cartSlice.actions;

// Create the Redux store
const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
    },
});

export default store;