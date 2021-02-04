import React from "react";
import ReactDOM from "react-dom";
//import "./index.css";
import "./style/global.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import TagManager from "react-gtm-module";

const tagManagerArgs = {
  gtmId: "GTM-W6MCBJ8",
  events: {
    homeCTA: "signup-home-cta",
  },
};

TagManager.initialize(tagManagerArgs);

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
