import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router";

const Config = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await fetch("http://localhost:5286/api/Auth/logout", {
        method: "POST",
        headers: { accept: "*/*" },
      });
      if (response.ok) {
        // Limpa dados do usuário do localStorage/sessionStorage se necessário
        localStorage.removeItem("usuarioEmail");
        localStorage.removeItem("usuarioId");
        localStorage.removeItem("carrinhoId");
        setTimeout(() => {
          navigate("/login");
        }, 1200);
      }
    } catch (error) {
      //
    }
  };
  return (
    <>
      <Header />
      <div className="ConfigBack">
        <div className="container ">
          <div className="justify-content-center d-flex flex-column">
            <h1 className="fw-bold pt-5 TitleC">Configurações de Usuário</h1>
            <div className="row justify-content-center">
              <div className="d-flex flex-column col-12 col-md-5">
                <div className="border col-12 col-md-12 mt-5 p-4 rounded-5 d-flex flex-column bg-white">
                  <h1 className="fw-bold mb-4">Perfil:</h1>
                  <div className="d-flex flex-column gap-4 Config pb-2">
                    <div className="position-relative">
                      <span className="position-absolute top-50 start-0 translate-middle-y ms-2  text-muted">
                        <i className="bi bi-person fs-2"></i>
                      </span>
                      <input
                        className="form-control ps-5 fs-5 border-0 rounded-4 fw-bold"
                        placeholder="Nome"
                        type="text"
                      />
                    </div>
                    <div className="position-relative">
                      <span className="position-absolute top-50 start-0 translate-middle-y ms-2  text-muted">
                        <i class="bi bi-envelope fs-3"></i>
                      </span>
                      <input
                        className="form-control ps-5 fs-5 border-0 rounded-4 fw-bold"
                        placeholder="Email"
                        type="text"
                      />
                    </div>
                    <div className="position-relative">
                      <span className="position-absolute top-50 start-0 translate-middle-y ms-2  text-muted">
                        <i class="bi bi-lock fs-3"></i>
                      </span>
                      <input
                        className="form-control ps-5 fs-5 border-0 rounded-4 fw-bold"
                        placeholder="Senha"
                        type="text"
                      />
                    </div>
                  </div>
                </div>

                <div className="d-flex flex-column border rounded-5 bg-white col-12 col-md-12 mt-5 p-4">
                  <h1 className="fw-bold mb-4">Preferencias</h1>
                  <div className="d-flex justify-content-between align-items-center">
                    <h2>Tema:</h2>
                    <div className="d-flex gap-5 align-items-center">
                      <div>
                        <div className="rounded-5 px-3 Tema d-flex align-items-center justify-content-center">
                          <i className="bi bi-moon-fill text-light fs-5"></i>
                        </div>
                      </div>
                      <div className="form-check form-switch h-100 mb-1">
                        <input
                          className="form-check-input form-switch-lg"
                          type="checkbox"
                          role="switch"
                          id="flexSwitchCheckDefault"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-1"></div>

              <div className="d-flex flex-column col-12 col-md-5">
                <div className="border rounded-5 bg-white col-12 col-md-12 mt-5 p-4">
                  <h1 className="fw-bold mb-4">Histórico</h1>
                  <div className="d-flex flex-column gap-3">
                    <div className="d-flex align-items-center">
                      <div className="d-flex align-items-center  p-3  Hist rounded-4 col-2 justify-content-center">
                        <i class="bi bi-envelope-paper fs-2 fw-bold"></i>
                      </div>
                      <p className="fs-2 p-0 m-0 ms-4 ">Pedidos</p>
                    </div>
                    <div className="d-flex align-items-center">
                      <div className="d-flex align-items-center  p-3  Hist rounded-4 col-2 justify-content-center">
                        <i class="bi bi-credit-card fs-2"></i>
                      </div>
                      <p className="fs-2 p-0 m-0 ms-4 ">Pagamentos</p>
                    </div>
                  </div>
                </div>
                <div className="border rounded-5 bg-white col-12 col-md-12 mt-5 p-4 mb-5">
                  <h1 className="fw-bold mb-4">Segurança e Privacidade</h1>
                  <div className="d-flex flex-column gap-2 Segur">
                    <button className="btn btn-danger rounded-4 fs-5">
                      Excluir Conta
                    </button>
                    <button
                      className="btn btn-outline-danger rounded-4  fs-5"
                      onClick={handleLogout}
                    >
                      Sair da Conta
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 d-flex justify-content-center mb-5">
              <button className="btn btnCor col-8 col-md-4 text-light fw-bold fs-5 px-4 py-3 rounded-4">
                Salvar Alterações
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Config;
