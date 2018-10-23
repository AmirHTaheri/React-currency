import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./serviceWorker";
// Scripts
import "jquery/dist/jquery.min.js";
import "popper.js/dist/popper.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
// Styles
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

ReactDOM.render(<App />, document.getElementById("root"));
//registerServiceWorker();
