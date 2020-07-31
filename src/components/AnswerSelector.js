import React from "react";

const AnswerSelector = (props) => {
  return (
    <div>
      <input
        style={{ margin: 8 }}
        type="radio"
        checked={props.userAnswer === props.index}
        onClick={() => props.answerChange(props.index)}
      />
      <label>{props.correctAnswer}</label>
    </div>
  );
};

export default AnswerSelector;
