import React from "react";
import { useSelector } from "react-redux";
import * as styles from "./messages.module.scss";

const Messages = () => {
  const user = useSelector(state => state.userReducer);

  return (
    <div className={styles.name}>
      {user.firstName}
    </div>
  )
}

export default Messages;