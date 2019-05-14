import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import rootReducer from "./reducers/rootReducer";
import * as serviceWorker from './serviceWorker';
import { composeWithDevTools } from 'redux-devtools-extension';
import { guestUser } from './constants/main';

const registerData = {name: '',pass: '',email: '',file: null,fileName: ''};
const initialState = {
    counter: 5,
    color: '#E0E0E0',
    currentUser: guestUser ,
    users: [],
    registerData
}
const store = createStore(rootReducer,initialState,composeWithDevTools());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
