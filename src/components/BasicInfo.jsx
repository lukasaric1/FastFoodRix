import React from "react";
import "./BasicInfo.css";
import { FaPhoneAlt, FaRegClock } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";

const BasicInfo = () => {


  return (
    <div className="basic-info-container" id="location" >
      <div className="basic-info-item">
        <div className="basic-info-icon">
            <FaLocationDot/>
        </div>
        <div className="info">
          <h2>Gdje se nalazimo?</h2>
          <p>Fast Food Rix</p>
          <p>Fiskovićeva ulica 12</p>
          <p>20250,Orebić</p>
        </div>
      </div>
      <div className="basic-info-item">
        <div className="basic-info-icon">
          <FaPhone />
        </div>
        <div className="info">
          <h2>Nazovite nas</h2>
          <p>+385 91 2222 757</p>
        </div>
      </div>
      <div className="basic-info-item">
        <div className="basic-info-icon">
            <FaRegClock />
        </div>
        <div className="info">
          <h2>Vrijeme otvaranja</h2>
          <p>Pon-Sub: 12:00 - 22:00</p>
        </div>
      </div>
      <div className="basic-info-item">
        
        
      </div>
    </div>
  );
};

export default BasicInfo;
