import React, { useState } from "react";
import { Router } from "@reach/router";

import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";

const App = () => {
  const [answers, setAnswers] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);

  const resetAnswers = () => {
    setAnswers([null, null, null, null, null, null, null, null, null, null]);
  };

  return (
    <div>
      <Router>
        <Home path="/" />
        <Quiz path="/quiz" answers={answers} setAnswers={setAnswers} />
        <Result path="/result" answers={answers} resetAnswers={resetAnswers} />
      </Router>
    </div>
  );
};

export default App;
