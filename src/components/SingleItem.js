import React from "react";
import { connect } from "react-redux";
import { addToCart } from "../redux/Shopping/shopping-actions";
import "./SingleItem.css";
import { Link } from "react-router-dom";

function SingleItem({ currentItem, addToCart }) {
  return (
    <div className="singleItem">
      <Link to="/">
        <button>Home</button>
      </Link>
      <img
        className="singleItem__image"
        src={currentItem.image}
        alt={currentItem.alt}
      />
      <div className="singleItem__description">
        <h1>{currentItem.title}</h1>
        <p>{currentItem.taste}</p>
        <strong>{currentItem.price}</strong>

        <button onClick={() => addToCart(currentItem.id)}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    currentItem: state.shop.currentItem,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleItem);
