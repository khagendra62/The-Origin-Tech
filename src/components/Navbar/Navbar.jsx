import React from "react";
import logo from "../../assets/logo.PNG";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="header">
      <nav className="nav-container">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <ul className="nav-menu">
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#solutions">Solutions</a>
          </li>
          <li>
            <a href="#about">About Us</a>
          </li>
          <li>
            <a href="#portfolio">Our Work</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <button className="cta-button">Get Started</button>
      </nav>
    </header>
  );
};

export default Navbar;
