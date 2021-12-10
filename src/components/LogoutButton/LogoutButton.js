import React from 'react';
import * as styles from './logoutbutton.module.scss';
import { logout } from '../../redux/reducers/userReducer';
import { useDispatch } from 'react-redux';
import Cookies from 'universal-cookie';
import superagent from 'superagent';
import API_URL from '../../environment';
import { useHistory } from 'react-router';
const LogoutButton = () => {
  const dispatch = useDispatch();
  const cookies = new Cookies();
  const history = useHistory();

  async function handleLogout() {
    const loggedOut = await superagent.post(`${API_URL}/logout`)
      .send({ sessionId: cookies.get('session')});
    
    if (loggedOut) {
      cookies.remove('session');
      dispatch(logout());
      history.push("/");
    }
  }

  return (
    <button className={styles.button} onClick={handleLogout}>Logout</button>
  );
}

export default LogoutButton;