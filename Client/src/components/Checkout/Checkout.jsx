import React from "react";
const Checkout = () => {
  return (
    <>
      <div className=" Checkout pt-4 rounded-5 pb-4 ">
        <div className=" justify-content-center d-flex flex-column">
          <h1 className="ms-4 fw-bold">Checkout:</h1>
          <hr className="ms-4 me-4" />
          <div className="d-flex flex-column ms-4 me-4 mb-4">
            <div className="d-flex justify-content-between">
              <p>Produto</p>
              <p>R$00.00</p>
            </div>
            <div className="d-flex justify-content-between">
              <p>Produto</p>
              <p>R$00.00</p>
            </div>
            <div className="d-flex justify-content-between">
              <p>Produto</p>
              <p>R$00.00</p>
            </div>
            <div className="d-flex flex-column justify-content-center gap-3 rounded-5 mt-5 me-4 ms-4">
              <button className="btn Continuar text-black fs-5 p-4 rounded-4">
                Continuar comprando
              </button>
              <button className="btn Finalizar text-black fs-5 p-4 rounded-4">
                Finalizar Compra
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
