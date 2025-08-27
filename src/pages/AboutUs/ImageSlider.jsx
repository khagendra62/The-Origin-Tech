import React from "react";
import "./ImageSlider.css";
import khagendra from "../../assets/teamImages/khagendra.PNG";
import sabina from "../../assets/teamImages/sabina.PNG";
import bipul from "../../assets/teamImages/bipul.PNG";
import sonu from "../../assets/teamImages/sonu.PNG";
import sandip from "../../assets/teamImages/sandip.PNG";
import ishab from "../../assets/teamImages/ishab.PNG";
import chitra from "../../assets/teamImages/chitra.png";
import mannu from "../../assets/teamImages/mannu.png";

export default function ImageSlider() {
  return (
    <div className="slider">
      <div className="slide-track">
        <a
          href={bipul}
          target="_blank"
          rel="noopener noreferrer"
          className="card"
        >
          <img src={bipul} alt="Team Photo 3" />
          <div className="info">
            <h3>Bipul Chandra Rijal</h3>
            <p>IT Intern</p>
          </div>
        </a>

        <a
          href={sabina}
          target="_blank"
          rel="noopener noreferrer"
          className="card"
        >
          <img src={sabina} alt="Team Photo 3" />
          <div className="info">
            <h3>Sabina Deula</h3>
            <p>IT Intern</p>
          </div>
        </a>

        <a
          href={chitra}
          target="_blank"
          rel="noopener noreferrer"
          className="card"
        >
          <img src={chitra} alt="Team Photo 3" />
          <div className="info">
            <h3>Chitra Kumari Thapa</h3>
            <p>IT Intern</p>
          </div>
        </a>

        <a
          href={sonu}
          target="_blank"
          rel="noopener noreferrer"
          className="card"
        >
          <img src={sonu} alt="Team Photo 3" />
          <div className="info">
            <h3>Sonu Aly</h3>
            <p>IT Intern</p>
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
            <p>IT Intern</p>
          </div>
        </a>

        <a
          href={mannu}
          target="_blank"
          rel="noopener noreferrer"
          className="card"
        >
          <img src={mannu} alt="Team Photo 3" />
          <div className="info">
            <h3>Mannu Kumari Singh</h3>
            <p>IT Intern</p>
          </div>
        </a>

        <a
          href={sandip}
          target="_blank"
          rel="noopener noreferrer"
          className="card"
        >
          <img src={sandip} alt="Team Photo 3" />
          <div className="info">
            <h3>Sandip Bhatta</h3>
            <p>IT Intern</p>
          </div>
        </a>

        <a
          href={ishab}
          target="_blank"
          rel="noopener noreferrer"
          className="card"
        >
          <img src={ishab} alt="Team Photo 3" />
          <div className="info">
            <h3>Ishab Das</h3>
            <p>IT Intern</p>
          </div>
        </a>
      </div>
    </div>
  );
}
