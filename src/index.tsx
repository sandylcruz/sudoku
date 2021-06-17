import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { compose, createStore } from "redux";

import App from "./components/App";
import rootReducer from "./reducers/rootReducer";

const composeEnhancers =
  // @ts-expect-error
  (window.__REDUX_DEVTOOLS_EXTENSION__ &&
    // @ts-expect-error
    window.__REDUX_DEVTOOLS_EXTENSION__()) ||
  compose;

const store = createStore(rootReducer, composeEnhancers);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
