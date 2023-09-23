import React from "react";
import "./LoginScreen.css";

function LoginScreen() {
  return (
    <div className="LoginScreen">
      <div className="login_background">
        <img className="login__logo" src="netflix.svg" alt="logo" />
        <button className="loginScreen__button">Sign In</button>
      </div>
    </div>
  );
}

export default LoginScreen;
