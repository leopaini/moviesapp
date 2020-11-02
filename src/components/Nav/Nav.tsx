import React from "react";
import { useDispatch } from "../../store";
import { INavProps } from "../../interfaces";

import styles from "./Nav.module.css";

const Nav: React.FunctionComponent<INavProps> = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = React.useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearch(event.target.value);
    dispatch({ type: "FILTER_BY", payload: { filter: event.target.value } });
  };

  const handleClick = (): void => {
    setSearch("");
    dispatch({ type: "FILTER_BY", payload: { filter: "" } });
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContent}>
        <span className={styles.logo}>
          <strong>movies</strong>app
        </span>
        <div className={styles.search}>
          <input
            type="text"
            value={search}
            onChange={handleChange}
            className={styles.searchInput}
            placeholder="Enter search here..."
          />
          <button className={styles.button} onClick={handleClick}>
            Clear
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
