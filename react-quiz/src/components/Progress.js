import React from "react";

const Progress = React.memo(
  ({ index, numQuestions, points, maxPossiblePoints, answer }) => {
    console.log("Progress re-render");
    return (
      <header className="progress">
        <progress max={numQuestions} value={index + Number(answer !== null)} />
        <p>
          Question <strong>{index + 1}</strong> / {numQuestions}
        </p>
        <p>
          <strong>{points}</strong>/{maxPossiblePoints}
        </p>
      </header>
    );
  }
);

export default Progress;
