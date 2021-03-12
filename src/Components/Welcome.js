import { Button } from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import "./Login.css";
import { logout } from "../features/userSlice";

const Welcome = () => {
  const dispatch = useDispatch();
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };
  return (
    <div
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        height: 550,
      }}
    >
      <h1>Welcome! You have successfully logged in.</h1>
      <h3>This app is built using Redux.</h3>
      <Button
        size="large"
        variant="contained"
        color="primary"
        onClick={(e) => handleLogout(e)}
      >
        Logout
      </Button>
    </div>
  );
};

export default Welcome;
