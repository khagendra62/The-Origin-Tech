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
    { title: "Website", icon: <CgWebsite /> },
    { title: "SEO", icon: <FaSearch /> },
    { title: "Lead Generation", icon: <MdLeaderboard /> },
    { title: "Social", icon: <TbSocial /> },
    { title: "Video", icon: <FaPhotoVideo /> },
    { title: "Hubspot", icon: <FaHubspot /> },
  ];

  return (
    <section className="services-section">
      <h2 className="services-title">Browse Our Work by Service</h2>

      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>
            <div className="service-label">{service.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurWorkServices;
