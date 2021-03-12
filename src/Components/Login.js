import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import "./Login.css";
import { Button } from "@material-ui/core";
import {useDispatch} from 'react-redux';
import { login } from "../features/userSlice";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
      display: "flex",
      flexDirection: "column",
    },
  },
  login: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    height: 550,
  },
}));

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const classes = useStyles();

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      login({
        userName: userName,
        password: password,
        loggedIn: true,
      })
    );
  };
  return (
    <div className={classes.login}>
      <h3>Login Here.</h3>
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={(e) => handleSubmit(e)}
      >
        <TextField
          value={userName}
          fullWidth
          name="userName"
          type="text"
          id="outlined-basic"
          label="User Name"
          variant="outlined"
          onChange={(e) => setUserName(e.target.value)}
        />
        <TextField
          value={password}
          name="password"
          type="password"
          id="outlined-basic"
          label="Password"
          variant="outlined"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button variant="contained" type="submit" size='large' color="primary">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Login;
