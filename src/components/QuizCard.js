import React, { useState } from "react";
import { Link } from "@reach/router";

import { questions } from "../Questions/JSQuestions";

import AnswerSelector from "./AnswerSelector";

const QuizCard = (props) => {
  const [index, setIndex] = useState(0);

  const userAnswer = props.userAnswers[index];

  const answerChange = (value) => {
    let newAnswers = [...props.userAnswers];
    newAnswers[index] = value;

    console.log(newAnswers);

    props.setAnswers(newAnswers);
  };

  const { id, q, questionAnswers } = questions[index];

  const answerArray = Object.values(questionAnswers);

  const answerMarkup = answerArray.map((correctAnswer, answerSelectorIndex) => (
    <AnswerSelector
      correctAnswer={correctAnswer}
      userAnswer={userAnswer}
      answerChange={answerChange}
      key={answerSelectorIndex}
      index={answerSelectorIndex}
    />
  ));

  return (
    <div className="ui container">
      <h3>{q}</h3>
      {answerMarkup}
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
