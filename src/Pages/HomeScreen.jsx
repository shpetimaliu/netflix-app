import React from "react";
import Banner from "../Components/Banner";
import Nav from "../Components/Nav";
import Row from "../Components/Row";
import Requests from "../api/Requests.js";

function HomeScreen() {
  return (
    <div className="homeScreen">
      <Nav />
      <Banner />
      <Row
        title="Netflix Originals"
        fetchUrl={Requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Top Rated" fetchUrl={Requests.fetchTopRated} />
      <Row title="Trading" fetchUrl={Requests.fetchTrading} />
      <Row title="Action Movies" fetchUrl={Requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={Requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={Requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={Requests.fetchRomanceMovies} />
      <Row
        title="Documentaries Movies"
        fetchUrl={Requests.fetchDocumentariesMovies}
      />
    </div>
  );
}

export default HomeScreen;
