import React from "react";
import * as styles from '../styles/signup.module.scss';
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { SuperAgent as superagent } from "superagent";
const font = "'Lato', sans-serif";

const useStylesInput = makeStyles((theme) => ({
  root: {
    borderBottom: "2px solid #FAFAFA",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    color: "#FAFAFA",
    fontFamily: font,
    backgroundColor: "#424242",
    '&:hover': {
      backgroundColor: "#424242",
    },
    '&$focused': {
      borderBottomColor: "#03a9f4",
      backgroundColor: "#424242",
    },
    '&$error': {
      borderBottomColor: "#ec407a",
    },
  },
  focused: {},
  error: {},
}));

const helperTextStyles = makeStyles((theme) => ({
  helperText: {
    color: "#ec407a!important",
    fontFamily: font,
    fontSize: "16px",
  },
}));

function InputTextField(props) {
  const classes = useStylesInput();
  const helper = helperTextStyles();

  return <TextField 
          InputProps={{ classes, disableUnderline: true }} 
          InputLabelProps={{ style: { color: "#FAFAFA" } }} 
          FormHelperTextProps={{ className: helper.helperText }} 
          {...props}
        />;
}

const Signup = () => {
  const [first, setFirst] = React.useState('');
  const [firstError, setFirstError] = React.useState(false);
  const [last, setLast] = React.useState('');
  const [lastError, setLastError] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [emailError, setEmailError] = React.useState(false);
  const [password, setPassword] = React.useState('');
  const [passwordError, setPasswordError] = React.useState(false);
  const [invalid, setInvalid] = React.useState(true);
  
  async function validate() {
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (first.length === 0) {
      setFirstError(true);
    } else {
      setFirstError(false);
    }

    if (last.length === 0) {
      setLastError(true);
    } else {
      setLastError(false);
    }

    if (email.length === 0 || !email.match(regex)) {
      setEmailError(true);
    }
    else {
      setEmailError(false);
    }

    if (password.length < 8) {
      setPasswordError(true);
    }
    else {
      setPasswordError(false);
    }

    setInvalid(firstError || lastError || emailError || passwordError);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await validate();
    
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>
        SIGN UP
      </h1>
      <h2 className={styles.h2}>
        Already have an account?
        {' '}
        <Link to="/login" className={styles.link}>Log in</Link>
      </h2>
      <form noValidate autoComplete="off" className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.name}>
          <InputTextField
            type="text"
            variant="filled"
            label="First name"
            onChange={(e) => setFirst(e.target.value)}
            error={firstError}
            helperText={firstError ? "This field is required." : ""}
          />
          <InputTextField
            type="text"
            variant="filled"
            label="Last name"
            onChange={(e) => setLast(e.target.value)}
            error={lastError}
            helperText={lastError ? "This field is required." : ""}
          />
        </div>
        <InputTextField
          type="text"
          variant="filled"
          label="Email"
          onChange={(e) => setEmail(e.target.value)}
          error={emailError}
          helperText={emailError ? "Invalid email address." : ""}
        />
        <InputTextField
          variant="filled"
          label="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          error={passwordError}
          helperText={passwordError ? "Password must be at least 8 characters." : ""}
        />
        <button type="submit" className={styles.button}>Create account</button>
      </form>
    </div>
  );
};

export default Signup;