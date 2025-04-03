import React from 'react';
import { CartProvider as UseCartProvider } from 'react-use-cart';

export const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
    return <UseCartProvider>{children}</UseCartProvider>;
};