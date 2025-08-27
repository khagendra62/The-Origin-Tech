import React from "react";
import "./OurWorkServices.css";
import { CgWebsite } from "react-icons/cg";
import { FaSearch } from "react-icons/fa";
import { MdLeaderboard } from "react-icons/md";
import { TbSocial } from "react-icons/tb";
import { FaPhotoVideo } from "react-icons/fa";
import { FaHubspot } from "react-icons/fa6";

const OurWorkServices = () => {
  const services = [
    { title: "Web and App", icon: <CgWebsite /> },
    { title: "SEO", icon: <FaSearch /> },
    { title: "Lead Generation", icon: <MdLeaderboard /> },
    { title: "Social Media", icon: <TbSocial /> },
    { title: "Digital Marketing", icon: <FaPhotoVideo /> },
    { title: "Hubspot", icon: <FaHubspot /> },
  ];

  return (
    <section className="our-work-services-section">
      <h2 className="our-work-services-title">Browse Our Work by Service</h2>

      <div className="our-work-services-grid">
        {services.map((service, index) => (
          <div className="our-work-service-card" key={index}>
            <div className="our-work-service-icon">{service.icon}</div>
            <div className="our-work-service-label">{service.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurWorkServices;
