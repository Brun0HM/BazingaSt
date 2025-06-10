import React, { useEffect, useState } from "react";

const Carrinho = () => {
  const [itens, setItens] = useState([]);
  const [erro, setErro] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCarrinho = async () => {
      try {
        const response = await fetch(
          "https://www.bazingastore.somee.com/api/CarrinhoItems",
          {
            method: "GET",
            headers: { accept: "text/plain" },
          }
        );
        if (response.ok) {
          const data = await response.json();
          setItens(data);
        } else {
          setErro("Erro ao buscar itens do carrinho.");
        }
      } catch (error) {
        setErro("Erro de conexão com a API.");
      } finally {
        setLoading(false);
      }
    };
    fetchCarrinho();
  }, []);

  const total = itens.reduce(
    (acc, item) => acc + item.preco * (item.quantidade || 1),
    0
  );

  return (
    <div className="container py-5">
      <h2 className="mb-4 text-center">Carrinho de Compras</h2>
      {erro && <div className="alert alert-danger text-center">{erro}</div>}
      {loading ? (
        <div className="text-center">Carregando...</div>
      ) : (
        <>
          <div className="row g-4">
            {itens.map((item) => (
              <div className="col-12 col-md-6 col-lg-4" key={item.id}>
                <div className="card h-100">
                  <img
                    src={item.imagem || "https://placehold.co/300x200"}
                    className="card-img-top"
                    alt={item.nome}
                    style={{ objectFit: "cover", height: "200px" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.nome}</h5>
                    <p className="card-text mb-1">
                      Quantidade: <strong>{item.quantidade || 1}</strong>
                    </p>
                    <p className="card-text mb-1">
                      Preço unitário: <strong>R$ {item.preco}</strong>
                    </p>
                    <p className="card-text">
                      Subtotal:{" "}
                      <strong>
                        R$ {(item.preco * (item.quantidade || 1)).toFixed(2)}
                      </strong>
                    </p>
                  </div>
                </div>
              </div>
            ))}
            {itens.length === 0 && !erro && (
              <div className="col-12 text-center text-muted">
                Carrinho vazio.
              </div>
            )}
          </div>
          {/* Checkout */}
          {itens.length > 0 && (
            <div className="mt-5">
              <div className="card p-4">
                <h4 className="fw-bold mb-3">Checkout</h4>
                <div className="d-flex justify-content-between">
                  <span>Total:</span>
                  <span className="fw-bold">R$ {total.toFixed(2)}</span>
                </div>
                <button className="btn btn-success mt-3 w-100">
                  Finalizar Compra
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Carrinho;
