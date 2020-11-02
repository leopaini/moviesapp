import Action from "./actions";
import { IMovie, IState } from "../interfaces";

function reducers(state: IState, action: Action) {
  switch (action.type) {
    case "SET_INITIAL": {
      const page = action.payload.page;
      const total = action.payload.total;
      const movies = action.payload.movies;
      return { ...state, movies, page, total };
    }
    case "ADD_MOVIES": {
      const page = action.payload.page;
      const total = action.payload.total;
      const movies = [...state.movies, ...action.payload.movies];
      return { ...state, movies, page, total };
    }
    case "FILTER_BY": {
      const filter = action.payload.filter.toLowerCase();
      const movies = [...state.movies];
      let filtered = movies.filter((movie: IMovie) =>
        movie.overview.toLowerCase().includes(filter)
      );
      return { ...state, filtered, filter };
    }
    default:
      return state;
  }
}

export default reducers;
