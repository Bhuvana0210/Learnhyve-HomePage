

import React, { useEffect, useState } from "react";
import {
  FaCommentDots,
  FaWallet,
  FaRocket,
  FaChartLine,
  FaPlusCircle,
} from "react-icons/fa";
import "./WeTeachRight.css";

const skills = [
  { icon: <FaCommentDots />, title: "Communication Skill" },
  { icon: <FaWallet />, title: "Money Management" },
  { icon: <FaRocket />, title: "StartUp And Entrepreneurship" },
  { icon: <FaChartLine />, title: "Stock Market And Trading" },
  { icon: <FaPlusCircle />, title: "And Many More" },
];

const Hexagon = () => {
  const [rotation, setRotation] = useState(30);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => prev + 60);
      setIndex((prev) => (prev + 1) % skills.length);
    }, 2000); // Rotate every 2 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="hexagon-wrapper">
      <div className="hexagon-border">
        <div
          className="hexagon"
          style={{
            transform: `rotate(${rotation}deg)`,
            transition: "transform 0.5s ease-in-out",
          }}
        >
          <div
            className="hexagon-content"
            style={{
              transform: `rotate(-${rotation}deg)`,
              transition: "transform 0.5s ease-in-out",
            }}
          >
            <div className="WeTeachicon" >
              {skills[index].icon}
            </div>
            <div className="title" >
              {skills[index].title}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hexagon;

