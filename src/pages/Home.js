import React from "react";
import * as styles from "../styles/home.module.scss";

const Home = () => {
  return(
    <div className={styles.container}>
      <div className={styles.text_container}>
        <h1>
          Welcome to
          {' '}
          <span className={styles.blue_text}>Chatter</span>
        </h1>
        <h2>
          Add your friends and start chatting!
        </h2>
      </div>
    </div>
  )
};

export default Home;