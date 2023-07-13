import React from "react";

const NextButton = React.memo(({ dispatch, answer, index, numQuestions }) => {
  if (answer === null) return null;
  if (index < numQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "NEXT_QUESTION" })}
      >
        Next
      </button>
    );
  if (index === numQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "FINISH_QUESTION" })}
      >
        Finish
      </button>
    );
});

export default NextButton;
