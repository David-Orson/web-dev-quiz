import React from "react";

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

  const score = `${marked.reduce((total, num) => total + num)} / ${
    questions.length
  }`;

  console.log(marked);

  console.log(score);

  return (
    <div className="ui container">
      <h1>Result</h1>
      <p>Your Score is {score}</p>
    </div>
  );
};

export default Result;
