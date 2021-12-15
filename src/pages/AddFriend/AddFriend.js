import React from "react";
import * as styles from './addfriend.module.scss';
import SearchBar from "./SearchBar/SearchBar";

const AddFriend = () => {
  const [email, setEmail] = React.useState('');

  return (
    <div className={styles.container}>
      <SearchBar email={email} setEmail={setEmail} />
    </div>
  );
}

export default AddFriend;