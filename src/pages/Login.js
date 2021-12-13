import React from "react";
import * as styles from "../styles/login.module.scss";
import { Link, useHistory } from "react-router-dom";
import { InputTextField } from "./Signup";
import superagent from 'superagent';
import API_URL from "../environment";
import { useDispatch } from "react-redux";
import { login as loginAction } from "../redux/reducers/userReducer";

const Login = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [emailError, setEmailError] = React.useState(false);
  const [passwordError, setPasswordError] = React.useState(false);
  const [loginError, setLoginError] = React.useState('');
  const dispatch = useDispatch();
  const history = useHistory();

  async function validate(){
    if (email.length === 0) {
      setEmailError(true);
    }

    if (password.length === 0) {
      setPasswordError(true);
    }
    
    return (email.length === 0 || password.length === 0);
  }

  async function handleSubmit(e){
    e.preventDefault();
    const invalid = await validate();

    if (!invalid) {
      const login = await superagent.post(`${API_URL}/login`)
        .send({ email: email })
        .send({ password: password });

      if (login.body !== undefined && login.body?.success) {
        let date = new Date(Date.now() + 12096e5);
        date = date.toUTCString();
        document.cookie = `session=${login.body.cookie}; expires=${date}; path=/`;
        dispatch(loginAction());
        history.push("/messages");
      } else {
        setLoginError(login.body.message);
      }
    }
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>
        LOG IN
      </h1>
      <h2 className={styles.h2}>
        Don't have an account?
        {' '}
        <Link to="/signup" className={styles.link}>Sign up</Link>
      </h2>
      <form noValidate autoComplete="off" className={styles.form} onSubmit={handleSubmit}>
        <InputTextField
          type="text"
          variant="filled"
          label="Email address"
          onChange={(e) => setEmail(e.target.value)}
          error={emailError}
          helperText={emailError ? "This field is required" : ""}
        />
        <InputTextField
          type="password"
          variant="filled"
          label="Password"
          onChange={(e) => setPassword(e.target.value)}
          error={passwordError}
          helperText={passwordError ? "This field is required" : ""}
        />
        {loginError.length !== 0 && 
          <div className={styles.error}>
            {loginError}
          </div>
        }
        <button type="submit" className={styles.button}>Log in</button>
      </form>
    </div>
  )
};

export default Login;