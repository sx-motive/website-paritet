import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";

function RoutInner() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default RoutInner;
