import React from "react";
import { useNavigate } from "react-router";

const Cardegoria = ({ produto }) => {
  const navigate = useNavigate();

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

  const handleClick = () => navigate("/info/" + produto.id);

  return (
    <div className="border-3 text-decoration-none col-12 col-md-4">
      <div className="bg-white d-flex flex-column col-12 p-3 pt-3 rounded-4 card2">
        <img
          onClick={handleClick}
          className="mb-4 rounded-2 imagess"
          src={produto.imagem || "https://placehold.co/300x200"}
          alt={produto.nome}
        />
        <div className="col-12">
          <span className="fs-6">{produto.categoria}</span>
          <h5 className="fw-bold mt-2 mb-2">{produto.nome}</h5>
          <div className="d-flex gap-1 mb-2 fs-6">
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <p className="m-0">(5.0)</p>
          </div>
          <h5 className="fw-bold mb-3">
            {produto.preco ? `R$ ${produto.preco}` : "Preço indisponível"}
          </h5>
          <button
            className="btn btn-dark w-100 botao"
            onClick={adicionarAoCarrinho}
          >
            <i className="bi bi-cart-plus-fill"></i> Adicionar ao carrinho
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cardegoria;
