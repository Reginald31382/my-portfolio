import React from "react";
import treasure from "../images/treasure_chest.jpg";
import "./Pirate.css";

const Pirate = () => {
  return (
    <div className="mypic">
      <img className="treasure" src={treasure} alt="treasure" />
      <p className="caption">Me treasure</p>
    </div>
  );
};

export default Pirate;
