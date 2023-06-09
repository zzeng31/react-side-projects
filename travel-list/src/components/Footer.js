import React from "react";
import "../index.css";
import Order from "./Order";
const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 8;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  if (!isOpen)
    return (
      <p>
        We're happy to welcome you between {openHour}:00 and {closeHour}:00
      </p>
    );
  return (
    <footer className="footer">
      {isOpen && <Order openHour={openHour} closeHour={closeHour} />}
    </footer>
  );
};

export default Footer;
