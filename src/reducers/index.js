import { combineReducers } from 'redux';

// Example reducer for the cart
const cartReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return [...state, action.payload];
        case 'REMOVE_FROM_CART':
            return state.filter(item => item.id !== action.payload.id);
        default:
            return state;
    }
};

// Combine reducers (add more reducers here if needed)
const rootReducer = combineReducers({
    cart: cartReducer,
});

export default rootReducer;