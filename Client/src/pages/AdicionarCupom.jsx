import React, { useEffect, useState } from "react";

const AdicionarCupom = () => {
  const [cupons, setCupons] = useState([]);
  const [erro, setErro] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [form, setForm] = useState({
    codigo: "",
    percentualDesconto: "",
    dataValidade: "",
  });

  // Buscar cupons ativos
  const fetchCupons = async () => {
    setErro("");
    try {
      const response = await fetch(
        "https://www.bazingastore.somee.com/api/CupomDescontos",
        {
          method: "GET",
          headers: { accept: "text/plain" },
        }
      );
      if (response.ok) {
        const data = await response.json();
        setCupons(data);
      } else {
        setErro("Erro ao buscar cupons.");
      }
    } catch (error) {
      setErro("Erro de conexão com a API.");
    }
  };

  useEffect(() => {
    fetchCupons();
  }, []);

  // Adicionar novo cupom
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMensagem("");
    try {
      const response = await fetch(
        "https://www.bazingastore.somee.com/api/CupomDescontos",
        {
          method: "POST",
          headers: {
            accept: "text/plain",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            codigo: form.codigo,
            percentualDesconto: parseFloat(form.percentualDesconto),
            dataValidade: form.dataValidade,
          }),
        }
      );
      if (response.ok) {
        setMensagem("Cupom cadastrado com sucesso!");
        setForm({ codigo: "", percentualDesconto: "", dataValidade: "" });
        fetchCupons();
      } else {
        setMensagem("Erro ao cadastrar cupom.");
      }
    } catch (error) {
      setMensagem("Erro de conexão com a API.");
    }
  };

  // Filtrar cupons ativos (dataValidade futura)
  const cuponsAtivos = cupons.filter(
    (cupom) => new Date(cupom.dataValidade) > new Date()
  );

  return (
    <div className="container py-5">
      <h2 className="mb-4 text-center">Dashboard de Cupons de Desconto</h2>
      {/* Formulário de cadastro */}
      <div className="card mb-5 p-4">
        <h4 className="mb-3">Adicionar novo cupom</h4>
        <form onSubmit={handleSubmit} className="row g-3">
          <div className="col-md-4">
            <label className="form-label">Código</label>
            <input
              type="text"
              className="form-control"
              value={form.codigo}
              required
              onChange={(e) => setForm({ ...form, codigo: e.target.value })}
            />
          </div>
          <div className="col-md-4">
            <label className="form-label">% Desconto</label>
            <input
              type="number"
              className="form-control"
              value={form.percentualDesconto}
              required
              min={1}
              max={100}
              onChange={(e) =>
                setForm({ ...form, percentualDesconto: e.target.value })
              }
            />
          </div>
          <div className="col-md-4">
            <label className="form-label">Validade</label>
            <input
              type="datetime-local"
              className="form-control"
              value={form.dataValidade}
              required
              onChange={(e) =>
                setForm({ ...form, dataValidade: e.target.value })
              }
            />
          </div>
          <div className="col-12 d-grid">
            <button type="submit" className="btn btn-success btn-lg">
              Adicionar Cupom
            </button>
          </div>
        </form>
        {mensagem && (
          <div className="alert alert-info mt-3 text-center">{mensagem}</div>
        )}
      </div>
      {/* Lista de cupons ativos */}
      <div className="card shadow-sm border-0">
        <div className="card-body">
          <h4 className="mb-4 fw-bold text-primary">Cupons Ativos</h4>
          {erro && <div className="alert alert-danger text-center">{erro}</div>}
          <div className="table-responsive">
            <table className="table table-bordered table-striped align-middle">
              <thead className="table-dark">
                <tr>
                  <th>Código</th>
                  <th>% Desconto</th>
                  <th>Validade</th>
                </tr>
              </thead>
              <tbody>
                {cuponsAtivos.map((cupom) => (
                  <tr key={cupom.id}>
                    <td>{cupom.codigo}</td>
                    <td>{cupom.percentualDesconto}%</td>
                    <td>
                      {new Date(cupom.dataValidade).toLocaleString("pt-BR")}
                    </td>
                  </tr>
                ))}
                {cuponsAtivos.length === 0 && (
                  <tr>
                    <td colSpan={3} className="text-center text-muted">
                      Nenhum cupom ativo.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdicionarCupom;
