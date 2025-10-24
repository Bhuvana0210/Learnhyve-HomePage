

import React, { useState, useEffect, lazy, Suspense } from "react";

const HexSmallScreens = lazy(() => import("./HexSmallScreens"));
const HexDesktop = lazy(() => import("./HexDesktop"));

const HexGrid = () => {
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(window.innerWidth <= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileOrTablet(window.innerWidth <= 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {isMobileOrTablet ? <HexSmallScreens /> : <HexDesktop />}
    </Suspense>
  );
};

export default HexGrid;
