import React from "react";
import { Link } from "react-router-dom";
const CharacterCard = ({ character }) => {
  return (
    <Link to={`/${character.id}`}>
      <img src={character.image} alt="rick&morty character" />
      <h2>{character.name}</h2>
    </Link>
  );
};

export default CharacterCard;
