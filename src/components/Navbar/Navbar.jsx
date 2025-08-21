import { useState } from "react";
import logo from "../../assets/ORIGIN.png";
import "./Navbar.css";
import HamburgerMenu from "./HamburgerMenu";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
// import {
//   FaChartLine,
//   FaShareAlt,
//   FaHubspot,
//   FaSearch,
//   FaVideo,
//   FaCube,
//   FaGraduationCap,
//   FaPalette,
//   FaHandshake,
//   FaLaptopCode,
// } from "react-icons/fa";
// import { MdCampaign } from "react-icons/md";
// import { PiStrategy } from "react-icons/pi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="header">
        <nav className="nav-container">
          <Link to={"/"} onClick={() => window.scrollTo(0, 0)}>
            <div className="logo">
              <img src={logo} alt="Logo" />
            </div>
          </Link>
          <ul className="nav-menu">
            <li>
              <Link to={"/services"} onClick={() => window.scrollTo(0, 0)}>
                Services{" "}
              </Link>
            </li>
            {/* <li>
              <Link to={"/contactus"} onClick={() => window.scrollTo(0, 0)}>
                Solutions{" "}
              </Link>
            </li> */}
            <li>
              <Link to={"/aboutus"} onClick={() => window.scrollTo(0, 0)}>
                About Us{" "}
              </Link>
            </li>
            <li>
              <Link to={"/ourwork"} onClick={() => window.scrollTo(0, 0)}>
                Our Work{" "}
              </Link>
            </li>
            <li>
              <Link to={"/contactus"} onClick={() => window.scrollTo(0, 0)}>
                Contact Us
              </Link>
            </li>
          </ul>

          <div className="hamburgerBtn" onClick={toggleMenu}>
            <GiHamburgerMenu className="GiHamburgerMenu" />
          </div>

          <Link to={"/contactus"} onClick={() => window.scrollTo(0, 0)}>
            <button className="cta-button">Get Started</button>
          </Link>

          {isMenuOpen && <HamburgerMenu className="HamburgerMenu" />}
        </nav>
      </header>
    </>
  );
};

export default Navbar;
