import React from "react";
import "./Projects.css";

function Projects() {
  // Real GitHub Projects - Saved from aapki links
  const projects = [
    {
      id: 1,
      title: "User Management System",
      description: "Mini CRUD application for managing users with complete authentication system. Features include adding, editing, deleting users, search functionality, and responsive dashboard.",
      tech: ["Laravel", "Blade", "PHP", "MySQL", "Bootstrap"],
      repoLink: "https://github.com/ilyasqureeshi789-ilyas/User_Management_System-mini-crud-laravel",
      stars: 0,
      language: "PHP",
      languageColor: "#4F5D95",
      icon: "fa-users"
    },
    {
      id: 2,
      title: "SMI Store - eCommerce Platform",
      description: "Complete eCommerce web application with product management, shopping cart, order processing, category filtering, and advanced search functionality. Built with Laravel 12 and Bootstrap 5.",
      tech: ["Laravel 12", "Bootstrap 5", "MySQL", "PHP 8.2", "Font Awesome"],
      repoLink: "https://github.com/ilyasqureeshi789-ilyas/pos-app-ecommerce",
      stars: 0,
      language: "PHP",
      languageColor: "#4F5D95",
      icon: "fa-store"
    },
    {
      id: 3,
      title: "Ilyas Branded Cycle Store",
      description: "Professional e-commerce web application for selling bicycles online. Features product management, shopping cart, user authentication, admin dashboard, and secure checkout system.",
      tech: ["PHP Core", "MySQL", "Bootstrap 5", "JavaScript", "HTML5/CSS3"],
      repoLink: "https://github.com/ilyasqureeshi789-ilyas/Ecommerce_store_PHP",
      stars: 0,
      language: "PHP",
      languageColor: "#4F5D95",
      icon: "fa-bicycle"
    }
  ];

  return (
    <div className="projects-container">
      <section className="projects-section">
        <div className="container">
          {/* Header */}
          <div className="projects-header">
            <span className="section-badge">
              <i className="fas fa-code-branch"></i> My Portfolio
            </span>
            <h1 className="section-title">
              Production <span className="text-gradient">Repositories</span>
            </h1>
            <p className="section-subtitle">
              Explore my real-world projects — from scalable eCommerce platforms to robust management systems
            </p>
          </div>

          {/* Projects Grid */}
          <div className="projects-grid">
            {projects.map((project) => (
              <div className="project-card glass-card" key={project.id}>
                {/* Card Header with Icon */}
                <div className="card-header">
                  <div className="project-icon">
                    <i className={`fas ${project.icon}`}></i>
                  </div>
                  <div className="project-language">
                    <span 
                      className="language-dot" 
                      style={{ backgroundColor: project.languageColor }}
                    ></span>
                    <span>{project.language}</span>
                  </div>
                </div>

                {/* Project Title */}
                <h3 className="project-title">{project.title}</h3>
                
                {/* Description */}
                <p className="project-description">{project.description}</p>
                
                {/* Tech Stack Tags */}
                <div className="tech-tags">
                  {project.tech.map((tech, idx) => (
                    <span className="tech-badge" key={idx}>{tech}</span>
                  ))}
                </div>
                
                {/* Card Footer with Button */}
                <div className="card-footer">
                  <a 
                    href={project.repoLink} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="repo-btn"
                  >
                    <i className="fab fa-github"></i> 
                    View Repository
                    <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* GitHub Profile Link */}
          <div className="github-profile-link">
            <a 
              href="https://github.com/ilyasqureeshi789-ilyas/" 
              target="_blank" 
              rel="noreferrer" 
              className="github-btn"
            >
              <i className="fab fa-github"></i>
              <span>View All Projects on GitHub</span>
              <i className="fas fa-external-link-alt"></i>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;