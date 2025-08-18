import logo from "../../assets/ORIGIN.png";
import "./Navbar.css";
import { Link } from "react-router-dom";
import {
  FaChartLine,
  FaShareAlt,
  FaHubspot,
  FaSearch,
  FaVideo,
  FaCube,
  FaGraduationCap,
  FaPalette,
  FaHandshake,
  FaLaptopCode,
} from "react-icons/fa";
import { MdCampaign } from "react-icons/md";
import { PiStrategy } from "react-icons/pi";

const Navbar = () => {
  return (
    <>
      <header className="header">
        <nav className="nav-container">
          <Link to={"/"}>
            <div className="logo">
              <img src={logo} alt="Logo" />
            </div>
          </Link>
          <ul className="nav-menu">
            <li className="services">
              <Link to={"/services"}>Services </Link>
            </li>
            <li>
              <Link to={"/contactus"}>Solutions </Link>
            </li>
            <li>
              <Link to={"/aboutus"}>About Us </Link>
            </li>
            <li>
              <Link to={"/ourwork"}>Our Work </Link>
            </li>
            <li>
              <Link to={"/contactus"}> Contact</Link>
            </li>
          </ul>
          <Link to={"/contactus"}>
            <button className="cta-button">Get Started</button>
          </Link>
        </nav>
      </header>

      <div className="dropdownStyle">
        <div className="gridStyle">
          <div className="itemStyle">
            <FaChartLine className="iconStyle" />
            <span className="titleStyle">Digital Marketing</span>
          </div>

          <div className="itemStyle">
            <PiStrategy className="iconStyle" />
            <span className="titleStyle">
              Digital Marketing Strategy Creation
            </span>
          </div>

          <div className="itemStyle">
            <FaLaptopCode className="iconStyle" />
            <span className="titleStyle">Website & App Development</span>
          </div>

          <div className="itemStyle">
            <FaShareAlt className="iconStyle" />
            <span className="titleStyle">Social Media</span>
          </div>

          <div className="itemStyle">
            <MdCampaign className="iconStyle" />
            <span className="titleStyle">Lead Generation & Campaigns</span>
          </div>

          <div className="itemStyle">
            <FaHubspot className="iconStyle" />
            <span className="titleStyle">HubSpot Services</span>
          </div>

          <div className="itemStyle">
            <FaSearch className="iconStyle" />
            <span className="titleStyle">SEO (Search Engine Optimization)</span>
          </div>

          <div className="itemStyle">
            <FaVideo className="iconStyle" />
            <span className="titleStyle">Video Production</span>
          </div>

          <div className="itemStyle">
            <FaCube className="iconStyle" />
            <span className="titleStyle">Metaverse Experiences</span>
          </div>

          <div className="itemStyle">
            <FaGraduationCap className="iconStyle" />
            <span className="titleStyle">E-learning & Technical Training</span>
          </div>

          <div className="itemStyle">
            <FaPalette className="iconStyle" />
            <span className="titleStyle">Branding Development</span>
          </div>

          <div className="itemStyle">
            <FaHandshake className="iconStyle" />
            <span className="titleStyle">
              Marketing Consultations & Strategies
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
