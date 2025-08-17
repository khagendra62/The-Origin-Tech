import { useState, useEffect } from "react";
import "./Form.css";

export default function ModernContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    countryCode: "+977",
    topic: "",
    orderNumber: "",
    salonName: "",
    message: "",
  });

  const [countries, setCountries] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch(
          "https://restcountries.com/v3.1/all?fields=name,flag,idd"
        );
        const data = await response.json();

        const countryList = data
          .filter((country) => country.idd && country.idd.root)
          .map((country) => ({
            name: country.name.common,
            flag: country.flag,
            code:
              country.idd.root +
              (country.idd.suffixes ? country.idd.suffixes[0] || "" : ""),
          }))
          .sort((a, b) => a.name.localeCompare(b.name));

        setCountries(countryList);
      } catch (error) {
        console.error("Failed to fetch countries:", error);
      }
    };

    fetchCountries();
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    alert(
      "Thank you for your message! We'll get back to you within 24 hours during business hours (M-F, 9am-5pm PT)."
    );
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      countryCode: "+977",
      topic: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  const topics = [
    "Project",
    "Order Issue",
    "Product Question",
    "Technical Support",
    "Billing Question",
    "Returns & Exchanges",
    "Partnership Inquiry",
    "General Question",
  ];

  return (
    <>
      <div className="container">
        <div className="form-wrapper">
          <div className="form-card">
            <div className="form-grid">
              <div className="left-panel">
                <div>
                  <h1 className="main-heading">Have a Question ?</h1>

                  <div>
                    <p className="description">
                      We're here to help! Fill out the form or reach us via
                      email or phone. Our Technical Support Team is available to
                      assist you with any questions about our software
                      solutions, implementation issues, or technical guidance.
                    </p>

                    <p className="description">
                      Every inquiry gets a personalized response from our expert
                      team. Please allow up to 24 hours during business hours
                      for a reply. Our support hours are Sunday through Friday,
                      10 am to 5 pm EST.
                    </p>
                  </div>
                </div>

                <div className="contact-methods">
                  <div className="contact-item">
                    <div className="contact-icon">
                      <svg
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                      </svg>
                    </div>
                    <a
                      href="mailto:theorigintechnology@gmail.com"
                      className="contact-details"
                    >
                      <h3>Email us</h3>
                      <p>theorigintechnology@gmail.com</p>
                    </a>
                  </div>

                  <div className="contact-item">
                    <div className="contact-icon">
                      <svg
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                      </svg>
                    </div>
                    <a href="tel:+977-9704525401" className="contact-details">
                      <h3>Call us</h3>
                      <p>+977-9704525401</p>
                    </a>
                  </div>

                  <div className="contact-item">
                    <div className="contact-icon">
                      <svg
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
                      </svg>
                    </div>
                    <a className="contact-details">
                      <h3>Live chat</h3>
                      <p>Chat with us</p>
                    </a>
                  </div>
                </div>
              </div>

              <div className="right-panel">
                <div className="form-section">
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">First Name</label>
                      <div className="input-wrapper">
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className="form-input"
                          required
                        />
                        {formData.firstName && (
                          <span className="required-indicator">**</span>
                        )}
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="form-label">Last Name</label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="form-input"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" required>
                      Phone Number
                    </label>
                    <div className="phone-wrapper">
                      <select
                        name="countryCode"
                        value={formData.countryCode}
                        onChange={handleInputChange}
                        className="form-select country-select"
                      >
                        {countries.map((country, index) => (
                          <option key={index} value={country.code}>
                            {country.flag} {country.code}
                          </option>
                        ))}
                      </select>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="form-input phone-input"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Select your topic</label>
                    <select
                      name="topic"
                      value={formData.topic}
                      onChange={handleInputChange}
                      className="form-select"
                      required
                    >
                      <option value="">Choose a topic...</option>
                      {topics.map((topic, index) => (
                        <option key={index} value={topic}>
                          {topic}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="form-textarea"
                      required
                    />
                  </div>

                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="submit-button"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="loading-spinner"></div>
                        SUBMITTING...
                      </>
                    ) : (
                      <>
                        SUBMIT
                        <svg
                          width="20"
                          height="20"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                        </svg>
                      </>
                    )}
                    <div className="shimmer"></div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
