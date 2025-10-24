
import React, { useState, useEffect } from 'react';
import StandOutLeft from './StandOutLeft';
import StandOutRight from './StandOutRight';
import './StandOut.css';

const StandOut = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div
      className="standout"
      style={{
        flexDirection: isMobile ? 'column' : 'row',
        alignItems: isMobile ? 'center' : 'flex-start',
      }}
    >
      <div className="standout-left">
        <StandOutLeft isMobile={isMobile} />
      </div>
      <div className="standout-right">
        <StandOutRight isMobile={isMobile} />
      </div>
    </div>
  );
};

export default StandOut;
