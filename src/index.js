import React from "react";
import ReactDOM from "react-dom";
import "assets/css/general.css";
import App from "App";
import { StoreProvider } from "easy-peasy";
import store from "state";

ReactDOM.render(
  <StoreProvider store={store}>
    <App />
  </StoreProvider>,
  document.getElementById("root")
);
