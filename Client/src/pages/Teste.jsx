import React, { useEffect, useState } from "react";

const Teste = () => {
  const [produtos, setProdutos] = useState([]);
  const [erro, setErro] = useState("");

  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        const response = await fetch("https://bazinga.somee.com/api/Produtos", {
          method: "GET",
          headers: {
            accept: "text/plain",
          },
        });
        if (response.ok) {
          const data = await response.json();
          setProdutos(data);
        } else {
          setErro("Erro ao buscar produtos.");
        }
      } catch (error) {
        setErro("Erro de conexão com a API.");
      }
    };
    fetchProdutos();
  }, []);

  return (
    <div className="container py-5">
      <h2 className="mb-4 text-center">Produtos</h2>
      {erro && <div className="alert alert-danger text-center">{erro}</div>}
      <div className="row g-4">
        {produtos.map((produto) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={produto.id}>
            <div className="card h-100">
              <img
                src={produto.imagem || "https://placehold.co/300x200"}
                className="card-img-top"
                alt={produto.nome}
                style={{ objectFit: "cover", height: "200px" }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{produto.nome}</h5>
                <p className="card-text mb-1">
                  {produto.descricao || "Sem descrição"}
                </p>
                <span className="fw-bold mb-2">
                  {produto.preco ? `R$ ${produto.preco}` : "Preço indisponível"}
                </span>
                <button className="btn btn-primary mt-auto">
                  Ver detalhes
                </button>
              </div>
            </div>
          </div>
        ))}
        {produtos.length === 0 && !erro && (
          <div className="col-12 text-center text-muted">
            Nenhum produto encontrado.
          </div>
        )}
      </div>
    </div>
  );
};

export default Teste;
