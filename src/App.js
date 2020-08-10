import React, { useState, useContext } from "react";
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

  const { user, dispatch } = useContext(UserContext);

  return (
    <div className="ui container">
      <h1>Code Quizzer</h1>

      <div className="ui raised very padded text container segment">
        {user.handle ? <p>Hi User</p> : <p>Login please</p>}
        <button onClick={() => dispatch({ type: "LOGIN", handle: "me" })}>
          Login
        </button>
      </div>
      <Router>
        <Home path="/" />
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
