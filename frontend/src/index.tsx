import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import App from "./App";
import "antd/dist/antd.css";
import { Provider } from "react-redux";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  // <Provider store={Store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  // </Provider>
);
