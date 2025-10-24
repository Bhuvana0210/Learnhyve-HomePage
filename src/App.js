import React, { useState, useEffect } from "react";
import SplashScreen from "./Components/splashScreen";
import Nav from "./Components/navBar";
import Hero from "./Components/HomeHero";

import { AnimatePresence } from "framer-motion";
import "./App.css";
import HexGrid from "./Components/HexGrid";
import StandOut from "./Components/StandOut";
import WeTeach from "./Components/WeTeach"
import Footer from "./Components/Footer";


function App() {
  const [scrollTriggered, setScrollTriggered] = useState(false);

  // Handle scroll to trigger splash screen hide
  useEffect(() => {
    const handleScroll = () => {
      if (!scrollTriggered && window.scrollY > 50) {
        setScrollTriggered(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollTriggered]);

  // After splash screen hides, scroll back to top
  useEffect(() => {
    if (scrollTriggered) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [scrollTriggered]);

  return (
    <div className="App">
      {/* SplashScreen shown initially */}
      <AnimatePresence>
        {!scrollTriggered && <SplashScreen />}
      </AnimatePresence>

      {/* Nav appears after splash screen */}
      {scrollTriggered && <Nav showLogo={true} />}

      {/* Main content */}
      {scrollTriggered && (
        <>
        <div style={{backgroundColor:"white"}} >
          <Hero />
          <div id="HexGridPart"><HexGrid/></div>
          <div id="StandOutPart"><StandOut/></div>
          <div id="WeTeach " style={{backgroundColor:"white"}}><WeTeach/></div>
          <div id="Footer "><Footer/></div>
        </div>
          </>
      )}
    </div>
  );
}

export default App;

