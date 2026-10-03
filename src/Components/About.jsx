import React from "react";
import "./About.css";

function About() {
  const currentYear = new Date().getFullYear();
  const devExperience = currentYear - 2023;

  const oupResponsibilities = [
    { icon: "fa-file-invoice", title: "Order Processing", desc: "Order creation, verification, and validation" },
    { icon: "fa-check-circle", title: "Order Checking", desc: "Review orders for accuracy and completeness" },
    { icon: "fa-truck", title: "Order Dispatch", desc: "Coordinate and track dispatch operations" },
    { icon: "fa-percent", title: "Discount & Tax", desc: "Apply discounts, calculate taxes accurately" },
    { icon: "fa-chart-line", title: "Stock Management", desc: "Monitor warehouse inventory levels" },
    { icon: "fa-book", title: "Title Finding", desc: "Locate and verify book titles from Excel sheets" },
    { icon: "fa-balance-scale", title: "Balance Ledger", desc: "Maintain customer account balances" },
    { icon: "fa-file-pdf", title: "Quotations", desc: "Generate PDF quotes, verify, convert to orders" },
    { icon: "fa-credit-card", title: "Payment Types", desc: "Cash, credit, standard, and prepaid orders" },
    { icon: "fa-database", title: "SAP Integration", desc: "Punch customer data from Excel to SAP" },
    { icon: "fa-passport", title: "Gatepass", desc: "Create and manage dispatch gatepasses" },
    { icon: "fa-file-invoice-dollar", title: "Invoicing", desc: "Generate and verify customer invoices" }
  ];

  const skills = {
    backend: ["PHP Laravel", "REST APIs", "MySQL", "Authentication"],
    frontend: ["React.js", "JavaScript (ES6)", "Bootstrap 5", "Tailwind CSS"],
    devops: ["Docker (Familiar)", "Ubuntu Linux", "Git/GitHub"]
  };

  return (
    <div className="about-container">
      <section className="about-section">
        <div className="container">
          
          <div className="about-header">
            <span className="section-badge">
              <i className="fas fa-user-astronaut"></i> My Story
            </span>
            <h1 className="section-title">
              From <span className="text-gradient">Commerce</span> to 
              <span className="text-gradient"> Code</span>
            </h1>
            <p className="section-subtitle">
              Bridging business workflows with modern web development — a journey of precision, logic, and growth
            </p>
          </div>

          <div className="about-grid">
            
            {/* Left Column */}
            <div className="about-left">
              
              {/* Education Card */}
              <div className="info-card glass-card">
                <div className="card-icon">
                  <i className="fas fa-graduation-cap"></i>
                </div>
                <h3 className="card-title">Education & Certification</h3>
                
                <div className="timeline-item">
                  <span className="year">2014</span>
                  <p className="desc">
                    <strong>B.Com (Bachelor of Commerce)</strong>
                    <br />University of the Punjab, Lahore
                  </p>
                </div>
                
                <div className="timeline-item">
                  <span className="year">Aug 2023</span>
                  <p className="desc">
                    <strong>Full Stack Web Development Certification</strong>
                    <br />E-hunar | Kamyab Hunarmand Jawan Program
                  </p>
                </div>
                
                <p className="insight">
                  <strong>🎓 Commerce Foundation (2014):</strong> My B.Com degree from Punjab University equipped me with 
                  <strong> Advanced Accounting, Cost Accounting, Business Statistics, Business Taxation, and Auditing</strong> — 
                  giving me a deep understanding of financial workflows, ledgers, and fiscal operations before I wrote my first line of code.
                </p>

                <p className="insight">
                  <strong>💼 Professional Tools Proficiency:</strong> Alongside commerce, I mastered 
                  <strong> MS Office Suite (Excel, Word, PowerPoint)</strong>, <strong>SAP Software</strong> for data punching and order management, 
                  and maintain a <strong>40+ WPM typing speed</strong> — ensuring precision and efficiency in every task.
                </p>

                <p className="insight">
                  <strong>🚀 Full Stack Development (2023):</strong> Certified by <strong>E-hunar | Kamyab Hunarmand Jawan Program</strong>, 
                  I specialize in <strong>PHP Laravel</strong> for robust backend architectures and <strong>React.js</strong> for dynamic, 
                  high-performance frontends. My commerce background uniquely positions me to build business-centric web applications 
                  that solve real-world problems — from inventory systems to automated invoicing portals.
                </p>

                <p className="insight">
                  <strong>🌟 The Bridge:</strong> Whether it's balancing ledgers or balancing database queries, managing stock or 
                  managing state — my journey from Oxford University Press's order-to-dispatch pipeline to modern full-stack development 
                  has been about one thing: <strong>precision, process, and progress</strong>.
                </p>
              </div>
              
              {/* Dev Journey Card */}
              <div className="info-card glass-card">
                <div className="card-icon">
                  <i className="fas fa-laptop-code"></i>
                </div>
                <h3 className="card-title">Full Stack Journey</h3>
                <div className="timeline-item">
                  <span className="year">2023 → Present</span>
                  <p className="desc"><strong>{devExperience}+ Years Experience</strong><br />Full Stack Web Development</p>
                </div>
                <div className="skill-stack">
                  <div className="skill-group">
                    <span className="skill-label">Backend:</span>
                    <div className="skill-tags">
                      {skills.backend.map((skill, i) => <span key={i} className="skill-tag php">{skill}</span>)}
                    </div>
                  </div>
                  <div className="skill-group">
                    <span className="skill-label">Frontend:</span>
                    <div className="skill-tags">
                      {skills.frontend.map((skill, i) => <span key={i} className="skill-tag react">{skill}</span>)}
                    </div>
                  </div>
                  <div className="skill-group">
                    <span className="skill-label">DevOps:</span>
                    <div className="skill-tags">
                      {skills.devops.map((skill, i) => <span key={i} className="skill-tag devops">{skill}</span>)}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - OUP Experience */}
            <div className="about-right">
              <div className="experience-card glass-card">
                <div className="card-icon">
                  <i className="fas fa-building"></i>
                </div>
                <h3 className="card-title">Oxford University Press, Islamabad</h3>
                <p className="role-badge">Key Punch Operator (KPO) | 2 Consecutive Years</p>
                <p className="experience-desc">
                  A transformative 2-year project that sharpened my attention to detail, data management, 
                  and understanding of end-to-end business operations — directly influencing how I build applications today.
                </p>
                
                <div className="responsibilities-grid">
                  {oupResponsibilities.map((item, idx) => (
                    <div className="resp-item" key={idx}>
                      <i className={`fas ${item.icon}`}></i>
                      <div className="resp-content">
                        <h4>{item.title}</h4>
                        <p>{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="workflow-note">
                  <i className="fas fa-sync-alt"></i>
                  <span>Complete Order-to-Dispatch Pipeline: Quotation → Order Processing → Stock Check → Invoicing → Gatepass → Dispatch</span>
                </div>
              </div>
            </div>
          </div>

          {/* DevOps Story Card */}
          <div className="devops-story glass-card">
            <div className="story-header">
              <div className="story-icons">
                <i className="fab fa-docker"></i>
                <i className="fab fa-ubuntu"></i>
                <i className="fas fa-cloud"></i>
              </div>
              <h3 className="story-title">🌩️ My DevOps Companion Story</h3>
            </div>
            <div className="story-body">
              <p>
                Just like I mastered the order-to-dispatch pipeline at OUP, I'm now exploring the 
                <strong> container-to-deployment pipeline</strong> with <strong className="docker-text">Docker</strong> and 
                <strong className="ubuntu-text"> Ubuntu Linux</strong>.
              </p>
              <p>
                I've worked with containerized development environments, understand runtime configurations, 
                and can navigate Linux servers confidently. While I'm continuing to deepen my hands-on DevOps experience, 
                I bring the same <strong>methodical, process-driven mindset</strong> — from ledger balancing to load balancing.
              </p>
              <div className="story-quote">
                <i className="fas fa-quote-left"></i>
                <span>From OUP's data precision to Laravel's backend logic — every pipeline tells a story.</span>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="about-stats">
            <div className="stat-card">
              <div className="stat-number">2014</div>
              <div className="stat-label">B.Com Graduate</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">2+</div>
              <div className="stat-label">Years at OUP (KPO)</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">{devExperience}+</div>
              <div className="stat-label">Years Full Stack Dev</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">12+</div>
              <div className="stat-label">Process Modules Managed</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;