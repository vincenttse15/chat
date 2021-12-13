import React from "react";
import * as styles from "../styles/home.module.scss";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text_container}>
        <h1 className={styles.h1}>
          Welcome to
          {' '}
          <span className={styles.blue_text}>Chatter</span>
        </h1>
        <h2 className={styles.h2}>
          Add your friends and start chatting!
        </h2>
        <Link to="/signup" className={styles.link}>
          SIGN UP FOR FREE
        </Link>
      </div>
    </div>
  )
};

export default Home;