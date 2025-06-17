import React, { useState } from "react";

const CheckoutTeste = ({ totalInicial = 10 }) => {
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
    <div className="container py-5">
      <h2 className="mb-4">Checkout</h2>
      <form className="mb-3" onSubmit={aplicarCupom}>
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Cupom de desconto"
            value={cupom}
            onChange={(e) => setCupom(e.target.value)}
            disabled={aplicando}
          />
          <button
            className="btn btn-primary"
            type="submit"
            disabled={aplicando}
          >
            {aplicando ? "Aplicando..." : "Aplicar"}
          </button>
        </div>
      </form>
      {mensagem && (
        <div className="alert alert-info text-center">{mensagem}</div>
      )}
      <div className="card p-4">
        <div className="d-flex justify-content-between mb-2">
          <span>Subtotal:</span>
          <span>R$ {totalInicial.toFixed(2)}</span>
        </div>
        <div className="d-flex justify-content-between mb-2">
          <span>Desconto:</span>
          <span className="text-success">- R$ {desconto.toFixed(2)}</span>
        </div>
        <hr />
        <div className="d-flex justify-content-between">
          <strong>Total:</strong>
          <strong className="text-danger">R$ {total.toFixed(2)}</strong>
        </div>
        <button className="btn btn-success mt-4 w-100">Finalizar Compra</button>
      </div>
    </div>
  );
};

export default CheckoutTeste;
