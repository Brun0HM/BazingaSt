import React, { useEffect, useState } from "react";

const DashboardProdutos = () => {
  const [produtos, setProdutos] = useState([]);
  const [erro, setErro] = useState("");
  const [form, setForm] = useState({
    nome: "",
    descricao: "",
    preco: "",
    imagem: "",
    estoque: "",
    categoriaId: "",
  });
  const [mensagem, setMensagem] = useState("");

  // GET produtos
  const fetchProdutos = async () => {
    setErro("");
    try {
      const response = await fetch(
        "https://www.bazingastore.somee.com/api/Produtos",
        {
          method: "GET",
          headers: { accept: "text/plain" },
        }
      );
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

  useEffect(() => {
    fetchProdutos();
  }, []);

  const handleDelete = async (id) => {
    console.log("Tentando excluir produto com id:", id);
    if (!window.confirm("Tem certeza que deseja excluir este produto?")) return;
    try {
      const response = await fetch(
        `https://www.bazingastore.somee.com/api/Produtos/${id}`,
        {
          method: "DELETE",
          headers: { accept: "*/*" },
        }
      );
      if (response.ok) {
        setProdutos(produtos.filter((produto) => produto.id !== id));
      } else {
        alert(
          "Erro ao excluir produto." +
            setProdutos(produtos.filter((produto) => produto.id))
        );
      }
    } catch (error) {
      alert("Erro de conexão com a API.");
    }
  };

  // POST produto
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMensagem("");
    try {
      const response = await fetch(
        "https://www.bazingastore.somee.com/api/Produtos",
        {
          method: "POST",
          headers: {
            accept: "text/plain",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            nome: form.nome,
            descricao: form.descricao,
            preco: parseFloat(form.preco),
            imagem: form.imagem,
            estoque: parseInt(form.estoque),
            categoriaId: form.categoriaId,
          }),
        }
      );
      if (response.ok) {
        setMensagem("Produto cadastrado com sucesso!");
        setForm({
          nome: "",
          descricao: "",
          preco: "",
          imagem: "",
          estoque: "",
          categoriaId: "",
        });
        fetchProdutos();
      } else {
        setMensagem("Erro ao cadastrar produto.");
      }
    } catch (error) {
      setMensagem("Erro de conexão com a API.");
    }
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center mb-5">
        <div className="col-12 col-lg-8">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <h2 className="mb-4 text-center fw-bold text-primary">
                Dashboard de Produtos
              </h2>
              <h4 className="mb-3">Cadastrar novo produto</h4>
              <form onSubmit={handleSubmit} className="row g-3">
                <div className="col-md-6">
                  <label className="form-label">Nome</label>
                  <input
                    type="text"
                    className="form-control"
                    value={form.nome}
                    required
                    onChange={(e) => setForm({ ...form, nome: e.target.value })}
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Categoria ID</label>
                  <input
                    type="text"
                    className="form-control"
                    value={form.categoriaId}
                    required
                    onChange={(e) =>
                      setForm({ ...form, categoriaId: e.target.value })
                    }
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Preço</label>
                  <input
                    type="number"
                    step="0.01"
                    className="form-control"
                    value={form.preco}
                    required
                    onChange={(e) =>
                      setForm({ ...form, preco: e.target.value })
                    }
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Estoque</label>
                  <input
                    type="number"
                    className="form-control"
                    value={form.estoque}
                    required
                    onChange={(e) =>
                      setForm({ ...form, estoque: e.target.value })
                    }
                  />
                </div>
                <div className="col-12">
                  <label className="form-label">Descrição</label>
                  <input
                    type="text"
                    className="form-control"
                    value={form.descricao}
                    required
                    onChange={(e) =>
                      setForm({ ...form, descricao: e.target.value })
                    }
                  />
                </div>
                <div className="col-12">
                  <label className="form-label">Imagem (URL)</label>
                  <input
                    type="text"
                    className="form-control"
                    value={form.imagem}
                    required
                    onChange={(e) =>
                      setForm({ ...form, imagem: e.target.value })
                    }
                  />
                </div>
                <div className="col-12 d-grid">
                  <button type="submit" className="btn btn-success btn-lg">
                    <i className="bi bi-plus-circle me-2"></i>
                    Cadastrar Produto
                  </button>
                </div>
              </form>
              {mensagem && (
                <div className="alert alert-info mt-3 text-center">
                  {mensagem}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* Lista de produtos */}
      <div className="card shadow-sm border-0">
        <div className="card-body">
          <h4 className="mb-4 fw-bold text-primary">Produtos cadastrados</h4>
          {erro && <div className="alert alert-danger text-center">{erro}</div>}
          <div className="row g-4">
            {produtos.map((produto) => (
              <div
                className="col-12 col-sm-6 col-md-4 col-lg-3"
                key={produto.id}
              >
                <div className="card h-100 border-0 shadow-sm">
                  <img
                    src={produto.imagem || "https://placehold.co/300x200"}
                    className="card-img-top"
                    alt={produto.nome}
                    style={{ objectFit: "cover", height: "180px" }}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title fw-bold">{produto.nome}</h5>
                    <p
                      className="card-text mb-1 text-muted"
                      style={{ fontSize: "0.95em" }}
                    >
                      {produto.descricao || "Sem descrição"}
                    </p>
                    <span className="fw-bold mb-2 text-success">
                      {produto.preco
                        ? `R$ ${produto.preco}`
                        : "Preço indisponível"}
                    </span>
                    <span className="mb-2">Estoque: {produto.estoque}</span>
                    <span className="mb-2">
                      Categoria: {produto.categoriaId}
                    </span>
                  </div>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => handleDelete(produto.id)}
                  >
                    Excluir
                  </button>
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
      </div>
    </div>
  );
};

export default DashboardProdutos;
