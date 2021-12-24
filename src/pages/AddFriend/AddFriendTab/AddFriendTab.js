import React from "react";
import * as styles from './addfriendtab.module.scss';
import SearchBar from "../SearchBar/SearchBar";

const AddFriendTab = () => {
  return (
    <>
      <div className={styles.text}>
        <h1>
          ADD FRIEND
        </h1>
        <h2>
          You can send a request to a friend with their email.
        </h2>
      </div>
      <SearchBar />
    </>
  );
}

export default AddFriendTab;