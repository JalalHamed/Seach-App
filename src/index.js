// Libraries
import React from "react";
import ReactDOM from "react-dom";

// Components
import App from "./App";
import reportWebVitals from "./reportWebVitals"; // Measuring Performance

// Styles
import "./index.scss";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
