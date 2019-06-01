import "bootstrap";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import { applyMiddleware, compose, createStore } from 'redux';
import reduxThunk from 'redux-thunk';
import App from "./App";
import UserMenu from "./containers/UserMenu";
import history from './history';
import reducers from "./reducers";
import * as serviceWorker from "./serviceWorker";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(reduxThunk))
);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            {/* <UserMenu /> */}
            <App />
        </Router>
    </Provider>,
    document.querySelector("#root")
);

serviceWorker.unregister();