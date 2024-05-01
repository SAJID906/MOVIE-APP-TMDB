import React, { useEffect, useReducer, createContext } from "react";
// import { AppReducer } from "./AppReducer";
// Call useReducer at the top level of your component to manage state with a reducer.
const AppReducer = (state, action) => {
  switch (action.type) {
    case "ADD_MOVIE_TO_WATCHLIST": {
      return {
        ...state,
        watchList: [action.payload, ...state.watchList],
      };
    }
    case "REMOVE_MOVIE_TO_WATCHLIST":{
      return{
        ...state,
        watchList:state.watchList.filter((movie)=>{
          return(movie.id!==action.payload)
        })
      }
    }
    case "ADD_MOVIE_TO_WATCHED" :{
      return{
        ...state,
        watched:[action.payload,...state.watched],
      }
    }
  }
};
const initialState = {
  watchList: localStorage.getItem("watchlist")
    ? JSON.parse(localStorage.getItem("watchlist"))
    : [],
  watched:localStorage.getItem("watched")?JSON.parse(localStorage.getItem("watched")): []
};
// create Context
export const GlobalContext = createContext(initialState);
// provider component
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  // console.log("reducer state", state);
  // when state change data store in local Storage
  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(state.watchList));
    localStorage.setItem("watched",JSON.stringify(state.watched));
  }, [state]);
  //action add to watchlist
  const addmoiveToWatchlist = (moive) => {
    dispatch({ type: "ADD_MOVIE_TO_WATCHLIST", payload: moive });
  };
// action remove from watchlist
const removeWatchlist=(id)=>{
  console.log("Removing movie with id sajid:", id); // Add this line to check the id
  dispatch({type:"REMOVE_MOVIE_TO_WATCHLIST",payload:id.id})
}
//ADD MOVIE TO WATCHED
const addmovieTowatched=(movie)=>{
  dispatch({type:"ADD_MOVIE_TO_WATCHED",payload:movie})
}
  return (
    <GlobalContext.Provider
      value={{
        watchList: state.watchList,
        watched: state.watched,
        addmoiveToWatchlist,
        removeWatchlist,
        addmovieTowatched,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
