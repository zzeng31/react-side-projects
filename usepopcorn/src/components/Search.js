import React, { useRef } from "react";
import { useKey } from "../hooks/useKey";
function Search({ query, setQuery }) {
  const inputRef = useRef();

  useKey("Enter", function () {
    if (document.activeElement === inputRef.current) return;
    inputRef.current.focus();
    setQuery("");
  });

  return (
    <input
      ref={inputRef}
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}

export default Search;
