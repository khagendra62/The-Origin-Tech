import React, { useState } from "react";
import "./ImageSlider.css";
import img1 from "../../assets/team.png";

const ImageSlider = () => {
  const images = [
    "https://mcquaig.co.uk/wp-content/uploads/2013/11/Happy-team.jpg",
    img1,
    "https://images.unsplash.com/photo-1690378820474-b468b8ee64d3?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aXQlMjB0ZWFtfGVufDB8fDB8fHww",
    "https://plus.unsplash.com/premium_photo-1661767467261-4a4bed92a507?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGVhbXxlbnwwfHwwfHx8MA%3D%3D",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="slider-container">
      <button className="nav-btn prev" onClick={prevSlide}>
        &#8249;
      </button>

      <div className="image-wrapper">
        <img
          src={images[currentIndex]}
          alt="Team Photos"
          className="slider-image"
        />
      </div>

      <button className="nav-btn next" onClick={nextSlide}>
        &#8250;
      </button>

      <div className="dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
