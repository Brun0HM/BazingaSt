import React, { useEffect, useState } from "react";
import HeaderDS from "../components/HeaderDS";

const DBPedidos = () => {
  const [pedidos, setPedidos] = useState([]);
  const [erro, setErro] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPedidos = async () => {
      try {
        const response = await fetch(
          "https://www.bazingastore.somee.com/api/Pedidos",
          {
            method: "GET",
            headers: { accept: "text/plain" },
          }
        );
        if (response.ok) {
          const data = await response.json();
          setPedidos(data);
        } else {
          setErro("Erro ao buscar pedidos.");
        }
      } catch (error) {
        setErro("Erro de conexão com a API.");
      } finally {
        setLoading(false);
      }
    };
    fetchPedidos();
  }, []);

  return (
    <>
    <HeaderDS />
      <div className="container card mt-3 py-3">
        <h2 className="mb-4 text-center">Dashboard de Pedidos</h2>
        {erro && <div className="alert alert-danger text-center">{erro}</div>}
        {loading ? (
          <div className="text-center">Carregando...</div>
        ) : (
          <div className="row g-4">
            {pedidos.map((pedido) => (
              <div className="col-12 col-md-6 col-lg-4" key={pedido.id}>
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title fw-bold mb-2">
                      Pedido #{pedido.id}
                    </h5>
                    <p className="mb-1">
                      <strong>Usuário:</strong>{" "}
                      {pedido.usuario?.email || "Não informado"}
                    </p>
                    <p className="mb-1">
                      <strong>Data:</strong>{" "}
                      {pedido.dataCriacao
                        ? new Date(pedido.dataCriacao).toLocaleDateString()
                        : "-"}
                    </p>
                    <p className="mb-1">
                      <strong>Status:</strong> {pedido.status || "-"}
                    </p>
                    <p className="mb-1">
                      <strong>Total:</strong>{" "}
                      {pedido.total ? `R$ ${pedido.total}` : "-"}
                    </p>
                    <hr />
                    <strong>Itens:</strong>
                    <ul className="mb-0">
                      {pedido.itens && pedido.itens.length > 0 ? (
                        pedido.itens.map((item) => (
                          <li key={item.id}>
                            {item.nome} - Qtd: {item.quantidade} - R${" "}
                            {item.preco}
                          </li>
                        ))
                      ) : (
                        <li>Nenhum item</li>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
            {pedidos.length === 0 && !erro && (
              <div className="col-12 text-center text-muted">
                Nenhum pedido encontrado.
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default DBPedidos;
