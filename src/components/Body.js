import React from "react";
import Card from "./Card";
import "./Body.css";
import Products from ".././data/Products";
import { connect } from "react-redux";

function Body({ products }) {
  return (
    <div className="body">
      {products.map((prod) => {
        return <Card key={prod.id} productData={prod} />;
      })}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  };
};

export default connect(mapStateToProps)(Body);
