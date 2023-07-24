import React from "react";
import CharactersList from "./pages/CharactersList";
import Character from "./pages/Character";
import Search from "./pages/Search";
import { Route, Routes } from "react-router";

//https://rickandmortyapi.com/graphql
function App() {
  return (
    <div className="App">
      <h1>Rick and Morty</h1>

      <Routes>
        <Route strict exact path="/" element={<CharactersList />} />
        <Route path="/search" element={<Search />} />
        <Route path="/:id" element={<Character />} />
      </Routes>
    </div>
  );
}

export default App;
