import React from "react";
import { Link } from "@reach/router";

import QuizCard from "../components/QuizCard";

const Quiz = (props) => {
  return (
    <div className="ui container">
      <h1>Quiz</h1>
      <QuizCard answers={props.answers} setAnswers={props.setAnswers} />
      <Link className="ui button" to="/">
        Home
      </Link>
    </div>
  );
};

export default Quiz;
