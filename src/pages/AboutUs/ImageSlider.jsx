// import React, { useState } from "react";
// import "./ImageSlider.css";
// import img1 from "../../assets/team.png";

// const ImageSlider = () => {
//   const images = [
//     "https://mcquaig.co.uk/wp-content/uploads/2013/11/Happy-team.jpg",
//     img1,
//     "https://images.unsplash.com/photo-1690378820474-b468b8ee64d3?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aXQlMjB0ZWFtfGVufDB8fDB8fHww",
//     "https://plus.unsplash.com/premium_photo-1661767467261-4a4bed92a507?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGVhbXxlbnwwfHwwfHx8MA%3D%3D",
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   const nextSlide = () => {
//     setCurrentIndex((prev) => (prev + 1) % images.length);
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
//   };

//   return (
//     <div className="slider-container">
//       <button className="nav-btn prev" onClick={prevSlide}>
//         &#8249;
//       </button>

//       <div className="image-wrapper">
//         <img
//           src={images[currentIndex]}
//           alt="Team Photos"
//           className="slider-image"
//         />
//       </div>

//       <button className="nav-btn next" onClick={nextSlide}>
//         &#8250;
//       </button>

//       <div className="dots">
//         {images.map((_, index) => (
//           <span
//             key={index}
//             className={`dot ${index === currentIndex ? "active" : ""}`}
//             onClick={() => setCurrentIndex(index)}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

import React from "react";
import "./ImageSlider.css";

export default function ImageSlider() {
  return (
    <div className="slider">
      <div className="slide-track">
        <a
          href="https://mcquaig.co.uk/wp-content/uploads/2013/11/Happy-team.jpg"
          target="_blank"
          rel="noopener noreferrer"
          className="card"
        >
          <img
            src="https://mcquaig.co.uk/wp-content/uploads/2013/11/Happy-team.jpg"
            alt="Team Photo 1"
          />
          <div className="info">
            <h3>John Smith</h3>
            <p>Project Manager</p>
          </div>
        </a>

        <a
          href="https://images.unsplash.com/photo-1690378820474-b468b8ee64d3?fm=jpg&q=60&w=3000"
          target="_blank"
          rel="noopener noreferrer"
          className="card"
        >
          <img
            src="https://images.unsplash.com/photo-1690378820474-b468b8ee64d3?fm=jpg&q=60&w=3000"
            alt="Team Photo 2"
          />
          <div className="info">
            <h3>Emily Johnson</h3>
            <p>UI/UX Designer</p>
          </div>
        </a>

        <a
          href="https://plus.unsplash.com/premium_photo-1661767467261-4a4bed92a507?fm=jpg&q=60&w=3000"
          target="_blank"
          rel="noopener noreferrer"
          className="card"
        >
          <img
            src="https://plus.unsplash.com/premium_photo-1661767467261-4a4bed92a507?fm=jpg&q=60&w=3000"
            alt="Team Photo 3"
          />
          <div className="info">
            <h3>Michael Lee</h3>
            <p>Software Engineer</p>
          </div>
        </a>

        <a
          href="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?fm=jpg&q=60&w=3000"
          target="_blank"
          rel="noopener noreferrer"
          className="card"
        >
          <img
            src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?fm=jpg&q=60&w=3000"
            alt="Team Photo 4"
          />
          <div className="info">
            <h3>Sophia Williams</h3>
            <p>Marketing Lead</p>
          </div>
        </a>

        <a
          href="https://mcquaig.co.uk/wp-content/uploads/2013/11/Happy-team.jpg"
          target="_blank"
          rel="noopener noreferrer"
          className="card"
        >
          <img
            src="https://mcquaig.co.uk/wp-content/uploads/2013/11/Happy-team.jpg"
            alt="Team Photo 1 duplicate"
          />
          <div className="info">
            <h3>John Smith</h3>
            <p>Project Manager</p>
          </div>
        </a>

        <a
          href="https://images.unsplash.com/photo-1690378820474-b468b8ee64d3?fm=jpg&q=60&w=3000"
          target="_blank"
          rel="noopener noreferrer"
          className="card"
        >
          <img
            src="https://images.unsplash.com/photo-1690378820474-b468b8ee64d3?fm=jpg&q=60&w=3000"
            alt="Team Photo 2 duplicate"
          />
          <div className="info">
            <h3>Emily Johnson</h3>
            <p>UI/UX Designer</p>
          </div>
        </a>
      </div>
    </div>
  );
}
