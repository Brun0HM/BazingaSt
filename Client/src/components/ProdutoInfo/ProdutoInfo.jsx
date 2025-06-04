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
    <>
      <div className="">
        <div className="d-flex flex-column flex-md-row justify-content-center">
          <img
            className="rounded-2"
            src="https://placehold.co/400x400"
            alt=""
          />
          <div className="d-flex flex-column ms-0 ms-md-5 px-2 px-md-0  p justify-content-between col-12 col-md-5">
            <div className="d-flex">
              <p className=" border border-danger rounded-5 text-danger p-1 fw-bold border-2 px-2 Categor">
                Categoria
              </p>
            </div>
            <h1 className="fw-bold">NomeaProduto</h1>
            <div className="d-flex gap-1">
              <i className="bi bi-star-fill text-se"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-half"></i>
              <i className="bi bi-star"></i>
              <p className="fw-bold pe-3">3.5</p>
              <p>(10 avaliações)</p>
            </div>
            <h1 className="fw-bold text-danger">R$00.00</h1>
            <div className="d-flex w-100">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti, enim debitis nemo quos expedita placeat illo ducimus
                nam mollitia reprehenderit sunt! Deserunt deleniti laborum
                cumque quia autem, praesentium quasi placeat.
              </p>
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
