import React, { useState } from "react";
import ResultCard from "./ResultCard";

function Add() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    setQuery(e.target.value);

    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=1884597fe7850d8aec58641a6a76d406&language=en-US&page=1&include_adult=false&query=${e.target.value}`
    );
    const data = await response.json();
    console.log(data);
    setMovies(data.results);
  };

  return (
    <div className="container">
      <div className="row w-75 m-auto">
        <input
          type="text"
          className="p-2 mt-5 rounded"
          value={query}
          onChange={handleSearch}
          placeholder="Search Movies"
        />
      </div>
      <div className="row mt-5">
        {movies.map((movie) => (
          <div key={movie.id} className="col-md-4 mb-5">
            <ResultCard movie={movie}/> 
          </div>
        ))}
      </div>
    </div>
  );
}

export default Add;
