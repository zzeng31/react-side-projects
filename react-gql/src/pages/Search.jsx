import React from "react";
import { useSearch } from "../hooks/useSearch";
import CharacterCard from "../components/CharacterCard";
const Search = () => {
  const { executeQuery, loading, error, data, called, setValue, name } =
    useSearch();
  console.log({ loading, error, data, called });
  return (
    <div>
      <input value={name} onChange={(e) => setValue(e.target.value)} />
      <button onClick={executeQuery}>Search</button>
      {loading && <h3>Loading...</h3>}
      {error && <h3>Something went wrong...</h3>}
      {data && data.characters.results.length === 0 && <h3>No result</h3>}
      {data && (
        <ul>
          {data.characters.results.map((character) => (
            <CharacterCard character={character} key={character.id} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Search;
