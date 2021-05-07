import React from "react";
import logo from ".././assets/images/pizzamortal.png";
import "./Image.css";

function Image() {
  return (
    <div className="image">
      <img src={logo} className="image__img" />
    </div>
  );
}

export default Image;
