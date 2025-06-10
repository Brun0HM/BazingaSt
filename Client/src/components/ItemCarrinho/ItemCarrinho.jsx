import React from "react";
import "./../../App.css";

const ItemCarrinho = ({ item, onRemover, onAlterarQuantidade }) => {
  const incrementar = () => onAlterarQuantidade(item.id, item.quantidade + 1);
  const decrementar = () =>
    onAlterarQuantidade(item.id, Math.max(0, item.quantidade - 1));

  return (
    <div className="container py-3 ">
      <div className="d-flex align-items-center justify-content-center">
        <div className="col-md-3 text-center mb-3 mb-md-0 img-container">
          <img
            className="img-fluid rounded-4"
            src={item.imagem || "https://placehold.co/220x220"}
            alt={item.nome}
            style={{ maxWidth: "150px" }}
          />
        </div>
        <div className="col-md-9">
          <h1 className="fw-bold mb-0 fs-4">{item.nome}</h1>
          <p className="fs-5 mb-2">R$ {item.preco}</p>
          <div
            className="quantidade d-flex border rounded-5 w-100 w-md-25 justify-content-center align-items-center mb-2"
            style={{ maxWidth: "80px" }}
          >
            <button className="btn ms-1" onClick={decrementar}>
              -
            </button>
            <span className="fs-5 Quantidade d-flex justify-content-center">
              {item.quantidade}
            </span>
            <button className="btn" onClick={incrementar}>
              +
            </button>
          </div>
          <button
            className="btn text-danger p-0"
            onClick={() => onRemover(item.id)}
          >
            <i className="bi bi-trash fs-5"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemCarrinho;
