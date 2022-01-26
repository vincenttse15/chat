import React from "react";
import * as styles from "./friendrequest.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FriendRequest = (props) => {
  const {
    from
  } = props;

  return (
    <div className={styles.container}>
      <div className={styles.text}>{from}</div>
      <div className={styles.btnContainer}>
        <button className={`${styles.btn} ${styles.accept}`}>
          <FontAwesomeIcon icon={["fas", "plus"]} className={styles.icon} />
        </button>
        <button className={`${styles.btn} ${styles.decline}`}>
          <FontAwesomeIcon icon={["fas", "minus"]} className={styles.icon} />
        </button>
      </div>
    </div>
  );
};

export default FriendRequest;