

import React from "react";
import { motion } from "framer-motion";
import "./text.css";

const text =
  "Are you ready to change the landscape of education with LearnHyve?";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const wordVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.04,
    },
  },
};

const letterVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const MainText = ({ onComplete }) => {
  const highlightWords = ["landscape", "of", "education"];

  return (
    <motion.div
      className="animated-text"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      onAnimationComplete={onComplete}
    >
      {text.split(" ").map((word, index) => {
        const cleanWord = word.replace(/[?.,!]/g, "");
        const isHighlight = highlightWords.includes(cleanWord.toLowerCase());

        return (
          <motion.span
            key={index}
            className={`word-span ${isHighlight ? "highlight" : ""}`}
            variants={wordVariants}
          >
            {word.split("").map((char, i) => (
              <motion.span key={i} variants={letterVariants}>
                {char}
              </motion.span>
            ))}
            &nbsp;
          </motion.span>
        );
      })}
    </motion.div>
  );
};

export default MainText;
