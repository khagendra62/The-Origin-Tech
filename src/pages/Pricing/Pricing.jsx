import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Form from "../../components/Form/Form";
import Footer from "../../components/Footer/Footer";
import Background from "../../components/Background/Background";
import WhatsappAndGoToTop from "../../components/WhatsappAndGoToTop/WhatsappAndGoToTop";
import "./Pricing.css";
import { useNavigate } from "react-router-dom";

const Pricing = () => {
  const navigate = useNavigate();
  const handleSelectPlan = () => {
    navigate("/contactus");
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  const pricingData = [
    {
      category: "Web & App Development",
      plans: [
        {
          name: "Basic",
          price: 25000,
          features: [
            "Static Website (5 pages)",
            "Responsive Design",
            "Contact Form",
            "Basic SEO Setup",
            "Domain Setup",
            "3 Months Support",
          ],
        },
        {
          name: "Standard",
          price: 45000,
          features: [
            "Dynamic Website (10 pages)",
            "CMS Integration",
            "Database Setup",
            "Payment Gateway",
            "Mobile App (Basic)",
            "6 Months Support",
          ],
          popular: true,
        },
        {
          name: "Premium",
          price: 75000,
          features: [
            "Custom Web Application",
            "Advanced CMS",
            "API Development",
            "Cross-platform Mobile App",
            "Cloud Deployment",
            "12 Months Support",
          ],
        },
      ],
    },
    {
      category: "Social Media",
      plans: [
        {
          name: "Basic",
          price: 8000,
          features: [
            "2 Platforms Management",
            "15 Posts per Month",
            "Content Creation",
            "Basic Analytics",
            "Community Management",
          ],
        },
        {
          name: "Standard",
          price: 15000,
          features: [
            "4 Platforms Management",
            "30 Posts per Month",
            "Video Content",
            "Advanced Analytics",
            "Paid Ads Setup",
            "Monthly Reports",
          ],
          popular: true,
        },
        {
          name: "Premium",
          price: 25000,
          features: [
            "6 Platforms Management",
            "60 Posts per Month",
            "Professional Video Content",
            "Influencer Outreach",
            "Advanced Campaign Management",
            "Weekly Reports",
          ],
        },
      ],
    },
    {
      category: "PPC Advertising",
      plans: [
        {
          name: "Basic",
          price: 12000,
          features: [
            "Google Ads Setup",
            "Keyword Research",
            "Ad Copy Creation",
            "Basic Optimization",
            "Monthly Report",
          ],
        },
        {
          name: "Standard",
          price: 20000,
          features: [
            "Multi-platform Ads",
            "Advanced Targeting",
            "A/B Testing",
            "Conversion Tracking",
            "Bi-weekly Optimization",
            "Detailed Analytics",
          ],
          popular: true,
        },
        {
          name: "Premium",
          price: 35000,
          features: [
            "Enterprise Ad Management",
            "Dynamic Retargeting",
            "Advanced Analytics",
            "Custom Landing Pages",
            "Weekly Optimization",
            "Dedicated Account Manager",
          ],
        },
      ],
    },
    {
      category: "SEO - Search Engine Optimization",
      plans: [
        {
          name: "Basic",
          price: 10000,
          features: [
            "Website Audit",
            "Keyword Research",
            "On-page Optimization",
            "Meta Tags Setup",
            "Monthly Report",
          ],
        },
        {
          name: "Standard",
          price: 18000,
          features: [
            "Comprehensive SEO Audit",
            "Content Optimization",
            "Link Building",
            "Local SEO",
            "Technical SEO",
            "Bi-weekly Reports",
          ],
          popular: true,
        },
        {
          name: "Premium",
          price: 30000,
          features: [
            "Enterprise SEO Strategy",
            "Advanced Link Building",
            "Content Marketing",
            "Competitor Analysis",
            "Schema Markup",
            "Weekly Performance Reports",
          ],
        },
      ],
    },
    {
      category: "Content Marketing",
      plans: [
        {
          name: "Basic",
          price: 6000,
          features: [
            "4 Blog Posts per Month",
            "Content Strategy",
            "Basic Graphics",
            "Social Media Integration",
            "SEO Optimization",
          ],
        },
        {
          name: "Standard",
          price: 12000,
          features: [
            "8 Blog Posts per Month",
            "Video Content",
            "Infographics",
            "Email Marketing",
            "Content Distribution",
            "Analytics Tracking",
          ],
          popular: true,
        },
        {
          name: "Premium",
          price: 20000,
          features: [
            "15 Blog Posts per Month",
            "Professional Video Production",
            "Podcast Content",
            "Advanced Content Strategy",
            "Multi-channel Distribution",
            "Comprehensive Analytics",
          ],
        },
      ],
    },
    {
      category: "Ecommerce Solutions",
      plans: [
        {
          name: "Basic",
          price: 30000,
          features: [
            "Basic Online Store",
            "Product Catalog (50 items)",
            "Payment Gateway",
            "Inventory Management",
            "Mobile Responsive",
          ],
        },
        {
          name: "Standard",
          price: 50000,
          features: [
            "Advanced Online Store",
            "Unlimited Products",
            "Multi-payment Options",
            "Advanced Analytics",
            "Marketing Tools",
            "Customer Support System",
          ],
          popular: true,
        },
        {
          name: "Premium",
          price: 80000,
          features: [
            "Enterprise Ecommerce Platform",
            "Multi-vendor Support",
            "Advanced Customization",
            "API Integrations",
            "Advanced Security",
            "Dedicated Support Team",
          ],
        },
      ],
    },
  ];

  return (
    <>
      <Navbar />

      <div className="pricing-container">
        {pricingData.map((category, categoryIndex) => (
          <div key={categoryIndex} className="category-section">
            <h2 className="category-title">{category.category}</h2>
            <div className="plans-grid">
              {category.plans.map((plan, planIndex) => (
                <div
                  key={planIndex}
                  className={`plan-card ${plan.popular ? "popular" : ""}`}
                >
                  {plan.popular && (
                    <div className="popular-badge">Best Value</div>
                  )}
                  <div className="plan-header">
                    <h3 className="plan-name">{plan.name}</h3>
                    <div className="plan-price">
                      <span className="currency">₹</span>
                      <span className="amount">
                        {plan.price.toLocaleString()}
                      </span>
                      <span className="period">/month</span>
                    </div>
                  </div>
                  <div className="features-list">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="feature-item">
                        <span className="checkmark">✓</span>
                        <span className="feature-text">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <button className="select-btn" onClick={handleSelectPlan}>
                    Select Plan
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <Background />
      <Form />
      <Footer />
      <WhatsappAndGoToTop />
    </>
  );
};

export default Pricing;
