import React from "react";
import { useNavigate } from "react-router";

const Checkout = (props) => {
  const navigate = useNavigate();

  const handleFinalizarCompra = () => {
    navigate(props.caminho);
  };
  const handleContinuarComprando = () => {
    navigate("/");
  };
  return (
    <>
      <div>
        <div className="bg-white col-12 p-4 rounded-3 border-2 border">
          <h2 className="fw-bold">
            <i class="bi bi-credit-card fs-3 me-2 text-danger"></i> Checkout
          </h2>
          <div className="d-flex flex-column">
            <div className="d-flex justify-content-between pt-4">
              <p>Produto 1</p>
              <p className="fw-bold">R$00.00</p>
            </div>
            <div className="d-flex justify-content-between">
              <p>Produto 2</p>
              <p className="fw-bold">R$00.00</p>
            </div>{" "}
            <div className="d-flex justify-content-between">
              <p>Produto 3</p>
              <p className="fw-bold">R$00.00</p>
            </div>
          </div>
          <hr />
          <div>
            <div className="d-flex justify-content-between">
              <p>Subtotal</p>
              <p className="fw-bold">R$00.00</p>
            </div>
            <div className="d-flex justify-content-between">
              <p>Frete</p>
              <p className="text-success fw-bold">Gratis</p>
            </div>
            <div className=" d-flex gap-2">
              <input
                type="text"
                placeholder="Cupom de Desconto"
                className="form-control"
              />
              <button className="btn btn-danger">Aplicar</button>
            </div>
          </div>
          <hr />
          <div className="pb-3">
            <div className="d-flex justify-content-between pb-3">
              <h5 className="fw-bold">Total</h5>
              <h5 className="fw-bold text-danger">R$00.00</h5>
            </div>
            <button className="btn btn-danger w-100 botao" onClick={handleFinalizarCompra}>Finalizar Compra</button>
            <button
              className="btn btn-outline-danger w-100 mt-2 botao"
              onClick={handleContinuarComprando}
            >
              Continuar Comprando
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
