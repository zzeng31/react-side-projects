import React from "react";
import { ACTIONS } from "../actions/actions";
const OperationButton = ({ operation, dispatch, className = "" }) => {
  return (
    <button
      className={className}
      onClick={() => {
        if (operation === "AC") {
          dispatch({
            type: ACTIONS.CLEAR,
          });
        } else if (operation === "=") {
          dispatch({
            type: ACTIONS.EVALUATE,
          });
        } else if (operation === "DEL") {
          dispatch({
            type: ACTIONS.DELETE_DIGIT,
          });
        } else {
          dispatch({
            type: ACTIONS.CHOOSE_OPETRATION,
            payload: {
              operation: operation,
            },
          });
        }
      }}
    >
      {operation}
    </button>
  );
};

export default OperationButton;
