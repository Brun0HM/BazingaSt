import React from "react";
import ItemCarrinho from "../components/ItemCarrinho/ItemCarrinho";
import Checkout from "../components/Checkout/Checkout";

const Cart = () => {
  return (
    <div className="container pt-5">
      <div className="justify-content-center justify-content-md-between d-flex flex-column flex-md-row">
        <div className="col-12 col-md-8 mb-4">
          <h1 className="TitleC fw-bold">Carrinho</h1>
          <div className="d-flex flex-column">
            <ItemCarrinho />
            <ItemCarrinho />
            <ItemCarrinho />
          </div>
        </div>
        <div>
          <Checkout />
        </div>
      </div>
    </div>
  );
};

export default Cart;
