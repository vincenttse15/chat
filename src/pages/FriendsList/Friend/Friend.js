import React from "react";
import * as styles from "./friend.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { removeFriend } from "../../../utility/Friend";
import { useSelector, useDispatch } from "react-redux";
import { removeFriend as removeFriendAction } from "../../../redux/actions/friendActions";

export const Friend = (props) => {
  const {
    firstName,
    lastName,
    email
  } = props;

  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  const handleRemoveFriend = async () => {
    const removed = await removeFriend(email, user.email);
    if (removed.body.success) {
      dispatch(removeFriendAction(email));
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <div>{firstName + " " + lastName}</div>
        <div className={styles.email}>{email}</div>
      </div>
      <div className={styles.btnContainer}>
        <button className={styles.btn}>
          <FontAwesomeIcon icon={["fas", "comment"]} className={styles.icon} />
        </button>
        <button className={styles.btn} onClick={handleRemoveFriend}>
          <FontAwesomeIcon icon={["fas", "user-minus"]} className={styles.icon} />
        </button>
      </div>
    </div>
  )
};

export default Friend;