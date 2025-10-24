

import SubText from "./subtext";
import MainText from "./maintext";
import { useState } from "react";
import "./HomeHero.css";
import HeaderImage from "./3studentsAni";
import { motion } from "framer-motion";

const Hero = () => {
  const [subTextVisible, setSubTextVisible] = useState(false);
  const [buttonVisible, setButtonVisible] = useState(false);

  return (
    <motion.div
      className="w-full min-h-screen bg-white text-black p-10 pt-20"
      initial={{ y: "100vh" }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 50 }}
    >
      <div className="hero-section">
        <div className="left space-y-6">
          {/* MainText is always rendered, triggers subtext when done */}
          <MainText onComplete={() => setSubTextVisible(true)} />

          {/* SubText always exists in layout; fades in */}
          <div style={{ minHeight: "120px" /* Adjust to match real height */ }}>
            <SubText
              start={subTextVisible}
              onComplete={() => setButtonVisible(true)}
            />
          </div>

          {/* Button always takes space, but fades in */}
          <div style={{ minHeight: "60px" }}>
            <motion.button
              type="submit"
              className="Home-enrollButton"
              initial={{ opacity: 0 }}
              animate={{ opacity: buttonVisible ? 1 : 0 }}
              transition={{ duration: 0.6 }}
            >
              Enroll Now
            </motion.button>
          </div>
        </div>

        <div className="right">
          <HeaderImage />
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
