import React, { useState } from "react";
import { Link } from "@reach/router";

import questions from "../Questions/JSQuestions";

const QuizCard = () => {
  const [answers, setAnswers] = useState(["a1", "a2"]);
  const [index, setIndex] = useState(0);

  const answer = answers[index];

  const answerChange = (value) => {
    let tempAnswers = [...answers];
    tempAnswers[index] = value;

    console.log(tempAnswers);

    setAnswers(tempAnswers);
  };

  const { id, q, a1, a2, a3, a4, correct } = questions[index];
  return (
    <div className="ui container">
      <h1>Card</h1>

      <h3>{q}</h3>

      <input
        type="radio"
        checked={answer === "a1"}
        onClick={() => answerChange("a1")}
      />
      <label>{a1}</label>

      <input
        type="radio"
        checked={answer === "a2"}
        onClick={() => answerChange("a2")}
      />
      <label>{a2}</label>

      <input
        type="radio"
        checked={answer === "a3"}
        onClick={() => answerChange("a3")}
      />
      <label>{a3}</label>

      <input
        type="radio"
        checked={answer === "a4"}
        onClick={() => answerChange("a4")}
      />
      <label>{a4}</label>

      {index > 0 ? (
        <button className="ui button" onClick={() => setIndex(index - 1)}>
          Back
        </button>
      ) : null}

      {index < questions.length - 1 ? (
        <button className="ui button" onClick={() => setIndex(index + 1)}>
          Next
        </button>
      ) : (
        <Link className="ui button" to="/result">
          Finish
        </Link>
      )}

      <Link className="ui button" to="/">
        Home
      </Link>
    </div>
  );
};

export default QuizCard;
