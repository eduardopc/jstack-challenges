import React from "react";
import ReactDOM from "react-dom";

import GlobalStyles from './styles/global'
import { ThemeProvider } from "./context/ThemeContext"

import App from "./components/App";

ReactDOM.render(
  <ThemeProvider>
    <GlobalStyles />
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);

