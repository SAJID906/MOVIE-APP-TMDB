import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";

import WatchlistShow from "./WatchlistShow";
import MovieControl from "./MovieControl";

function WatchList() {
  const { watchList } = useContext(GlobalContext);
  return (
    // checkWatchList is empty or not
    watchList.length > 0 ? (
      <div className="row mt-5">
        {watchList.map((movie, id) => {
          return (
            <div key={movie.id} className="col-md-4 mb-5">
              <WatchlistShow movie={movie} type={"watchList"} />
              <MovieControl id={movie.id}/>
            </div>
          );
        })}
      </div>
    ) : (
      <div className="row ">
      <h3 className="text-center fw-bold text-primary p-4 mb-4 rounded">WatchList is Empty</h3>
      </div>

    )
    
  );
}

export default WatchList;
