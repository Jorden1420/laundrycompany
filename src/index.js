import React, { Suspense } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import Routes from "./routes";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

render(
  <Suspense fallback={<div>Loading...</div>}>
    <Router>
      <Routes />
    </Router>
  </Suspense>,
  document.getElementById("root")
);
