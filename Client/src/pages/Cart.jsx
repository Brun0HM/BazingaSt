import React from "react";
import ItemCarrinho from "../components/ItemCarrinho/ItemCarrinho";
import Checkout from "../components/Checkout/Checkout";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
const Cart = () => {
  return (
    <>
      <Header />
      <div className="pt-0 pt-md-3 bg-white Cart pb-5">
        <div className="container pt-5">
          <div className="justify-content-center justify-content-md-between d-flex flex-column flex-md-row">
            <div className="col-12 col-md-8 mb-4">
              <h1 className="TitleC fw-bold">Carrinho</h1>
              <div className="d-flex flex-column mb-5">
                <ItemCarrinho />
                <ItemCarrinho />
                <ItemCarrinho />
              </div>
            </div>
            <div className="col-12 col-md-4">
              <Checkout caminho="/pagar" />
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <Footer />
      </div>
    </>
  );
};

export default Cart;
