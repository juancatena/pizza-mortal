import React from "react";
import "./Card.css";

function Card() {
  return (
    <div className="card">
      <img
        src="https://www.laespanolaaceites.com/wp-content/uploads/2019/06/pizza-con-chorizo-jamon-y-queso-1080x671.jpg"
        className="card__img"
      />
      <h2>Sabor</h2>
      <p>$234</p>
    </div>
  );
}

export default Card;
