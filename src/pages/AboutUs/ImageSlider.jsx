import React from "react";
import "./ImageSlider.css";
import khagendra from "../../assets/teamImages/khagendra.jpg";

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
          href={khagendra}
          target="_blank"
          rel="noopener noreferrer"
          className="card"
        >
          <img src={khagendra} alt="Team Photo 3" />
          <div className="info">
            <h3>Khagendra Prasad Awasthi</h3>
            <p>Frontend Developer</p>
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
