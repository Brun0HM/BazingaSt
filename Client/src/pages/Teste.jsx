import React, { useState } from "react";
import { useNavigate } from "react-router";

const Logout = () => {
  const [mensagem, setMensagem] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    setLoading(true);
    setMensagem("");
    try {
      const response = await fetch("http://localhost:5286/api/Auth/logout", {
        method: "POST",
        headers: { accept: "*/*" },
      });
      if (response.ok) {
        setMensagem("Logout realizado com sucesso!");
        // Limpe dados do usuário localStorage/sessionStorage se necessário
        localStorage.removeItem("usuarioEmail");
        setTimeout(() => {
          navigate("/login");
        }, 1200);
      } else {
        setMensagem("Erro ao realizar logout.");
      }
    } catch (error) {
      setMensagem("Erro de conexão com a API.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container py-5">
      <h2 className="mb-4 text-center">Logout</h2>
      {mensagem && (
        <div className="alert alert-info text-center">{mensagem}</div>
      )}
      <div className="text-center">
        <button
          className="btn btn-danger btn-lg"
          onClick={handleLogout}
          disabled={loading}
        >
          {loading ? "Saindo..." : "Logout"}
        </button>
      </div>
    </div>
  );
};

export default Logout;
