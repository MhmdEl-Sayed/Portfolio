import React, { useRef } from "react";
import "./hero.css";
import Lottie from "lottie-react";

import developer from "../../animation/devi.json";
import { motion } from "framer-motion";
const Hero = () => {
  const lottieRef = useRef();
  return (
    <section className="hero flex ">
      <div className="left-section  ">
        <div className="parent-avatar flex">
          <img
            src="public\img\WhatsApp Image 2024-02-01 at 7.47.27 PM-modified.webp"
            className="avatar"
            alt=""
          />
          <div className="icon-verified"></div>
        </div>

        <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1}}
        transition={{ type: "spring", stiffness: 25, damping: 18 }}    
     className="title">
        
          Software designer, founder, and amateur astronaut.
        </motion.h1>

        <p className="sub-title">
          I am Mohamed El- Sayed a software designer. I have projects using
          html, css and react, and I am professional in many frameworks. I
          specialize in building the visual and interactive aspects of a website
          or web application. -
        </p>

        <div className="all-icons flex">
          <div className="icon icon-twitter"></div>
          <div className="icon icon-instagram"></div>
          <div className="icon icon-github"></div>
          <div className="icon icon-linkedin-square"></div>
        </div>
      </div>

      <div className="right-section animation ">
        <Lottie
        lottieRef={lottieRef}
        onLoadedImages={() => {
          // @ts-ignore
          lottieRef.current.setSpeed(0.5)
        }
        }
          style={{ width:'385px' }}
          animationData={developer}
        />
      </div>
    </section>
  );
};

export default Hero;
