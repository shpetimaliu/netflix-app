import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Nav.css";

function Nav() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const transitionNavBar = () => {
    if (window.scrollY > 10) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="container">
        <img
          onClick={() => navigate("/")}
          className="nav__logo"
          src="netflix.svg"
          alt="logo"
        />
        <img
          onClick={() => navigate("/profile")}
          className="nav__avatar"
          src="profile.jpeg"
          alt="Avatar"
        />
      </div>
    </div>
  );
}

export default Nav;
