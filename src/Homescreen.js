import React from 'react';
import Row from "./Row";
import requests from './request';
import Banner from "./Banner";
import Nav from "./Nav";
 

function Homescreen() {

  return (
    <div>
     <Nav />
     <Banner />
     <Row isLargeRow={true} title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} />
     <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
     <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
     <Row title="Comdey Movies" fetchUrl={requests.fetchComedyMovies} />
     <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
     <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
     <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  )
}

export default Homescreen;