import React from "react";
import { Router } from "@reach/router";

import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";

const App = () => {
  return (
    <div>
      <Router>
        <Home path="/" />
        <Quiz path="/quiz" />
        <Result path="/result" />
      </Router>
    </div>
  );
};

export default App;
