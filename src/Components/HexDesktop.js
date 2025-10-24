import React from "react";
import "./HexDesktop.css";
import bee from "../images/beeImage.png";

const Hex = ({ title, subtitle, iconClass, type }) => (
  <div className={`hex ${type}`}>
    <div className="hex-content">
    {iconClass && (
        <div className="icon">
          <i className={iconClass}></i>
        </div>
      )}
      <div className="title">{title}</div>
      {subtitle && <div className="subtitle">{subtitle}</div>}
    </div>
  </div>
);

const HexDesktop = () => {
  return (
    <>
      <div className="hex-container">
        <div className="bee-wrapper">
          
          <img src={bee} alt="Bee" className="bee-icon bee1" />
          <img src={bee} alt="Bee" className="bee-icon bee2" />
          
        </div>
        <h1>Unlock your potential with LearnHyve</h1>
        <div className="hex-row">

          <Hex type="color-3" />
          <Hex type="color-1" iconClass="fas fa-gamepad" title="Gamified Learning" subtitle="Earn badges, climb leaderboards, and learn through fun challenges!" />
          <Hex type="color-2" iconClass="fas fa-users" title="Community support" subtitle="A supportive community to keep you motivated and help you succeed." />
          <Hex type="color-3" iconClass="fas fa-tools" title="Practical learning" subtitle="Hands-on learning to master skills effectively and efficiently." />
          <Hex type="color-1" />


        </div>
        <div className="hex-row offset">
          <Hex type="color-1" />
          <Hex type="color-1" />
          <Hex type="color-2" iconClass="fas fa-book-open" title="Story-based interactive learning" />
          <Hex type="color-3" iconClass="fas fa-question-circle" title="Always doubt support" />
          <Hex type="color-1" iconClass="fas fa-chalkboard-teacher" title="Experienced Mentors" />
          <Hex type="color-2" iconClass="fas fa-heartbeat" title="Life improving skills & Modules" />
          <Hex type="color-3" />
          <Hex type="color-3" />
        </div>
      </div>

    </>
  );
};

export default HexDesktop;

