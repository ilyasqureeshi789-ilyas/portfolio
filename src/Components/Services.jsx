import React from "react";
import "./Services.css";

function Services() {
  const servicesData = [
    {
      id: 1,
      title: "Backend Architecture",
      description: "Scalable server-side solutions with Laravel, REST APIs, and MySQL. I build robust backend systems that handle complex business logic efficiently.",
      icon: "fa-server",
      color: "#f43f5e",
      gradient: "linear-gradient(135deg, #f43f5e, #ec4899)"
    },
    {
      id: 2,
      title: "Frontend Development",
      description: "Interactive user interfaces with React.js, modern JavaScript, and responsive designs that work seamlessly across all devices.",
      icon: "fa-code",
      color: "#38bdf8",
      gradient: "linear-gradient(135deg, #38bdf8, #3b82f6)"
    },
    {
      id: 3,
      title: "UI & Styling Core",
      description: "Beautiful, consistent designs using Tailwind CSS, Bootstrap 5, and custom CSS with glassmorphism effects.",
      icon: "fa-paint-brush",
      color: "#a855f7",
      gradient: "linear-gradient(135deg, #a855f7, #8b5cf6)"
    },
    {
      id: 4,
      title: "DevOps & Environments",
      description: "Containerization with Docker and Linux server management on Ubuntu — ensuring smooth deployment and runtime stability.",
      icon: "fa-terminal",
      color: "#22c55e",
      gradient: "linear-gradient(135deg, #22c55e, #10b981)",
      hasStory: true
    }
  ];

  // Short story for Docker + Ubuntu (familiarity touch)
  const dockerUbuntuStory = {
    title: "📦 My Journey with Docker & Ubuntu",
    content: "I've explored containerized development using Docker and managed runtime environments on Ubuntu Linux. While I'm familiar with setting up containers, managing dependencies, and ensuring smooth execution, I'm actively deepening my hands-on experience. Think of me as someone who understands the map — and I'm ready to navigate further when the project demands."
  };

  return (
    <div className="services-container">
      <section className="services-section">
        <div className="container">
          {/* Header */}
          <div className="services-header">
            <span className="section-badge">
              <i className="fas fa-cogs"></i> What I Do
            </span>
            <h1 className="section-title">
              My <span className="text-gradient">Services</span>
            </h1>
            <p className="section-subtitle">
              End-to-end web solutions tailored to your business needs
            </p>
          </div>

          {/* Services Grid */}
          <div className="services-grid">
            {servicesData.map((service) => (
              <div className="service-card glass-card" key={service.id}>
                <div className="card-glow" style={{ background: service.gradient }}></div>
                <div className="service-icon" style={{ background: service.gradient }}>
                  <i className={`fas ${service.icon}`}></i>
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                
                {/* Docker/Ubuntu story chip */}
                {service.hasStory && (
                  <div className="story-chip">
                    <i className="fas fa-microphone-alt"></i>
                    <span>Includes Docker + Ubuntu familiarity</span>
                  </div>
                )}
                
                <div className="service-footer">
                  <span className="service-badge">Available</span>
                </div>
              </div>
            ))}
          </div>

          {/* Docker + Ubuntu Short Story Card */}
          <div className="story-card glass-card">
            <div className="story-icon">
              <i className="fab fa-docker"></i>
              <i className="fab fa-ubuntu"></i>
            </div>
            <div className="story-content">
              <h3 className="story-title">{dockerUbuntuStory.title}</h3>
              <p className="story-text">{dockerUbuntuStory.content}</p>
              <div className="story-tags">
                <span className="story-tag">🐳 Docker</span>
                <span className="story-tag">🐧 Ubuntu Linux</span>
                <span className="story-tag">⚙️ Runtime Environments</span>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="services-cta">
            <div className="cta-content">
              <h3>Ready to build something great?</h3>
              <p>Let's discuss your project and turn ideas into reality</p>
              <a href="/contact" className="cta-btn">
                <i className="fas fa-paper-plane"></i> Start a Conversation
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;