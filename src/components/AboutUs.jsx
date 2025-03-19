import React from "react";
import "./AboutUs.css";
import { FaInstagram } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="about-us-wrapper">
      <div className="about-us-container">
        {/* Prvi stupac */}
        <div className="about-us-column">
          <p>Fast food "Rix"</p>
          <h2>v.l. Hrvoje Rikalo</h2>
          <h2>Fiskovićeva ul. 12, 20250, Orebić</h2>
          <h2>Mob:  091/222-2757</h2>
        </div>

        {/* Drugi stupac */}
        <div className="about-us-column">
          <p>Dostava</p>
          <h2>PON - SUB od 12 do 22 sata</h2>
          <h2>NED: Zatvoreno</h2>
        </div>

        {/* Treći stupac */}
        <div className="about-us-column">
          <p>Radno vrijeme</p>
          <h2>Ponedjeljak - subota od 12 do 22 sata</h2>
          <h2>Nedjeljom i praznikom zatvoreno</h2>
        </div>
      </div>

      {/* Created by container below the columns */}
      <div className="created-by-container">
        <p>
          <span className="created-by-text">Created by </span>
          <a
            href="https://www.linkedin.com/in/luka-%C5%A1ari%C4%87-7746b9261/"
           
            className="created-by-link"
          >
            ALPHA SOFTWARE
          </a>
        </p>
      </div>
    </div>
  );
};

export default AboutUs;