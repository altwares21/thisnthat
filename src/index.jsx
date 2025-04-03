import React from 'react';
import ReactDOM from 'react-dom/client'; // Import createRoot from react-dom/client
import { Provider } from 'react-redux';
import store from './store';
import App from './App';
import './styles/tailwind.css';

const AppWrapper = () => (
    <Provider store={store}>
        <App />
    </Provider>
);

// Use createRoot instead of ReactDOM.render
const root = ReactDOM.createRoot(document.getElementById('root')); // Create a root
root.render(<AppWrapper />); // Render the app