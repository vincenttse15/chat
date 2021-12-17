import React from "react";
import * as styles from "./navbar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import LogoutButton from '../LogoutButton/LogoutButton';

const Navbar = (props) => {
  const user = useSelector(state => state.userReducer);
  const {
    ws,
    setWs,
  } = props;

  return (
    <div className={styles.container}>
      <FontAwesomeIcon icon={["far", "comments"]} className={styles.icon} />
      {user.firstName && user.firstName !== ''
        ?
        <div className={styles.right}>
          <NavLink exact to="/messages" className={styles.link} activeClassName={styles.active}>
            <FontAwesomeIcon icon={["far", "comment"]} />
          </NavLink>
          <NavLink to="/addfriend" className={styles.link} activeClassName={styles.active}>
            <FontAwesomeIcon icon={["fas", "user-plus"]} />
          </NavLink>
          <LogoutButton ws={ws} setWs={setWs}/>
        </div>
        :
        <div className={styles.right}>
          <NavLink exact to="/" className={styles.link} activeClassName={styles.active}>
            <FontAwesomeIcon icon={["fas", "home"]} />
          </NavLink>
          <NavLink to="/login" className={styles.link} activeClassName={styles.active}>
            <FontAwesomeIcon icon={["fas", "sign-in-alt"]} />
          </NavLink>
          <NavLink to="/signup" className={styles.link} activeClassName={styles.active}>Sign up</NavLink>
        </div>
      }
    </div>
  );
}

export default Navbar;