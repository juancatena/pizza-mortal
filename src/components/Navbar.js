import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <ul className="navbar">
      <li className="navbar__item">Pizzas</li>
      <li className="navbar__item">Historia</li>
      <li className="navbar__item">
        <Link to="/b" className="navbar__link">
          Carrito
        </Link>
      </li>
    </ul>
  );
}

export default Navbar;
