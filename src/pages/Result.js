import React from "react";
import { Link } from "@reach/router";

import { questions, correct } from "../Questions/JSQuestions";

const Result = (props) => {
  let marked = [];
  let index = 0;
  props.answers.forEach((answer) => {
    if (answer === correct[index]) {
      marked.push(1);
      index++;
    } else {
      marked.push(0);
      index++;
    }
  });

  const answeredCorrectly = marked.reduce((total, num) => total + num);

  const score = `${answeredCorrectly} / ${questions.length}`;

  console.log(marked);

  console.log(score);

  return (
    <div className="ui raised very padded text container segment">
      <h1>Result</h1>
      <p>Your Score is {score}</p>

      {answeredCorrectly > 2 ? (
        answeredCorrectly > 5 ? (
          answeredCorrectly > 8 ? (
            <p>Great Job ! You nailed the quiz!</p>
          ) : (
            <p>You did well! study more to improve.</p>
          )
        ) : (
          <p>Nice try, study more to improve!</p>
        )
      ) : (
        <p>Better luck next time! Study more.</p>
      )}

      <Link
        className="ui button basic yellow"
        to="/quiz"
        onClick={props.resetAnswers}
      >
        Try again?
      </Link>
      <Link className="ui button basic blue" to="/">
        Home
      </Link>
    </div>
  );
};

export default Result;
