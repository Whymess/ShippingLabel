import React from "react";
import ReactDOM from "react-dom";
import { Application } from "./components/";
import "./index.scss";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Application />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
