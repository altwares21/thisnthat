import { combineReducers } from 'redux';

// Load initial cart state from localStorage
const loadCartFromLocalStorage = () => {
    try {
        const serializedCart = localStorage.getItem('cart');
        console.log('Loaded cart from localStorage:', serializedCart); // Debugging
        return serializedCart ? JSON.parse(serializedCart) : [];
    } catch (error) {
        console.error('Error loading cart from localStorage:', error);
        return [];
    }
};

// Example reducer for the cart
const cartReducer = (state = loadCartFromLocalStorage(), action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            const updatedCart = [...state, action.payload];
            console.log('Adding to cart:', updatedCart); // Debugging
            localStorage.setItem('cart', JSON.stringify(updatedCart)); // Save to localStorage
            return updatedCart;
        case 'REMOVE_FROM_CART':
            const filteredCart = state.filter(item => item.id !== action.payload.id);
            console.log('Removing from cart:', filteredCart); // Debugging
            localStorage.setItem('cart', JSON.stringify(filteredCart)); // Save to localStorage
            return filteredCart;
        default:
            console.log('Cart state on default:', state); // Debugging
            return state;
    }
};

// Combine reducers (add more reducers here if needed)
const rootReducer = combineReducers({
    cart: cartReducer,
});

export default rootReducer;