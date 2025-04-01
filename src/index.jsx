import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // Import Provider from react-redux
import { createStore } from 'redux'; // Import createStore to create the Redux store
import rootReducer from './reducers'; // Import your root reducer
import App from './App';
import './styles/tailwind.css';

// Create the Redux store
const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);