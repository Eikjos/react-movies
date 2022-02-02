import { createStore } from "redux";

const initialState = {
  movies: [],
};

const actionTypes = {
  ADD: "add",
  REMOVE: "remove",
};

export const add = (movie) => {
  return {
    type: actionTypes.ADD,
    movie,
  };
};

export const remove = (movie) => {
  return {
    type: actionTypes.REMOVE,
    movie,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD:
      return {
        ...state,
        movies: [...state.movies, action.movie],
      }
    case actionTypes.REMOVE:
      console.log(action.movie);
      return {
        ...state,
        movies: state.movies.filter((movie) => movie !== action.movie),
      };
    default:
      return state;
  }
};

export default createStore(reducer);
