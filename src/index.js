import React from "react";
import ReactDOM from "react-dom";

import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import "./index.css";
import App from "./App";

import registerServiceWorker from "./registerServiceWorker";
import counterReducer from "./store/reducers/counter";
import resultReducer from "./store/reducers/result";

const rootReducers = combineReducers({
  ctr: counterReducer,
  res: resultReducer,
});

// Middleware
const logger = (store) => {
  return (next) => {
    return (action) => {
      console.log("[Middleware] Dispatching");
      const res = next(action);
      console.log("[Middleware] next state");
      return res;
    };
  };
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducers,
  composeEnhancers(applyMiddleware(logger, thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
