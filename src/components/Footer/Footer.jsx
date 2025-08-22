import React from "react";
import "./Footer.css";
import { useNavigate } from "react-router-dom";

const OriginTechWebsite = () => {
  const navigate = useNavigate;
  const handleOnclickContactUs = () => {
    navigate("/contactus");
  };
  return (
    <div>
      <div className="footer-container">
        <div className="first-column">
          <div className="hero-text">
            <h2>Your growth starts here</h2>
            <button
              className="cta-button"
              onClick={() => handleOnclickContactUs}
            >
              Request a Quote
            </button>
          </div>
          <div className="links-section">
            <ul>
              <li>
                <a href="#blog">Blog</a>{" "}
              </li>
              <li>
                <a href="#about">About us</a>
              </li>
              <li>
                <a href="#contact">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>

        <header className="second-cloumn">
          <div className="logo">
            <h1>THE-ORIGIN-TECH</h1>
          </div>
          <div className=".second-cloumn-container ">
            <nav className="nav">
              <div className="nav-section">
                <h3>Services</h3>
                <ul>
                  <li>Digital Strategy Creation</li>
                  <li>Website Design & Development</li>
                  <li>Lead Generation & Sales Campaigns</li>
                  <li>Brand Awareness & Visibility</li>
                  <li>Content Creation & Distribution</li>
                </ul>
              </div>

              <div className="nav-section">
                <h3>HubSpot</h3>
                <ul>
                  <li>Sales & CRM</li>
                  <li>HubSpot Marketing</li>
                  <li>HubSpot Service Hub</li>
                  <li>HubSpot Training</li>
                  <li>HubSpot Setup</li>
                </ul>
              </div>

              <div className="nav-section">
                <h3>Industry</h3>
                <ul>
                  <li>B2B Marketing</li>
                  <li>Education</li>
                  <li>Automotive</li>
                  <li>Healthcare</li>
                  <li>Hospitality</li>
                  <li>Real Estate</li>
                  <li>E-Commerce</li>
                </ul>
              </div>
            </nav>
          </div>
        </header>

        <div className="last-column">
          <div className="container">
            <div className="hero-section">
              <div className="contact-info">
                <div className="head-office">
                  <h4>Head Office 📍</h4>
                  <p>Subhidhanagar 32, Tinekune, Kathmandu, Nepal</p>
                </div>

                <div className="contact-details">
                  <h4>Contact Details 📧</h4>
                  <p>📞 +977-9704525401</p>
                  <p>✉️ theorigintechnology@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="social-media">
              <h4>FOLLOW US</h4>
              <div className="social-icons">
                <a href="#" className="social-icon facebook">
                  f
                </a>
                <a href="#" className="social-icon linkedin">
                  in
                </a>
                <a href="#" className="social-icon instagram">
                  📷
                </a>
                <a href="#" className="social-icon twitter">
                  X
                </a>
                <a href="#" className="social-icon youtube">
                  ▶
                </a>
              </div>
            </div>
          </div>
        </div>

        <footer className="footer-coopyright">
          © 2025 The Origin Tech. All rights reserved. |{" "}
          <a href="/privacy-policy">Privacy Policy</a> |{" "}
          <a href="/terms-of-service">Terms of Service</a> |{" "}
          <a onClick={() => handleOnclickContactUs}>Contact Us</a>
        </footer>
      </div>
    </div>
  );
};

export default OriginTechWebsite;
