import React from 'react';
import "./TopAppBar.css";
import { HiPhone } from "react-icons/hi";
import { FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';

function TopAppBar() {

  const scrollToMenu = () => {
    const menuSection = document.getElementById("menu");
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToLocation = () => {
    const locationSection = document.getElementById("location");
    if (locationSection) {
      locationSection.scrollIntoView({ behavior: "smooth" });
    }
  };


  return (
    <div className="app-bar">


      <div className='social-media-items'>
       
        <a href="https://www.instagram.com/fast_food_rix/" className="social-media-item">
          <FaInstagram icon={FaInstagram} className="icon" /> FAST FOOD RIX
        </a>
      </div>
      
      <div className='contact-items'>
        <a href="tel:+385 91 2222 757" className="contact-item">
          <HiPhone icon={HiPhone} /> +385 91 2222 757
        </a>
      </div> 

      

      <div className="app-bar-right">
        <a onClick={scrollToMenu} style={{ cursor: "pointer" }}>JELOVNIK</a>
        <a onClick={scrollToLocation} style={{ cursor: "pointer" }}>LOKACIJA</a>
      </div>

    
    </div>
  );
}

export default TopAppBar;
