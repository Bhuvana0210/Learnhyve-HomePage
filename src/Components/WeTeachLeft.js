import React from "react";
import "./WeTeachLeft.css"; // Link your CSS or use Tailwind classes

const WeTeachLeft = () => {
  return (
    <section id="essential-skills" className="skills-wrapper">
      <div className="main-content">
        <div className="text-section">
          <header className="heading">
            <h1>
              Some Essential Life and{" "}
              <span className="highlight">Soft Skills We Teach</span>
            </h1>
          </header>
          <section className="text">
            <p>
              Express your creative and learn what is needed to live a
              successful life professionally and personally. There are a lot of
              things to learn from outside of the textbooks and syllabus, which
              is not for scoring great in exams of schools rather in the exams
              of life.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
};

export default WeTeachLeft;
