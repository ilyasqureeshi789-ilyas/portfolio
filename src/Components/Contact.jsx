import React, { useState } from "react";
import "./Contact.css"; // ✅ New CSS file for Contact

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setStatus(true);
    setTimeout(() => {
      setStatus(false);
      setForm({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  // Contact Details
  const contactDetails = {
    phone: "+92 344 5341740",
    email: "ilyasqureeshi789@gmail.com",
    location: "Islamabad, Pakistan"
  };

  return (
    <div className="contact-page-container">
      <section id="contact" className="contact-section">
        <div className="container">
          <div className="contact-wrapper">
            
            {/* LEFT SIDE - Contact Details Card */}
            <div className="contact-info-card glass-card">
              <div className="info-header">
                <i className="fas fa-paper-plane"></i>
                <h2>Get in Touch</h2>
                <p>Let's connect and discuss your next project</p>
              </div>
              
              <div className="info-details">
                <div className="detail-item">
                  <div className="detail-icon">
                    <i className="fas fa-phone-alt"></i>
                  </div>
                  <div className="detail-content">
                    <h4>Phone</h4>
                    <a href={`tel:${contactDetails.phone.replace(/\s/g, '')}`}>{contactDetails.phone}</a>
                  </div>
                </div>

                <div className="detail-item">
                  <div className="detail-icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="detail-content">
                    <h4>Email</h4>
                    <a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a>
                  </div>
                </div>

                <div className="detail-item">
                  <div className="detail-icon">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div className="detail-content">
                    <h4>Location</h4>
                    <p>{contactDetails.location}</p>
                  </div>
                </div>
              </div>

              <div className="info-social">
                <h4>Connect on Social</h4>
                <div className="social-icons">
                  <a href="https://github.com/ilyasqureeshi789-ilyas/" target="_blank" rel="noreferrer" className="social-circle github">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href="https://linkedin.com/in/muhammad-ilyas-387137157" target="_blank" rel="noreferrer" className="social-circle linkedin">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="https://www.youtube.com/@inside-dev-revised-commerce" target="_blank" rel="noreferrer" className="social-circle youtube">
                    <i className="fab fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE - Contact Form */}
            <div className="contact-form-card glass-card">
              <div className="form-header">
                <i className="fas fa-comment-dots"></i>
                <h2>Send a Message</h2>
                <p>I'll get back to you within 24 hours</p>
              </div>

              {status && (
                <div className="success-alert">
                  <i className="fas fa-check-circle"></i> ✓ Inquiry processed and dispatched!
                </div>
              )}

              <form onSubmit={handleFormSubmit}>
                <div className="form-group">
                  <label>
                    <i className="fas fa-user"></i> Full Name
                  </label>
                  <input 
                    type="text" 
                    className="form-input" 
                    placeholder="Enter your full name"
                    value={form.name} 
                    onChange={(e) => setForm({ ...form, name: e.target.value })} 
                    required 
                  />
                </div>

                <div className="form-group">
                  <label>
                    <i className="fas fa-envelope"></i> Email Address
                  </label>
                  <input 
                    type="email" 
                    className="form-input" 
                    placeholder="your@email.com"
                    value={form.email} 
                    onChange={(e) => setForm({ ...form, email: e.target.value })} 
                    required 
                  />
                </div>

                <div className="form-group">
                  <label>
                    <i className="fas fa-tag"></i> Subject
                  </label>
                  <input 
                    type="text" 
                    className="form-input" 
                    placeholder="Project inquiry / Collaboration"
                    value={form.subject} 
                    onChange={(e) => setForm({ ...form, subject: e.target.value })} 
                    required 
                  />
                </div>

                <div className="form-group">
                  <label>
                    <i className="fas fa-pencil-alt"></i> Message
                  </label>
                  <textarea 
                    className="form-input" 
                    rows="5" 
                    placeholder="Tell me about your project..."
                    value={form.message} 
                    onChange={(e) => setForm({ ...form, message: e.target.value })} 
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn-submit">
                  <i className="fas fa-paper-plane"></i> Send Request
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;