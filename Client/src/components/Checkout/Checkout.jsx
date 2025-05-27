import React from "react";

const Checkout = () => {
  return (
    <>
      <div className="">
        <div className="">
          <div className="bg-white Checkout rounded-5 p-4">
            <h1 className="fw-bold mb-3">Checkout:</h1>
            <hr />
            <div className="d-flex flex-column gap-2 mb-4">
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
            </div>
            <div className="d-flex flex-column align-items-center gap-3 rounded-5 mt-4">
              <button className="btn btnCor text-white btn-danger text-black fs-5 px-4 py-3 rounded-4 w-100 w-md-auto">
                Continuar comprando
              </button>
              <button className="btn Finalizar text-black fs-5 px-4 py-3 rounded-4 w-100 w-md-auto">
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
