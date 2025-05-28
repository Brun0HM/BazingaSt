import React from "react";
import RegisteredCards from "../components/RegisteredCards/RegisteredCards";
import RegisterCard from "../components/RegisterCard/RegisterCard";
import Checkout from "../components/Checkout/Checkout";
import Header from "../components/header/Header";

const Payment = () => {
  return (
    <>
    <Header />
      <div className="pt-0 pt-md-5">
        <div className="justify-content-center justify-content-md-between d-flex flex-column flex-md-row p-0">
          <div className="col-0 col-md-1"></div>
          <div className="col-12 col-md-2 mb-5  ">
            <RegisteredCards cards={""} setCards={""} setSelectedCard={""} />
          </div>
          <div className="col-12 col-md-4 mb-5">
            <RegisterCard />
          </div>
          <div className="col-12 col-md-3 mb-5">
            <Checkout />
          </div>
          <div className="col-0 col-md-1 mb-5"></div>
        </div>
      </div>
    </>
  );
};

export default Payment;
