import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

import { connect } from "react-redux";

function Navbar({ cart }) {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.qty;
    });

    setCartCount(count);
  }, [cart, cartCount]);

  return (
    <ul className="navbar">
      <li className="navbar__item">Pizzas</li>
      <li className="navbar__item">Historia</li>
      <li className="navbar__item">
        <Link to="/b" className="navbar__link">
          Carrito {cartCount}
        </Link>
      </li>
    </ul>
  );
}

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Navbar);
