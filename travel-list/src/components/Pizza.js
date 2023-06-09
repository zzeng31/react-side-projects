import React from "react";
import "../index.css";
const Pizza = ({ photo, name, ingredients, price, soldOut }) => {
  return (
    <li className={`pizza ${soldOut ? "sold-out" : ""}`}>
      <img src={photo} alt="pizza" />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{soldOut ? "Sold Out" : price}</span>
      </div>
    </li>
  );
};

export default Pizza;
