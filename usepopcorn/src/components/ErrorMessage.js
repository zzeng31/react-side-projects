import React from "react";

function ErrorMessage({ message }) {
  return (
    <p className="error">
      {message}
      <span>🚫</span>
    </p>
  );
}

export default ErrorMessage;
