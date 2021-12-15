import React from "react";
import * as styles from "./searchbar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchBar = (props) => {
  const {
    email,
    setEmail
  } = props;

  return (
    <div className={styles.container}>
      <button className={styles.searchButton}>
        <FontAwesomeIcon icon={["fas", "search"]} className={styles.icon} />
      </button>
      <input type="text" className={styles.input} placeholder="Search by email" onChange={(e) => setEmail(e.target.value)}>
      </input>
    </div>
  );
}

export default SearchBar;