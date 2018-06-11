import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux"

// import registerServiceWorker from "./registerServiceWorker";


import App from "./App";
import configureStore from "./store/configureStore"

/** Imports styles for ALL components || UNCOMMENT TO CHECK IF MORE IMPORTS ARE NEEDED */
import 'material-components-web/dist/material-components-web.min.css';
// import "@material/button/dist/mdc.button.min.css";
// import "@material/card/dist/mdc.card.min.css";

import './styles/styles.css'
import "./index.css";

const store = configureStore();

const startApp = (
    <Provider store={store}>
        <App />
    </Provider>
)


ReactDOM.render(startApp, document.getElementById("root"));
// registerServiceWorker();
