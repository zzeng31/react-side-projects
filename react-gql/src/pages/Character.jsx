import React from "react";
import { useCharacter } from "../hooks/useCharacter";
import "./Character.css";
import { useParams } from "react-router";
const Character = () => {
  const { id } = useParams();
  const { data, loading, error } = useCharacter(id);

  console.log({ error, data, loading });

  if (loading) return <h3>Loading...</h3>;
  if (error) return <h3>Something went wrong...</h3>;
  return (
    <div className="character">
      <img src={data.character.image} alt={data.character.name} />
      <div className="character-content">
        <h1>{data.character.name}</h1>
        <p>{data.character.gender}</p>
        <div className="character-episode">
          {data.character.episode.map((episode) => (
            <div key={episode.name}>{episode.name}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Character;
