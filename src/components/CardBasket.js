import React, { useState } from "react";
import "./CardBasket.css";
import { connect } from "react-redux";
import { removeFromCart, adjustQty } from "../redux/Shopping/shopping-actions";

function CardBasket({ itemData, removeFromCart, adjustQty }) {
  const [input, setInput] = useState(itemData.qty);

  const onChangeHandler = (e) => {
    setInput(e.target.value);
    adjustQty(itemData.id, e.target.value);
  };

  return (
    <div className="cardBasket">
      <img
        className="cardBasket__img"
        src={itemData.image}
        alt={itemData.alt}
      />
      <div className="cardBasket__left">
        <h1 className="cardBasket__title">{itemData.title}</h1>
        <p className="cardBasket__taste">{itemData.taste}</p>
        <h2 className="cardBasket__price">${itemData.price}</h2>
      </div>
      <div className="cardBasket__right">
        <div className="cardBasket__price">
          Cantidad{" "}
          <input
            className="cardBasket__input"
            type="number"
            min="1"
            id="qty"
            name="qty"
            value={input}
            onChange={onChangeHandler}
          />
        </div>
        <button
          onClick={() => removeFromCart(itemData.id)}
          className="cardBasket__button"
        >
          eliminar
        </button>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (id) => dispatch(removeFromCart(id)),
    adjustQty: (id, value) => dispatch(adjustQty(id, value)),
  };
};

export default connect(null, mapDispatchToProps)(CardBasket);

//57:10
