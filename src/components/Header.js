import React from "react";
import "../index.css"; // Import the CSS file
import "../css/Header.css"; // Import the CSS file
import { FaPhone, FaEnvelope } from "react-icons/fa";
const Header = () => {
  return (
    <header className="header"> 
      <a href="/">
        <img src={require("../images/logo/newLogo-modified.png")} alt="Logo" />
      </a>
      <div className="contact-info">
        {/* <a href="tel:+13016050766" title="Call Us">
            <FaPhone className="icon phone" /> +13016050766
          </a>
          <a href="mailto:asechu3028@gmail.com" title="Email Us">
            <FaEnvelope className="icon email" /> asechu3028@gmail.com
          </a> */}
      </div>

      <div className="header-links"> {/* Container for the links */}
        <a href="/">Home</a>
        <a href="/ViewCars">View cars</a>
        <a href="/">Service</a>
        <a href="/ContactUs">Contact Us</a>
      </div>

      <div className="button-container"> {/* Container for the button */}
        <a href="https://google.com" target="_blank" rel="noopener noreferrer">
          <button>Book your Reservation</button>
        </a>
      </div>

    {/*
      <div className="contact-info">
         <a href="tel:+13016050766" title="Call Us">
            <FaPhone className="icon phone" /> +1 (240) 316-1353
          </a>
      </div>
     */}
    </header>
  );
};

export default Header;
