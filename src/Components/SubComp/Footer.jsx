import React from "react";
import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { name: "Home", path: "/", icon: "fas fa-home" },
    { name: "About", path: "/#about", icon: "fas fa-user" },
    { name: "Services", path: "/#services", icon: "fas fa-code" },
    { name: "Projects", path: "/projects", icon: "fas fa-folder-open" },
    { name: "Contact", path: "/contact", icon: "fas fa-envelope" }
  ];
  
  const socialLinks = [
    { name: "GitHub", url: "https://github.com/ilyasqureeshi789-ilyas/", icon: "fab fa-github", color: "#333" },
    { name: "LinkedIn", url: "https://linkedin.com/in/muhammad-ilyas-387137157", icon: "fab fa-linkedin-in", color: "#0077b5" },
    { name: "YouTube", url: "https://www.youtube.com/@inside-dev-revised-commerce", icon: "fab fa-youtube", color: "#ff0000" }
  ];

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="container">
          <div className="footer-grid">
            
            {/* Brand Section */}
            <div className="footer-brand">
              <div className="brand-icon">
                <i className="fas fa-cloud"></i>
              </div>
              <h3 className="brand-name">Muhammad <span>Ilyas</span></h3>
              <p className="brand-tagline">
                Full Stack Web Developer crafting scalable cloud-native applications
              </p>
              <div className="brand-badge">
                <i className="fas fa-check-circle"></i>
                Available for Work
              </div>
            </div>

            {/* Quick Links Section */}
            <div className="footer-links">
              <h4 className="links-title">
                <i className="fas fa-compass"></i> Quick Links
              </h4>
              <ul className="links-list">
                {quickLinks.map((link, idx) => (
                  <li key={idx}>
                    <a href={link.path} className="quick-link">
                      <i className={link.icon}></i>
                      <span>{link.name}</span>
                      <i className="fas fa-arrow-right link-arrow"></i>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect Section */}
            <div className="footer-social">
              <h4 className="links-title">
                <i className="fas fa-share-alt"></i> Connect With Me
              </h4>
              <div className="social-grid">
                {socialLinks.map((social, idx) => (
                  <a 
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className="social-card"
                    style={{ "--hover-color": social.color }}
                  >
                    <div className="social-icon-wrapper">
                      <i className={social.icon}></i>
                    </div>
                    <div className="social-info">
                      <span className="social-name">{social.name}</span>
                      <span className="social-follow">Follow →</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="footer-bottom">
            <div className="bottom-content">
              <p className="copyright">
                <i className="far fa-copyright"></i> {currentYear} Muhammad Ilyas. 
                All rights reserved.
              </p>
              <div className="tech-stack">
                <span>Built with</span>
                <i className="fab fa-react"></i>
                <i className="fab fa-php"></i>
                <i className="fab fa-bootstrap"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;