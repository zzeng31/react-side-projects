import React from "react";
import "./CharactersList.css";
import CharacterCard from "../components/CharacterCard";
import { useCharacters } from "../hooks/useCharacters";
import { Link } from "react-router-dom";
const CharactersList = () => {
  const { error, data, loading } = useCharacters();
  console.log({ error, data, loading });
  if (loading) return <h3>Loading...</h3>;
  if (error) return <h3>Something went wrong...</h3>;
  return (
    <>
      <Link to={"/search"}>Search Character</Link>
      <div className="CharacterList">
        {data.characters.results.map((character) => {
          return <CharacterCard character={character} key={character.id} />;
        })}
      </div>
    </>
  );
};

export default CharactersList;
