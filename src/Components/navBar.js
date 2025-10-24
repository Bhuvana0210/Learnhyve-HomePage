
//withouit tailwind
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import blackLogo from "../images/blackLogo.png";
import "./navBar.css";

const Nav = ({ showLogo }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div className="nav">
      <div className="nav-container" ref={navRef}>
        {/* Animate Logo */}
        <motion.a
          href="#"
          className="blackLogo"
          initial={{ y: -50, opacity: 0 }}
          animate={showLogo ? { y: 0, opacity: 1 } : { y: -50, opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img src={blackLogo} alt="LearnHyve" className="logo-img" />
        </motion.a>

        {/* Search Bar */}
        <div className="s-course">
          <div className="search-container">
            <div className="search-bar-container">
              <input
                type="text"
                id="search-bar"
                autoComplete="off"
                placeholder="Search for skills..."
              />
              <button id="search-button">
                <i className="fas fa-search"></i>
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <a href="#">Home</a>
          <a href="#">Features</a>
          <a href="#">Workshops</a>
          <a href="#">Blogs</a>
          <a href="#">About</a>
          <a href="#">Support</a>
          <button className="contact-btn">Contact Us</button>
        </div>

        {/* Hamburger */}
        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>
      </div>
    </div>
  );
};

export default Nav;
