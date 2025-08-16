import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMobileAlt,
  faCode,
  faHashtag,
  faAd,
  faPenFancy,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import "./Services.css";

const Services = () => {
  const services = [
    {
      icon: faMobileAlt,
      title: "Mobile App Development",
      description:
        "Native and cross-platform mobile applications designed for optimal user experience and performance across iOS and Android devices.",
    },
    {
      icon: faCode,
      title: "Web Development",
      description:
        "Modern, responsive websites and web applications built with cutting-edge technologies for maximum performance and scalability.",
    },
    {
      icon: faHashtag,
      title: "Social Media Marketing",
      description:
        "Engaging social media campaigns across all major platforms to build brand awareness and drive customer engagement.",
    },
    {
      icon: faAd,
      title: "PPC Advertising",
      description:
        "Targeted pay-per-click campaigns on Google, Facebook, and other platforms to generate qualified leads and maximize ROI.",
    },
    {
      icon: faPenFancy,
      title: "Content Marketing",
      description:
        "Compelling content creation and marketing strategies that resonate with your audience and establish thought leadership.",
    },
    {
      icon: faShoppingCart,
      title: "E-Commerce Solutions",
      description:
        "Complete online store setups with secure payment gateways and optimized shopping experiences for maximum conversions.",
    },
  ];

  return (
    <div className="container">
      <div className="newDiv">
        <div className="newDiv"></div>
        <h1 className="expertise">Our Expertise</h1>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">
                <FontAwesomeIcon icon={service.icon} />
              </div>
              <h2>{service.title}</h2>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
