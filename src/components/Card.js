import React from "react";
import "./Card.css";

function Card({ id, image, alt, title, taste, price }) {
  return (
    <div key={id} className="card">
      <img src={image} alt={alt} className="card__img" />
      <h2>{title}</h2>
      <small className="card__taste">{taste}</small>
      <p>{price}</p>
      <button className="card__button">Añadir a carrito</button>
    </div>
  );
}

export default Card;
