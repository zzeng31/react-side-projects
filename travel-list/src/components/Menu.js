import React, { Fragment } from "react";
import Pizza from "./Pizza";
import "../index.css";
const Menu = ({ pizzaData }) => {
  const pizzas = pizzaData;
  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {pizzas.length > 0 ? (
        <Fragment>
          <p>
            Authentic Italian cuisine. {pizzas.length} cretive dishes to choose
            from. All from our stone oven, all organic, all delicious
          </p>
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza
                photo={pizza.photoName}
                name={pizza.name}
                key={pizza.name}
                ingredients={pizza.ingredients}
                price={pizza.price}
                soldOut={pizza.soldOut}
              />
            ))}
          </ul>
        </Fragment>
      ) : (
        <p>We're still working on our menu. Please come back later :)</p>
      )}
    </main>
  );
};

export default Menu;
