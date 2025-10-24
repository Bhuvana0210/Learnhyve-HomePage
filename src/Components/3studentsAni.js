
import React, { useEffect, useState } from "react";
import "./3studentsAni.css";
import studentsImage from "../images/students3.png";

const skills = [
  { icon: "fas fa-comments", label: "Communication Skill" },
  { icon: "fas fa-dollar-sign", label: "Money Management" },
  { icon: "fas fa-lightbulb", label: "StartUp And Entrepreneurship" },
  { icon: "fas fa-chart-line", label: "Stock Market And Trading" },
  { icon: "fas fa-plus-circle", label: "And Many More" },
];

const HeaderImage = () => {
  const [angle, setAngle] = useState(0);
  const [radius, setRadius] = useState(getResponsiveRadius());
  const [loaded, setLoaded] = useState(false); // 👈 New state for fade-in

  const stepAngle = 360 / skills.length;

  function getResponsiveRadius() {
    const width = window.innerWidth;
    if (width < 480) return 150;
    if (width < 768) return 200;
    if (width < 1024) return 240;
    return 270;
  }

  useEffect(() => {
    const handleResize = () => setRadius(getResponsiveRadius());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setAngle((prev) => (prev + 1) % 360);
    }, 1000 / 20);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // trigger fade-in when component mounts
    setLoaded(true);
  }, []);

  return (
    <div className={`header__image ${loaded ? "fade-in" : ""}`}>
      {/* Rotating skill blocks */}
      {skills.map((skill, i) => {
        const totalAngle = angle + stepAngle * i;
        const rad = (totalAngle * Math.PI) / 180;
        const x = radius * Math.cos(rad);
        const y = radius * Math.sin(rad);

        return (
          <div
            key={i}
            className="header__image__card"
            style={{
              transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`,
            }}
          >
            <span><i className={`${skill.icon} icon`} /></span>
            <div className="label">{skill.label}</div>
          </div>
        );
      })}

      {/* Image should be after so it sits on top */}
      <img src={studentsImage} alt="students" className="students-img" />
    </div>
  );
};

export default HeaderImage;
