import React ,{useContext} from 'react'
import { GlobalContext } from '../Context/GlobalState'
import WatchlistShow from './WatchlistShow';


function Watched() {
  const { watched } = useContext(GlobalContext);
  return (
    // checkWatchList is empty or not
    watched.length > 0 ? (
      <div className="row mt-5">
        {watched.map((movie, id) => {
          return (
            <div key={movie.id} className="col-md-3 ">
              <div
  className="card"
  style={{
    width: '14rem'
  }}
>
  <img
    alt={movie.title}
    className="card-img-top "
    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
  />
  <div className="card-body">
    <p className="card-title">
      {movie.title.substring(0,40)}
    </p>
    <p className='card-text'>
    {movie.release_date ? movie.release_date.substring(0, 4) : "--"}
    </p>
  </div>
</div>
             
            </div>
          );
        })}
      </div>
    ) : (
      <div className="row ">
      <h3 className="text-center fw-bold text-primary p-4 mb-4 rounded">Watched Empty</h3>
      </div>
    )
    
  );
}

export default Watched