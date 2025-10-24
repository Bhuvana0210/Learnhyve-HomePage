

import React from "react";
import { motion } from "framer-motion";
import { useAnimation } from "framer-motion";
import { useEffect } from "react";
import "./text.css";

const text =
  "Discover a dynamic gamified learning platform that equips students with advanced tools, essential life and soft skills, a vibrant community, and hands-on experiences. Unlock a new way of learning with LearnHyve!";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const wordContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.02,
    },
  },
};

const letterVariants = {
  hidden: { color: "grey", opacity: 0 },
  visible: {
    color: "black",
    opacity: 1,
    transition: { duration: 0.2 },
  },
};

const SubText = ({ start, onComplete }) => {
  const controls = useAnimation();

  useEffect(() => {
    if (start) {
      controls.start("visible");
    }
  }, [start, controls]);

  const words = text.split(" ");

  return (
    <motion.div
      className="subtext-container"
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      onAnimationComplete={onComplete}
    >
      {words.map((word, wordIndex) => (
        <motion.span
          key={wordIndex}
          variants={wordContainerVariants}
          style={{ display: "inline-block", whiteSpace: "nowrap", marginRight: "6px" }}
        >
          {word.split("").map((char, charIndex) => (
            <motion.span
              key={charIndex}
              variants={letterVariants}
              style={{ display: "inline-block" }}
            >
              {char}
            </motion.span>
          ))}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default SubText;

