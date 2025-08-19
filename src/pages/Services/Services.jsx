import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Form from "../../components/Form/Form";
import Footer from "../../components/Footer/Footer";
import WhatsappAndGoToTop from "../../components/WhatsappAndGoToTop/WhatsappAndGoToTop";
import ourservicevideo from "../../assets/OUR-SERVICE.mp4";
import "./Services.css";

const Services = () => {
  return (
    <>
      <Navbar />
      <div className="serviceVideo">
        <div className="videoForServices">
          <video autoPlay loop muted playsInline className="videoLoop">
            <source src={ourservicevideo} type="video/mp4" />
          </video>
        </div>
      </div>
      <Form />
      <Footer />
      <WhatsappAndGoToTop />
    </>
  );
};

export default Services;
