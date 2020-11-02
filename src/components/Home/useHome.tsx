import * as service from "../../api";
import { useStore } from "../../store";
import React, { useCallback, useEffect } from "react";
import { IMovie, IResultData, IStyles, IUseHomeProps } from "../../interfaces";

// Components
import Movie from "../Movie/Movie";

const useHome = (styles: IStyles): IUseHomeProps => {
  const [state, dispatch] = useStore();

  const setInitial = useCallback(
    (result: IResultData) => {
      dispatch({ type: "SET_INITIAL", payload: result });
    },
    [dispatch]
  );

  useEffect(() => {
    const getMovies = async () => {
      const result = await service.getMovies();
      setInitial(result);
    };

    getMovies();
  }, [setInitial]);

  const handleClick = async () => {
    const result = await service.getNextMovies(state.page);
    dispatch({ type: "ADD_MOVIES", payload: result });
  };

  const showMovies = (movie: IMovie) => (
    <li className={styles.listItem} key={movie.id}>
      <Movie movie={movie} />
    </li>
  );

  return {
    state,
    showMovies,
    handleClick
  };
};

export default useHome;
