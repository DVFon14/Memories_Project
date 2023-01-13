//============== React import ==============//
import React from "react";
import ReactDOM from "react-dom";

//============== React redux import ==============//
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

//============== Files and Folders imports ==============//
import reducers from "./reducers";
import App from "./App";
import "./index.css";

//============== Code ==============//
const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
