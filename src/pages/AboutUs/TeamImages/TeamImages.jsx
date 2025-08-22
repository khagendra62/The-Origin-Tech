import React from "react";
import "./TeamImages.css";

const TeamImages = () => {
  return (
    <div className="TeamImageContainer">
      <div className="ourWebTeam">Our Tech Team</div>
      <div className="TeamImageContainer-track">
        <a
          href="https://mcquaig.co.uk/wp-content/uploads/2013/11/Happy-team.jpg"
          target="_blank"
          rel="noopener noreferrer"
          className="card imageCard1"
        >
          <img
            src="https://mcquaig.co.uk/wp-content/uploads/2013/11/Happy-team.jpg"
            alt="Team Photo 1"
          />
          <div className="TeamImageContainerInfo">
            <h3>John Smith</h3>
            <p>Project Manager</p>
          </div>
        </a>

        <a
          href="https://images.unsplash.com/photo-1690378820474-b468b8ee64d3?fm=jpg&q=60&w=3000"
          target="_blank"
          rel="noopener noreferrer"
          className="card imageCard2"
        >
          <img
            src="https://images.unsplash.com/photo-1690378820474-b468b8ee64d3?fm=jpg&q=60&w=3000"
            alt="Team Photo 2"
          />
          <div className="TeamImageContainerInfo">
            <h3>Emily Johnson</h3>
            <p>UI/UX Designer</p>
          </div>
        </a>

        <a
          href="https://plus.unsplash.com/premium_photo-1661767467261-4a4bed92a507?fm=jpg&q=60&w=3000"
          target="_blank"
          rel="noopener noreferrer"
          className="card imageCard3"
        >
          <img
            src="https://plus.unsplash.com/premium_photo-1661767467261-4a4bed92a507?fm=jpg&q=60&w=3000"
            alt="Team Photo 3"
          />
          <div className="TeamImageContainerInfo">
            <h3>Michael Lee</h3>
            <p>Software Engineer</p>
          </div>
        </a>

        <a
          href="https://mcquaig.co.uk/wp-content/uploads/2013/11/Happy-team.jpg"
          target="_blank"
          rel="noopener noreferrer"
          className="card imageCard6"
        >
          <img
            src="https://mcquaig.co.uk/wp-content/uploads/2013/11/Happy-team.jpg"
            alt="Team Photo 4"
          />
          <div className="TeamImageContainerInfo">
            <h3>John Smith</h3>
            <p>Project Manager</p>
          </div>
        </a>

        <a
          href="https://images.unsplash.com/photo-1690378820474-b468b8ee64d3?fm=jpg&q=60&w=3000"
          target="_blank"
          rel="noopener noreferrer"
          className="card imageCard7"
        >
          <img
            src="https://images.unsplash.com/photo-1690378820474-b468b8ee64d3?fm=jpg&q=60&w=3000"
            alt="Team Photo 2"
          />
          <div className="TeamImageContainerInfo">
            <h3>Emily Johnson</h3>
            <p>UI/UX Designer</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default TeamImages;
