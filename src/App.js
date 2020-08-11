import React, { useState, useContext, useEffect } from "react";
import { Router } from "@reach/router";
import axios from "axios";
import jwtDecode from "jwt-decode";

import { UserContext } from "./contexts/UserContext";
import { SET_AUTHENTICATED, REMOVE_AUTHENTICATED } from "./contexts/types";

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

  const { dispatch } = useContext(UserContext);

  useEffect(() => {
    const token = localStorage.FBIdToken;
    if (token) {
      const decodedToken = jwtDecode(token);
      if (decodedToken.exp * 1000 < Date.now()) {
        dispatch({ type: REMOVE_AUTHENTICATED });
      } else {
        dispatch({ type: SET_AUTHENTICATED });
        axios.defaults.headers.common["Authorization"] = token;
      }
    }
  }, []);

  return (
    <div>
      <Navbar />
      <div className="ui container">
        <Router>
          <Home path="/" />
          <Login path="/login" />
          <Signup path="signup" />
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
      </div>
    </div>
  );
};

export default App;
