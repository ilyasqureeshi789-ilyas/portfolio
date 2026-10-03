import React, { useState } from "react";
import "./Home.css"; // ✅ New CSS file

function Home() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setStatus(true);
    setTimeout(() => {
      setStatus(false);
      setForm({ name: "", email: "", message: "" });
    }, 3000);
  };

  const stackData = [
    { cat: "Backend Architecture", tools: ["PHP Laravel", "MySQL / SQL Server"], icon: "fa-server", color: "#f43f5e" },
    { cat: "Frontend Development", tools: ["React.js", "JavaScript (ES6)", "jQuery"], icon: "fa-code", color: "#38bdf8" },
    { cat: "UI & Styling Core", tools: ["Tailwind CSS", "Bootstrap 5", "HTML5 & CSS3"], icon: "fa-paint-brush", color: "#a855f7" },
    { cat: "DevOps & Environments", tools: ["Docker Containers", "Ubuntu Linux", "GitHub Version Control"], icon: "fa-terminal", color: "#22c55e" }
  ];

  return (
    <div className="home-container">
      {/* HERO SECTION - Reduced bottom margin */}
      <section id="home" className="hero-section" style={{ marginBottom: 0, paddingBottom: 20 }}>
        <div className="hero-content">
          <span className="hero-badge">Available for Remote Roles & Freelance</span>
          <h1 className="hero-title">
            Muhammad <span className="highlight">Ilyas</span>
          </h1>
          <p className="hero-subtitle">Full Stack Web Developer (Laravel & React Specialist)</p>
          <p className="hero-description">
            I build scalable web applications combining robust PHP Laravel backends 
            with high-performance React frontends since 2023.
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn-primary">Hire Me</a>
          </div>
          <div className="social-links">
            <a href="https://github.com/ilyasqureeshi789-ilyas/" target="_blank" rel="noreferrer" className="social-icon github">
              <i className="fa-brands fa-github"></i> GitHub
            </a>
            <a href="https://linkedin.com/in/muhammad-ilyas-387137157" target="_blank" rel="noreferrer" className="social-icon linkedin">
              <i className="fa-brands fa-linkedin-in"></i> LinkedIn
            </a>
            <a href="https://www.youtube.com/@inside-dev-revised-commerce" target="_blank" rel="noreferrer" className="social-icon youtube">
              <i className="fa-brands fa-youtube"></i> YouTube
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION - Reduced top and bottom margins */}
      <section id="about" className="about-section" style={{ marginTop: 0, marginBottom: 0, paddingTop: 0, paddingBottom: 0 }}>
        <div className="container">
          <div className="about-card glass-card">
            <span className="section-badge">My Story</span>
            <h2 className="section-title">Bridging Commerce, Data, and <em className="text-gradient">Code</em></h2>
            <p className="about-text">My web development journey started in <strong>2023</strong>, driven by a deep passion for logical problem-solving.</p>
            <p className="about-text">I hold a <strong>B.Com degree from the University of the Punjab, Lahore (2014)</strong>, which gives me an edge in understanding business workflow operations.</p>
            <p className="about-text">Additionally, my <strong>2 years of experience as a Key Punch Operator (KPO) at Oxford University Press</strong> shaped my meticulous attention to detail and data management concepts.</p>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION - Reduced top and bottom margins */}
      <section id="services" className="services-section" style={{ marginTop: 0, marginBottom: 0, paddingTop: 20, paddingBottom: 20 }}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Capabilities</span>
            <h2 className="section-title">Featured Full Stack Architecture</h2>
          </div>
          <div className="services-grid">
            {stackData.map((item, idx) => (
              <div className="service-card glass-card" key={idx}>
                <div className="service-icon" style={{ color: item.color }}>
                  <i className={`fas ${item.icon}`}></i>
                </div>
                <h3 className="service-title">{item.cat}</h3>
                <div className="service-tools">
                  {item.tools.map((tool, i) => (
                    <span className="tool-badge" key={i}>{tool}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION - Reduced top margin */}
      <section id="contact" className="contact-section" style={{ marginTop: 0, paddingTop: 20 }}>
        <div className="container">
          <div className="contact-card glass-card">
            <h3 className="contact-title">Secure Lead Form</h3>
            {status && <div className="success-alert">✓ Inquiry processed and dispatched!</div>}
            <form onSubmit={handleFormSubmit}>
              <div className="form-group">
                <label>Full Name</label>
                <input 
                  type="text" 
                  className="form-input" 
                  value={form.name} 
                  onChange={(e) => setForm({ ...form, name: e.target.value })} 
                  required 
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input 
                  type="email" 
                  className="form-input" 
                  value={form.email} 
                  onChange={(e) => setForm({ ...form, email: e.target.value })} 
                  required 
                />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea 
                  className="form-input" 
                  rows="4" 
                  value={form.message} 
                  onChange={(e) => setForm({ ...form, message: e.target.value })} 
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn-submit">Send Request</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;