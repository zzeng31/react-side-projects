import { useState } from "react";

import NavBar from "./components/NavBar";
import Logo from "./components/Logo";
import Loader from "./components/Loader";
import Box from "./components/Box";
import Search from "./components/Search";
import MovieDetails from "./components/MovieDetails";
import MovieList from "./components/MovieList";
import Main from "./components/Main";
import ErrorMessage from "./components/ErrorMessage";
import WatchedList from "./components/WatchedList";
import WatchedSummary from "./components/WatchedSummary";
import NumResults from "./components/NumResults";
import { useMovies } from "./hooks/useMovies";
import { useLocalStorageState } from "./hooks/useLocalStorageState";
export default function App() {
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  const onSelectMovie = (id) => {
    setSelectedId((selectedId) => (id === selectedId ? null : id));
  };
  const handleCloseMovie = () => {
    setSelectedId(null);
  };
  const handleAddWatched = (movie) => {
    setWatched((watch) => [...watch, movie]);
  };
  const handleDeleteWatched = (id) => {
    setWatched((watched) => watched.filter((movie) => movie.imdbID !== id));
  };
  const [watched, setWatched] = useLocalStorageState([], "watched");
  const { movies, isLoading, error } = useMovies(query, handleCloseMovie);
  return (
    <>
      <NavBar>
        <Logo />
        <Search query={query} setQuery={setQuery} />
        <NumResults movies={movies} />
      </NavBar>
      <Main>
        <Box>
          {!isLoading && !error && (
            <MovieList movies={movies} onSelectMovie={onSelectMovie} />
          )}
          {isLoading && !error && <Loader />}
          {error && <ErrorMessage message={error} />}
        </Box>
        <Box>
          {selectedId ? (
            <MovieDetails
              selectedId={selectedId}
              onCloseMovie={handleCloseMovie}
              onAddWatched={handleAddWatched}
              watched={watched}
            />
          ) : (
            <>
              <WatchedSummary watched={watched} />
              <WatchedList
                watched={watched}
                onDeleteWatchedMovie={handleDeleteWatched}
              />
            </>
          )}
        </Box>
      </Main>
    </>
  );
}
