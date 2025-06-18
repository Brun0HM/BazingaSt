import React, { useEffect, useState } from "react";

const Checkout = ({ caminho, itensCarrinho = [], loading, erro }) => {
  // Calcula o total dos itens
  const totalInicial = itensCarrinho.reduce(
    (acc, item) => acc + item.produto.preco * (item.quantidade || 1),
    0
  );
  useEffect(() => {
    setTotal(totalInicial);
  }, [itensCarrinho]);

  const [cupom, setCupom] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [total, setTotal] = useState(totalInicial);
  const [desconto, setDesconto] = useState(0);
  const [aplicando, setAplicando] = useState(false);
  const aplicarCupom = async (e) => {
    e.preventDefault();
    setMensagem("");
    setAplicando(true);
    try {
      const response = await fetch(
        "http://localhost:5286/api/CupomDescontos/verificar-e-aplicar-cupom",
        {
          method: "POST",
          headers: {
            accept: "text/plain",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            valorTotal: totalInicial,
            codigo: cupom,
          }),
        }
      );
      if (response.ok) {
        const novoTotal = await response.json();
        setDesconto(totalInicial - novoTotal);
        setTotal(novoTotal);
        setMensagem("Cupom aplicado com sucesso!");
        console.log(total);
      } else {
        setMensagem("Cupom inválido ou erro ao aplicar.");
        setDesconto(0);
        setTotal(totalInicial);
      }
    } catch {
      setMensagem("Erro de conexão com a API.");
      setDesconto(0);
      setTotal(totalInicial);
    }
    setAplicando(false);
  };

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
        <form className="d-flex gap-2 mb-2" onSubmit={aplicarCupom}>
          <input
            type="text"
            placeholder="Cupom de Desconto"
            className="form-control"
            value={cupom}
            onChange={(e) => setCupom(e.target.value)}
            disabled={aplicando}
          />
          <button className="btn btn-danger" type="submit" disabled={aplicando}>
            {aplicando ? "Aplicando..." : "Aplicar"}
          </button>
        </form>
        {mensagem && (
          <div className="alert alert-info text-center py-1">{mensagem}</div>
        )}
        <div className="d-flex justify-content-between mb-2">
          <span>Desconto:</span>
          <span className="text-success">- R$ {desconto.toFixed(2)}</span>
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
