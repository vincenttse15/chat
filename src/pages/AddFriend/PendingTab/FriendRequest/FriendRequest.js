import React from "react";
import * as styles from "./friendrequest.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { acceptFriendRequest, declineFriendRequest } from "../../../../utility/Friend";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addNewFriend, removeFriendRequest, } from "../../../../redux/actions/friendActions";

const FriendRequest = (props) => {
  const {
    from
  } = props;

  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  const handleAccept = async () => {
    const added = await acceptFriendRequest(from, user.email);
    if (added.body.success) {
      dispatch(addNewFriend(added.body));
      dispatch(removeFriendRequest(from));
    }
  };

  const handleDecline = async () => {
    const removed = await declineFriendRequest(from, user.email);
    if (removed.body.success) {
      dispatch(removeFriendRequest(from));
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.text}>{from}</div>
      <div className={styles.btnContainer}>
        <button className={`${styles.btn} ${styles.accept}`} onClick={handleAccept}>
          <FontAwesomeIcon icon={["fas", "plus"]} className={styles.icon} />
        </button>
        <button className={`${styles.btn} ${styles.decline}`}>
          <FontAwesomeIcon icon={["fas", "minus"]} className={styles.icon} onClick={handleDecline}/>
        </button>
      </div>
    </div>
  );
};

export default FriendRequest;