import React, { useState } from "react";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import "./OurWorkImages.css";

const OurWorkImages = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentFilter, setCurrentFilter] = useState("all");

  const workImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
      title: "Web Development",
      category: "web-dev",
      description: "Modern React-based dashboard with real-time analytics",
      tech: ["React", "Node.js", "MongoDB"],
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop",
      title: "Mobile Banking App",
      category: "mobile-app",
      description:
        "Secure fintech mobile application with biometric authentication",
      tech: ["React Native", "Firebase", "Biometrics API"],
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      title: "Digital Marketing Campaign",
      category: "Digital Marketing",
      description: "Multi-channel marketing strategy with analytics tracking",
      tech: ["Google Ads", "Facebook Ads", "Mailchimp"],
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=600&h=400&fit=crop",
      title: "SEO Optimization Project",
      category: "SEO",
      description: "On-page and off-page SEO for e-commerce websites",
      tech: ["Ahrefs", "SEMrush", "Yoast SEO"],
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
      title: "Social Media Management",
      category: "Social Media",
      description: "Content creation and social strategy for brands",
      tech: ["Instagram", "Facebook", "Canva"],
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      title: "PPC Advertising Campaign",
      category: "PPC",
      description: "Paid ad campaign optimization for higher ROI",
      tech: ["Google Ads", "Facebook Ads", "Bid Strategies"],
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop",
      title: "Content Marketing Strategy",
      category: "Content Marketing",
      description: "Blog and video content strategy for engagement",
      tech: ["WordPress", "Canva", "YouTube"],
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1508780709619-79562169bc64?w=600&h=400&fit=crop",
      title: "E-commerce Solution",
      category: "Ecommerce Solutions",
      description: "Full-stack e-commerce platform with payment integration",
      tech: ["React", "Node.js", "Stripe"],
    },
  ];

  const categories = [
    { key: "all", label: "All Projects" },
    { key: "web-dev", label: "Web Development" },
    { key: "mobile-app", label: "Mobile Apps" },
    { key: "Digital Marketing", label: "Digital Marketing" },
    { key: "SEO", label: "SEO" },
    { key: "Social Media", label: "Social Media" },
    { key: "PPC", label: "PPC" },
    { key: "Content Marketing", label: "Content Marketing" },
    { key: "Ecommerce Solutions", label: "Ecommerce Solutions" },
  ];

  const filteredImages =
    currentFilter === "all"
      ? workImages
      : workImages.filter((img) => img.category === currentFilter);

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction) => {
    const currentIndex = filteredImages.findIndex(
      (img) => img.id === selectedImage.id
    );
    let newIndex;

    if (direction === "next") {
      newIndex = (currentIndex + 1) % filteredImages.length;
    } else {
      newIndex =
        currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1;
    }

    setSelectedImage(filteredImages[newIndex]);
  };

  return (
    <div className="work-album-container">
      <div className="work-album-header">
        <h2 className="work-album-title">Tech Work Portfolio</h2>
        <p className="work-album-subtitle">
          Showcasing cutting-edge technology solutions
        </p>
      </div>

      <div className="filter-container">
        {categories.map((category) => (
          <button
            key={category.key}
            className={`filter-button ${
              currentFilter === category.key ? "active" : ""
            }`}
            onClick={() => setCurrentFilter(category.key)}
          >
            {category.label}
          </button>
        ))}
      </div>

      <div className="image-grid">
        {filteredImages.map((image) => (
          <div
            key={image.id}
            className="image-card"
            onClick={() => openLightbox(image)}
          >
            <div className="image-container">
              <img src={image.src} alt={image.title} className="image" />
              <div className="overlay">
                <div className="overlay-content">
                  <ZoomIn className="zoom-icon" />
                  <h3 className="image-title">{image.title}</h3>
                  <div className="tech-stack">
                    {image.tech.slice(0, 2).map((tech) => (
                      <span key={tech} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-button" onClick={closeLightbox}>
              <X />
            </button>

            <button
              className="nav-button prev-button"
              onClick={() => navigateImage("prev")}
            >
              <ChevronLeft />
            </button>

            <button
              className="nav-button next-button"
              onClick={() => navigateImage("next")}
            >
              <ChevronRight />
            </button>

            <div className="lightbox-image-container">
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="lightbox-image"
              />
            </div>

            <div className="lightbox-info">
              <h3 className="lightbox-title">{selectedImage.title}</h3>
              <p className="lightbox-description">
                {selectedImage.description}
              </p>
              <div className="lightbox-tech-stack">
                {selectedImage.tech.map((tech) => (
                  <span key={tech} className="lightbox-tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OurWorkImages;
