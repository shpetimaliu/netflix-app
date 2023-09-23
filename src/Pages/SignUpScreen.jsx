import React from "react";
import "./SignUpScreen.css";

function SignUpScreen() {
  return (
    <div className="SignUpScreen">
      <form>
        <h1>Sign In / Sign Up</h1>
        <input placeholder="Email" type="email" />
        <input placeholder="Password" type="password" />
        <button>Sign In</button>
        <h3>
          New to Netflix? <a href="/signup">Signup Now</a>
        </h3>
        <p>
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
          Learn more.
        </p>
      </form>
    </div>
  );
}

export default SignUpScreen;
