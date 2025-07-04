import React, { useState } from "react";
import { useNavigate } from "react-router";

const LoginForms = ({ onRedirect }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mensagem, setMensagem] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMensagem("");
    try {
      const response = await fetch("https://bazingastore.somee.com/login", {
        method: "POST",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      let data = null;
      if (response.status !== 204) {
        data = await response.json();
      }

      //pesquisar nos cadastros pelo e-mail ou outro item e fazer a logica de capturar as informações

      //condicional - se não tiver nada na role user - aplica a role, se já tiver não faz nada
      //PUT do USerID
      if (response.ok) {
        setMensagem("Login realizado com sucesso!");
        localStorage.setItem("usuarioEmail", email);

        // 1. Buscar usuário pelo email
        try {
          const userId = data && data.id;
          const userResponse = await fetch(
            `https://www.bazingastore.somee.com/api/Usuarios/meu-id`,
            {
              method: "GET",
              headers: { accept: "application/json" },
            }
          );
          if (userResponse.ok) {
            const usuarios = await userResponse.json();
            const usuario = Array.isArray(usuarios) ? usuarios[0] : usuarios;
            if (usuario) {
              // 2. Verificar se possui role
              if (!usuario.role || usuario.role.length === 0) {
                // 3. Atualizar role para "user"
                await fetch(
                  `https://www.bazingastore.somee.com/api/Usuarios/${usuario.id}`,
                  {
                    method: "PUT",
                    headers: {
                      accept: "application/json",
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ ...usuario, role: ["user"] }),
                  }
                );
              }
            }
          }
        } catch (e) {
          // Se der erro, apenas segue o fluxo normal
        }

        navigate("/"); // Redireciona para Home
      } else {
        setMensagem((data && data.message) || "Erro ao fazer login.");
      }
    } catch (error) {
      setMensagem("Erro de conexão com a API.");
    }
  };

  return (
    <div className="w-100 px-4 px-md-5 py-5" style={{ maxWidth: "600px" }}>
      <h1 className="fw-bold mb-4 display-5 text-center">Entrar</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Email:</label>
          <input
            type="email"
            className="form-control"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Senha:</label>
          <input
            type="password"
            className="form-control"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Entrar
        </button>
      </form>
      <div className="text-center mt-3">
        <span>Não tem conta? </span>
        <button type="button" className="btn btn-link p-0" onClick={onRedirect}>
          Cadastre-se
        </button>
      </div>
      {mensagem && (
        <div className="alert alert-info mt-3 text-center">{mensagem}</div>
      )}
    </div>
  );
};

export default LoginForms;
