import React from 'react'
import { GlobalContext } from '../Context/GlobalState'
import { useContext } from 'react'

function MovieControl({id,movie}) {
    const{removeWatchlist,addmovieTowatched}=useContext(GlobalContext)
    // console.log("id of control movie",id)
  return (
    <div className='row'>

<div className='col-md-6 text-start p-0'><button onClick={()=>removeWatchlist({id})} className='btn btn-primary'>del</button></div>
    </div>
  )
}

export default MovieControl