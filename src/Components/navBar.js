// import React from "react";
// import blackLogo from "../images/blackLogo.png";
// import "./navBar.css"
// const Nav = () => {
//     return (
//         <div className="nav">
//             <div className="nav-container">
//                 <a href="#" className="blackLogo">
//                     <img src={blackLogo} alt="LearnHyve" />
//                 </a>
                
//                 {/* Start Searching for skills */}
//                 <div class="s-course">
//                     <div class="search-container">
//                         <div class="search-bar-container">
//                             <input type="text" id="search-bar" autocomplete="off" placeholder="Search for skills..."/>
//                             <button id="search-button"><i class="fas fa-search"></i></button>
//                         </div>

//                         {/* Dropdown Options (Scrollable) */}
//                         <ul id="dropdown-options" class="dropdown-options hidden">
//                             <li data-section="communication-skills">Communication Skills</li>
//                             <li data-section="emotional-intelligence">Emotional Intelligence</li>
//                             <li data-section="leadership-teamwork">Leadership & Teamwork</li>
//                             <li data-section="spoken-english">Spoken English</li>
//                             <li data-section="stock-market-investment">Stock Market & Investment</li>
//                             <li data-section="startup-entrepreneurship">Startup & Entrepreneurship</li>
//                             <li data-section="problem-solving-critical-thinking">Problem Solving & Critical Thinking</li>
//                             <li data-section="money-management">Money Management</li>
//                             <li data-section="health-nutrition">Health & Nutrition</li>
//                             <li data-section="robotics-automation">Robotics & Automation</li>
//                             <li data-section="ai-tools">AI Tools</li>
//                             <li data-section="yoga">Yoga</li>
//                         </ul>
//                     </div>
//                 </div>
//                 {/* end of Searching for skills */}

//                 <div className="nav-links">
//                     <a href="">Home</a>
//                     <a href="">Features</a>
//                     <a href="">Workshops</a>
//                     <a href="">Blogs</a>
//                     <a href="">About</a>
//                     <a href="">Support</a>
//                     <button className="contact-btn">Contact Us</button>
//                 </div>
//                 <div className="menu-toggle">☰</div>
//             </div>
//         </div>
//     )
// }

// export default Nav;


import React, { useState, useRef, useEffect } from "react";
import blackLogo from "../images/blackLogo.png";
import "./navBar.css";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);

  // Close mobile menu when clicking outside
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
        <a href="#" className="blackLogo">
          <img src={blackLogo} alt="LearnHyve" />
        </a>

        {/* Start Searching for skills */}
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

            {/* Dropdown Options (Scrollable) */}
            {/* <ul id="dropdown-options" className="dropdown-options hidden">
              <li data-section="communication-skills">Communication Skills</li>
              <li data-section="emotional-intelligence">Emotional Intelligence</li>
              <li data-section="leadership-teamwork">Leadership & Teamwork</li>
              <li data-section="spoken-english">Spoken English</li>
              <li data-section="stock-market-investment">Stock Market & Investment</li>
              <li data-section="startup-entrepreneurship">Startup & Entrepreneurship</li>
              <li data-section="problem-solving-critical-thinking">Problem Solving & Critical Thinking</li>
              <li data-section="money-management">Money Management</li>
              <li data-section="health-nutrition">Health & Nutrition</li>
              <li data-section="robotics-automation">Robotics & Automation</li>
              <li data-section="ai-tools">AI Tools</li>
              <li data-section="yoga">Yoga</li>
            </ul> */}
          </div>
        </div>
        {/* End of Searching for skills */}

        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <a href="">Home</a>
          <a href="">Features</a>
          <a href="">Workshops</a>
          <a href="">Blogs</a>
          <a href="">About</a>
          <a href="">Support</a>
          <button className="contact-btn">Contact Us</button>
        </div>

        <div className="menu-toggle">
          ☰
        </div>
      </div>
    </div>
  );
};

export default Nav;
