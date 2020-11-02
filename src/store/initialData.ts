import { IState } from "../interfaces";

export const initialState: IState = {
  movies: [],
  filter: "",
  filtered: [],
  page: 1,
  total: 0
};
