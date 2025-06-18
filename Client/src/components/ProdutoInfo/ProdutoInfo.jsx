import React, { useState } from "react";

const ProdutoInfo = ({ produto }) => {
  const adicionarAoCarrinho = async () => {
    const carrinhoId = localStorage.getItem("carrinhoId");
    if (!carrinhoId) {
      alert("Carrinho não encontrado. Faça login novamente.");
      return;
    }
    try {
      const response = await fetch("http://localhost:5286/api/CarrinhoItems", {
        method: "POST",
        headers: {
          accept: "text/plain",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          carrinhoId: carrinhoId,
          produtoId: produto.produtoId,
          quantidade: 1,
        }),
      });
      if (response.ok) {
        //
      } else {
        alert("Erro ao adicionar produto ao carrinho.");
      }
    } catch (error) {
      alert("Erro de conexão com a API.");
    }
  };
  const [erro, setErro] = useState("");

  if (erro) {
    return <div className="alert alert-danger text-center">{erro}</div>;
  }

  if (!produto) {
    return <div className="text-center py-5">Carregando...</div>;
  }

  return (
    <>
      <div className="">
        <div className="d-flex flex-column flex-md-row justify-content-center">
          <img
            className="rounded-2 imgsss"
            src={produto.imagem || "https://placehold.co/400x400"}
            alt={produto.nome}
          />
          <div className="d-flex flex-column ms-0 ms-md-5 px-2 px-md-0 p justify-content-between col-12 col-md-5">
            <div className="d-flex">
              <p className="border border-danger rounded-5 text-danger p-1 fw-bold border-2 px-2 Categor">
                {produto.categoriaNome || "Categoria"}
              </p>
            </div>
            <h1 className="fw-bold">{produto.nome}</h1>
            <div className="d-flex gap-1">
              <i className="bi bi-star-fill text-se"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-half"></i>
              <i className="bi bi-star"></i>
              <p className="fw-bold pe-3">3.5</p>
              <p>(10 avaliações)</p>
            </div>
            <h1 className="fw-bold text-danger">
              {produto.preco ? `R$ ${produto.preco}` : "R$00.00"}
            </h1>
            <div className="d-flex w-100">
              <p>{produto.descricao || "Sem descrição"}</p>
            </div>
            <button
              className="btn btn-danger botao"
              onClick={adicionarAoCarrinho}
            >
              <i className="bi bi-cart-plus-fill me-2"></i>
              Adicionar ao carrinho
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProdutoInfo;
