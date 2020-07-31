import React, { useState } from "react";
import { Link } from "@reach/router";

import questions from "../Questions/JSQuestions";

const QuizCard = () => {
  const [answer, setAnswer] = useState("a1");
  const [index, setIndex] = useState(0);

  const { id, q, a1, a2, a3, a4, correct } = questions[index];
  return (
    <div className="ui container">
      <h1>Card</h1>

      <h3>{q}</h3>

      <input
        type="radio"
        checked={answer === "a1"}
        onClick={() => setAnswer("a1")}
      />
      <label>{a1}</label>

      <input
        type="radio"
        checked={answer === "a2"}
        onClick={() => setAnswer("a2")}
      />
      <label>{a2}</label>

      <input
        type="radio"
        checked={answer === "a3"}
        onClick={() => setAnswer("a3")}
      />
      <label>{a3}</label>

      <input
        type="radio"
        checked={answer === "a4"}
        onClick={() => setAnswer("a4")}
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
