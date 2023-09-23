import React from "react";
import { useSelector } from "react-redux";
import Nav from "../Components/Nav";
import "./ProfileScreen.css";
import { selectUser } from "./features/userSlice";

function ProfileScreen() {
  const user = useSelector(selectUser);

  return (
    <div className="profileScreen">
      <Nav />
      <div className="body">
        <h1>Your profile</h1>
        <div className="profileScreen__info">
          <img src="profile.jpeg" alt="avatar" />
          <div className="profileScreen__details">
            <h2>{user.email}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
