import React, { useState } from "react";
import "./Steps.css";
const Steps = ({ steps }) => {
  const maxSteps = steps.length;
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  const previousHandler = () => {
    setStep((prevStep) => prevStep - 1);
  };
  const nextHandler = () => {
    setStep((prevStep) => prevStep + 1);
  };
  return (
    <>
      <button className="close" onClick={() => setIsOpen((prev) => !prev)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            {steps.map((_, index) => (
              <div
                className={`${step >= index + 1 ? "active" : ""}`}
                key={index}
              >
                {index + 1}
              </div>
            ))}
          </div>
          <p className="message">
            Step {step}: {steps[step - 1]}
          </p>
          <div className="buttons">
            <button
              className={`btn-next ${step === 1 ? "disabled" : ""}`}
              onClick={previousHandler}
              disabled={step === 1}
            >
              Previous
            </button>
            <button
              className={`btn-next ${step === maxSteps ? "disabled" : ""}`}
              onClick={nextHandler}
              disabled={step === maxSteps}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Steps;
