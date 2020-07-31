import React, { useState } from "react";

import QuizCard from "../components/QuizCard";

const Quiz = (props) => {
  return (
    <div className="ui container">
      <h1>Quiz</h1>
      <QuizCard answers={props.answers} setAnswers={props.setAnswers} />
    </div>
  );
};

export default Quiz;
