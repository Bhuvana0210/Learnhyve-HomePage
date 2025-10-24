

import React from "react";
import circleLogo from "../images/circleLogo.png";
import './splashScreen.css';

const SplashScreen = () => {
  return (
    <div className="splashScreen" style={{ height: '120vh' }}>
      <div className="circleLogo">
        <img src={circleLogo} alt="LearnHyve" />
      </div>
      <div className="scrollWrapper">
        <i className="fa-solid fa-chevron-down down"></i>
        <h1 className="scroll">Scroll Down</h1>
      </div>
    </div>
  );
};

export default SplashScreen;
