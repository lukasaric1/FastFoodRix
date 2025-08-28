import React from "react";
import "./AboutUs.css";
import { FaInstagram } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="about-us-wrapper">
      <div className="about-us-container">
        {/* Prvi stupac */}
        <div className="about-us-column">
          <p>FAST FOOD "RIX"</p>
          <h2>v.l. Hrvoje Rikalo</h2>
          <h2>Fiskovićeva ul. 12, 20250, Orebić</h2>
          <h2>Mob:  091/222-2757</h2>
        </div>

        {/* Drugi stupac */}
        <div className="about-us-column">
          <p>DOSTAVA:</p>
          <h2>PON - SUB od 12 do 22 sata</h2>
          <h2>NED: Zatvoreno</h2>
        </div>

        {/* Treći stupac */}
        <div className="about-us-column">
          <p>RADNO VRIJEME:</p>
          <h2>Ponedjeljak - subota od 12 do 22 sata</h2>
          <h2>Nedjeljom i praznikom zatvoreno</h2>
        </div>
      </div>

      {/* Created by container below the columns */}
      <div className="created-by-container">
        <p>
          <span className="created-by-text">Created by </span>
          <a
            href="https://www.sidrona.com/"
           
            className="created-by-link"
          >
            SIDRONA
          </a>
        </p>
      </div>
    </div>
  );
};

export default AboutUs;