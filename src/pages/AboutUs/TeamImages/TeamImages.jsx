import React from "react";
import "./TeamImages.css";
import award1 from "../../../assets/awards/award1.jpeg";
import award2 from "../../../assets/awards/award2.jpeg";
import logo from "../../../assets/awards/logo.png";

const TeamImages = () => {
  return (
    <div className="TeamImageContainer">
      {/* <div className="ourWebTeam">Our Tech Team</div> */}
      <div className="ourWebTeam">Our Awards</div>
      <div className="TeamImageContainer-track">
        <a
          href={logo}
          target="_blank"
          rel="noopener noreferrer"
          className="card imageCard1"
        >
          <img src={logo} alt="Team Photo 1" />
          <div className="TeamImageContainerInfo">
            <h3>John Smith</h3>
            <p>Project Manager</p>
          </div>
        </a>

        <a
          href={award2}
          target="_blank"
          rel="noopener noreferrer"
          className="card imageCard2"
        >
          <img src={award2} alt="Team Photo 2" />
          <div className="TeamImageContainerInfo">
            <h3>Emily Johnson</h3>
            <p>UI/UX Designer</p>
          </div>
        </a>

        <a
          href={award1}
          target="_blank"
          rel="noopener noreferrer"
          className="card imageCard3"
        >
          <img src={award1} alt="Team Photo 3" />
          <div className="TeamImageContainerInfo">
            <h3>Michael Lee</h3>
            <p>Software Engineer</p>
          </div>
        </a>

        <a
          href={award2}
          target="_blank"
          rel="noopener noreferrer"
          className="card imageCard6"
        >
          <img src={award2} alt="Team Photo 4" />
          <div className="TeamImageContainerInfo">
            <h3>John Smith</h3>
            <p>Project Manager</p>
          </div>
        </a>

        <a
          href={logo}
          target="_blank"
          rel="noopener noreferrer"
          className="card imageCard7"
        >
          <img src={logo} alt="Team Photo 2" />
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
