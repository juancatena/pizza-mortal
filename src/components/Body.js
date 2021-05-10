import React from "react";
import Card from "./Card";
import "./Body.css";
import Products from ".././data/Products";

function Body() {
  return (
    <div className="body">
      {Products.map((item) => {
        return (
          <Card
            key={item.id}
            image={item.image}
            alt={item.alt}
            title={item.title}
            taste={item.taste}
            price={item.price}
          />
        );
      })}
    </div>
  );
}

export default Body;
