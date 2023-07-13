import { useReducer } from "react";
function reducer(state, action) {
  switch (action.type) {
    case "INC":
      return {
        ...state,
        count: state.count + state.step,
      };
    case "DEC":
      return {
        ...state,
        count: state.count - state.step,
      };
    case "DEFINE_COUNT":
      return {
        ...state,
        count: action.payload,
      };
    case "DEFINE_STEP":
      return {
        ...state,
        step: action.payload,
      };
    case "RESET":
      return {
        count: 0,
        step: 1,
      };
    default:
      return state;
  }
}
function DateCounter() {
  const [{ count, step }, dispatch] = useReducer(reducer, {
    count: 0,
    step: 1,
  });
  // This mutates the date object.
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  const dec = function () {
    dispatch({
      type: "DEC",
    });
  };

  const inc = function () {
    dispatch({
      type: "INC",
    });
  };

  const defineCount = function (e) {
    dispatch({
      type: "DEFINE_COUNT",
      payload: Number(e.target.value),
    });
  };

  const defineStep = function (e) {
    dispatch({
      type: "DEFINE_STEP",
      payload: Number(e.target.value),
    });
  };

  const reset = function () {
    dispatch({
      type: "RESET",
    });
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounter;
