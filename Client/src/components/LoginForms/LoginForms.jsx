import React, { useState } from "react";
import { useNavigate } from "react-router";

const LoginForms = ({ onRedirect }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mensagem, setMensagem] = useState("");
  const navigate = useNavigate();
  const [carrinhoId, setCarrinhoId] = useState("");

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

      if (response.ok) {
        setMensagem("Login realizado com sucesso!");
        localStorage.setItem("usuarioEmail", email);

        try {
          // 1. Buscar usuário pelo email
          const userResponse = await fetch(
            `http://localhost:5286/api/Usuarios/por-email?email=${encodeURIComponent(
              email
            )}`,
            {
              method: "GET",
              headers: { accept: "*/*" },
            }
          );
          if (userResponse.ok) {
            const usuario = await userResponse.json();
            // 2. Verificar se possui role
            if (!usuario.role || usuario.role.length === 0) {
              await fetch(`http://localhost:5286/api/Auth/role/${usuario.id}`, {
                method: "PUT",
                headers: {
                  accept: "*/*",
                  "Content-Type": "application/json",
                },
                body: JSON.stringify("user"),
              });
            }

            // 3. Verificar se já existe carrinho para o usuário
            const carrinhosResponse = await fetch(
              "http://localhost:5286/api/Carrinhos",
              {
                method: "GET",
                headers: { accept: "text/plain" },
              }
            );
            if (carrinhosResponse.ok) {
              const carrinhos = await carrinhosResponse.json();
              const existeCarrinho = carrinhos.some(
                (c) => c.usuarioId === usuario.id
              );
              if (!existeCarrinho) {
                // Cria novo carrinho vazio para o usuário
                const createResponse = await fetch(
                  "http://localhost:5286/api/Carrinhos",
                  {
                    method: "POST",
                    headers: {
                      accept: "text/plain",
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                      usuarioId: usuario.id,
                      itens: [],
                      total: 0,
                    }),
                  }
                );

                if (createResponse.ok) {
                  const novoCarrinho = await createResponse.json();
                  // Armazena o id do carrinho no localStorage
                  localStorage.setItem(
                    "carrinhoId",
                    novoCarrinho.carrinhoId || novoCarrinho.id
                  );
                }
              } else {
                // Se já existe, armazena o id do carrinho existente
                const carrinhoExistente = carrinhos.find(
                  (c) => c.usuarioId === usuario.id
                );
                if (carrinhoExistente) {
                  localStorage.setItem(
                    "carrinhoId",
                    carrinhoExistente.carrinhoId || carrinhoExistente.id
                  );
                }
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
