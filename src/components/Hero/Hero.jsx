import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <main className="hero">
      <div className="hero-content">
        <p className="hero-subtitle">
          PARTNERING FOR INNOVATION AND DIGITAL EXCELLENCE
        </p>
        <h1 className="hero-title">YOUR ORIGIN OF INNOVATION</h1>
        <div className="hero-buttons">
          <button className="btn-primary">Request a Quote</button>
          <button className="btn-secondary">Why Choose Us?</button>
        </div>
      </div>
    </main>
  );
};

export default Hero;
