import React from "react";
import "./ItemCarrinho.css";

const ItemCarrinho = () => {
  return (
    <>
      <div className="container d-flex justify-content-center">
        <div>
          <img src="https://placehold.co/220x220" alt="" />
        </div>
        <div className=" ps-3 pt-3">
          <h1 className="fw-bold mb-0">ProtudoNome</h1>
          <p className="fs-4 mb-2">R$00.00</p>
          <div className="quantidade d-flex border rounded-5 w-25 justify-content-center align-items-center">
            <button className="btn ms-1">-</button>
            <span className="fs-5">0</span>
            <button className="btn">+</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemCarrinho;
