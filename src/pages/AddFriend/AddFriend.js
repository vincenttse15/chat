import React from "react";
import * as styles from './addfriend.module.scss';
import SearchBar from "./SearchBar/SearchBar";

const AddFriend = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h1>
          ADD FRIEND
        </h1>
        <h2>
          You can send a request to a friend with their email.
        </h2>
      </div>
      <SearchBar />
    </div>
  );
}

export default AddFriend;