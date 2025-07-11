import React, { useState } from "react";
import { useNavigate } from "react-router";

const CreateAccount = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mensagem, setMensagem] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMensagem("");
    try {
      const response = await fetch("https://bazingastore.somee.com/register", {
        method: "POST",
        headers: {
          accept: "*/*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      if (response.ok) {
        let usuarioId = null;
        try {
          if (response.status !== 204) {
            const data = await response.json();
            console.log("Resposta do registro:", data);
            usuarioId = data && (data.usuarioId || data.id || data.userId);
          }
        } catch {
          usuarioId = null;
        }

        // Se conseguiu o id, cria o carrinho
        if (usuarioId) {
          try {
            await fetch("https://localhost:7257/api/Carrinhos", {
              method: "POST",
              headers: {
                accept: "text/plain",
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ usuarioId }),
            });
          } catch {
            // Se der erro ao criar o carrinho, apenas segue o fluxo
          }
        } else {
          // Se não conseguiu o id, avise o usuário ou tente buscar o usuário pelo email (se houver endpoint)
          console.warn("Não foi possível obter o ID do usuário após registro.");
        }

        setMensagem("Registro realizado com sucesso!");
        setTimeout(() => {
          navigate("/login");
        }, 1200);
        setEmail("");
        setPassword("");
      } else {
        setMensagem("Erro ao registrar.");
      }
    } catch (error) {
      setMensagem("Erro de conexão com a API.");
    }
  };

  return (
    <div className="container-fluid" style={{ padding: 0, margin: 0 }}>
      <div className="row g-0 min-vh-100">
        {/* Left showcase - hidden on mobile */}
        <div
          className="col-md-6 d-none d-md-flex text-center justify-content-center align-items-center flex-column"
          style={{ backgroundColor: "#F6CC14" }}
        >
          <h1
            className="text-light fw-bold display-4 mb-4"
            style={{ textShadow: "2px 2px 5px rgba(0,0,0,0.5)" }}
          >
            A sua loja geek
            <br />
            de confiança!
          </h1>
          <img
            src="https://i.imgur.com/1jCxsKM.png"
            alt="sonic the hedgehog"
            className="img-fluid"
          />
        </div>

        {/* Right form section */}
        <div className="col-12 col-md-6 bg-light d-flex flex-column justify-content-center align-items-center min-vh-100">
          <div
            className="w-100 px-4 px-md-5 py-5"
            style={{ maxWidth: "600px" }}
          >
            <h1 className="fw-bold mb-4 display-5 text-center">
              Crie uma conta
            </h1>
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
                Registrar
              </button>
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
  );
};

export default CreateAccount;
