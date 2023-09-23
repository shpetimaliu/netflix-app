import React from "react";
import "./LoginScreen.css";

function LoginScreen() {
  return (
    <div className="LoginScreen">
      <div className="login_background">
        <img className="login__logo" src="netflix.svg" alt="logo" />
        <button className="loginScreen__button">Sign In</button>
        <div className="loginScreen__fade" />
      </div>
      <div className="body">
        <>
          <h1>Unlimited movies, TV shows, and more</h1>
          <h2>Watch anywhere. Cancel anytime.</h2>
          <p>
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <div className="input">
            <form>
              <input type="email" placeholder="Email address" />
              <button className="button__getStarted">Get Started &gt;</button>
            </form>
          </div>
        </>
      </div>
    </div>
  );
}

export default LoginScreen;
