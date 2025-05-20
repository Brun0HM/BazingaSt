import React from "react";
import "./ItemCarrinho.css";

const ItemCarrinho = () => {
  return (
    <div className="my-3">
      <div className="justify-content-center">
        <div className="d-flex align-items-center Itemcart p-3">
          <div className="img-container mb-3 mb-md-0">
            <img
              src="https://placehold.co/220x220"
              alt=""
              className="img-fluid rounded"
              style={{ maxWidth: "150px" }}
            />
          </div>
          <div className="ps-md-3 pt-2 d-flex flex-column w-100">
            <h1 className="fw-bold mb-0 fs-4 fs-md-3">ProtudoNome</h1>
            <p className="fs-5 mb-2">R$00.00</p>
            <div className="quantidade d-flex border rounded-5 justify-content-center align-items-center mb-2">
              <button className="btn ms-1 no-select">-</button>
              <span className="fs-5">0</span>
              <button className="btn">+</button>
            </div>
            <i>
              <i className="bi bi-trash-fill btn lixo ps-0 pt-2"></i>
            </i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCarrinho;
