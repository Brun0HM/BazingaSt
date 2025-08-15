import React, { useEffect, useState } from "react";
import HeaderDS from "../components/HeaderDS";

const DBClientes = () => {
  const [clientes, setClientes] = useState([]);
  const [erro, setErro] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchClientes = async () => {
      try {
        const response = await fetch(
          "https://www.bazingastore.somee.com/api/Usuarios",
          {
            method: "GET",
            headers: { accept: "text/plain" },
          }
        );
        if (response.ok) {
          const data = await response.json();
          setClientes(data);
        } else {
          setErro("Erro ao buscar clientes.");
        }
      } catch (error) {
        setErro("Erro de conexão com a API.");
      } finally {
        setLoading(false);
      }
    };
    fetchClientes();
  }, []);

  return (
    <>
      <HeaderDS />
      <div className="container card mt-5 py-3">
        <h2 className="mb-4 text-center fw-bold text-danger">Dashboard de Clientes</h2>
        {erro && <div className="alert alert-danger text-center">{erro}</div>}
        {loading ? (
          <div className="text-center">Carregando...</div>
        ) : (
          <div className="table-responsive">
            <table className="table table-bordered table-striped align-middle">
              <thead className="table-dark">
                <tr>
                  <th>ID</th>
                  <th>Email</th>
                  {/* Adicione mais colunas se necessário */}
                </tr>
              </thead>
              <tbody>
                {clientes.map((cliente) => (
                  <tr key={cliente.id}>
                    <td>{cliente.id}</td>
                    <td>{cliente.email}</td>
                    {/* Adicione mais células se necessário */}
                  </tr>
                ))}
                {clientes.length === 0 && (
                  <tr>
                    <td colSpan={2} className="text-center text-muted">
                      Nenhum cliente encontrado.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
};

export default DBClientes;
