import React from "react";
import * as styles from "../styles/navbar.module.scss";
import { library } from '@fortawesome/fontawesome-svg-core';
import { far } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  library.add(far);
  return (
    <div className={styles.container}>
      <FontAwesomeIcon icon={["far", "comments"]} className={styles.icon} />
      <div className={styles.right}>
        <NavLink exact to="/" className={styles.link} activeClassName={styles.active}>Home</NavLink>
        <NavLink to="/login" className={styles.link} activeClassName={styles.active}>Login</NavLink>
        <NavLink to="/signup" className={styles.link} activeClassName={styles.active}>Sign up</NavLink>
      </div>
    </div>
  );
}

export default Navbar;