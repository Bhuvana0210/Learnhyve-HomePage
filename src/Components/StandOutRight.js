import React from 'react';
import "./StandOutRight.css"

const StandOutRight = () => {
  return (
    <div className="learn">
      <div className="container_learn">
        <h1 id="h1">Why Learnhyve Is Unique?</h1>

        <div className="block_learn">
          <i className="fas fa-users icons"></i>
          <div>
            <h2 id="h2">Connect:</h2>
            <p id="p">Form connections with peers, dive into gamified experiences, and join engaging workshops</p>
          </div>
        </div>

        <div className="block_learn">
          <i className="fas fa-book-open icons"></i>
          <div>
            <h2 id="h2">Discover:</h2>
            <p id="p">Access comprehensive study resources and acquire essential knowledge to thrive. Utilize AI-driven
              assessments to understand your strengths and areas for growth.</p>
          </div>
        </div>

        <div className="block_learn">
          <i className="fas fa-trophy icons"></i>
          <div>
            <h2 id="h2">Succeed:</h2>
            <p id="p">Empower others, enhance your own learning, rise on the leaderboard, and earn rewards for every
              achievement.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StandOutRight;
