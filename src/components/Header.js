import React from "react";
import Image from "./Image";
import Navbar from "./Navbar";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <Image />
      <Navbar />
    </div>
  );
}

export default Header;
