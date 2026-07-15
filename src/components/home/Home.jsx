import React from 'react';
import Data from './Data';
import "./home.css";
import ScrollDown from './ScrollDown';
import Social from './Social';

const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home_atmosphere" aria-hidden="true"></div>
      <div className="home_container container">
        <div className="home_contents">
          <Social />
          <Data />
          <div className="home_media" aria-hidden="false">
            <div className="home_img" role="img" aria-label="Portrait of Shreeraj Pawar"></div>
          </div>
        </div>
        <ScrollDown />
      </div>
    </section>
  );
};

export default Home;
