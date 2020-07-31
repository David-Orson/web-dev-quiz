import React from "react";
import { Link } from "@reach/router";

import QuizCard from "../components/QuizCard";

const Quiz = (props) => {
  return (
    <div className="ui raised very padded text container segment">
      <QuizCard answers={props.answers} setAnswers={props.setAnswers} />
      <br />
      <div className="ui container">
        <Link className="ui button basic blue" to="/">
          Home
        </Link>
      </div>
    </div>
  );
};

export default Quiz;
