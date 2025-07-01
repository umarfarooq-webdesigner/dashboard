import React from "react";
import { FaCode, FaPencilRuler, FaWordpress } from "react-icons/fa";
import "./ServiceSection.css";

const servicesData = [
  {
    icon: <FaCode />,
    title: "Website Development",
    description:
      "I create websites based on your ready-made design. Whether it's a landing page or a business card website, I will make it look great and work smoothly on any device.",
    position: "left",
  },
  {
    icon: <FaPencilRuler />,
    title: "Web Design",
    description:
      "I can design your website from scratch. I create modern, simple, and user-friendly designs that match your brand and goals.",
    position: "right",
  },
  {
    icon: <FaWordpress />,
    title: "WordPress Development",
    description:
      "I build websites on WordPress, making them easy to update and manage. It's a great choice for blogs, small businesses, or portfolios.",
    position: "left",
  },
];

const ServicesSection = () => {
  return (
    <section className="services-section">
      <h2 className="services-title">My Services</h2>
      <div className="services-wrapper">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className={`service-box ${service.position === "right" ? "right" : "left"}`}
          >
            <div className="service-content">
              <div className="service-header">
                <span className="service-icon">{service.icon}</span>
                <h3 className="service-title">{service.title}</h3>
              </div>
              <p className="service-description">{service.description}</p>
            </div>
          </div>
        ))}
        {/* Vertical line */}
        <div className="vertical-line1"></div>
        <div className="vertical-line2"></div>
      </div>
    </section>
  );
};

export default ServicesSection;
