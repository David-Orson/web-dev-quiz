import React, { useState } from "react";
import { Link } from "@reach/router";

import { questions } from "../Questions/JSQuestions";

const QuizCard = (props) => {
  const [index, setIndex] = useState(0);

  const answer = props.answers[index];

  const answerChange = (value) => {
    let newAnswers = [...props.answers];
    newAnswers[index] = value;

    console.log(newAnswers);

    props.setAnswers(newAnswers);
  };

  const { id, q, a1, a2, a3, a4 } = questions[index];
  return (
    <div className="ui container">
      <h3>{q}</h3>

      <input
        type="radio"
        checked={answer === 1}
        onClick={() => answerChange(1)}
      />
      <label>{a1}</label>
      <br />
      <input
        type="radio"
        checked={answer === 2}
        onClick={() => answerChange(2)}
      />
      <label>{a2}</label>
      <br />
      <input
        type="radio"
        checked={answer === 3}
        onClick={() => answerChange(3)}
      />
      <label>{a3}</label>
      <br />
      <input
        type="radio"
        checked={answer === 4}
        onClick={() => answerChange(4)}
      />
      <label>{a4}</label>
      <br />
      <br />
      {index > 0 ? (
        <button
          className="ui button yellow basic"
          onClick={() => setIndex(index - 1)}
        >
          Back
        </button>
      ) : null}

      {index < questions.length - 1 ? (
        <button
          className="ui button yellow"
          onClick={() => setIndex(index + 1)}
        >
          Next
        </button>
      ) : (
        <Link className="ui button green" to="/result">
          Finish
        </Link>
      )}
    </div>
  );
};

export default QuizCard;
