import React from "react";
import ReactDOM from "react-dom";
// import registerServiceWorker from "./registerServiceWorker";

import "./index.css";
import App from "./App";

/** Imports styles for ALL components || UNCOMMENT TO CHECK IF MORE IMPORTS ARE NEEDED */
import 'material-components-web/dist/material-components-web.min.css';


// import "@material/button/dist/mdc.button.min.css";
// import "@material/card/dist/mdc.card.min.css";


ReactDOM.render(<App />, document.getElementById("root"));
// registerServiceWorker();
