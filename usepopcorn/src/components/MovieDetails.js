import React, { useState, useRef, useEffect } from "react";
import StarRating from "./StarRating";
import Loader from "./Loader";
import { myAPIKey } from "../utils/myAPIKey";
import { useKey } from "../hooks/useKey";
function MovieDetails({ selectedId, onCloseMovie, onAddWatched, watched }) {
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(false);
  const [userRating, setUserRating] = useState("");
  const countRef = useRef(0);
  useEffect(() => {
    if (userRating) countRef.current = countRef.current + 1;
  }, [userRating]);
  const {
    imdbID,
    Title: title,
    Year: year,
    Poster: poster,
    Runtime: runtime,
    imdbRating,
    Plot: plot,
    Released: released,
    Actors: actors,
    Director: director,
    Genre: genre,
  } = movie;

  const isWatched = watched.find((movie) => movie.imdbID === imdbID);
  const watchedUserRating = watched.find(
    (movie) => movie.imdbID === imdbID
  )?.userRating;
  useKey("Escape", onCloseMovie);
  useEffect(
    function () {
      setLoading(true);
      const getMovieDetails = async () => {
        const res = await fetch(
          `https://www.omdbapi.com/?apikey=${myAPIKey}&i=${selectedId}`
        );
        const data = await res.json();
        setMovie(data);
        console.log(data);
        setLoading(false);
      };
      getMovieDetails();
    },
    [selectedId]
  );
  useEffect(() => {
    if (!title) return;
    document.title = `Movie | ${title}`;
    return () => {
      document.title = `usePopcorn`;
    };
  }, [title]);

  const handleAdd = () => {
    const newWatchedMovie = {
      imdbID: selectedId,
      poster,
      title,
      year,
      imdbRating: Number(imdbRating),
      runtime: Number(runtime.split(" ").at(0)),
      userRating,
      countRatingDecisions: countRef.current,
    };
    onAddWatched(newWatchedMovie);

    // onCloseMovie();
  };

  const isTop = imdbRating > 8;
  console.log(isTop);
  return (
    <div className="details">
      {loading ? (
        <Loader />
      ) : (
        <>
          <header>
            <button className="btn-back" onClick={onCloseMovie}>
              &larr;
            </button>
            <img src={poster} alt={`Poster of ${movie} movie`} />
            <div className="details-overview">
              <h2>{title}</h2>
              <p>{released} &bull;</p>
              <p>{genre}</p>
              <p>
                <span>⭐️</span>
                {imdbRating} IMDb Rating
              </p>
            </div>
          </header>

          <section>
            <div className="rating">
              {!isWatched && (
                <>
                  <StarRating
                    maxRating={10}
                    size={24}
                    key={selectedId}
                    onSetRating={setUserRating}
                  />
                  {userRating > 0 && (
                    <button className="btn-add" onClick={handleAdd}>
                      + Add to list
                    </button>
                  )}
                </>
              )}
              {isWatched && (
                <p>You already rated this movie {watchedUserRating} ⭐️</p>
              )}
            </div>

            <p>
              <em>{plot}</em>
            </p>
            <p>Starring {actors}</p>
            <p>Directed by {director}</p>
          </section>
        </>
      )}
    </div>
  );
}

export default MovieDetails;
