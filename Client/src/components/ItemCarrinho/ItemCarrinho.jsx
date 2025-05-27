import React from "react";
import "./ItemCarrinho.css";

const ItemCarrinho = () => {
  return (
    <div className="container py-3 ">
      <div className="d-flex align-items-center justify-content-center">
        <div className=" col-md-3 text-center mb-3 mb-md-0 img-container">
          <img
            className="img-fluid rounded-4"
            src="https://placehold.co/220x220"
            alt=""
            style={{ maxWidth: "150px" }}
          />
        </div>
        <div className="col-md-9">
          <h1 className="fw-bold mb-0 fs-4">ProtudoNome</h1>
          <p className="fs-5 mb-2">R$00.00</p>
          <div
            className="quantidade d-flex border rounded-5 w-100 w-md-25 justify-content-center align-items-center mb-2"
            style={{ maxWidth: "80px" }}
          >
            <button className="btn ms-1">-</button>
            <span className="fs-5">0</span>
            <button className="btn">+</button>
          </div>
          <i className="bi bi-trash fs-5  "></i>
        </div>
      </div>
    </div>
  );
};

export default ItemCarrinho;
