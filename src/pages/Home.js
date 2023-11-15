import React from "react";
import { motion as m } from "framer-motion";

const Home = () => {
  return (
    <div className="home-container">
      <m.div
        className="titles"
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
        transition={{
          delay: 0.15,
          duration: 1,
          ease: "easeOut",
          type: "spring",
          stiffness: 100,
          damping: 15,
        }}
      >
        Welcome to my portfolio
      </m.div>
      <m.p
        className="titlez"
        initial={{ x: "-200vh" }}
        animate={{ x: 0 }}
        transition={{
          delay: 1.5,
          duration: 1,
          ease: "easeOut",
          type: "spring",
          stiffness: 100,
          damping: 15,
        }}
      >
        ~ by Reggie Dixon
      </m.p>
      <p style={{ color: "black" }}>TODO: Create a random joke here</p>
    </div>
  );
};

export default Home;