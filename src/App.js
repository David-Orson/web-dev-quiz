import React, { useState } from "react";
import { Router } from "@reach/router";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";

const App = () => {
  const [userAnswers, setAnswers] = useState([
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
    <div className="ui container">
      <Navbar />

      <Router>
        <Home path="/" />
        <Login path="/login" />
        <Signup path="signup" />
        <Quiz path="/quiz" userAnswers={userAnswers} setAnswers={setAnswers} />
        <Result
          path="/result"
          userAnswers={userAnswers}
          resetAnswers={resetAnswers}
        />
      </Router>
    </div>
  );
};

export default App;
