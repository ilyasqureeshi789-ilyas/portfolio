import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/", icon: "fas fa-home" },
    { name: "About", path: "/about", icon: "fas fa-user" },
    { name: "Services", path: "/services", icon: "fas fa-cogs" },
    { name: "Projects", path: "/projects", icon: "fas fa-folder-open" },
    { name: "Contact", path: "/contact", icon: "fas fa-envelope" }
  ];

  const socialIcons = [
    { name: "GitHub", url: "https://github.com/ilyasqureeshi789-ilyas/", icon: "fab fa-github", color: "#333" },
    { name: "LinkedIn", url: "https://linkedin.com/in/muhammad-ilyas-387137157", icon: "fab fa-linkedin-in", color: "#0077b5" },
    { name: "YouTube", url: "https://www.youtube.com/@inside-dev-revised-commerce", icon: "fab fa-youtube", color: "#ff0000" }
  ];

  const isActive = (path) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <div>
      {/* Your Existing Header Structure */}
      <div style={{ 
        display: "flex", 
        justifyContent: "space-between", 
        alignItems: "center",
        padding: "15px 30px",
        background: "rgba(15, 23, 42, 0.9)",
        borderBottom: "1px solid rgba(56, 189, 248, 0.2)",
        position: "sticky",
        top: 0,
        zIndex: 1000
      }}>
        
        {/* Logo Section (as per your existing) */}
        <div>
          <Link to="/" style={{ textDecoration: "none", fontSize: "24px", fontWeight: "bold", color: "#fff" }}>
            Muhammad <span style={{ color: "#38bdf8" }}>Ilyas</span>
          </Link>
        </div>

        {/* Navigation Links (as per your existing) */}
        <div style={{ display: "flex", gap: "25px" }}>
          {navLinks.map((link, idx) => (
            <Link
              key={idx}
              to={link.path}
              style={{
                textDecoration: "none",
                color: isActive(link.path) ? "#38bdf8" : "#cbd5e1",
                fontWeight: isActive(link.path) ? "bold" : "normal",
                transition: "color 0.3s ease"
              }}
              onMouseEnter={(e) => e.target.style.color = "#38bdf8"}
              onMouseLeave={(e) => e.target.style.color = isActive(link.path) ? "#38bdf8" : "#cbd5e1"}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* ✅ UPDATED: Header Profiles Section with Footer-like Hover Effect */}
        <div style={{ display: "flex", gap: "20px" }}>
          {socialIcons.map((social, idx) => (
            <a
              key={idx}
              href={social.url}
              target="_blank"
              rel="noreferrer"
              className="header-social-icon"
              style={{ 
                color: "#fff",
                fontSize: "20px",
                transition: "all 0.3s ease",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: "36px",
                height: "36px",
                borderRadius: "10px",
                background: "rgba(255, 255, 255, 0.05)",
                textDecoration: "none"
              }}
              title={social.name}
            >
              <i className={social.icon}></i>
            </a>
          ))}
        </div>

        {/* Mobile Menu Button (optional, if needed) */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={{
            display: "none",
            background: "rgba(56, 189, 248, 0.1)",
            border: "1px solid rgba(56, 189, 248, 0.3)",
            color: "#38bdf8",
            width: "42px",
            height: "42px",
            borderRadius: "12px",
            fontSize: "20px",
            cursor: "pointer"
          }}
          className="mobile-menu-btn"
        >
          <i className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"}`}></i>
        </button>
      </div>

      {/* Mobile Menu (if needed) */}
      {isMenuOpen && (
        <div style={{
          position: "fixed",
          top: "70px",
          left: 0,
          width: "100%",
          background: "rgba(15, 23, 42, 0.98)",
          backdropFilter: "blur(20px)",
          padding: "20px",
          zIndex: 999
        }}>
          {navLinks.map((link, idx) => (
            <Link
              key={idx}
              to={link.path}
              onClick={() => setIsMenuOpen(false)}
              style={{
                display: "block",
                padding: "12px",
                textDecoration: "none",
                color: "#cbd5e1",
                borderBottom: "1px solid rgba(56, 189, 248, 0.1)"
              }}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default Header;