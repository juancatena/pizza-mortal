import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import CardBasket from "../components/CardBasket";
import ReactWhatsapp from "react-whatsapp";
import "./Basket.css";

function Basket({ cart }) {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  const [message, setMessage] = useState("");

  useEffect(() => {
    let items = 0;
    let price = 0;
    let mes = "Quiero pedir: ";

    cart.forEach((item) => {
      items += item.qty;
      price += item.qty * item.price;
    });

    cart.map((item) => {
      return (mes += item.qty + " " + item.title + ", ");
    });

    setTotalItems(items);
    setTotalPrice(price);
    setMessage(mes + "el monto total de mi pedido, es de $" + price);
  }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems]);

  return (
    <div className="basket">
      <h1>
        Tu Pedido / Total: ${totalPrice} / ({totalItems} pizza)
      </h1>
      <button>
        <Link to="/">Home</Link>
      </button>
      <div>
        {cart.map((item) => {
          return <CardBasket key={item.id} itemData={item} />;
        })}
      </div>
      <ReactWhatsapp
        className="basket__wpp"
        number="+54 9 11 3381-1113"
        message={message}
      >
        WPP A CATI
      </ReactWhatsapp>
      {/*<p>
        Quiero pedir:
        {cart.map((item) => {
          return <p>{item.qty + " " + item.title}</p>;
        })}
        El monto total de mi pedido, para abonar en efectivo en la entrega es de
        ${totalPrice}
      </p>*/}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Basket);
