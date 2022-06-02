import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {store} from "./redux/redux-store";
import {BrowserRouter} from "react-router-dom";

export const rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App store={store.getState()} dispatch={store.dispatch.bind(store)}/>,
        </BrowserRouter>, document.getElementById('root'));
}

store.subscribe(rerenderEntireTree);
rerenderEntireTree();