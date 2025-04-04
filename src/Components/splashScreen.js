import React from "react";
import circleLogo from "../images/circleLogo.png";
import coverImage from "../images/students3.png";
import { div } from "framer-motion/client";
import './splashScreen.css';

const SplashScreen = () => {
    return (<>
        <div className="splashScreen">
            <div className="circleLogo">
                <img src={circleLogo} alt="LearnHyve" />
                <i class="fa-solid fa-chevron-down down"></i>
                <h1 className="scroll">Scroll Down</h1>
                {/* <i class="fa-solid fa-v"></i> */}
            </div>

        </div>

    </>
    );
};

export default SplashScreen;
