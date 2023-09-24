import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Nav from "../Components/Nav";
import Plans from "../Components/Plans";
import { selectUser } from "../features/userSlice";
import { auth } from "../firebase";
import "./ProfileScreen.css";

function ProfileScreen() {
  const user = useSelector(selectUser);
  const navigate = useNavigate();

  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreen__body">
        <h1>Your profile</h1>
        <div className="profileScreen__info">
          <img className="avatar__photo" src="profile.jpeg" alt="avatar" />
          <div className="profileScreen__details">
            <h2>{user.email}</h2>
            <div className="profileScreen__plans">
              <h3>Plans</h3>
              <Plans />
              <button
                onClick={() => auth.signOut()}
                className="profileScreen__signout"
              >
                Sign Out
              </button>
              <button onClick={() => navigate("/")} className="btn-backHome">
                Back to home 🏠
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
