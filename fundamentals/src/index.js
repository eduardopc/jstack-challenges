import React from "react";
import ReactDOM from "react-dom";

import App from "./screens/App";

import "./index.css";

if (typeof window !== "undefined") {
  ReactDOM.render(<App />, document.getElementById("root"));
}
