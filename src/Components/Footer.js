import "./Footer.css";
import React, { useEffect } from 'react';
import blackLogo from "../images/blackLogo.png"
const Footer = () => {
  useEffect(() => {
    const yearSpan = document.getElementById("year");
    if (yearSpan) {
      yearSpan.textContent = new Date().getFullYear();
    }
  }, []);

  return (
    <footer className="footer bg-secondary">
      <div className="foot-container">
        <div className="footer-grid">
          {/* Brand and Description */}
          <div>
            <a href="Home.html" className="foot-brand">
              <img className="foot-logo" src={blackLogo} alt="learnhyve-logo" />
            </a>
            <p className="foot-description">
              Revolutionizing education for a skilled India. Join us in our mission to empower learners with essential
              real-world skills.
            </p>
          </div>
          {/* Quick Links */}
          <div>
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-links">
              <li><a href="Home.html" className="footer-link">Home</a></li>
              <li><a href="about.html" className="footer-link">About Us</a></li>
              <li><a href="Features.html" className="footer-link">Features</a></li>
              <li><a href="worshop.html" className="footer-link">Workshops</a></li>
              <li><a href="blog.html" className="footer-link">Blog</a></li>
              <li><a href="contact.html" className="footer-link">Contact Us</a></li>
            </ul>
          </div>
          {/* Contact Information */}
          <div>
            <h3 className="footer-heading">Contact Us</h3>
            <address className="footer-address">
              Kolkata, India<br />
              <a href="mailto:contact@learnhyve.com" className="footer-contact">contact@learnhyve.com</a><br />
              <a href="mailto:Support@learnhyve.com" className="footer-contact">Support@learnhyve.com</a>
            </address>
          </div>
          {/* Social Media Links */}
          <div>
            <h3 className="footer-heading">Follow Us</h3>
            <div className="foot-social-links">
              <a href="https://www.facebook.com/profile.php?id=61561398463423" className="social-icon" target="_blank" rel="noreferrer">Facebook</a>
              <a href="https://www.instagram.com/learnhyve_app/" className="social-icon" target="_blank" rel="noreferrer">Instagram</a>
              <a href="https://x.com/learnhyve_app" className="social-icon" target="_blank" rel="noreferrer">Twitter</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; <span id="year"></span> LearnHyve. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
