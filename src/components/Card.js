import React from "react";
import "./Card.css";

function Card({ productData }) {
  return (
    <div className="card">
      <img
        src={productData.image}
        alt={productData.alt}
        className="card__img"
      />
      <h2>{productData.title}</h2>
      <small className="card__taste">{productData.taste}</small>
      <p>$ {productData.price}</p>
      <button className="card__button">Añadir a carrito</button>
    </div>
  );
}

export default Card;
