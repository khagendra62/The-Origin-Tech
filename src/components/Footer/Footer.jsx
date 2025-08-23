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
                <a href="#blog">Services</a>{" "}
              </li>
              <li>
                <a href="#about">About us</a>
              </li>
              <li>
                <a href="#contact">Our Work</a>
              </li>
              <li>
                <a href="#blog">Why Origin Tech</a>{" "}
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
                  <li>Web and App Dev</li>
                  <li>Digital Marketing</li>
                  <li>Social Media</li>
                  <li>SEO</li>
                  <li>PPC Advertising</li>
                  <li>Content Marketing</li>
                  <li>Ecommerce Solution</li>
                </ul>
              </div>

              <div className="nav-section">
                <h3>Company</h3>
                <ul>
                  <li>About us</li>
                  <li>Services</li>
                  <li>Our Work</li>
                  <li>Projects</li>
                  <li>Why Origin Tech </li>
                  <li>Contact us</li>
                </ul>
              </div>

              <div className="nav-section">
                <h3>Legal</h3>
                <ul>
                  <li>Privacy Policy</li>
                  <li>Terms of Service</li>
                  <li>Cookie Policy</li>
                  <li>GDPR Compliance</li>
                </ul>
              </div>

              <div className="nav-section">
                <h3>Support</h3>
                <ul>
                  <li>Help Center</li>
                  <li>Documentation</li>
                  <li>How Our Team Works</li>
                  <li>Contact Support</li>
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
            <div class="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2971.788741061531!2d85.34295951023853!3d27.685641176095608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198d7af4ff3b%3A0x4f545ba343e2a265!2sEverest%20Global%20Network!5e1!3m2!1sen!2snp!4v1755981229227!5m2!1sen!2snp"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
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
