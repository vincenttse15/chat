import React from "react";
import * as styles from '../styles/signup.module.scss';
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import { TextField } from "@material-ui/core";

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
  },
  focused: {},
}));

function InputTextField(props) {
  const classes = useStylesInput();

  return <TextField InputProps={{ classes, disableUnderline: true }} InputLabelProps={{ style: { color: "#FAFAFA" } }} {...props} />;
}

const Signup = () => {
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
      <form noValidate autoComplete="off" className={styles.form}>
        <div className={styles.name}>
          <InputTextField
            required
            type="text"
            variant="filled"
            label="First name"
          />
          <InputTextField
            required
            type="text"
            variant="filled"
            label="Last name"
          />
        </div>
      </form>
    </div>
  );
};

export default Signup;