import React from "react";
import ReactDOM from "react-dom";

import Login from "./Login";

import "bootstrap/dist/css/bootstrap.min.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Login />
  </React.StrictMode>,
  rootElement
);
