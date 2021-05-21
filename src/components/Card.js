import React from "react";
import "./Card.css";
import { connect } from "react-redux";
import { addToCart, loadCurrentItem } from "../redux/Shopping/shopping-actions";
import { Link } from "react-router-dom";

function Card({ productData, addToCart, loadCurrentItem }) {
  return (
    <div className="card">
      <img
        src={productData.image}
        alt={productData.alt}
        className="card__img"
      />
      <h2>{productData.title}</h2>
      <small className="card__taste">{productData.taste}</small>
      <p className="card__price">$ {productData.price}</p>
      <div className="card__buttons">
        {/* <Link to={`/product/${productData.id}`}>
          <button
            onClick={() => loadCurrentItem(productData)}
            className="card__button1"
          >
            Ver mas
          </button>
        </Link>*/}
        <button
          onClick={() => addToCart(productData.id)}
          className="card__button2"
        >
          Añadir a carrito
        </button>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
    loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
  };
};

export default connect(null, mapDispatchToProps)(Card);
