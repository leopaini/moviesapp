import React from "react";
import { useState } from "../../store";
import styles from "./Movie.module.css";
import { IMovieProps } from "../../interfaces";
import { getPosterURL, toBoldStr } from "../../helpers";

const Movie: React.FunctionComponent<IMovieProps> = ({ movie }) => {
  const state = useState();

  const getStars = (rate: number) => {
    const stars = Math.ceil((rate * 5) / 10);
    const items = [];
    for (let i = 0; i < stars; i++) {
      items.push(<i className="fas fa-star" key={i}></i>);
    }
    return items;
  };

  const getOverview = (overview: string) => {
    if (state.filter !== "") {
      const boldOverview = toBoldStr(overview, state.filter);
      return { __html: boldOverview };
    }
    return { __html: overview };
  };

  return (
    <div className={styles.movie}>
      <div className={styles.imageWrapper}>
        <img
          alt={movie.title}
          className={styles.image}
          src={getPosterURL(movie.poster_path)}
        />
      </div>
      <div className={styles.description}>
        <h1 className={styles.title}>{movie.title}</h1>
        <div className={styles.rate}>
          <span className={styles.stars}>{getStars(movie.vote_average)}</span>
          <span className={styles.vote}>{movie.vote_count} voters</span>
        </div>
        <span className={styles.extraInfo}>
          <strong>Popularity:</strong> {movie.popularity}
        </span>
        <span className={styles.extraInfo}>
          <strong>Release Date:</strong> {movie.release_date}
        </span>
        <span
          className={styles.overview}
          dangerouslySetInnerHTML={getOverview(movie.overview)}></span>
      </div>
    </div>
  );
};

export default Movie;
