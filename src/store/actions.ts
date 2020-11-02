import { IMovie } from "../interfaces";

type Action =
  | {
      type: "SET_INITIAL";
      payload: {
        page: number;
        total: number;
        movies: IMovie[];
      };
    }
  | {
      type: "ADD_MOVIES";
      payload: {
        page: number;
        total: number;
        movies: IMovie[];
      };
    }
  | {
      type: "FILTER_BY";
      payload: {
        filter: string;
      };
    };

export default Action;
