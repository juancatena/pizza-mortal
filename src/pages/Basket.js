import React from "react";
import { Link } from "react-router-dom";

function Basket() {
  return (
    <div>
      <h1>Tu Pedido</h1>
      <button>
        <Link to="/">Home</Link>
      </button>
    </div>
  );
}

export default Basket;
