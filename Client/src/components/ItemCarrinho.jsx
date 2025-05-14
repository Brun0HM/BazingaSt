import React from "react";

const ItemCarrinho = () => {
  return (
    <>
      <div className="container d-flex justify-content-center">
        <div>
          <img src="https://placehold.co/220x220" alt="" />
        </div>
        <div className=" ms-3 mt-3">
          <h1 className="fw-bold mb-0">ProtudoNome</h1>
          <p className="fs-4">R$00.00</p>
        </div>
      </div>
    </>
  );
};

export default ItemCarrinho;
