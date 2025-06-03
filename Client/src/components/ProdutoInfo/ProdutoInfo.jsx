import React from "react";

const ProdutoInfo = () => {
  // Dados do produto (ajuste conforme necessário)
  const produto = {
    id: 1,
    nome: "NomeProduto",
    preco: "R$00.00",
    imagem: "https://placehold.co/400x400",
  };

  const adicionarAoCarrinho = () => {
    const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    const index = carrinho.findIndex((item) => item.id === produto.id);

    if (index >= 0) {
      carrinho[index].quantidade += 1;
    } else {
      carrinho.push({ ...produto, quantidade: 1 });
    }

    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    alert("Produto adicionado ao carrinho!");
  };

  return (
    <div className="container py-4">
      <div className="row align-items-center">
        <div className="col-12 col-md-4 text-center mb-4 mb-md-0">
          <img
            src={produto.imagem}
            alt=""
            className="img-fluid rounded"
            style={{ maxWidth: "400px", width: "100%" }}
          />
        </div>
        <div className="col-12 col-md-1"></div>
        <div className="col-12 col-md-6">
          <h1 className="fw-bold m-0 p-0">{produto.nome}</h1>
          <div className="d-flex align-items-center gap-2 flex-wrap">
            <span className="fs-3">{produto.preco}</span>
            <p className="m-0">InforAdicionais</p>
          </div>
          <p className="fs-5 w-100 pt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            minus quia sunt ipsa nemo quisquam sed laudantium voluptates nisi
            quas earum aperiam, id beatae recusandae rem obcaecati cupiditate
            autem exercitationem?
          </p>
          <div className="w-100 pt-4">
            <button
              className="btn btn-danger text-center Adicionar w-100 d-flex justify-content-center align-items-center fs-5 fw-bold rounded-4"
              onClick={adicionarAoCarrinho}
            >
              <i className="bi bi-cart-plus-fill me-2 m-0"></i>
              <span className="m-0">Adicionar ao carrinho</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProdutoInfo;
