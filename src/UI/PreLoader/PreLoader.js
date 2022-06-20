import React from "react";
import "./PreLoader.css";
const PreLoader = () => {
  return (
    <div className="gooey">
      <span className="dot"></span>
      <div className="dots">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default PreLoader;
