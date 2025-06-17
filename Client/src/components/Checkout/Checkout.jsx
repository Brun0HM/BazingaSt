import React from "react";

const Checkout = ({ caminho, itensCarrinho = [], loading, erro }) => {
  // Calcula o total dos itens
  const total = itensCarrinho.reduce(
    (acc, item) => acc + item.produto.preco * (item.quantidade || 1),
    0
  );

  return (
    <div className="card p-4 shadow-sm">
      <h4 className="fw-bold mb-3">Resumo do Pedido</h4>
      {erro && <div className="alert alert-danger text-center">{erro}</div>}
      <>
        <div className="mb-3">
          {itensCarrinho.length === 0 ? (
            <div className="text-muted text-center">Carrinho vazio</div>
          ) : (
            itensCarrinho.map((item) => (
              <div
                key={item.id}
                className="d-flex justify-content-between align-items-center mb-2"
              >
                <div>
                  <span className="">{item.produto.nome}</span>
                  <span className="text-muted ms-2 fw-bold">
                    x{item.quantidade}
                  </span>
                </div>
                <span>
                  R$ {(item.produto.preco * (item.quantidade || 1)).toFixed(2)}
                </span>
              </div>
            ))
          )}
        </div>
        <div className="d-flex justify-content-between">
          <p>Frete</p>
          <p className="text-success fw-bold">Gratis</p>
        </div>
        <div className="d-flex gap-2">
          <input
            type="text"
            placeholder="Cupom de Desconto"
            className="form-control"
          />
          <button className="btn btn-danger">Aplicar</button>
        </div>
        <hr />
        <div className="pb-3">
          <div className="d-flex justify-content-between pb-3">
            <h5 className="fw-bold">Total</h5>
            <h5 className="fw-bold text-danger">R$ {total.toFixed(2)}</h5>
          </div>
          <button
            className="btn btn-danger w-100 botao"
            onClick={() => (window.location.href = caminho)}
          >
            Finalizar Compra
          </button>
          <button
            className="btn btn-outline-danger w-100 mt-2 botao"
            onClick={() => (window.location.href = "/")}
          >
            Continuar Comprando
          </button>
        </div>
      </>
    </div>
  );
};

export default Checkout;
