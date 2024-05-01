
import React from 'react';

function WatchlistShow({ movie, type }) {
  return (
    <div className="card mb-3">
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title}
        className="card-img-top"
      />
      <div className="card-body">
        <h5 className="card-title">{movie.title.substring(0, 40)}</h5>
        <p className="card-text">
          {movie.release_date ? movie.release_date.substring(0, 4) : "--"}
        </p>
      </div>
    </div>
  );
}

export default WatchlistShow;
