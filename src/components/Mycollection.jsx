import React from "react";
import Product from "./Product";
import "./products.css";

const Mycollection = ({ bots, setSelectedBot }) => {
  return (
    <div className="products">
      <h2>Bot Collection</h2>
      {bots.map((bot) => (
        <Product data={bot} setSelectedBot={setSelectedBot} army={false} />
      ))}
    </div>
  );
};

export default Mycollection;
