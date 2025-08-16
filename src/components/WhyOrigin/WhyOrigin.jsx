import React, { useState, useEffect } from "react";
import "./WhyOrigin.css";

const WhyOrigin = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const reasons = [
    {
      id: 1,
      icon: "🎯",
      title: "We Understand Your Goals",
      description:
        "We Begin By Deeply Understanding Your Vision And Objectives. Acknowledging That Each Client Has Unique Aspirations, We Craft Strategies Designed To Achieve Your Goals Comprehensively. By Analyzing Challenges And Opportunities, We Create A Clear Roadmap To Guide You Toward Success With Confidence And Efficiency.",
    },
    {
      id: 2,
      icon: "📈",
      title: "We Enhance Your Strategies In The Digital Market",
      description:
        "We Work With You To Elevate Your Digital Marketing Strategies, Ensuring Consistent Growth And Helping Your Business Thrive In Today's Competitive Landscape.",
    },
    {
      id: 3,
      icon: "📊",
      title: "We Deliver Results, Not Just Promises",
      description:
        "True Success Is Measured By Tangible Outcomes That Stand The Test Of Time. We Focus On Delivering Sustainable Results That Create Long-Term Value And Market Presence, Ensuring Every Investment Yields Optimal Opportunities For Growth And Success.",
    },
    {
      id: 4,
      icon: "🚀",
      title: "We Scale Your Business",
      description:
        "Our proven methodologies and cutting-edge technologies help scale your business operations efficiently. We provide comprehensive solutions that adapt to your growing needs and market demands.",
    },
    {
      id: 5,
      icon: "💡",
      title: "We Innovate Continuously",
      description:
        "Innovation is at the heart of everything we do. We stay ahead of industry trends and implement the latest technologies to give your business a competitive edge in the market.",
    },
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % reasons.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, reasons.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % reasons.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + reasons.length) % reasons.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const getVisibleCards = () => {
    const cards = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentSlide + i) % reasons.length;
      cards.push(reasons[index]);
    }
    return cards;
  };

  return (
    <section className="why-origin-section">
      <div className="why-origin-container">
        <h2 className="section-title">Why The Origin Tech?</h2>

        <div
          className="carousel-container"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <button className="nav-button nav-prev" onClick={prevSlide}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M15 18L9 12L15 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <div className="cards-wrapper">
            <div className="cards-container">
              {getVisibleCards().map((reason, index) => (
                <div
                  key={`${reason.id}-${currentSlide}`}
                  className={`reason-card ${index === 1 ? "center-card" : ""} ${
                    index === 0 ? "left-card" : ""
                  } ${index === 2 ? "right-card" : ""}`}
                >
                  <div className="card-icon">
                    <div className="icon-wrapper">
                      <span className="icon-emoji">{reason.icon}</span>
                    </div>
                  </div>
                  <div className="card-content">
                    <h3 className="card-title">{reason.title}</h3>
                    <p className="card-description">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button className="nav-button nav-next" onClick={nextSlide}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M9 18L15 12L9 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        <div className="dots-container">
          {reasons.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentSlide ? "active" : ""}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyOrigin;
