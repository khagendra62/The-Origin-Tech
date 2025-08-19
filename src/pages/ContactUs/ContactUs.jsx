import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Form from "../../components/Form/Form";
import Footer from "../../components/Footer/Footer";
import WhatsappAndGoToTop from "../../components/WhatsappAndGoToTop/WhatsappAndGoToTop";
import contactImage from "../../assets/contactImage.png";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <>
      <Navbar />
      <div className="contactImageContainer">
        <img src={contactImage} alt="The Origin Tech Image" />
        <h1>Your First Step to Success</h1>
      </div>
      <Form />
      <Footer />
      <WhatsappAndGoToTop />
    </>
  );
};

export default ContactUs;
