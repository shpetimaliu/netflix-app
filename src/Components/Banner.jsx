import React from "react";
import "./Banner.css";

function Banner() {
  return (
    <div
      className="Banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url('https://images.pexels.com/videos/3045163/free-video-3045163.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500')`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">Movie Name</h1>
        <div className="banner__buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <h1 className="banner__description">
          This is a test description NETFLIX
        </h1>
      </div>
      <div className="banner--fadeBottom"></div>
    </div>
  );
}

export default Banner;
