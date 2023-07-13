import React, { useEffect } from "react";

const Timer = ({ dispatch, secondsRemaining }) => {
  useEffect(() => {
    const intervalId = setInterval(() => {
      dispatch({
        type: "REDUCE_TIMER",
      });
    }, 1000);
    return () => clearInterval(intervalId);
  }, [dispatch]);
  const mins = Math.floor(secondsRemaining / 60);
  const secs = secondsRemaining % 60;
  return (
    <div className="timer">
      {mins < 10 ? `0${mins}` : mins}:{secs < 10 ? `0${secs}` : secs}
    </div>
  );
};

export default Timer;
