import React from "react";
import { useSelector } from "react-redux";
import * as styles from "./friendslist.module.scss";
import Friend from "./Friend/Friend";

export const FriendsList = () => {
  const friends = useSelector(state => state.friend.friends);

  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>
        FRIENDS LIST
      </h1>
      <div className={styles.friendsListContainer}>
        {friends.length > 0 ?
          friends.map((friend) => 
            <Friend firstName={friend.firstName} lastName={friend.lastName} email={friend.email} />
          )
          :
          <h2 className={styles.h2}>
            Friends list is empty.
          </h2>
        }
      </div>
    </div>
  )
};

export default FriendsList;