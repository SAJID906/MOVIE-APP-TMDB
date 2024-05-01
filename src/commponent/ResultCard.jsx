
import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";

function ResultCard({ movie }) {
  const { addmoiveToWatchlist, watchList, addmovieTowatched, watched } = useContext(GlobalContext);
  const storemovie = watchList.find((o) => o.id === movie.id);
  const watchlistDisabled = storemovie ? true : false;
  const storedWatched = watched.find((o) => o.id === movie.id);
  const watchedDisable = storedWatched ? true : false;

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
        <button className="btn btn-primary mx-3 " disabled={watchlistDisabled} onClick={() => addmoiveToWatchlist(movie)}>
          Add to Watchlist
        </button>
        <button className="btn btn-danger " disabled={watchedDisable} onClick={() => addmovieTowatched(movie)}>
          Add to Watched
        </button>
      </div>
    </div>
  );
}

export default ResultCard;

