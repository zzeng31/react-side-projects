import React from "react";
import Options from "./Options";
const Question = React.memo(({ question, dispatch, answer }) => {
  console.log("Question re-render");
  return (
    <div>
      <h4>{question.question}</h4>
      <Options question={question} dispatch={dispatch} answer={answer} />
    </div>
  );
});

export default Question;
