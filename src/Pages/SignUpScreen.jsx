import React, { useRef } from "react";
import { auth } from "../firebase";
import "./SignUpScreen.css";

function SignUpScreen() {
  const emailReferenc = useRef(null);
  const passwordReferenc = useRef(null);

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(
        emailReferenc.current.value,
        passwordReferenc.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(
        emailReferenc.current.value,
        passwordReferenc.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="SignUpScreen">
      <form>
        <h1>Sign In / Sign Up</h1>
        <input ref={emailReferenc} placeholder="Email" type="email" />
        <input ref={passwordReferenc} placeholder="Password" type="password" />
        <button onClick={signIn}>Sign In</button>
        <h3>
          New to Netflix?{" "}
          <a href="/signup" onClick={register}>
            Signup Now
          </a>
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
