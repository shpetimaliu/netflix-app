import axios from "axios";
import React, { useEffect, useState } from "react";
import Requests from "../api/Requests";
import "./Banner.css";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetch() {
      const request = await axios.get(Requests.fetchNetflixOriginals);
      setMovie(
        request?.data?.results[
          Math.floor(Math.random() * request?.data?.results.length - 1)
        ]
      );
    }
    fetch();
  }, []);

  console.log(movie);

  function shortText(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }

  return (
    <div
      className="Banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <h1 className="banner__description">
          {shortText(movie?.overview, 150)}
        </h1>
      </div>
      <div className="banner--fadeBottom"></div>
    </div>
  );
}

export default Banner;
