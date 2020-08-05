import React, { useState } from "react";
import { Router } from "@reach/router";

import { UserContext } from "./contexts/UserContext";

import Home from "./pages/Home";
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

  const [user, setUser] = useState(null);

  return (
    <div className="ui container">
      <h1>Code Quizzer</h1>
      <UserContext.Provider value={{ user, setUser }}>
        <Router>
          <Home path="/" />
          <Quiz
            path="/quiz"
            userAnswers={userAnswers}
            setAnswers={setAnswers}
          />
          <Result
            path="/result"
            userAnswers={userAnswers}
            resetAnswers={resetAnswers}
          />
        </Router>
      </UserContext.Provider>
    </div>
  );
};

export default App;
