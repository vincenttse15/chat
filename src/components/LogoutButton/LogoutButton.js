import React from 'react';
import * as styles from './logoutbutton.module.scss';
import { logout } from '../../redux/actions/userActions';
import { useDispatch } from 'react-redux';
import Cookies from 'universal-cookie';
import superagent from 'superagent';
import { API_URL } from '../../environment';
import { useHistory } from 'react-router';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LogoutButton = (props) => {
  const dispatch = useDispatch();
  const cookies = new Cookies();
  const history = useHistory();
  library.add(fas);

  const {
    ws, 
    setWs,
  } = props;

  async function handleLogout() {
    const loggedOut = await superagent.post(`${API_URL}/logout`)
      .send({ sessionId: cookies.get('session') });

    if (loggedOut) {
      cookies.remove('session');
      dispatch(logout());
      history.push("/");
      ws.close();
      setWs(null);
    }
  }

  return (
    <button className={styles.button} onClick={handleLogout}>
      <FontAwesomeIcon icon={["fas", "sign-out-alt"]} />
    </button>
  );
}

export default LogoutButton;