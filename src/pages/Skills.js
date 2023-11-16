import React from "react";
import ModelOne from "./ModelOne";
import { motion as m } from "framer-motion";
import { listItems } from "../data/data";
import Pirate from "./Pirate";

function Skills() {
  return (
    <>
      <ModelOne title="Skills" paragraph1="Here are some of my skills:" />
      <m.div className="items">
        <div className="list-items">
          {listItems.map((item, index) => (
            <m.p
              className="skills"
              key={index}
              style={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.1, // Stagger delay
                ease: "easeOut",
              }}
            >
              {item}
            </m.p>
          ))}
        </div>
      </m.div>
      <Pirate />
    </>
  );
}

export default Skills;
