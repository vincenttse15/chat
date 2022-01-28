import React from "react";
import { useSelector } from "react-redux";
import * as styles from "./friendslist.module.scss";

export const FriendsList = () => {
  const friends = useSelector(state => state.friend.friends);

  return (
    <div className={styles.container}>
      
    </div>
  )
};

export default FriendsList;