import React from "react";
import useHome from "./useHome";
import { IHomeProps } from "../../interfaces";

// Styles
import styles from "./Home.module.css";

const Home: React.FunctionComponent<IHomeProps> = () => {
  const { state, showMovies, handleClick } = useHome(styles);

  return (
    <div className={styles.home}>
      <ul className={styles.listMenu}>
        {state.filter !== "" ? (
          state.filtered.length === 0 ? (
            <p className={styles.noResults}>
              Sorry, that filter combination has no results.
            </p>
          ) : (
            state.filtered.map(showMovies)
          )
        ) : (
          state.movies.map(showMovies)
        )}
      </ul>

      {state.filter === "" && state.page < state.total && (
        <div className={styles.buttonArea}>
          <button className={styles.button} onClick={handleClick}>
            Load more Movies...
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;
